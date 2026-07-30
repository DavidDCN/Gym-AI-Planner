# GymAI — AI-Powered Training Plan Generator

A full-stack PERN application that generates personalized gym training plans using AI. Users sign up, complete a short onboarding questionnaire, and receive a custom weekly training program built by a large language model.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + TypeScript + Vite |
| Styling | Tailwind CSS v4 |
| Routing | React Router v6 |
| Auth | Neon Auth (`@neondatabase/neon-js`) |
| Backend | Node.js + Express + TypeScript |
| ORM | Prisma v7 |
| Database | Neon PostgreSQL (serverless) |
| AI | OpenRouter API (LLM gateway) |

---

## Project Structure

```
Gym AI Planner/
├── src/                          # React frontend
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx        # Top navigation bar
│   │   ├── plan/
│   │   │   └── PlanDisplay.tsx   # Weekly schedule table renderer
│   │   └── ui/
│   │       ├── Button.tsx        # Reusable button
│   │       ├── Card.tsx          # Reusable card container
│   │       ├── Select.tsx        # Styled dropdown
│   │       └── Textarea.tsx      # Styled text area
│   ├── context/
│   │   └── AuthContext.tsx       # Global auth + plan state
│   ├── lib/
│   │   ├── auth.ts               # Neon Auth client setup
│   │   └── api.ts                # All frontend → backend HTTP calls
│   ├── pages/
│   │   ├── Home.tsx              # Landing page / route guard
│   │   ├── Auth.tsx              # Sign in / Sign up page
│   │   ├── Onboarding.tsx        # Profile questionnaire form
│   │   └── Profile.tsx           # Generated plan display
│   ├── types/
│   │   └── index.ts              # Shared TypeScript interfaces
│   ├── App.tsx                   # Route definitions
│   ├── main.tsx                  # React entry point
│   └── index.css                 # Global styles + CSS variables
│
├── server/                       # Express backend
│   ├── prisma/
│   │   └── schema.prisma         # Database table definitions
│   ├── prisma.config.ts          # Prisma v7 config (DB connection URL)
│   ├── src/
│   │   ├── lib/
│   │   │   ├── prisma.ts         # Prisma client instance
│   │   │   └── ai.ts             # OpenRouter API call + prompt builder
│   │   ├── routes/
│   │   │   ├── profile.ts        # POST /api/profile
│   │   │   └── plan.ts           # POST /api/plan/generate, GET /api/plan/current
│   │   └── index.ts              # Express app setup
│   └── .env                      # Server secrets (DATABASE_URL, OPEN_ROUTER_KEY)
│
└── .env                          # Frontend secrets (VITE_NEON_AUTH_URL)
```

---

## Environment Variables

### `/.env` (frontend root)
```env
VITE_NEON_AUTH_URL=https://your-project.neonauth.aws.neon.tech/neondb/auth
```

### `/server/.env` (backend)
```env
PORT=3001
DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require
OPEN_ROUTER_KEY=sk-or-v1-your-key-here
OPENROUTER_MODEL=nvidia/llama-nemotron-nano-8b-v1:free
```

> ⚠️ Never commit `.env` files to Git. Both are already in `.gitignore`.

---

## Getting Started

### Prerequisites
- Node.js 18+
- A [Neon](https://neon.tech) database (free tier works)
- A [Neon Auth](https://neon.tech/docs/guides/neon-auth) project
- An [OpenRouter](https://openrouter.ai) account + API key

### 1. Install dependencies

```bash
# Frontend
npm install

# Backend
cd server
npm install
```

### 2. Set up the database

```bash
cd server
npx prisma generate   # generates the Prisma client types
npx prisma db push    # creates the tables in your Neon database
```

### 3. Run both servers (two terminals)

```bash
# Terminal 1 — Frontend (port 5173)
npm run dev

# Terminal 2 — Backend (port 3001)
cd server
npm run dev:server
```

Open `http://localhost:5173`

---

## How the API Flow Works

This is the complete journey from clicking "Generate My Plan" to seeing your training schedule — every file, every function, in order.

---

### The Big Picture

```
[Browser] → [api.ts] → [Express route] → [Prisma] → [Neon DB]
                                    ↘
                                  [ai.ts] → [OpenRouter] → [LLM]
```

---

### Step 1 — User clicks "Generate My Plan"

**File:** `src/pages/Onboarding.tsx`

The form's `onSubmit` handler fires. It first saves the user's profile choices, then requests plan generation:

```ts
async function handleQuestionnaire(e: React.FormEvent) {
  e.preventDefault();

  // Build the profile object from form state
  const profile = {
    goal: formData.goal,           // e.g. "bulk"
    experience: formData.experience, // e.g. "intermediate"
    daysPerWeek: parseInt(formData.daysPerWeek), // e.g. 4
    sessionLength: parseInt(formData.sessionLength), // e.g. 60
    equipment: formData.equipment,
    injuries: formData.injuries || undefined,
    preferredSplit: formData.preferredSplit,
  };

  await saveProfile(profile);   // Step 2 →
  setIsGenerating(true);
  await generatePlan();         // Step 5 →
  navigate("/profile");
}
```

`saveProfile` and `generatePlan` both come from `useAuth()` — they're functions stored in `AuthContext`.

---

### Step 2 — `saveProfile()` calls `api.ts`

**File:** `src/context/AuthContext.tsx`

```ts
async function saveProfile(profile) {
  // Attaches the logged-in user's ID, then hands off to api.ts
  await api.saveProfile(neonUser.id, profile);
}
```

---

### Step 3 — `api.ts` makes the HTTP request

**File:** `src/lib/api.ts`

This file is the single place all frontend → backend communication lives.
`BASE_URL` is read from the `.env` file (`VITE_API_URL`, defaults to `http://localhost:3001`).

```ts
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

// Reusable POST helper — all API calls use this
async function post(path: string, body: object) {
  const res = await fetch(`${BASE_URL}/api${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),   // converts JS object → JSON string
  });

  if (!res.ok)
    throw new Error((await res.json()).error || "Request failed");

  return res.json();  // parses JSON response → JS object
}

// Called by saveProfile() in AuthContext
export const api = {
  saveProfile: (userId: string, profile) => {
    return post("/profile", { userId, ...profile });
    // Sends: POST http://localhost:3001/api/profile
    // Body:  { userId: "abc123", goal: "bulk", daysPerWeek: 4, ... }
  },

  generatePlan: (userId: string) => {
    return post("/plan/generate", { userId });
    // Sends: POST http://localhost:3001/api/plan/generate
    // Body:  { userId: "abc123" }
  },

  getCurrentPlan: (userId: string) => {
    return get(`/plan/current?userId=${userId}`);
    // Sends: GET http://localhost:3001/api/plan/current?userId=abc123
  },
};
```

The `fetch()` call is the browser's built-in HTTP client.
- `method: "POST"` — tells the server this is a write/create operation
- `headers` — tells the server the body is JSON, not a form
- `body: JSON.stringify(body)` — converts your JS object to a JSON text string to send over the network
- `res.json()` — parses the server's JSON text response back into a JS object

---

### Step 4 — Express receives the request and saves to the database

**File:** `server/src/routes/profile.ts`

```ts
profileRouter.post("/", async (req: Request, res: Response) => {
  const { userId, goal, experience, daysPerWeek,
          sessionLength, equipment, injuries, preferredSplit } = req.body;
  // req.body is the parsed JSON that api.ts sent

  // Prisma upsert = UPDATE if exists, INSERT if not
  await prisma.user_profiles.upsert({
    where: { user_id: userId },
    update: { goal, experience, days_per_week: daysPerWeek, ... },
    create: { user_id: userId, goal, experience, days_per_week: daysPerWeek, ... },
  });

  res.json({ success: true });
  // This JSON travels back to api.ts's fetch() call
});
```

---

### Step 5 — `generatePlan()` triggers the AI call

**File:** `server/src/routes/plan.ts`

```ts
planRouter.post("/generate", async (req: Request, res: Response) => {
  const { userId } = req.body;

  // 1. Load this user's profile from the database
  const profile = await prisma.user_profiles.findUnique({
    where: { user_id: userId },
  });

  // 2. Send to the AI (Step 6 →)
  const planJson = await generateTrainingPlan(profile);

  // 3. Save the AI's response to the database
  const newPlan = await prisma.training_plans.create({
    data: {
      user_id: userId,
      plan_json: planJson,     // the full AI-generated plan object
      plan_text: JSON.stringify(planJson),
      version: nextVersion,
    },
  });

  res.json({ id: newPlan.id, version: newPlan.version, ... });
});
```

---

### Step 6 — `ai.ts` calls OpenRouter

**File:** `server/src/lib/ai.ts`

This is where the actual AI request happens.
`OPEN_ROUTER_KEY` is read from `server/.env` — never exposed to the browser.

```ts
const openai = new OpenAI({
  apiKey: process.env.OPEN_ROUTER_KEY,   // from server/.env
  baseURL: "https://openrouter.ai/api/v1", // OpenRouter's endpoint
});

export async function generateTrainingPlan(profile) {
  // 1. Build a detailed text prompt from the user's profile
  const prompt = buildPrompt(profile);
  // e.g. "Create a 4-day per week upper/lower split for an intermediate
  //        lifter whose goal is to build muscle, with 60min sessions..."

  // 2. Send the prompt to the AI model
  const completion = await openai.chat.completions.create({
    model: process.env.OPENROUTER_MODEL,  // e.g. "nvidia/llama-nemotron-nano-8b-v1:free"
    messages: [
      {
        role: "system",
        content: "You are an expert fitness trainer. Respond with valid JSON only.",
      },
      {
        role: "user",
        content: prompt,  // the detailed training request
      },
    ],
    response_format: { type: "json_object" },  // forces JSON output
  });

  // 3. Parse the AI's text response into a JS object
  const planData = JSON.parse(completion.choices[0].message.content);

  // 4. Return it structured to match our TrainingPlan type
  return formatPlanResponse(planData, profile);
}
```

OpenRouter receives this request, routes it to the specified free LLM
(e.g. Llama running on NVIDIA's servers), and returns the generated plan
as a JSON string — which gets parsed, saved to the database, and
eventually rendered in `PlanDisplay.tsx`.

---

### Step 7 — The plan travels back to the browser

```
ai.ts returns planJson
  → plan.ts saves it to DB, returns { id, version, createdAt }
    → api.ts fetch() resolves with that response
      → AuthContext.generatePlan() calls refreshData()
        → api.getCurrentPlan() fetches the full plan from DB
          → AuthContext sets plan state
            → Profile.tsx re-renders with the full training schedule
              → PlanDisplay.tsx renders the weekly table
```

---

### Complete flow diagram

```
Onboarding.tsx          AuthContext.tsx         api.ts
─────────────           ──────────────          ──────
[Submit button]
      │
      ▼
handleQuestionnaire()
      │
      ├──► saveProfile(profile) ──────────────► api.saveProfile()
      │                                              │
      │                                    POST /api/profile
      │                                              │
      │                                    [Express: profile.ts]
      │                                              │
      │                                    prisma.user_profiles.upsert()
      │                                              │
      │                                    [Neon PostgreSQL]
      │                                              │
      │◄─────────────── { success: true } ───────────┘
      │
      ├──► generatePlan() ───────────────────► api.generatePlan()
      │                                              │
      │                                    POST /api/plan/generate
      │                                              │
      │                                    [Express: plan.ts]
      │                                              │
      │                                    prisma.user_profiles.findUnique()
      │                                              │
      │                                    generateTrainingPlan(profile)
      │                                              │
      │                                    [ai.ts → OpenRouter → LLM]
      │                                              │
      │                                    prisma.training_plans.create()
      │                                              │
      │◄─────────────── { id, version } ─────────────┘
      │
navigate("/profile")

Profile.tsx reads plan from AuthContext → renders PlanDisplay.tsx
```

---

## Database Schema

```prisma
model user_profiles {
  user_id         String   @id      // Neon Auth user ID
  goal            String            // "bulk" | "cut" | "recomp" | ...
  experience      String            // "beginner" | "intermediate" | "advanced"
  days_per_week   Int
  session_length  Int               // minutes
  equipment       String            // "full_gym" | "home" | "dumbbells"
  injuries        String?           // optional
  preferred_split String            // "upper_lower" | "ppl" | ...
  updated_at      DateTime @default(now())
}

model training_plans {
  id         String   @id @default(uuid())
  user_id    String                 // links to user_profiles
  plan_json  Json                   // the full AI-generated plan object
  plan_text  String                 // stringified version for search
  version    Int                    // increments each time you regenerate
  created_at DateTime @default(now())
}
```

npx prisma db push    # sync schema to database
npx prisma studio     # open visual database browser
```

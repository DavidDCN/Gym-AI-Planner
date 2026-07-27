
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user_profiles
 * 
 */
export type user_profiles = $Result.DefaultSelection<Prisma.$user_profilesPayload>
/**
 * Model training_plans
 * 
 */
export type training_plans = $Result.DefaultSelection<Prisma.$training_plansPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more User_profiles
 * const user_profiles = await prisma.user_profiles.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more User_profiles
   * const user_profiles = await prisma.user_profiles.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user_profiles`: Exposes CRUD operations for the **user_profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_profiles
    * const user_profiles = await prisma.user_profiles.findMany()
    * ```
    */
  get user_profiles(): Prisma.user_profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.training_plans`: Exposes CRUD operations for the **training_plans** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Training_plans
    * const training_plans = await prisma.training_plans.findMany()
    * ```
    */
  get training_plans(): Prisma.training_plansDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.0
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user_profiles: 'user_profiles',
    training_plans: 'training_plans'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user_profiles" | "training_plans"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user_profiles: {
        payload: Prisma.$user_profilesPayload<ExtArgs>
        fields: Prisma.user_profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          findFirst: {
            args: Prisma.user_profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          findMany: {
            args: Prisma.user_profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>[]
          }
          create: {
            args: Prisma.user_profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          createMany: {
            args: Prisma.user_profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>[]
          }
          delete: {
            args: Prisma.user_profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          update: {
            args: Prisma.user_profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          deleteMany: {
            args: Prisma.user_profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>[]
          }
          upsert: {
            args: Prisma.user_profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_profilesPayload>
          }
          aggregate: {
            args: Prisma.User_profilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_profiles>
          }
          groupBy: {
            args: Prisma.user_profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_profilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_profilesCountArgs<ExtArgs>
            result: $Utils.Optional<User_profilesCountAggregateOutputType> | number
          }
        }
      }
      training_plans: {
        payload: Prisma.$training_plansPayload<ExtArgs>
        fields: Prisma.training_plansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.training_plansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$training_plansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.training_plansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$training_plansPayload>
          }
          findFirst: {
            args: Prisma.training_plansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$training_plansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.training_plansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$training_plansPayload>
          }
          findMany: {
            args: Prisma.training_plansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$training_plansPayload>[]
          }
          create: {
            args: Prisma.training_plansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$training_plansPayload>
          }
          createMany: {
            args: Prisma.training_plansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.training_plansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$training_plansPayload>[]
          }
          delete: {
            args: Prisma.training_plansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$training_plansPayload>
          }
          update: {
            args: Prisma.training_plansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$training_plansPayload>
          }
          deleteMany: {
            args: Prisma.training_plansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.training_plansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.training_plansUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$training_plansPayload>[]
          }
          upsert: {
            args: Prisma.training_plansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$training_plansPayload>
          }
          aggregate: {
            args: Prisma.Training_plansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTraining_plans>
          }
          groupBy: {
            args: Prisma.training_plansGroupByArgs<ExtArgs>
            result: $Utils.Optional<Training_plansGroupByOutputType>[]
          }
          count: {
            args: Prisma.training_plansCountArgs<ExtArgs>
            result: $Utils.Optional<Training_plansCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user_profiles?: user_profilesOmit
    training_plans?: training_plansOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model user_profiles
   */

  export type AggregateUser_profiles = {
    _count: User_profilesCountAggregateOutputType | null
    _avg: User_profilesAvgAggregateOutputType | null
    _sum: User_profilesSumAggregateOutputType | null
    _min: User_profilesMinAggregateOutputType | null
    _max: User_profilesMaxAggregateOutputType | null
  }

  export type User_profilesAvgAggregateOutputType = {
    days_per_week: number | null
    session_length: number | null
  }

  export type User_profilesSumAggregateOutputType = {
    days_per_week: number | null
    session_length: number | null
  }

  export type User_profilesMinAggregateOutputType = {
    user_id: string | null
    goal: string | null
    experience: string | null
    days_per_week: number | null
    session_length: number | null
    equipment: string | null
    injuries: string | null
    preferred_split: string | null
    updated_at: Date | null
  }

  export type User_profilesMaxAggregateOutputType = {
    user_id: string | null
    goal: string | null
    experience: string | null
    days_per_week: number | null
    session_length: number | null
    equipment: string | null
    injuries: string | null
    preferred_split: string | null
    updated_at: Date | null
  }

  export type User_profilesCountAggregateOutputType = {
    user_id: number
    goal: number
    experience: number
    days_per_week: number
    session_length: number
    equipment: number
    injuries: number
    preferred_split: number
    updated_at: number
    _all: number
  }


  export type User_profilesAvgAggregateInputType = {
    days_per_week?: true
    session_length?: true
  }

  export type User_profilesSumAggregateInputType = {
    days_per_week?: true
    session_length?: true
  }

  export type User_profilesMinAggregateInputType = {
    user_id?: true
    goal?: true
    experience?: true
    days_per_week?: true
    session_length?: true
    equipment?: true
    injuries?: true
    preferred_split?: true
    updated_at?: true
  }

  export type User_profilesMaxAggregateInputType = {
    user_id?: true
    goal?: true
    experience?: true
    days_per_week?: true
    session_length?: true
    equipment?: true
    injuries?: true
    preferred_split?: true
    updated_at?: true
  }

  export type User_profilesCountAggregateInputType = {
    user_id?: true
    goal?: true
    experience?: true
    days_per_week?: true
    session_length?: true
    equipment?: true
    injuries?: true
    preferred_split?: true
    updated_at?: true
    _all?: true
  }

  export type User_profilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_profiles to aggregate.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_profiles
    **/
    _count?: true | User_profilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_profilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_profilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_profilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_profilesMaxAggregateInputType
  }

  export type GetUser_profilesAggregateType<T extends User_profilesAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_profiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_profiles[P]>
      : GetScalarType<T[P], AggregateUser_profiles[P]>
  }




  export type user_profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_profilesWhereInput
    orderBy?: user_profilesOrderByWithAggregationInput | user_profilesOrderByWithAggregationInput[]
    by: User_profilesScalarFieldEnum[] | User_profilesScalarFieldEnum
    having?: user_profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_profilesCountAggregateInputType | true
    _avg?: User_profilesAvgAggregateInputType
    _sum?: User_profilesSumAggregateInputType
    _min?: User_profilesMinAggregateInputType
    _max?: User_profilesMaxAggregateInputType
  }

  export type User_profilesGroupByOutputType = {
    user_id: string
    goal: string
    experience: string
    days_per_week: number
    session_length: number
    equipment: string
    injuries: string | null
    preferred_split: string
    updated_at: Date
    _count: User_profilesCountAggregateOutputType | null
    _avg: User_profilesAvgAggregateOutputType | null
    _sum: User_profilesSumAggregateOutputType | null
    _min: User_profilesMinAggregateOutputType | null
    _max: User_profilesMaxAggregateOutputType | null
  }

  type GetUser_profilesGroupByPayload<T extends user_profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_profilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_profilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_profilesGroupByOutputType[P]>
            : GetScalarType<T[P], User_profilesGroupByOutputType[P]>
        }
      >
    >


  export type user_profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    goal?: boolean
    experience?: boolean
    days_per_week?: boolean
    session_length?: boolean
    equipment?: boolean
    injuries?: boolean
    preferred_split?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user_profiles"]>

  export type user_profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    goal?: boolean
    experience?: boolean
    days_per_week?: boolean
    session_length?: boolean
    equipment?: boolean
    injuries?: boolean
    preferred_split?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user_profiles"]>

  export type user_profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    goal?: boolean
    experience?: boolean
    days_per_week?: boolean
    session_length?: boolean
    equipment?: boolean
    injuries?: boolean
    preferred_split?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user_profiles"]>

  export type user_profilesSelectScalar = {
    user_id?: boolean
    goal?: boolean
    experience?: boolean
    days_per_week?: boolean
    session_length?: boolean
    equipment?: boolean
    injuries?: boolean
    preferred_split?: boolean
    updated_at?: boolean
  }

  export type user_profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "goal" | "experience" | "days_per_week" | "session_length" | "equipment" | "injuries" | "preferred_split" | "updated_at", ExtArgs["result"]["user_profiles"]>

  export type $user_profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_profiles"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      goal: string
      experience: string
      days_per_week: number
      session_length: number
      equipment: string
      injuries: string | null
      preferred_split: string
      updated_at: Date
    }, ExtArgs["result"]["user_profiles"]>
    composites: {}
  }

  type user_profilesGetPayload<S extends boolean | null | undefined | user_profilesDefaultArgs> = $Result.GetResult<Prisma.$user_profilesPayload, S>

  type user_profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_profilesCountAggregateInputType | true
    }

  export interface user_profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_profiles'], meta: { name: 'user_profiles' } }
    /**
     * Find zero or one User_profiles that matches the filter.
     * @param {user_profilesFindUniqueArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_profilesFindUniqueArgs>(args: SelectSubset<T, user_profilesFindUniqueArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_profilesFindUniqueOrThrowArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, user_profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindFirstArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_profilesFindFirstArgs>(args?: SelectSubset<T, user_profilesFindFirstArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindFirstOrThrowArgs} args - Arguments to find a User_profiles
     * @example
     * // Get one User_profiles
     * const user_profiles = await prisma.user_profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, user_profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_profiles
     * const user_profiles = await prisma.user_profiles.findMany()
     * 
     * // Get first 10 User_profiles
     * const user_profiles = await prisma.user_profiles.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_profilesWithUser_idOnly = await prisma.user_profiles.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_profilesFindManyArgs>(args?: SelectSubset<T, user_profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_profiles.
     * @param {user_profilesCreateArgs} args - Arguments to create a User_profiles.
     * @example
     * // Create one User_profiles
     * const User_profiles = await prisma.user_profiles.create({
     *   data: {
     *     // ... data to create a User_profiles
     *   }
     * })
     * 
     */
    create<T extends user_profilesCreateArgs>(args: SelectSubset<T, user_profilesCreateArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_profiles.
     * @param {user_profilesCreateManyArgs} args - Arguments to create many User_profiles.
     * @example
     * // Create many User_profiles
     * const user_profiles = await prisma.user_profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_profilesCreateManyArgs>(args?: SelectSubset<T, user_profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_profiles and returns the data saved in the database.
     * @param {user_profilesCreateManyAndReturnArgs} args - Arguments to create many User_profiles.
     * @example
     * // Create many User_profiles
     * const user_profiles = await prisma.user_profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_profiles and only return the `user_id`
     * const user_profilesWithUser_idOnly = await prisma.user_profiles.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, user_profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_profiles.
     * @param {user_profilesDeleteArgs} args - Arguments to delete one User_profiles.
     * @example
     * // Delete one User_profiles
     * const User_profiles = await prisma.user_profiles.delete({
     *   where: {
     *     // ... filter to delete one User_profiles
     *   }
     * })
     * 
     */
    delete<T extends user_profilesDeleteArgs>(args: SelectSubset<T, user_profilesDeleteArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_profiles.
     * @param {user_profilesUpdateArgs} args - Arguments to update one User_profiles.
     * @example
     * // Update one User_profiles
     * const user_profiles = await prisma.user_profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_profilesUpdateArgs>(args: SelectSubset<T, user_profilesUpdateArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_profiles.
     * @param {user_profilesDeleteManyArgs} args - Arguments to filter User_profiles to delete.
     * @example
     * // Delete a few User_profiles
     * const { count } = await prisma.user_profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_profilesDeleteManyArgs>(args?: SelectSubset<T, user_profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_profiles
     * const user_profiles = await prisma.user_profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_profilesUpdateManyArgs>(args: SelectSubset<T, user_profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_profiles and returns the data updated in the database.
     * @param {user_profilesUpdateManyAndReturnArgs} args - Arguments to update many User_profiles.
     * @example
     * // Update many User_profiles
     * const user_profiles = await prisma.user_profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_profiles and only return the `user_id`
     * const user_profilesWithUser_idOnly = await prisma.user_profiles.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, user_profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_profiles.
     * @param {user_profilesUpsertArgs} args - Arguments to update or create a User_profiles.
     * @example
     * // Update or create a User_profiles
     * const user_profiles = await prisma.user_profiles.upsert({
     *   create: {
     *     // ... data to create a User_profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_profiles we want to update
     *   }
     * })
     */
    upsert<T extends user_profilesUpsertArgs>(args: SelectSubset<T, user_profilesUpsertArgs<ExtArgs>>): Prisma__user_profilesClient<$Result.GetResult<Prisma.$user_profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesCountArgs} args - Arguments to filter User_profiles to count.
     * @example
     * // Count the number of User_profiles
     * const count = await prisma.user_profiles.count({
     *   where: {
     *     // ... the filter for the User_profiles we want to count
     *   }
     * })
    **/
    count<T extends user_profilesCountArgs>(
      args?: Subset<T, user_profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_profilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_profilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_profilesAggregateArgs>(args: Subset<T, User_profilesAggregateArgs>): Prisma.PrismaPromise<GetUser_profilesAggregateType<T>>

    /**
     * Group by User_profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_profilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_profilesGroupByArgs['orderBy'] }
        : { orderBy?: user_profilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_profilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_profiles model
   */
  readonly fields: user_profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_profiles model
   */
  interface user_profilesFieldRefs {
    readonly user_id: FieldRef<"user_profiles", 'String'>
    readonly goal: FieldRef<"user_profiles", 'String'>
    readonly experience: FieldRef<"user_profiles", 'String'>
    readonly days_per_week: FieldRef<"user_profiles", 'Int'>
    readonly session_length: FieldRef<"user_profiles", 'Int'>
    readonly equipment: FieldRef<"user_profiles", 'String'>
    readonly injuries: FieldRef<"user_profiles", 'String'>
    readonly preferred_split: FieldRef<"user_profiles", 'String'>
    readonly updated_at: FieldRef<"user_profiles", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_profiles findUnique
   */
  export type user_profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles findUniqueOrThrow
   */
  export type user_profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles findFirst
   */
  export type user_profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_profiles.
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_profiles.
     */
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * user_profiles findFirstOrThrow
   */
  export type user_profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_profiles.
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_profiles.
     */
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * user_profiles findMany
   */
  export type user_profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Filter, which user_profiles to fetch.
     */
    where?: user_profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_profiles to fetch.
     */
    orderBy?: user_profilesOrderByWithRelationInput | user_profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_profiles.
     */
    cursor?: user_profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_profiles.
     */
    distinct?: User_profilesScalarFieldEnum | User_profilesScalarFieldEnum[]
  }

  /**
   * user_profiles create
   */
  export type user_profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * The data needed to create a user_profiles.
     */
    data: XOR<user_profilesCreateInput, user_profilesUncheckedCreateInput>
  }

  /**
   * user_profiles createMany
   */
  export type user_profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_profiles.
     */
    data: user_profilesCreateManyInput | user_profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_profiles createManyAndReturn
   */
  export type user_profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * The data used to create many user_profiles.
     */
    data: user_profilesCreateManyInput | user_profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_profiles update
   */
  export type user_profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * The data needed to update a user_profiles.
     */
    data: XOR<user_profilesUpdateInput, user_profilesUncheckedUpdateInput>
    /**
     * Choose, which user_profiles to update.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles updateMany
   */
  export type user_profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_profiles.
     */
    data: XOR<user_profilesUpdateManyMutationInput, user_profilesUncheckedUpdateManyInput>
    /**
     * Filter which user_profiles to update
     */
    where?: user_profilesWhereInput
    /**
     * Limit how many user_profiles to update.
     */
    limit?: number
  }

  /**
   * user_profiles updateManyAndReturn
   */
  export type user_profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * The data used to update user_profiles.
     */
    data: XOR<user_profilesUpdateManyMutationInput, user_profilesUncheckedUpdateManyInput>
    /**
     * Filter which user_profiles to update
     */
    where?: user_profilesWhereInput
    /**
     * Limit how many user_profiles to update.
     */
    limit?: number
  }

  /**
   * user_profiles upsert
   */
  export type user_profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * The filter to search for the user_profiles to update in case it exists.
     */
    where: user_profilesWhereUniqueInput
    /**
     * In case the user_profiles found by the `where` argument doesn't exist, create a new user_profiles with this data.
     */
    create: XOR<user_profilesCreateInput, user_profilesUncheckedCreateInput>
    /**
     * In case the user_profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_profilesUpdateInput, user_profilesUncheckedUpdateInput>
  }

  /**
   * user_profiles delete
   */
  export type user_profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
    /**
     * Filter which user_profiles to delete.
     */
    where: user_profilesWhereUniqueInput
  }

  /**
   * user_profiles deleteMany
   */
  export type user_profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_profiles to delete
     */
    where?: user_profilesWhereInput
    /**
     * Limit how many user_profiles to delete.
     */
    limit?: number
  }

  /**
   * user_profiles without action
   */
  export type user_profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_profiles
     */
    select?: user_profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_profiles
     */
    omit?: user_profilesOmit<ExtArgs> | null
  }


  /**
   * Model training_plans
   */

  export type AggregateTraining_plans = {
    _count: Training_plansCountAggregateOutputType | null
    _avg: Training_plansAvgAggregateOutputType | null
    _sum: Training_plansSumAggregateOutputType | null
    _min: Training_plansMinAggregateOutputType | null
    _max: Training_plansMaxAggregateOutputType | null
  }

  export type Training_plansAvgAggregateOutputType = {
    version: number | null
  }

  export type Training_plansSumAggregateOutputType = {
    version: number | null
  }

  export type Training_plansMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    plan_text: string | null
    version: number | null
    created_at: Date | null
  }

  export type Training_plansMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    plan_text: string | null
    version: number | null
    created_at: Date | null
  }

  export type Training_plansCountAggregateOutputType = {
    id: number
    user_id: number
    plan_json: number
    plan_text: number
    version: number
    created_at: number
    _all: number
  }


  export type Training_plansAvgAggregateInputType = {
    version?: true
  }

  export type Training_plansSumAggregateInputType = {
    version?: true
  }

  export type Training_plansMinAggregateInputType = {
    id?: true
    user_id?: true
    plan_text?: true
    version?: true
    created_at?: true
  }

  export type Training_plansMaxAggregateInputType = {
    id?: true
    user_id?: true
    plan_text?: true
    version?: true
    created_at?: true
  }

  export type Training_plansCountAggregateInputType = {
    id?: true
    user_id?: true
    plan_json?: true
    plan_text?: true
    version?: true
    created_at?: true
    _all?: true
  }

  export type Training_plansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which training_plans to aggregate.
     */
    where?: training_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of training_plans to fetch.
     */
    orderBy?: training_plansOrderByWithRelationInput | training_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: training_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` training_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` training_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned training_plans
    **/
    _count?: true | Training_plansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Training_plansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Training_plansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Training_plansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Training_plansMaxAggregateInputType
  }

  export type GetTraining_plansAggregateType<T extends Training_plansAggregateArgs> = {
        [P in keyof T & keyof AggregateTraining_plans]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTraining_plans[P]>
      : GetScalarType<T[P], AggregateTraining_plans[P]>
  }




  export type training_plansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: training_plansWhereInput
    orderBy?: training_plansOrderByWithAggregationInput | training_plansOrderByWithAggregationInput[]
    by: Training_plansScalarFieldEnum[] | Training_plansScalarFieldEnum
    having?: training_plansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Training_plansCountAggregateInputType | true
    _avg?: Training_plansAvgAggregateInputType
    _sum?: Training_plansSumAggregateInputType
    _min?: Training_plansMinAggregateInputType
    _max?: Training_plansMaxAggregateInputType
  }

  export type Training_plansGroupByOutputType = {
    id: string
    user_id: string
    plan_json: JsonValue
    plan_text: string
    version: number
    created_at: Date
    _count: Training_plansCountAggregateOutputType | null
    _avg: Training_plansAvgAggregateOutputType | null
    _sum: Training_plansSumAggregateOutputType | null
    _min: Training_plansMinAggregateOutputType | null
    _max: Training_plansMaxAggregateOutputType | null
  }

  type GetTraining_plansGroupByPayload<T extends training_plansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Training_plansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Training_plansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Training_plansGroupByOutputType[P]>
            : GetScalarType<T[P], Training_plansGroupByOutputType[P]>
        }
      >
    >


  export type training_plansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_json?: boolean
    plan_text?: boolean
    version?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["training_plans"]>

  export type training_plansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_json?: boolean
    plan_text?: boolean
    version?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["training_plans"]>

  export type training_plansSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    plan_json?: boolean
    plan_text?: boolean
    version?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["training_plans"]>

  export type training_plansSelectScalar = {
    id?: boolean
    user_id?: boolean
    plan_json?: boolean
    plan_text?: boolean
    version?: boolean
    created_at?: boolean
  }

  export type training_plansOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "plan_json" | "plan_text" | "version" | "created_at", ExtArgs["result"]["training_plans"]>

  export type $training_plansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "training_plans"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      plan_json: Prisma.JsonValue
      plan_text: string
      version: number
      created_at: Date
    }, ExtArgs["result"]["training_plans"]>
    composites: {}
  }

  type training_plansGetPayload<S extends boolean | null | undefined | training_plansDefaultArgs> = $Result.GetResult<Prisma.$training_plansPayload, S>

  type training_plansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<training_plansFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Training_plansCountAggregateInputType | true
    }

  export interface training_plansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['training_plans'], meta: { name: 'training_plans' } }
    /**
     * Find zero or one Training_plans that matches the filter.
     * @param {training_plansFindUniqueArgs} args - Arguments to find a Training_plans
     * @example
     * // Get one Training_plans
     * const training_plans = await prisma.training_plans.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends training_plansFindUniqueArgs>(args: SelectSubset<T, training_plansFindUniqueArgs<ExtArgs>>): Prisma__training_plansClient<$Result.GetResult<Prisma.$training_plansPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Training_plans that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {training_plansFindUniqueOrThrowArgs} args - Arguments to find a Training_plans
     * @example
     * // Get one Training_plans
     * const training_plans = await prisma.training_plans.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends training_plansFindUniqueOrThrowArgs>(args: SelectSubset<T, training_plansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__training_plansClient<$Result.GetResult<Prisma.$training_plansPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Training_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {training_plansFindFirstArgs} args - Arguments to find a Training_plans
     * @example
     * // Get one Training_plans
     * const training_plans = await prisma.training_plans.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends training_plansFindFirstArgs>(args?: SelectSubset<T, training_plansFindFirstArgs<ExtArgs>>): Prisma__training_plansClient<$Result.GetResult<Prisma.$training_plansPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Training_plans that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {training_plansFindFirstOrThrowArgs} args - Arguments to find a Training_plans
     * @example
     * // Get one Training_plans
     * const training_plans = await prisma.training_plans.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends training_plansFindFirstOrThrowArgs>(args?: SelectSubset<T, training_plansFindFirstOrThrowArgs<ExtArgs>>): Prisma__training_plansClient<$Result.GetResult<Prisma.$training_plansPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Training_plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {training_plansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Training_plans
     * const training_plans = await prisma.training_plans.findMany()
     * 
     * // Get first 10 Training_plans
     * const training_plans = await prisma.training_plans.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const training_plansWithIdOnly = await prisma.training_plans.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends training_plansFindManyArgs>(args?: SelectSubset<T, training_plansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$training_plansPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Training_plans.
     * @param {training_plansCreateArgs} args - Arguments to create a Training_plans.
     * @example
     * // Create one Training_plans
     * const Training_plans = await prisma.training_plans.create({
     *   data: {
     *     // ... data to create a Training_plans
     *   }
     * })
     * 
     */
    create<T extends training_plansCreateArgs>(args: SelectSubset<T, training_plansCreateArgs<ExtArgs>>): Prisma__training_plansClient<$Result.GetResult<Prisma.$training_plansPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Training_plans.
     * @param {training_plansCreateManyArgs} args - Arguments to create many Training_plans.
     * @example
     * // Create many Training_plans
     * const training_plans = await prisma.training_plans.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends training_plansCreateManyArgs>(args?: SelectSubset<T, training_plansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Training_plans and returns the data saved in the database.
     * @param {training_plansCreateManyAndReturnArgs} args - Arguments to create many Training_plans.
     * @example
     * // Create many Training_plans
     * const training_plans = await prisma.training_plans.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Training_plans and only return the `id`
     * const training_plansWithIdOnly = await prisma.training_plans.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends training_plansCreateManyAndReturnArgs>(args?: SelectSubset<T, training_plansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$training_plansPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Training_plans.
     * @param {training_plansDeleteArgs} args - Arguments to delete one Training_plans.
     * @example
     * // Delete one Training_plans
     * const Training_plans = await prisma.training_plans.delete({
     *   where: {
     *     // ... filter to delete one Training_plans
     *   }
     * })
     * 
     */
    delete<T extends training_plansDeleteArgs>(args: SelectSubset<T, training_plansDeleteArgs<ExtArgs>>): Prisma__training_plansClient<$Result.GetResult<Prisma.$training_plansPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Training_plans.
     * @param {training_plansUpdateArgs} args - Arguments to update one Training_plans.
     * @example
     * // Update one Training_plans
     * const training_plans = await prisma.training_plans.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends training_plansUpdateArgs>(args: SelectSubset<T, training_plansUpdateArgs<ExtArgs>>): Prisma__training_plansClient<$Result.GetResult<Prisma.$training_plansPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Training_plans.
     * @param {training_plansDeleteManyArgs} args - Arguments to filter Training_plans to delete.
     * @example
     * // Delete a few Training_plans
     * const { count } = await prisma.training_plans.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends training_plansDeleteManyArgs>(args?: SelectSubset<T, training_plansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Training_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {training_plansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Training_plans
     * const training_plans = await prisma.training_plans.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends training_plansUpdateManyArgs>(args: SelectSubset<T, training_plansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Training_plans and returns the data updated in the database.
     * @param {training_plansUpdateManyAndReturnArgs} args - Arguments to update many Training_plans.
     * @example
     * // Update many Training_plans
     * const training_plans = await prisma.training_plans.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Training_plans and only return the `id`
     * const training_plansWithIdOnly = await prisma.training_plans.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends training_plansUpdateManyAndReturnArgs>(args: SelectSubset<T, training_plansUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$training_plansPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Training_plans.
     * @param {training_plansUpsertArgs} args - Arguments to update or create a Training_plans.
     * @example
     * // Update or create a Training_plans
     * const training_plans = await prisma.training_plans.upsert({
     *   create: {
     *     // ... data to create a Training_plans
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Training_plans we want to update
     *   }
     * })
     */
    upsert<T extends training_plansUpsertArgs>(args: SelectSubset<T, training_plansUpsertArgs<ExtArgs>>): Prisma__training_plansClient<$Result.GetResult<Prisma.$training_plansPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Training_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {training_plansCountArgs} args - Arguments to filter Training_plans to count.
     * @example
     * // Count the number of Training_plans
     * const count = await prisma.training_plans.count({
     *   where: {
     *     // ... the filter for the Training_plans we want to count
     *   }
     * })
    **/
    count<T extends training_plansCountArgs>(
      args?: Subset<T, training_plansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Training_plansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Training_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Training_plansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Training_plansAggregateArgs>(args: Subset<T, Training_plansAggregateArgs>): Prisma.PrismaPromise<GetTraining_plansAggregateType<T>>

    /**
     * Group by Training_plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {training_plansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends training_plansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: training_plansGroupByArgs['orderBy'] }
        : { orderBy?: training_plansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, training_plansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTraining_plansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the training_plans model
   */
  readonly fields: training_plansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for training_plans.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__training_plansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the training_plans model
   */
  interface training_plansFieldRefs {
    readonly id: FieldRef<"training_plans", 'String'>
    readonly user_id: FieldRef<"training_plans", 'String'>
    readonly plan_json: FieldRef<"training_plans", 'Json'>
    readonly plan_text: FieldRef<"training_plans", 'String'>
    readonly version: FieldRef<"training_plans", 'Int'>
    readonly created_at: FieldRef<"training_plans", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * training_plans findUnique
   */
  export type training_plansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training_plans
     */
    select?: training_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the training_plans
     */
    omit?: training_plansOmit<ExtArgs> | null
    /**
     * Filter, which training_plans to fetch.
     */
    where: training_plansWhereUniqueInput
  }

  /**
   * training_plans findUniqueOrThrow
   */
  export type training_plansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training_plans
     */
    select?: training_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the training_plans
     */
    omit?: training_plansOmit<ExtArgs> | null
    /**
     * Filter, which training_plans to fetch.
     */
    where: training_plansWhereUniqueInput
  }

  /**
   * training_plans findFirst
   */
  export type training_plansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training_plans
     */
    select?: training_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the training_plans
     */
    omit?: training_plansOmit<ExtArgs> | null
    /**
     * Filter, which training_plans to fetch.
     */
    where?: training_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of training_plans to fetch.
     */
    orderBy?: training_plansOrderByWithRelationInput | training_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for training_plans.
     */
    cursor?: training_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` training_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` training_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of training_plans.
     */
    distinct?: Training_plansScalarFieldEnum | Training_plansScalarFieldEnum[]
  }

  /**
   * training_plans findFirstOrThrow
   */
  export type training_plansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training_plans
     */
    select?: training_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the training_plans
     */
    omit?: training_plansOmit<ExtArgs> | null
    /**
     * Filter, which training_plans to fetch.
     */
    where?: training_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of training_plans to fetch.
     */
    orderBy?: training_plansOrderByWithRelationInput | training_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for training_plans.
     */
    cursor?: training_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` training_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` training_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of training_plans.
     */
    distinct?: Training_plansScalarFieldEnum | Training_plansScalarFieldEnum[]
  }

  /**
   * training_plans findMany
   */
  export type training_plansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training_plans
     */
    select?: training_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the training_plans
     */
    omit?: training_plansOmit<ExtArgs> | null
    /**
     * Filter, which training_plans to fetch.
     */
    where?: training_plansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of training_plans to fetch.
     */
    orderBy?: training_plansOrderByWithRelationInput | training_plansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing training_plans.
     */
    cursor?: training_plansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` training_plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` training_plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of training_plans.
     */
    distinct?: Training_plansScalarFieldEnum | Training_plansScalarFieldEnum[]
  }

  /**
   * training_plans create
   */
  export type training_plansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training_plans
     */
    select?: training_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the training_plans
     */
    omit?: training_plansOmit<ExtArgs> | null
    /**
     * The data needed to create a training_plans.
     */
    data: XOR<training_plansCreateInput, training_plansUncheckedCreateInput>
  }

  /**
   * training_plans createMany
   */
  export type training_plansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many training_plans.
     */
    data: training_plansCreateManyInput | training_plansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * training_plans createManyAndReturn
   */
  export type training_plansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training_plans
     */
    select?: training_plansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the training_plans
     */
    omit?: training_plansOmit<ExtArgs> | null
    /**
     * The data used to create many training_plans.
     */
    data: training_plansCreateManyInput | training_plansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * training_plans update
   */
  export type training_plansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training_plans
     */
    select?: training_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the training_plans
     */
    omit?: training_plansOmit<ExtArgs> | null
    /**
     * The data needed to update a training_plans.
     */
    data: XOR<training_plansUpdateInput, training_plansUncheckedUpdateInput>
    /**
     * Choose, which training_plans to update.
     */
    where: training_plansWhereUniqueInput
  }

  /**
   * training_plans updateMany
   */
  export type training_plansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update training_plans.
     */
    data: XOR<training_plansUpdateManyMutationInput, training_plansUncheckedUpdateManyInput>
    /**
     * Filter which training_plans to update
     */
    where?: training_plansWhereInput
    /**
     * Limit how many training_plans to update.
     */
    limit?: number
  }

  /**
   * training_plans updateManyAndReturn
   */
  export type training_plansUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training_plans
     */
    select?: training_plansSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the training_plans
     */
    omit?: training_plansOmit<ExtArgs> | null
    /**
     * The data used to update training_plans.
     */
    data: XOR<training_plansUpdateManyMutationInput, training_plansUncheckedUpdateManyInput>
    /**
     * Filter which training_plans to update
     */
    where?: training_plansWhereInput
    /**
     * Limit how many training_plans to update.
     */
    limit?: number
  }

  /**
   * training_plans upsert
   */
  export type training_plansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training_plans
     */
    select?: training_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the training_plans
     */
    omit?: training_plansOmit<ExtArgs> | null
    /**
     * The filter to search for the training_plans to update in case it exists.
     */
    where: training_plansWhereUniqueInput
    /**
     * In case the training_plans found by the `where` argument doesn't exist, create a new training_plans with this data.
     */
    create: XOR<training_plansCreateInput, training_plansUncheckedCreateInput>
    /**
     * In case the training_plans was found with the provided `where` argument, update it with this data.
     */
    update: XOR<training_plansUpdateInput, training_plansUncheckedUpdateInput>
  }

  /**
   * training_plans delete
   */
  export type training_plansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training_plans
     */
    select?: training_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the training_plans
     */
    omit?: training_plansOmit<ExtArgs> | null
    /**
     * Filter which training_plans to delete.
     */
    where: training_plansWhereUniqueInput
  }

  /**
   * training_plans deleteMany
   */
  export type training_plansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which training_plans to delete
     */
    where?: training_plansWhereInput
    /**
     * Limit how many training_plans to delete.
     */
    limit?: number
  }

  /**
   * training_plans without action
   */
  export type training_plansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training_plans
     */
    select?: training_plansSelect<ExtArgs> | null
    /**
     * Omit specific fields from the training_plans
     */
    omit?: training_plansOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const User_profilesScalarFieldEnum: {
    user_id: 'user_id',
    goal: 'goal',
    experience: 'experience',
    days_per_week: 'days_per_week',
    session_length: 'session_length',
    equipment: 'equipment',
    injuries: 'injuries',
    preferred_split: 'preferred_split',
    updated_at: 'updated_at'
  };

  export type User_profilesScalarFieldEnum = (typeof User_profilesScalarFieldEnum)[keyof typeof User_profilesScalarFieldEnum]


  export const Training_plansScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    plan_json: 'plan_json',
    plan_text: 'plan_text',
    version: 'version',
    created_at: 'created_at'
  };

  export type Training_plansScalarFieldEnum = (typeof Training_plansScalarFieldEnum)[keyof typeof Training_plansScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type user_profilesWhereInput = {
    AND?: user_profilesWhereInput | user_profilesWhereInput[]
    OR?: user_profilesWhereInput[]
    NOT?: user_profilesWhereInput | user_profilesWhereInput[]
    user_id?: StringFilter<"user_profiles"> | string
    goal?: StringFilter<"user_profiles"> | string
    experience?: StringFilter<"user_profiles"> | string
    days_per_week?: IntFilter<"user_profiles"> | number
    session_length?: IntFilter<"user_profiles"> | number
    equipment?: StringFilter<"user_profiles"> | string
    injuries?: StringNullableFilter<"user_profiles"> | string | null
    preferred_split?: StringFilter<"user_profiles"> | string
    updated_at?: DateTimeFilter<"user_profiles"> | Date | string
  }

  export type user_profilesOrderByWithRelationInput = {
    user_id?: SortOrder
    goal?: SortOrder
    experience?: SortOrder
    days_per_week?: SortOrder
    session_length?: SortOrder
    equipment?: SortOrder
    injuries?: SortOrderInput | SortOrder
    preferred_split?: SortOrder
    updated_at?: SortOrder
  }

  export type user_profilesWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    AND?: user_profilesWhereInput | user_profilesWhereInput[]
    OR?: user_profilesWhereInput[]
    NOT?: user_profilesWhereInput | user_profilesWhereInput[]
    goal?: StringFilter<"user_profiles"> | string
    experience?: StringFilter<"user_profiles"> | string
    days_per_week?: IntFilter<"user_profiles"> | number
    session_length?: IntFilter<"user_profiles"> | number
    equipment?: StringFilter<"user_profiles"> | string
    injuries?: StringNullableFilter<"user_profiles"> | string | null
    preferred_split?: StringFilter<"user_profiles"> | string
    updated_at?: DateTimeFilter<"user_profiles"> | Date | string
  }, "user_id">

  export type user_profilesOrderByWithAggregationInput = {
    user_id?: SortOrder
    goal?: SortOrder
    experience?: SortOrder
    days_per_week?: SortOrder
    session_length?: SortOrder
    equipment?: SortOrder
    injuries?: SortOrderInput | SortOrder
    preferred_split?: SortOrder
    updated_at?: SortOrder
    _count?: user_profilesCountOrderByAggregateInput
    _avg?: user_profilesAvgOrderByAggregateInput
    _max?: user_profilesMaxOrderByAggregateInput
    _min?: user_profilesMinOrderByAggregateInput
    _sum?: user_profilesSumOrderByAggregateInput
  }

  export type user_profilesScalarWhereWithAggregatesInput = {
    AND?: user_profilesScalarWhereWithAggregatesInput | user_profilesScalarWhereWithAggregatesInput[]
    OR?: user_profilesScalarWhereWithAggregatesInput[]
    NOT?: user_profilesScalarWhereWithAggregatesInput | user_profilesScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"user_profiles"> | string
    goal?: StringWithAggregatesFilter<"user_profiles"> | string
    experience?: StringWithAggregatesFilter<"user_profiles"> | string
    days_per_week?: IntWithAggregatesFilter<"user_profiles"> | number
    session_length?: IntWithAggregatesFilter<"user_profiles"> | number
    equipment?: StringWithAggregatesFilter<"user_profiles"> | string
    injuries?: StringNullableWithAggregatesFilter<"user_profiles"> | string | null
    preferred_split?: StringWithAggregatesFilter<"user_profiles"> | string
    updated_at?: DateTimeWithAggregatesFilter<"user_profiles"> | Date | string
  }

  export type training_plansWhereInput = {
    AND?: training_plansWhereInput | training_plansWhereInput[]
    OR?: training_plansWhereInput[]
    NOT?: training_plansWhereInput | training_plansWhereInput[]
    id?: StringFilter<"training_plans"> | string
    user_id?: StringFilter<"training_plans"> | string
    plan_json?: JsonFilter<"training_plans">
    plan_text?: StringFilter<"training_plans"> | string
    version?: IntFilter<"training_plans"> | number
    created_at?: DateTimeFilter<"training_plans"> | Date | string
  }

  export type training_plansOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_json?: SortOrder
    plan_text?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
  }

  export type training_plansWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: training_plansWhereInput | training_plansWhereInput[]
    OR?: training_plansWhereInput[]
    NOT?: training_plansWhereInput | training_plansWhereInput[]
    user_id?: StringFilter<"training_plans"> | string
    plan_json?: JsonFilter<"training_plans">
    plan_text?: StringFilter<"training_plans"> | string
    version?: IntFilter<"training_plans"> | number
    created_at?: DateTimeFilter<"training_plans"> | Date | string
  }, "id">

  export type training_plansOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_json?: SortOrder
    plan_text?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
    _count?: training_plansCountOrderByAggregateInput
    _avg?: training_plansAvgOrderByAggregateInput
    _max?: training_plansMaxOrderByAggregateInput
    _min?: training_plansMinOrderByAggregateInput
    _sum?: training_plansSumOrderByAggregateInput
  }

  export type training_plansScalarWhereWithAggregatesInput = {
    AND?: training_plansScalarWhereWithAggregatesInput | training_plansScalarWhereWithAggregatesInput[]
    OR?: training_plansScalarWhereWithAggregatesInput[]
    NOT?: training_plansScalarWhereWithAggregatesInput | training_plansScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"training_plans"> | string
    user_id?: StringWithAggregatesFilter<"training_plans"> | string
    plan_json?: JsonWithAggregatesFilter<"training_plans">
    plan_text?: StringWithAggregatesFilter<"training_plans"> | string
    version?: IntWithAggregatesFilter<"training_plans"> | number
    created_at?: DateTimeWithAggregatesFilter<"training_plans"> | Date | string
  }

  export type user_profilesCreateInput = {
    user_id: string
    goal: string
    experience: string
    days_per_week: number
    session_length: number
    equipment: string
    injuries?: string | null
    preferred_split: string
    updated_at?: Date | string
  }

  export type user_profilesUncheckedCreateInput = {
    user_id: string
    goal: string
    experience: string
    days_per_week: number
    session_length: number
    equipment: string
    injuries?: string | null
    preferred_split: string
    updated_at?: Date | string
  }

  export type user_profilesUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    days_per_week?: IntFieldUpdateOperationsInput | number
    session_length?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    injuries?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_split?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_profilesUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    days_per_week?: IntFieldUpdateOperationsInput | number
    session_length?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    injuries?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_split?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_profilesCreateManyInput = {
    user_id: string
    goal: string
    experience: string
    days_per_week: number
    session_length: number
    equipment: string
    injuries?: string | null
    preferred_split: string
    updated_at?: Date | string
  }

  export type user_profilesUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    days_per_week?: IntFieldUpdateOperationsInput | number
    session_length?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    injuries?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_split?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_profilesUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    goal?: StringFieldUpdateOperationsInput | string
    experience?: StringFieldUpdateOperationsInput | string
    days_per_week?: IntFieldUpdateOperationsInput | number
    session_length?: IntFieldUpdateOperationsInput | number
    equipment?: StringFieldUpdateOperationsInput | string
    injuries?: NullableStringFieldUpdateOperationsInput | string | null
    preferred_split?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type training_plansCreateInput = {
    id?: string
    user_id: string
    plan_json: JsonNullValueInput | InputJsonValue
    plan_text: string
    version: number
    created_at?: Date | string
  }

  export type training_plansUncheckedCreateInput = {
    id?: string
    user_id: string
    plan_json: JsonNullValueInput | InputJsonValue
    plan_text: string
    version: number
    created_at?: Date | string
  }

  export type training_plansUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    plan_json?: JsonNullValueInput | InputJsonValue
    plan_text?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type training_plansUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    plan_json?: JsonNullValueInput | InputJsonValue
    plan_text?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type training_plansCreateManyInput = {
    id?: string
    user_id: string
    plan_json: JsonNullValueInput | InputJsonValue
    plan_text: string
    version: number
    created_at?: Date | string
  }

  export type training_plansUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    plan_json?: JsonNullValueInput | InputJsonValue
    plan_text?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type training_plansUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    plan_json?: JsonNullValueInput | InputJsonValue
    plan_text?: StringFieldUpdateOperationsInput | string
    version?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type user_profilesCountOrderByAggregateInput = {
    user_id?: SortOrder
    goal?: SortOrder
    experience?: SortOrder
    days_per_week?: SortOrder
    session_length?: SortOrder
    equipment?: SortOrder
    injuries?: SortOrder
    preferred_split?: SortOrder
    updated_at?: SortOrder
  }

  export type user_profilesAvgOrderByAggregateInput = {
    days_per_week?: SortOrder
    session_length?: SortOrder
  }

  export type user_profilesMaxOrderByAggregateInput = {
    user_id?: SortOrder
    goal?: SortOrder
    experience?: SortOrder
    days_per_week?: SortOrder
    session_length?: SortOrder
    equipment?: SortOrder
    injuries?: SortOrder
    preferred_split?: SortOrder
    updated_at?: SortOrder
  }

  export type user_profilesMinOrderByAggregateInput = {
    user_id?: SortOrder
    goal?: SortOrder
    experience?: SortOrder
    days_per_week?: SortOrder
    session_length?: SortOrder
    equipment?: SortOrder
    injuries?: SortOrder
    preferred_split?: SortOrder
    updated_at?: SortOrder
  }

  export type user_profilesSumOrderByAggregateInput = {
    days_per_week?: SortOrder
    session_length?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type training_plansCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_json?: SortOrder
    plan_text?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
  }

  export type training_plansAvgOrderByAggregateInput = {
    version?: SortOrder
  }

  export type training_plansMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_text?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
  }

  export type training_plansMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    plan_text?: SortOrder
    version?: SortOrder
    created_at?: SortOrder
  }

  export type training_plansSumOrderByAggregateInput = {
    version?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
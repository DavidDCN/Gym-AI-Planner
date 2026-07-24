import React from 'react'
import { BrowserRouter,Route, Routes} from 'react-router-dom'
import Onboarding from './pages/Onboarding'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Auth from './pages/Auth'
import Account from './pages/Account'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <div className = "min-h-screen flex flex-col">
    <Navbar/>
    <main className = "flex-1">
    <Routes>
      <Route index element = {<Home/>}/>
      <Route path ="/onboarding" element = {<Onboarding/>}/>
      <Route path ="/profile" element = {<Profile/>}/>
      <Route path ="/auth/:pathname" element = {<Auth/>}/>
      <Route path ="/account/:pathname" element = {<Account/>}/>
    </Routes>
    </main>
    </div>
    </BrowserRouter>
  )
}

export default App
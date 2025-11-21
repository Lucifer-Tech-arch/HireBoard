import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Homepage  from './pages/Homepage.jsx'
import Aboutpage from './pages/Aboutpage.jsx'
import Problems from './pages/Problems.jsx'

function App() {
  const {isSignedIn} = useUser()

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/problems' element={isSignedIn ? <Problems /> : <Navigate to={"/"} />} />
      </Routes>
    </>
  )
}

export default App
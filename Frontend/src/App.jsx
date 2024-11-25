import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom'


import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import Home from "./pages/Home/Home"


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/signUp' exact element={<SignUp/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App

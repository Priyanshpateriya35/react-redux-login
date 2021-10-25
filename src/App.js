import React from 'react'
import Login from './Components/Login'
import Logout from './Components/logout'
import {selectUser} from './Features/userSlice'
import { useSelector } from 'react-redux'
import './App.css'

function App(){
  const user = useSelector(selectUser)
  return(
    <div>
    {user ? <Logout /> : <Login />}
    
    </div>
  )
}
export default App;
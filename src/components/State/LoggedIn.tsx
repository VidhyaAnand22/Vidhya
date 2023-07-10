import React from 'react'
import { useState } from 'react'
export type handleLogin = {
  name: boolean

}


export const LoggedIn = () => {
    const  [isLoggedIn, setIsLoggedIn]= useState(false)
 const handleLogin =() => {
        setIsLoggedIn(true)
    }
    const handleLogout = () =>{
        setIsLoggedIn(false)
    }
    console.log('');
  return (
    <div>
       
<button onClick={handleLogin}>Login</button>
   <button onClick={handleLogout}>Logout</button>
    <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  )
}

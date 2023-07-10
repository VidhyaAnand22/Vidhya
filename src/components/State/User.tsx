import React from 'react'
import { useState } from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser]= useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'Vidhya',
            email: 'vidhyait91@gmail.com',
        })
    }
    const ClearUser = () => {
        setUser({
            name: '',
            email: '',
        })
    }

  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={ClearUser}>Clear</button>
        
  
    <div> {user.name}</div>
    <div>{user.email}</div>
    
    </div>
  )
}

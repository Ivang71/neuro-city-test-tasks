import { useEffect, useState } from 'react'
import './Users.css'

interface User {
  id: number,
  avatar: string,
  email: string,
  first_name: string,
  last_name: string,
}

export const Users = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const loadUsers = async () => {
      const { data: users } = await fetch('http://localhost:8000').then((r) => r.json())
      setUsers(users)
    }
    loadUsers()
  }, [])

  return (
    <div className="container">
      {users.map((user) => (
        <div className="user" key={user.id}>
          <div>{user.first_name}</div>
          <div className="email">{user.email}</div>
          <img src={user.avatar} className="avatar" alt="a user avatar"/>
        </div>
      ))}
    </div>
  )
}

import React from 'react'
import { useAddUserMutation, useGetUsersQuery } from './api'

const App = () => {
  const {data:users} = useGetUsersQuery();
  const [addUser] = useAddUserMutation();
  
  const handleAddUser = () =>{
      addUser("Tavuk");
  };
  
  return (
    <div>
      <button onClick={handleAddUser}>Kullanıcı ekle</button>
      <ul>
      {users?.map(user => (
       <li>{user.name}</li>
    ))}
      </ul>
      
    </div>
  )
}

export default App
import React from 'react'
import UserList from '../components/UserList'

const Users = () => {

  const USERS=[
    {
      id:'u1',
      name:'Shakeel',
      image:'https://watjrxbhxvscproshfag.supabase.co/storage/v1/object/public/cabins-images/cabin_006.jpg',
      place:2
    }
  ]

  return (
    <UserList item={USERS}/>
  )
}

export default Users

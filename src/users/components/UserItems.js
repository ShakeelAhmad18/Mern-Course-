import React from 'react'
import './UserItem.css'
import Avatar from '../../shared/components/UIElements/Avatar'
import { Link } from 'react-router-dom'
import Card from '../../shared/components/Card'

const UserItems = ({ user }) => {
   return (
      <li className='user-item'>
         <div>
            <Card className="user-item__content">
               <Link to={`/${user.id}/places`}>
                  <div className='user-item__image'>
                     <Avatar image={user.image} alt={user.name} />
                  </div>
                  <div className='user-item__info'>
                     <h2 className=''>{user.name}</h2>
                     <h3 className=''>{user.place} {user.place === 0 ? 'place' : 'places'}</h3>
                  </div>
               </Link>
            </Card>
         </div>
      </li>
   )
}

export default UserItems

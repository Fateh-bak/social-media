import React from 'react'

export default function CloseFriend({user}) {
  return (
    <li className="sideBarFriendListItem">
            <img src={user.profilePicture} alt="" className="sideBarFriendImg" />
            
            <span className="sideBarFriendDesc">{user.username}</span>
        </li>
  )
}

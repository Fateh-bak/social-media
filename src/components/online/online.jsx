import React from 'react'

export default function Online({user}) {
  return (
    <li className="rightBarListElemnt">
            <div className="rightBarOnlineFriendContainer">
              <img src={user.profilePicture} alt="" className="onlineFriendImg" />
              <span className="connected"></span>
            </div>
            <span className="onlineFriendName">{user.username}</span>
    </li>
  )
}

import "./rightBar.css"
import React from 'react';
import Online from "../online/online";
import {Users} from "../../dummyData.js"
// import { Container } from './styles';

function RightBar() {
  return <div className="rightBar">
    <div className="rightBarWraper">
      <div className="rightBarBirthDay">
        <img src="/assets/gift.png" alt="" className="rightBarBirthDayImg" />
        <span className="rightBarBirthDayDesc"><b>you</b> and <b>no other than you </b>have a birthday today</span>
      </div>
      <div className="rightBarAdSection">
        <img src="/assets/ad.png" alt="" className="rightBarAdImg" />
      </div>
      <div className="rightBarOnlineFriends">
        <span className="rightBarOnlineFriendDesc">online Friends</span>
        <ul className="rightBarUl">
          {Users.map((u)=>(<Online key={u.id} user={u}/>))}
          
        </ul>
      </div>
    </div>
  </div>;
}

export default RightBar;
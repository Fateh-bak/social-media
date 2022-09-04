import "./rightBar.css"
import React from 'react';

// import { Container } from './styles';

function RightBar() {
  return <div className="rightBar">
    <div className="rightBarWraper">
      <div className="rightBarBirthDay">
        <img src="/assets/gift.png" alt="" className="rightBarBirthDayImg" />
        <span className="rightBarBirthDayDesc"><b>you</b> and <b>no other than you </b>have a birthday today</span>
      </div>
      <div className="rightBarAdSection">
        <img src="/assets/ad.png" alt="" className="rigtBarAdImg" />
      </div>
      <div className="rightBarOnlineFriends">
        <span>online Friends</span>
        <ul>
          <li>
            <div className="rightBarOnlineFriendContainer">
              <img src="/assets/person/3.jpeg" alt="" className="onlineFriendImg" />
              <span className="connected"></span>
            </div>
            <span className="onlineFriendName">Margorita shuuu</span>
          </li>
        </ul>
      </div>
    </div>
  </div>;
}

export default RightBar;
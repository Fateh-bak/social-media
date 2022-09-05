import "./rightBar.css";
import React from "react";
import Online from "../online/online";
import { Users } from "../../dummyData.js";
// import { Container } from './styles';

function RightBar({ profile }) {
if(profile){
  return(
    <div className="rightBar">
    <div className="rightBarWraper">
    <span className="aboutSection">About yourself</span>
    <div className="userAbout">
      <div className="userAboutElement">
        <span className="element">city :</span>
        <span className="responseToElement">setif</span>
      </div>
      <div className="userAboutElement">
        <span className="element">name :</span>
        <span className="responseToElement">jak the reaper</span>
      </div>
      <div className="userAboutElement">
        <span className="element">school :</span>
        <span className="responseToElement">mars medicale school</span>
      </div>
      <div className="userAboutElement">
        <span className="element">situation :</span>
        <span className="responseToElement">alive</span>
      </div>
    </div>
    <span className="friendsTxt">your Friends</span>
    <div className="userFriends">
      <div className="friend">
        <img src="./assets/person/4.jpeg" alt="" className="friendImg" />
        <span className="friendName">jak not the </span>
      </div>
      <div className="friend">
        <img src="./assets/person/4.jpeg" alt="" className="friendImg" />
        <span className="friendName">jak not the </span>
      </div>
      <div className="friend">
        <img src="./assets/person/4.jpeg" alt="" className="friendImg" />
        <span className="friendName">jak not the </span>
      </div>
      <div className="friend">
        <img src="./assets/person/4.jpeg" alt="" className="friendImg" />
        <span className="friendName">jak not the </span>
      </div>
      <div className="friend">
        <img src="./assets/person/4.jpeg" alt="" className="friendImg" />
        <span className="friendName">jak not the </span>
      </div>
      <div className="friend">
        <img src="./assets/person/4.jpeg" alt="" className="friendImg" />
        <span className="friendName">jak not the </span>
      </div>
      <div className="friend">
        <img src="./assets/person/4.jpeg" alt="" className="friendImg" />
        <span className="friendName">jak not the </span>
      </div>
      <div className="friend">
        <img src="./assets/person/4.jpeg" alt="" className="friendImg" />
        <span className="friendName">jak not the </span>
      </div>
      <div className="friend">
        <img src="./assets/person/4.jpeg" alt="" className="friendImg" />
        <span className="friendName">jak not the </span>
      </div>
      <div className="friend">
        <img src="./assets/person/4.jpeg" alt="" className="friendImg" />
        <span className="friendName">jak not the </span>
      </div>
    </div>
    </div>
  </div>)
}else{
  return (
    <div className="rightBar">
    <div className="rightBarWraper">
    <div className="rightBarBirthDay">
        <img src="/assets/gift.png" alt="" className="rightBarBirthDayImg" />
        <span className="rightBarBirthDayDesc">
          <b>you</b> and <b>no other than you </b>have a birthday today
        </span>
      </div>
      <div className="rightBarAdSection">
        <img src="/assets/ad.png" alt="" className="rightBarAdImg" />
      </div>
      <div className="rightBarOnlineFriends">
        <span className="rightBarOnlineFriendDesc">online Friends</span>
        <ul className="rightBarUl">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
}
}

export default RightBar;

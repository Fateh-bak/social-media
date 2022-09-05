import React from "react";
import "./profile.css";
import RightBar from "../../components/rightBar/rightBar";
import NavBar from "../../components/navBar/navBar";
import SideBar from "../../components/sideBar/sideBar";
import Feed from "../../components/feed/feed";

// import { Container } from './styles';

function Profile() {
  return (
    <>
      <NavBar />
      <div className="body">
      <SideBar />
        <div className="homeRightBar">
          <div className="homeRightBarTop">
            <div className="homeRightBarTopWraper">
              <div className="homeImgContainer">
                <img
                  src="./assets/post/3.jpeg"
                  alt=""
                  className="homeCoverImg"
                />
                <img
                  src="./assets/person/3.jpeg"
                  alt=""
                  className="homeProfileImg"
                />
              </div>
              <div className="profileInfo"><span className="profileName">jak the reaper</span>
              <span className="profileDesc">
                hallo i'm in vacation right now leave a messege! thank you
              </span></div>
            </div>
          </div>
          <div className="homeRightBarBottom">
              <div className="profileFeed"><Feed /></div>
            
            <div className="profileRightBar"><RightBar profile/></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

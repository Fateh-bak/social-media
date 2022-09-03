import "./navBar.css"
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';


function NavBar() {
  return (
      <div className="navBarContainer">
          <div className="navBarLeft">
              <span className="navBarLogo">LogicaBox</span>
          </div>
          <div className="navBarCenter">
              <div className="navBarSearch">
              <SearchIcon className="searchIcon"/>
              <input type="text" placeholder='search here ...' className="navBarSearchInput" />
              </div>
          </div>
          <div className="navBarRight">
              <div className="navBarLinks">
                  <span className="link">link1</span>
                  <span className="link">link2</span>
              </div>
              <div className="navBarItems">
                  <div className="navBarItem">
                      <PersonIcon/>
                      <span className='navBarBadg'>1</span>
                  </div>
                  <div className="navBarItem">
                      <ChatIcon/>
                      <span className='navBarBadg'>1</span>
                  </div>
                  <div className="navBarItem">
                      <CircleNotificationsIcon/>
                      <span className='navBarBadg'>1</span>
                  </div>
              </div>
              <img src="/assets/person/1.jpeg" alt="noImage" className="navBarImg" />
          </div>

      </div>
  );
}

export default NavBar;
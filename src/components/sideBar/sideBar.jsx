import "./sideBar.css"
import React from 'react';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/closeFriend";
// import { Container } from './styles';

function SideBar() {
  return <div className="sideBar">
    <div className="sideBarItems">
      <ul className="sideBarList">
        <li className="sideBarListItem">
            <RssFeedIcon className='sideBarIcon'/>
            <span className="sidBarIconDesc">feed</span>
        </li>
        <li className="sideBarListItem">
            <RssFeedIcon className='sideBarIcon'/>
            <span className="sidBarIconDesc">feed</span>
        </li>
        <li className="sideBarListItem">
            <RssFeedIcon className='sideBarIcon'/>
            <span className="sidBarIconDesc">feed</span>
        </li>
        <li className="sideBarListItem">
            <RssFeedIcon className='sideBarIcon'/>
            <span className="sidBarIconDesc">feed</span>
        </li>
        <li className="sideBarListItem">
            <RssFeedIcon className='sideBarIcon'/>
            <span className="sidBarIconDesc">feed</span>
        </li>
        <li className="sideBarListItem">
            <RssFeedIcon className='sideBarIcon'/>
            <span className="sidBarIconDesc">feed</span>
        </li>
        <li className="sideBarListItem">
            <RssFeedIcon className='sideBarIcon'/>
            <span className="sidBarIconDesc">feed</span>
        </li>
        <li className="sideBarListItem">
            <RssFeedIcon className='sideBarIcon'/>
            <span className="sidBarIconDesc">feed</span>
        </li>
        <li className="sideBarListItem">
            <RssFeedIcon className='sideBarIcon'/>
            <span className="sidBarIconDesc">feed</span>
        </li>
        <li className="sideBarListItem">
            <RssFeedIcon className='sideBarIcon'/>
            <span className="sidBarIconDesc">feed</span>
        </li>
        <li className="sideBarListItem">
            <RssFeedIcon className='sideBarIcon'/>
            <span className="sidBarIconDesc">feed</span>
        </li>
        <li className="sideBarListItem">
            <RssFeedIcon className='sideBarIcon'/>
            <span className="sidBarIconDesc">feed</span>
        </li>
      </ul>
      <button className="sideBarShowMoreButton">Show More</button>
      <hr className="sideBarHr" />
      <ul className="sideBarFiendList">
    {Users.map((u)=>(<CloseFriend key={u.id} user={u}/>))}
      </ul>
    </div>

  </div>;
}

export default SideBar;
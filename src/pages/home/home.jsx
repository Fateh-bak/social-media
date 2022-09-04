import "./home.css"
import React from 'react';
import NavBar from '../../components/navBar/navBar';
import RightBar from '../../components/rightBar/rightBar';
import SideBar from '../../components/sideBar/sideBar';
import Feed from "../../components/feed/feed";
// import { Container } from './styles';

function Home() {
  return <>
    <NavBar/>
    <div className="body">
        <SideBar/>
        <Feed/>
        <RightBar/>
    </div>
  </>}

export default Home;
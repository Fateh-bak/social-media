import "./share.css"
import React from 'react';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddReactionIcon from '@mui/icons-material/AddReaction';
// import { Container } from './styles';

function Share() {
  return <div className="share">
      <div className="shareWraper">
          <div className="shareTop">
              <img src="assets/person/1.jpeg" alt="" className="shareImg" />
              <input type="text" placeholder='what is in your mind?' className="shareInput" />
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
              <div className="shareOptions">
                  <AddAPhotoIcon htmlColor="tomato" className='shareOptionIcon'/>
                  <span className="shareOptionName">image/video</span>
              </div>
              <div className="shareOptions">
                  <LabelIcon htmlColor="blue" className='shareOptionIcon'/>
                  <span className="shareOptionName">identifier</span>
              </div>
              <div className="shareOptions">
                  <LocationOnIcon htmlColor="green" className='shareOptionIcon'/>
                  <span className="shareOptionName">localisation</span>
              </div>
              <div className="shareOptions">
                  <AddReactionIcon htmlColor="gold" className='shareOptionIcon'/>
                  <span className="shareOptionName">reaction</span>
              </div>
              <button className="shareButton">Share</button>
          </div>
      </div>
  </div>;
}

export default Share;
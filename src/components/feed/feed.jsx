import React from 'react';
import Share from '../share/share';
import Post from '../post/post.jsx';
import {Posts} from "../../dummyData.js"
import "./feed.css"
// import { Container } from './styles';

function Feed() {
  return <div className="feed">
    <div className="feedWraper">
      <Share/>
      {Posts.map((p) =>(<Post key={p.id} post={p}/>))}
    </div>
  </div>;
}

export default Feed;
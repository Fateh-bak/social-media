import React from 'react';
import Share from '../share/share';
import Post from '../post/post.jsx';
// import { Container } from './styles';

function Feed() {
  return <div className="feed">
    <div className="feedWraper">
      <Share/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  </div>;
}

export default Feed;
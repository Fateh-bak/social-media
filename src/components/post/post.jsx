import "./post.css"
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from "../../dummyData";

// import { Container } from './styles';

function Post({post}) {
  return <div className="post">
      <div className="postWraper">
          <div className="postTop">
              <div className="postTopInfo">
              <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" className="postProfilImg" />
              <span className="postProfileName">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
              <span className="postTime">{post.time}</span>
              </div>
              <MoreVertIcon className='postIcon'/>
          </div>
          <div className="postCenter">
              <span className='postDesc'>{post?.desc}</span>
              <img src={post.photo} alt="" className="postImg" />

          </div>
          <div className="postBottom">
              <div className="postLikes">
                  <img src="/assets/like.png" alt="" className="postLikeImg" />
                  <img src="/assets/heart.png" alt="" className="postLikeImg" />
                  <span className="postLikesNum">{post.like} people like it</span>
              </div>
              <span className="postComments">{post.comment} comments</span>
          </div>
      </div>
  </div>;
}

export default Post;
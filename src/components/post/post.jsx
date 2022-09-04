import "./post.css"
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// import { Container } from './styles';

function Post() {
  return <div className="post">
      <div className="postWraper">
          <div className="postTop">
              <div className="postTopInfo">
              <img src="/assets/person/1.jpeg" alt="" className="postProfilImg" />
              <span className="postProfileName">safak jojo</span>
              <span className="postTime">5 billions years ago</span>
              </div>
              <MoreVertIcon className='postIcon'/>
          </div>
          <div className="postCenter">
              <span className='postDesc'>some text</span>
              <img src="/assets/post/1.jpeg" alt="" className="postImg" />

          </div>
          <div className="postBottom">
              <div className="postLikes">
                  <img src="/assets/like.png" alt="" className="postLikeImg" />
                  <img src="/assets/heart.png" alt="" className="postLikeImg" />
                  <span className="postLikesNum">32 people like it</span>
              </div>
              <span className="postComments">9 comments</span>
          </div>
      </div>
  </div>;
}

export default Post;
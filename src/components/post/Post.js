import React from "react";
import { MoreVert } from "@material-ui/icons";

import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src="/assets/person/1.jpeg"
              alt="Post Profile Image"
              className="postProfileImg"
            />
            <div className="postUsername">Safak Kocaoglu</div>
            <div className="postDate">5 Mins ago</div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! it's my first post :)</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="Post Image" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="Like" />
            <img className="likeIcon" src="/assets/heart.png" alt="Heart" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

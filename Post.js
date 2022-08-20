import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import PostTools from "./postTools";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";

function Post({ name, description, message, photoUrl }) {
  return (
    <div className="post">
      <div className="postHeader">
        <Avatar />
        <div className="postInfo">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="postBody">
        <p>{message}</p>
      </div>

      <div className="postTools">
        <PostTools Icon={ThumbUpIcon} title="Like" color="gray" />
        <PostTools Icon={InsertCommentIcon} title="Comment" color="gray" />
        <PostTools Icon={ShareIcon} title="Share" color="gray" />
        <PostTools Icon={SendIcon} title="Send" color="gray" />
      </div>
    </div>
  );
}

export default Post;

import React from "react";
import "./postTools.css";

function PostTools({ Icon , title , color }){
  return (
    <div className="postTools">
        <Icon style={{ color: color }}/>
        <h4>{title}</h4>
      </div>
  )
}

export default PostTools;
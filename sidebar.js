import React from "react";
import "./sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash"></span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="https://images.alphacoders.com/750/75023.jpg" alt="" />
        <Avatar
          className="sidebar_avatar"
          src="https://lh3.googleusercontent.com/a-/AOh14GjRxaIJ6gYmxhJ2g6STElC4WgtjtwmeU-Z1vwoL=s96-c"
        />
        <h2>Shashwat Tiwari</h2>
        <h4>saswattiwari795@gmial.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you </p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>views on post</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        Recent
        {recentItem("Reactjs")}
        {recentItem("Programming")}
        {recentItem("Software Engineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;

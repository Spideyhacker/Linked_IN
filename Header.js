import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import CellTowerIcon from "@mui/icons-material/CellTower";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        <div className="header_search">
          <SearchIcon className="searchIcon" />
          <input type="text" />
        </div>
      </div>

      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={CellTowerIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar="https://lh3.googleusercontent.com/a-/AOh14GjRxaIJ6gYmxhJ2g6STElC4WgtjtwmeU-Z1vwoL=s96-c"
          title="me"
        />
      </div>
    </div>
  );
}

export default Header;

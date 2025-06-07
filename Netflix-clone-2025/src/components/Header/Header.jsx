import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Header() {
  return (
    <>
      <header className="header">
        <div className="left-header">
          <a href="#" className="logo">
            NETFLIX
          </a>
          <nav className="nav-links">
            <li>
              {" "}
              <a href="#">Home</a>
            </li>
            <li>
              {" "}
              <a href="#">TV Shows</a>
            </li>
            <li>
              {" "}
              <a href="#">Movies</a>
            </li>
            <li>
              {" "}
              <a href="#">Latest</a>
            </li>
            <li>
              <a href="#">My List</a>
            </li>
            <li>
              <a href="#">Browse by language</a>
            </li>
            <li>
              <a href="#">NetFlix</a>
            </li>
          </nav>
        </div>
        <div className="right-header">
          <li>
            <a href="">
              <SearchIcon />
            </a>
          </li>
          <li>
            <a href="">
              <CircleNotificationsIcon />
            </a>
          </li>
          <li>
            <a href="">
              <AccountBoxIcon />{" "}
            </a>
          </li>
          <li>
            <a href="">
              <ArrowDropDownIcon />{" "}
            </a>
          </li>
        </div>
      </header>
    </>
  );
}
export default Header;

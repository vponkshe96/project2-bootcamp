import React from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

function Sidebar() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">Rolodex</div>
      </div>
      <hr />
      <div className="rest">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Link to="/Home">
              <DashboardIcon className="icon" />
            </Link>
            <span className="text">Dashboard</span>
          </li>
          <br />
          <p className="title">LISTS</p>
          <li>
            <Link to="/meetinglist">
              <GroupsIcon className="icon" />
            </Link>
            <span className="text">Meeting List</span>
          </li>
          <br />
          <p className="title">USER</p>
          <li>
            <CalendarMonthIcon className="icon" />
            <span className="text">Calendar</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span className="text">Settings</span>
          </li>
          <li>
            <Link to="/">
              <LogoutIcon className="icon" onClick={handleLogout} />
            </Link>
            <span className="text">Logout</span>
          </li>
          <br />
          {/* <p className="title">THEME OPTIONS</p>
          <li>
            <div className="lightMode"></div>
            <span className="text">Light Mode</span>
          </li>
          <li>
            <div className="darkMode"></div>
            <span className="text">Dark Mode</span>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

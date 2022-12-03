import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
function Sidebar() {
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
            <DashboardIcon className="icon" />
            <span className="text">Dashboard</span>
          </li>
          <br />
          <p className="title">LISTS</p>
          <li>
            <GroupsIcon className="icon" />
            <span className="text">Meeting Log</span>
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
            <LogoutIcon className="icon" />
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

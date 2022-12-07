import React from "react";
import "./meetinglog.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    //parent div with children
    <div className="meetingLog">
      <Sidebar />
      <div className="meetingLogContainer">
        <Navbar />
        Meeting Log Page
      </div>
    </div>
  );
};

export default Home;

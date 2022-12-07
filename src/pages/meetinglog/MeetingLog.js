import React from "react";
import "./meetinglog.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Databtable";

const Home = () => {
  return (
    //parent div with children
    <div className="meetingLog">
      <Sidebar />
      <div className="meetingLogContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./meetinglist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Databtable";

const MeetingList = () => {
  return (
    //parent div with children
    <div className="meetingList">
      <Sidebar />
      <div className="meetingListContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default MeetingList;

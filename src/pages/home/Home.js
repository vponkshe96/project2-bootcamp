import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddNewMeeting from "../../components/addNewMeeting/AddNewMeeting";

const Home = () => {
  return (
    //parent div with children
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <AddNewMeeting />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./home.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const Home = () => {
  return (
    //parent div with children
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        Home Container
      </div>
    </div>
  );
};

export default Home;

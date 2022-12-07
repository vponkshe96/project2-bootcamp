import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Form from "../../components/form/Form";

const Home = () => {
  return (
    //parent div with children
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <Form />
      </div>
    </div>
  );
};

export default Home;

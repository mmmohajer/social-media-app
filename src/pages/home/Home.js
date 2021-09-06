import React from "react";

import Feed from "../../components/feed/Feed";
import Leftside from "../../components/leftside/Leftside";
import Rightside from "../../components/rightside/Rightside";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="homeContainer">
        <Leftside />
        <Feed />
        <Rightside />
      </div>
    </React.Fragment>
  );
};

export default Home;

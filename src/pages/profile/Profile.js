import React from "react";

import Feed from "../../components/feed/Feed";
import Leftside from "../../components/leftside/Leftside";
import Rightside from "../../components/rightside/Rightside";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

const Profile = () => {
  return (
    <React.Fragment>
      <Topbar />
      <div className="profile">
        <Leftside />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="/assets/post/3.jpeg"
                alt="Profile cover image"
              />
              <img
                className="profileUserImg"
                src="/assets/person/7.jpeg"
                alt="User Image"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak Kocaoglu</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightside profile />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;

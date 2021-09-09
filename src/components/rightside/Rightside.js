import React from "react";

import "./rightside.css";

const Rightside = () => {
  return (
    <div className="rightside">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img
            src="/assets/gift.png"
            alt="Birthday Image"
            className="birthdayImg"
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/ad.png" alt="Advertisement" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="Profile Image"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="Profile Image"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>

          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg"
                alt="Profile Image"
                className="rightbarProfileImg"
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightside;

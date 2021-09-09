import React from "react";

import "./rightside.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

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
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightside;

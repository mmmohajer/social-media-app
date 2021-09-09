import React from "react";

import "./closeFriend.css";

const CloseFriend = ({ user }) => {
  return (
    <li className="leftsideFriend">
      <img
        src={user.profilePicture}
        alt="Followrs Photo"
        className="leftsideFriendImg"
      />
      <span className="leftsideFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;

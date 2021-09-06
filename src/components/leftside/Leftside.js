import React from "react";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

import "./leftside.css";

const Leftside = () => {
  return (
    <div className="leftside">
      <div className="leftsideWrapper">
        <ul className="leftsideList">
          <li className="leftsideListItem">
            <RssFeed className="leftsideIcon" />
            <span className="leftsideListItemText">Feed</span>
          </li>
          <li className="leftsideListItem">
            <Chat className="leftsideIcon" />
            <span className="leftsideListItemText">Chats</span>
          </li>
          <li className="leftsideListItem">
            <PlayCircleFilledOutlined className="leftsideIcon" />
            <span className="leftsideListItemText">Videos</span>
          </li>
          <li className="leftsideListItem">
            <Group className="leftsideIcon" />
            <span className="leftsideListItemText">Groups</span>
          </li>
          <li className="leftsideListItem">
            <Bookmark className="leftsideIcon" />
            <span className="leftsideListItemText">Bookmarks</span>
          </li>
          <li className="leftsideListItem">
            <HelpOutline className="leftsideIcon" />
            <span className="leftsideListItemText">Questions</span>
          </li>
          <li className="leftsideListItem">
            <WorkOutline className="leftsideIcon" />
            <span className="leftsideListItemText">Jobs</span>
          </li>
          <li className="leftsideListItem">
            <Event className="leftsideIcon" />
            <span className="leftsideListItemText">Events</span>
          </li>
          <li className="leftsideListItem">
            <School className="leftsideIcon" />
            <span className="leftsideListItemText">Courses</span>
          </li>
        </ul>
        <button className="leftsideButton">Show More</button>
        <hr className="leftsideHr" />
        <ul className="leftsideFriendList">
          <li className="leftsideFriend">
            <img
              src="/assets/person/2.jpeg"
              alt="Followrs Photo"
              className="leftsideFriendImg"
            />
            <span className="leftsideFriendName">Jane Doe</span>
          </li>

          <li className="leftsideFriend">
            <img
              src="/assets/person/2.jpeg"
              alt="Followrs Photo"
              className="leftsideFriendImg"
            />
            <span className="leftsideFriendName">Jane Doe</span>
          </li>

          <li className="leftsideFriend">
            <img
              src="/assets/person/2.jpeg"
              alt="Followrs Photo"
              className="leftsideFriendImg"
            />
            <span className="leftsideFriendName">Jane Doe</span>
          </li>

          <li className="leftsideFriend">
            <img
              src="/assets/person/2.jpeg"
              alt="Followrs Photo"
              className="leftsideFriendImg"
            />
            <span className="leftsideFriendName">Jane Doe</span>
          </li>

          <li className="leftsideFriend">
            <img
              src="/assets/person/2.jpeg"
              alt="Followrs Photo"
              className="leftsideFriendImg"
            />
            <span className="leftsideFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Leftside;

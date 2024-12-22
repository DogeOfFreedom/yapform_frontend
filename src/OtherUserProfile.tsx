import { useEffect, useState } from "react";
import { friend } from "./types";
import users from "./data/users";

function OtherUserProfile() {
  const [user, setUser] = useState<friend>();

  useEffect(() => {
    setUser(users[0]);
  }, []);

  return (
    <dialog className="otherUserProfile" open>
      <div className="profileHeader">
        <div className="profileHeaderBG"></div>
        <div className="profileHeaderContainer">
          <img src={user?.profile_pic} alt="" className="profileImg" />
          <div className="profileStatus">
            <div className="contactStatus"></div>
            <span>{user?.status}</span>
          </div>
          <div className="profileJoinDate">
            <span>Date Joined: {user?.date_joined.toString()}</span>
          </div>
        </div>
      </div>
      <div className="profileUsername">{user?.username}</div>
      <div className="profileDescription">{user?.description}</div>
    </dialog>
  );
}

export default OtherUserProfile;

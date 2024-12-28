import { useEffect, useState } from "react";
import { friend } from "./types";
import users from "./data/users";

function OtherUserProfile({
  dialogRef,
}: {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}) {
  const [user, setUser] = useState<friend>();

  useEffect(() => {
    setUser(users[0]);
  }, []);

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <dialog className="userProfile" ref={dialogRef}>
      <div className="otherUserProfileContainer">
        <div className="profileHeader">
          <div className="profileHeaderBG"></div>
          <div className="profileHeaderContainer">
            <img src={user?.profile_pic} alt="" className="profileImg" />
            <div className="profileStatus">
              <div className="bigDot"></div>
              <span>{user?.status}</span>
            </div>
            <div className="profileJoinDate">
              <span>Date Joined: {user?.date_joined.toLocaleDateString()}</span>
            </div>
          </div>
        </div>
        <div className="profileDetailsContainer">
          <h2 className="bigText">{user?.username}</h2>
          <p className="normalText">{user?.description}</p>
        </div>
        <button onClick={closeDialog} className="closeProfileBtn hoverBtnStyle">
          Close
        </button>
      </div>
    </dialog>
  );
}

export default OtherUserProfile;

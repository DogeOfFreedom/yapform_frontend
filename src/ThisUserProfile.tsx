import React, { useEffect, useState } from "react";
import users from "./data/users";

function ThisUserProfile({
  dialogRef,
}: {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}) {
  const [profilePic, setProfilePic] = useState("");
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setProfilePic(users[1].profile_pic);
    setUsername(users[1].username);
    setDescription(users[1].description);
  }, []);

  const closeDialog = () => {
    dialogRef?.current?.close();
  };

  const submitForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("form submitted yippee!");
  };

  return (
    <dialog className="userProfile" ref={dialogRef}>
      <div className="otherUserProfileContainer">
        <div className="profileHeader">
          <div className="profileHeaderBG"></div>
          <div className="profileHeaderContainer">
            <img src={profilePic} alt="" className="profileImg" />
          </div>
        </div>
        <form onSubmit={submitForm} className="profileDetailsForm" action="">
          <input
            className="formInput profileUsername"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <textarea
            className="formInput profileDetails"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </form>
        <div className="profileBtnContainer">
          <button type="submit" className="profileBtn saveProfileBtn">
            Save
          </button>
          <button
            onClick={closeDialog}
            className="profileBtn closeProfileBtn hoverBtnStyle"
          >
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default ThisUserProfile;

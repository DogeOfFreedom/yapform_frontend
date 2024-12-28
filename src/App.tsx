import { useRef } from "react";
import ContactList from "./ContactList";
import OtherUserProfile from "./OtherUserProfile";
import ThisUserProfile from "./ThisUserProfile";
import { Outlet } from "react-router-dom";
import AddFriend from "./AddFriend";

function App() {
  const thisUserDialogRef = useRef<HTMLDialogElement>(null);
  const otherUserDialogRef = useRef<HTMLDialogElement>(null);
  const addFriendDialogRef = useRef<HTMLDialogElement>(null);

  const openThisUserDialog = () => {
    thisUserDialogRef?.current?.showModal();
    (document.activeElement as HTMLElement).blur();
  };

  const openAddFriendDialog = () => {
    addFriendDialogRef?.current?.showModal();
  };

  return (
    <>
      <header>
        <i className="fa-regular fa-message iconBig"></i>
        Messages
      </header>
      <div className="contentBody">
        <div className="contactsSection">
          <div className="contactListContainer">
            <ContactList />
          </div>
          <div className="optionsContainer">
            <div className="optionsContainerBorder"></div>
            <div className="options">
              <button
                className="optionBtn hoverBtnStyle"
                onClick={openThisUserDialog}
              >
                <i className="fa-solid fa-user iconSmall"></i>
              </button>
              <button
                className="optionBtn hoverBtnStyle"
                onClick={openAddFriendDialog}
              >
                <i className="fa-solid fa-plus iconSmall"></i>
              </button>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
      <ThisUserProfile dialogRef={thisUserDialogRef} />
      <OtherUserProfile dialogRef={otherUserDialogRef} />
      <AddFriend dialogRef={addFriendDialogRef} />
    </>
  );
}

export default App;

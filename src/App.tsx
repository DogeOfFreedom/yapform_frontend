import ContactList from "./ContactList";
import OtherUserProfile from "./OtherUserProfile";
import ThisUserProfile from "./ThisUserProfile";

function App() {
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
              <button className="optionBtn">
                <i className="fa-solid fa-user iconSmall"></i>
              </button>
              <button className="optionBtn">
                <i className="fa-solid fa-plus iconSmall"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="messagesSection">
          <div className="messagesContainer">
            <div className="noContactSelectedMsg">
              <i className="fa-solid fa-user-group iconBig"></i>
              <p>Please choose a contact</p>
            </div>
          </div>
          <div className="decorativeBorder"></div>
        </div>
      </div>
      {/* <ThisUserProfile /> */}
      <OtherUserProfile />
    </>
  );
}

export default App;

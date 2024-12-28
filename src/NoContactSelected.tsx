function NoContactSelected() {
  return (
    <div className="messagesSection">
      <div className="messagesContainer">
        <div className="noContactSelectedMsg">
          <i className="fa-solid fa-user-group iconBig"></i>
          <p>Please choose a contact</p>
        </div>
      </div>
      <div className="decorativeBorder"></div>
    </div>
  );
}

export default NoContactSelected;

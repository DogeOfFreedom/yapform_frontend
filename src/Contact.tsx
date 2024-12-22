import { Link } from "react-router-dom";
import { friend } from "./types";

interface ContactProps {
  details: friend;
}

function Contact({ details }: ContactProps) {
  return (
    // <Link to="chibai">
    <div className="contact">
      <img
        src={details?.profile_pic}
        alt=""
        className="contactProfilePicture"
      />
      <div className="contactDetailsContainer">
        <h2 className="contactName">{details?.username}</h2>
        <div className="contactStatus">
          <div></div>
          <span>{details?.status}</span>
        </div>
      </div>
      <div className="notification">
        <span></span>
      </div>
    </div>
    // </Link>
  );
}

export default Contact;

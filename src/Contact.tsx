import { useNavigate } from "react-router-dom";
import { friend } from "./types";

interface ContactProps {
  details: friend;
}

function Contact({ details }: ContactProps) {
  const navigate = useNavigate();

  const openConvo = () => {
    navigate("/conversation");
  };

  return (
    <div className="contact" onClick={openConvo}>
      <img
        src={details?.profile_pic}
        alt=""
        className="contactProfilePicture"
      />
      <div className="contactDetailsContainer">
        <h2 className="contactName">{details?.username}</h2>
        <div className="contactStatus">
          <div className="statusIcon"></div>
          <span>{details?.status}</span>
        </div>
      </div>
      <div className="bigDot">
        <span></span>
      </div>
    </div>
  );
}

export default Contact;

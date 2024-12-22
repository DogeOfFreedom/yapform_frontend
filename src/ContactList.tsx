import { useEffect, useState } from "react";
import users from "./data/users";
import { friend } from "./types";
import Contact from "./Contact";

function ContactList() {
  const [friends, setFriends] = useState<friend[]>([]);

  useEffect(() => {
    setFriends(users);
  }, []);

  return (
    <div className="contactList">
      {friends.map((friend) => (
        <Contact key={friend.id} details={friend} />
      ))}
    </div>
  );
}

export default ContactList;

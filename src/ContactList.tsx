import { useEffect, useState } from "react";
import users from "./data/users";
import { user } from "./types";
import Contact from "./Contact";
import userGroups from "./data/usergroups";

function ContactList() {
  const [friends, setFriends] = useState<user[]>([]);
  console.log(userGroups);
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

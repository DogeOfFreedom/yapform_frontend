import { useState } from "react";

function AddFriend({
  dialogRef,
}: {
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}) {
  const [error, setError] = useState("");

  return (
    <dialog ref={dialogRef}>
      <div className="addFriendContainer">
        <form>
          <input
            className="normalText formInput"
            type="text"
            placeholder="Enter User Id"
          />
          <button className="optionBtn hoverBtnStyle">Add+</button>
        </form>
        {error && <p className="addFriendErrorMsg">{error}</p>}
      </div>
    </dialog>
  );
}

export default AddFriend;

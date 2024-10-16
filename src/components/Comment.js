import React, { useContext } from "react";
import UserInfoContext from "../context/UserInfoContext";

export default function Comment() {
  const { username, isAdmin } = useContext(UserInfoContext);
  return (
    <div>
      <h3> Comment</h3>
      <p>Logged in as... {username}</p>
      {isAdmin && <button>Edit Comment</button>}
    </div>
  );
}

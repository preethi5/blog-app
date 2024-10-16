import React, { useContext } from "react";
import Comment from "./Comment";
import UserInfoContext from "../context/UserInfoContext";

export default function Post() {
  const { isAdmin } = useContext(UserInfoContext);

  return (
    <div>
      {isAdmin && <button>Delete Comment</button>}

      <h2>Post Title</h2>
      <p>Post Content is here.</p>
      <Comment></Comment>
    </div>
  );
}

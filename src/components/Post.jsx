import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import { PostList } from "../store/store-list";
const Post = ({ MappedList }) => {
  const { DeletePost } = useContext(PostList);
  return (
    <div>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => {
              DeletePost(MappedList.id);
            }}
          >
            <RiDeleteBin6Line />
            <span className="visually-hidden">unread messages</span>
          </span>
          <h5 className="card-title">{MappedList.Title}</h5>
          <p className="card-text">{MappedList.Body}</p>

          {MappedList.Tags.map((tag) => (
            <span className="badge text-bg-primary hastag">{tag}</span>
          ))}
          <div className="alert alert-primary alert" role="alert">
            {`Post is Reacted by ${MappedList.Reactions} People`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

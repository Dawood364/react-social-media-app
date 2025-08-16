import React, { useContext, useRef } from "react";
import { PostList } from "../store/store-list";

const CreatePost = () => {
  const { AddPost } = useContext(PostList);
  const IDElement = useRef();
  const TitleElement = useRef();
  const BodyElement = useRef();
  const ReactionsElement = useRef();
  const TagsElement = useRef();
  const HandleSubmit = (event) => {
    event.preventDefault();
    const User_ID = IDElement.current.value;
    const Title = TitleElement.current.value;
    const Body = BodyElement.current.value;
    const Reactions = ReactionsElement.current.value;
    const Tags = TagsElement.current.value.split(" ");
    IDElement.current.value = "";
    TitleElement.current.value = "";
    BodyElement.current.value = "";
    ReactionsElement.current.value = "";

    AddPost(User_ID, Title, Body, Reactions, Tags);
  };

  return (
    <div>
      <form className="Form" onSubmit={HandleSubmit}>
        <div className="mb-3">
          <label htmlFor="user-id" className="form-label">
            User-Id
          </label>
          <input
            ref={IDElement}
            placeholder="Enter user id"
            type="Text"
            className="form-control"
            id="User-Id"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            ref={TitleElement}
            placeholder="How are you Feeling Today ?"
            type="Text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Body" className="form-label">
            Body
          </label>
          <textarea
            ref={BodyElement}
            rows={4}
            placeholder=" Enter Description of post"
            type="Text"
            className="form-control"
            id="Body"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Reactions" className="form-label">
            Reactions
          </label>
          <input
            ref={ReactionsElement}
            placeholder="Enter Numeber of reactions"
            type="Text"
            className="form-control"
            id="Reactions"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Tags" className="form-label">
            Tags
          </label>
          <input
            ref={TagsElement}
            placeholder="Enter Tags for post "
            type="Text"
            className="form-control"
            id="Tags"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;

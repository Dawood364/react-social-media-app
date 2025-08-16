import React, { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/store-list";

const PostList = () => {
  const { PostLists } = useContext(PostListData);
  return (
    <div>
      {PostLists.map((list) => (
        <Post MappedList={list} />
      ))}
    </div>
  );
};

export default PostList;

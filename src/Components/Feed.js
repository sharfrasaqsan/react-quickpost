import React from "react";
import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <>
      {posts.map((i) => (
        <Post key={i.id} i={i} />
      ))}
    </>
  );
};

export default Feed;

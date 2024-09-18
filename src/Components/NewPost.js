import React, { useContext } from "react";
import "./newpost.css";
import DataContext from "../context/DataContext";
import api from "../api/posts";

const NewPost = () => {
  const {
    posts,
    setPosts,
    Navigate,
    postTitle,
    setPostTitle,
    postBody,
    setPostBody,
  } = useContext(DataContext);

  const handleAddPost = async (e) => {
    e.preventDefault();
    if (postTitle && postBody) {
      const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
      const newPost = {
        id,
        title: postTitle,
        datetime: new Date().toLocaleString(),
        body: postBody,
      };

      try {
        const response = await api.post("/posts", newPost);
        const listPosts = [...posts, response.data];
        setPosts(listPosts);
        setPostTitle("");
        setPostBody("");
        Navigate("/");
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  return (
    <section className="new-post-section">
      <h2 className="new-post-title">Add New Post</h2>
      <form className="new-post-form" onSubmit={handleAddPost}>
        <label htmlFor="post-title">Title</label>
        <input
          type="text"
          id="post-title"
          name="post-title"
          placeholder="Enter Title"
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />

        <label htmlFor="post-body">Body</label>
        <textarea
          id="post-body"
          name="post-body"
          placeholder="Enter Content"
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default NewPost;

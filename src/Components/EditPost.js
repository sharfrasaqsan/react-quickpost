import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./editpost.css";
import DataContext from "../context/DataContext";

const EditPost = () => {
  const {
    posts,
    editPostTitle,
    setEditPostTitle,
    editPostBody,
    setEditPostBody,
    handleEdit,
  } = useContext(DataContext);

  const { id } = useParams();
  const post = posts.find((i) => i.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditPostTitle(post.title);
      setEditPostBody(post.body);
    }
  }, [post, setEditPostTitle, setEditPostBody]);

  return (
    <section className="edit-post-section">
      <h2 className="edit-post-title">Edit Post</h2>
      {post ? (
        <form className="edit-post-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="edit-post-title">Title</label>
          <input
            type="text"
            id="edit-post-title"
            name="edit-post-title"
            placeholder="Enter Title"
            value={editPostTitle}
            onChange={(e) => setEditPostTitle(e.target.value)}
          />

          <label htmlFor="edit-post-body">Body</label>
          <textarea
            id="edit-post-body"
            name="edit-post-body"
            placeholder="Enter Content"
            value={editPostBody}
            onChange={(e) => setEditPostBody(e.target.value)}
          />
          <button type="submit" onClick={() => handleEdit(post.id)}>
            Submit
          </button>
        </form>
      ) : (
        <p>Post not found.</p>
      )}
    </section>
  );
};

export default EditPost;

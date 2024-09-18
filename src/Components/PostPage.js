import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./postpage.css";
import DataContext from "../context/DataContext";
import api from "../api/posts";

const PostPage = () => {
  const { posts, setPosts, Navigate } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((i) => i.id.toString() === id);

  const handleDelete = async (id) => {
    await api.delete(`/posts/${id}`);
    const filteredPosts = posts.filter((i) => i.id !== id);
    setPosts(filteredPosts);
    Navigate("/");
    alert("Your post has been deleted");
  };

  return (
    <section className="post-page">
      {post && (
        <article className="post-page-article">
          <h2 className="post-page-title">{post.title}</h2>
          <p className="post-page-date">{post.datetime}</p>
          <p className="post-page-body">{post.body}</p>
          <div className="post-page-actions">
            <Link to={`/edit/${post.id}`}>
              <button className="post-page-btn edit-btn">Edit post</button>
            </Link>
            <button
              className="post-page-btn delete-btn"
              onClick={() => handleDelete(post.id)}
            >
              Delete post
            </button>
          </div>
        </article>
      )}
    </section>
  );
};

export default PostPage;

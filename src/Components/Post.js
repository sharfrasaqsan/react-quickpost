import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ i }) => {
  return (
    <article className="post-card">
      <Link to={`/post/${i.id}`} className="post-card-link">
        <h2 className="post-card-title">{i.title}</h2>
        <p className="post-card-date">{i.datetime}</p>
        <p className="post-card-body">
          {i.body.length < 125 ? i.body : i.body.slice(0, 125) + "..."}
        </p>
      </Link>
    </article>
  );
};

export default Post;

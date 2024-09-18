import React, { useContext, useEffect, useState } from "react";
import Feed from "./Feed";
import "./home.css";
import DataContext from "../context/DataContext";
import api from "../api/posts";

const Home = () => {
  const { setPosts, searchResults } = useContext(DataContext);
  console.log(searchResults);

  useEffect(() => {
    const fetchedPosts = async () => {
      try {
        const response = await api.get("/posts");
        console.log(response.data);
        setPosts(response.data);
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    };

    fetchedPosts();
  }, [setPosts]);

  return (
    <main className="home">
      <h2 className="home-heading">Recent Posts</h2>
      {searchResults.length ? (
        <Feed posts={searchResults} />
      ) : (
        <p className="home-no-posts">No Posts yet</p>
      )}
    </main>
  );
};

export default Home;

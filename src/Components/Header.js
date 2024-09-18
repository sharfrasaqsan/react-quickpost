import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

const Header = () => {
  const { posts, search, setSearch, setSearchResults } =
    useContext(DataContext);

  useEffect(() => {
    const filteredPosts = posts.filter(
      (i) =>
        i.title.toLowerCase().includes(search.toLowerCase()) ||
        i.body.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredPosts.reverse());
  }, [posts, search, setSearchResults]);

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/" className="header-logo-link">
          <h2>Quick Post</h2>
        </Link>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-item">
            <Link to="/" className="header-nav-link">
              Home
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/post" className="header-nav-link">
              Post
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/about" className="header-nav-link">
              About
            </Link>
          </li>
          <li className="header-nav-item">
            <Link to="/contact" className="header-nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <form className="header-search-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search" className="header-search-label">
          Search
        </label>
        <input
          type="text"
          id="search"
          name="search"
          className="header-search-input"
          placeholder="Search posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </header>
  );
};

export default Header;

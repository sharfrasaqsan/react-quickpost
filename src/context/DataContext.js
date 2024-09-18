import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from "../api/posts";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(posts);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editPostTitle, setEditPostTitle] = useState("");
  const [editPostBody, setEditPostBody] = useState("");
  const Navigate = useNavigate();

  const handleEdit = async (id) => {
    const updatedPost = {
      id,
      title: editPostTitle,
      datetime: new Date().toLocaleString(),
      body: editPostBody,
    };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((i) => (i.id === id ? { ...response.data } : i)));
      setEditPostTitle("");
      setEditPostBody("");
      Navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        search,
        setSearch,
        searchResults,
        setSearchResults,
        postTitle,
        setPostTitle,
        postBody,
        setPostBody,
        editPostTitle,
        setEditPostTitle,
        editPostBody,
        setEditPostBody,
        handleEdit,
        Navigate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

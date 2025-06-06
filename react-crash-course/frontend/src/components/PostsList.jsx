import { useState, useEffect } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

export default function PostList({ isModalOpen, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  // Fetch posts from the backend when the component mounts
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts.");
      }
      const data = await response.json();
      setPosts(data.posts);
    }
    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    setPosts((existingPosts) => [...existingPosts, postData]);
  }

  return (
    <>
      {isModalOpen && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} author={post.author} message={post.message} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Crickets... it's quite silent here.</h2>
          <p>Start posting!</p>
        </div>
      )}
    </>
  );
}

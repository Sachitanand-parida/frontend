import React from 'react'
import {getPosts, deletePost} from '../services/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PostList = () => {

    const [posts, setPosts] = useState([]);

    const[loading, setLoading] = useState(true);

    const[error, setError] = useState(null);

    const loadPosts = async () => {
        try {
            setLoading(true);
            const response = await getPosts();
            setPosts(response.data);
        } catch  {
            setError("Failed to load posts...");
        } finally {
            setLoading(false);
        } 
    };

    const handleDelete = async (id) => {

        if(!window.confirm("Are you sure you want to delete this post?")) {
            return;
        }
        try {
            await deletePost(id); 
            setPosts(posts.filter((post) => post.id !== id));  // Update the state to remove the deleted post from the list
            //loadPosts(); DB hit needed
        } catch (error) {
            setError("Failed to delete post...");
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    if(loading) {
        return <p>Loading Posts...</p>;
    }
    if(error) {
        return <p>{error}</p>;
    }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>By {post.author}</p>
          
          <div>
            <Link to={`/edit/${post.id}`}>Edit</Link>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList

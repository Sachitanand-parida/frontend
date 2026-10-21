import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect} from 'react'
import {getPost, updatePost} from '../services/api'
import { useParams } from 'react-router-dom' 

const EditPost = () => {

     const navigate = useNavigate();
     const { id } = useParams();

    const [post, setPost] = useState({
        title: '',
        content: '',
        author: ''
    });
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadPost = async () => {
            try {
                setLoading(true);
                const response = await getPost(id);
                setPost(response.data);
            } catch (err) {
                setError("Failed to load post.");
            } finally {
                setLoading(false);
            }
        };

        loadPost();
    }, [id]);

    const handleChange = (e) => {
            setPost({
                ...post,
                [e.target.name]: e.target.value
            });
        }
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            if(!post.title || !post.content || !post.author) {
                setError("All fields are required.");
                return;
            }
            try{
                setSubmitting(true);
                await updatePost(id, post);
                navigate('/');
            }catch {
                setError("Failed to update post.");
            }
            finally {
                setSubmitting(false);
            }
        }

        if(loading) {
            return <p>Loading Post...</p>;
        }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Edit Post</h2>
        {error && <p>{error}</p>}
        
        <div>
            <label>Title
            <input type="text" value={post.title} name="title" placeholder='Enter post title' onChange={handleChange}/>
            </label>
        </div>

        <div>
            <label>Content
            <input type="text" value={post.content} name="content" placeholder='Enter post content' onChange={handleChange}/>
            </label>
        </div>

        <div>
            <label>Author
            <input type="text" value={post.author} name="author" placeholder='Enter author name' onChange={handleChange}/>
            </label>
        </div>
        <button type='submit' >{submitting ? 'Updating...' : 'Update Post'}</button>
        <button onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  )
}

export default EditPost

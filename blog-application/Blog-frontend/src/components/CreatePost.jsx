
import { useState } from 'react'
import { createPost } from '../services/api'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

    const navigate = useNavigate();

    const [post, setPost] = useState({
        title: '',
        content: '',
        author: ''
    });
    const [error, setError] = useState(null);
    const [submitting, setSubmitting] = useState(false);

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
            await createPost(post);
            navigate('/');
        }catch {
            setError("Failed to create post.");
        }
        finally {
            setSubmitting(false);
        }
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create New Post</h2>
        {error && <p>{error}</p>}
        
        <div>
            <label>Title
            <input type="text" name="title" placeholder='Enter post title' onChange={handleChange}/>
            </label>
        </div>

        <div>
            <label>Content
            <input type="text" name="content" placeholder='Enter post content' onChange={handleChange}/>
            </label>
        </div>

        <div>
            <label>Author
            <input type="text" name="author" placeholder='Enter author name' onChange={handleChange}/>
            </label>
        </div>
        <button type='submit' >{submitting ? 'Submitting...' : 'Submit'}</button>
      </form>
    </div>
  )
}

export default CreatePost

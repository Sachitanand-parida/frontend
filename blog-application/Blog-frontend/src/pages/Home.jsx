import React from 'react'
import { Link } from 'react-router-dom'
import PostList from '../components/PostList'

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/create">+ Create Post</Link>
      <PostList/>
    </div>
  )
}

export default Home

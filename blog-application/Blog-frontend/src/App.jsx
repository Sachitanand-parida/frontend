import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreatePost from './components/CreatePost'
import EditPost from './components/EditPost'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit:id" element={<EditPost />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

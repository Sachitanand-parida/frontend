import {BrowserRouter , Routes, Route, Link} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Reports from './pages/Reports'
import Transaction from './pages/Transaction'
import Navbar from './components/navbar'  

const App = () => {

  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/reports' element={<Reports/>} />
      <Route path='/transaction' element={<Transaction/>} />
    </Routes>
    <Link to='/transaction'>Navigate</Link>
    </div>
    </BrowserRouter>
  );
}

export default App

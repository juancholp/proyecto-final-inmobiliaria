import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Outlet } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />

        <div className='content'>
          <Outlet />
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App

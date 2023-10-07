import "./App.css";
import Navbar from "./componentes/Navbar";
import { BrowserRouter as Router, Outlet } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          branch dev<code>src/App.js</code> and save toasa reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Navbar />

      <SearchResult />

=======
      
      <div className="content">
        <Outlet />
        
      </div>
    </div>
    
    </Router>
  );
}

export default App;
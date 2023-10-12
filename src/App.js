import "./App.css";
import Filters from "./Filters";
import Navbar from "./componentes/Navbar";
import { BrowserRouter as Router, Outlet } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        
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
     
      <div className="content">
        <Outlet />
        
      </div>
    </div>
    </Router>
  );
}
export default App;
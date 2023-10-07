import "./App.css";
import SearchResult from "./Components/Results/SearchResult";
import Navbar from "./componentes/Navbar";

function App() {
  return (
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
=======
      <Navbar />
      <SearchResult />

    </div>
  );
}

export default App;

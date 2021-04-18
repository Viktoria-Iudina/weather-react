import './App.css';
import Weather from "./Weather";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Weather App
        </h1>
        <Weather city="Nice" />
        <Search />
      </header>
    </div>
  );
}

export default App;
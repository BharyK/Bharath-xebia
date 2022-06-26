import './App.css';

function App({ Routes, location, history}) {
  
  return (
    <div className="App">
        <Routes history = {history} location = {location}/>
    </div>
  );
}

export default App;

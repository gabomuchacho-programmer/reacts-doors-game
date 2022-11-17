import './App.css';
import Game from "./components/Game"

function App() {
  return (
    <div className="App">
      <Game numDoors={3}/>
    </div>
  );
}

export default App;

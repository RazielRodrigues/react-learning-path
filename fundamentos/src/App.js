import Primeiro from './components/Primeiro';
import Expressao from './components/Expressao';
import './App.css';
import Events from './components/Events';
import { Challenge } from './components/Challenge';

function App() {
  return (
    <div className="App">
      <Primeiro />
      <Expressao />
      <Events />
      <Challenge />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [number, setNumber] = useState(0)

  return (
    <div className="App">
      <h1>CONTANDO: {number}</h1>

      <button onClick={() => {
        setNumber(number++)
      }}>AUMENTAR</button>
    </div>
  );
}

export default App;

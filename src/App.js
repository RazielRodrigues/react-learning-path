import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>React router</h1>

      {/* TODOS OS ELEMENTOS QUE QUEREMOS QUE REPITAM EM TODAS
      AS PAGINAS DEVEM FICAR DENTRO DEO BROWSER ROUTER */}
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

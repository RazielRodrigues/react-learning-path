import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <h1>React router</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

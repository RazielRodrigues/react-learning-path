import './App.css';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import Details from './pages/Details';

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

          <Route path="/product/:id" element={<Product />}></Route>
          <Route path="/product/:id/details" element={<Details />}></Route>

          {/* rota do 404 */}
          <Route path="*" element={<NotFound />}></Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

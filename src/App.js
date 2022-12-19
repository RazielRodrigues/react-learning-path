import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import About from './pages/About';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/details'} element={<Details />} />
          <Route path={'/about'} element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

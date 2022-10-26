import logo from './logo.svg';
import './App.css';

import Naruto from './assets/naruto.png'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import Conditional from './components/Conditional';

function App() {
  return (
    <div className="App">
      <ManageData />
      <ListRender />
      <Conditional />
    </div>
  );
}

export default App;

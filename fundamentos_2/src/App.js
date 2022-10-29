import logo from './logo.svg';
import './App.css';

import Naruto from './assets/naruto.png'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import Conditional from './components/Conditional';
import Username from './components/Username';
import { useState } from 'react';

function App() {

  const testeNome = 'Teste nome'

  let [nomeHook, setNomeHoook] = useState('Jao')

  return (
    <div className="App">
      <ManageData />
      <ListRender />
      <Conditional />
      {/* <Username name="IGOR" /> // forma 1 -- passando direto */}
      {/* <Username name={testeNome} /> // forma 2 -- passando via varaivel */}
      {/* <Username name={nomeHook} /> // forma 1 -- passando via hook */}
      <Username name={nomeHook} />
    </div>
  );
}

export default App;

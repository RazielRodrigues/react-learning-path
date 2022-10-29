import logo from './logo.svg';
import './App.css';

import Naruto from './assets/naruto.png'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import Conditional from './components/Conditional';
import Username from './components/Username';
import { useState } from 'react';
import { CarDetails } from './components/CarDetails';

function App() {

  const testeNome = 'Teste nome'

  let [nomeHook, setNomeHoook] = useState('Jao')

  const cars = [
    { id: 1, brand: 'Mustang', color: "Blue", newCar: true, km: 0 },
    { id: 2, brand: 'Kia', color: "Black", newCar: true, km: 0 },
    { id: 3, brand: 'Renault', color: "Blue", newCar: false, km: 10000 },
    { id: 4, brand: 'Mustang', color: "Red", newCar: true, km: 0 }
  ]

  return (
    <div className="App">
      <ManageData />
      <ListRender />
      <Conditional />
      {/* <Username name="IGOR" /> // forma 1 -- passando direto */}
      {/* <Username name={testeNome} /> // forma 2 -- passando via varaivel */}
      {/* <Username name={nomeHook} /> // forma 1 -- passando via hook */}
      <Username name={nomeHook} />

      {cars.map((car) => (
        <CarDetails
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar}
        />
      ))}

    </div>
  );
}

export default App;

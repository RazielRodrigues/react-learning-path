import './App.css';

import { useState, useEffect } from 'react';
import { useFetch } from './hooks/useFetch';

const url = 'http://localhost:3000/products';

function App() {

  // LOADING

  // 1 - PEGANDO DADOS
  const [products, setProducts] = useState([]);

  // 4 - CUSTOM HOOKS
  const { data: items, httpConfig, loading } = useFetch(url);

  // Pegando dados utilizando o useEffect
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
  //   }

  //   fetchData();
  // }, [])

  // 2 - ADICIONANDO DADOS
  const [name, setName] = useState('');
  const [price, setPrice] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      price
    }

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(payload)
    // })

    const added = httpConfig(payload, 'POST')
    setProducts((products) => [...products, added])

    // ADICIONA NA LISTA APOS TER SALVO NO BANCO
    setName('');
    setPrice('');

  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {!loading && <ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
      }
      <div>
        <h1>
          Adicionar produto
        </h1>
        <form onSubmit={handleSubmit}>
          <label>
            Nome
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
              type="text" />
          </label>
          <label>
            Preço
            <input
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              name="price"
              type="number" />
          </label>
          {loading && <button type='submit' disabled>Aguarde</button>}
          {!loading && <button type='submit'>Salvar</button>}
        </form>
      </div>
    </div>
  );
}

export default App;

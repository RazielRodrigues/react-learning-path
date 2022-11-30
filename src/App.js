import './App.css';

import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/products';

function App() {

  // 1 - PEGANDO DADOS
  const [products, setProducts] = useState([]);

  // Pegando dados utilizando o useEffect
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }

    fetchData();
  }, [])

  // 2 - ADICIONANDO DADOS
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      price
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    const data = await res.json();

    console.log(data)

  }

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
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
          <button type='submit'>Salvar</button>
        </form>
      </div>
    </div>
  );
}

export default App;

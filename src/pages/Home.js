import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Home() {

    const url = 'http://localhost:3000/products';
    const { data: items, loading, erros } = useFetch(url);

    return (
        <div>
            <h1>Lista de produtos</h1>
            {loading && <p>Carregando dados...</p>}
            {erros && <h1>{erros}</h1>}
            {!loading && <ul>
                {items && items.map((product) => (
                    <li key={product.id}>
                        {product.name} - R$: {product.price}
                        <Link to={`/product/${product.id}`} >Detalhes</Link>
                    </li>
                ))}
            </ul>
            }
        </div>
    )
}

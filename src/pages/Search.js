import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom'

const Search = () => {

    const [searchParams] = useSearchParams();

    const url = 'http://localhost:3000/products?q' + searchParams;
    console.log(url)
    const { data: items, loading, erros } = useFetch(url);

    return (
        <div>
            <h1>Resultado de produtos</h1>
            {loading && <p>Carregando dados...</p>}
            {erros && <h1>{erros}</h1>}
            {!loading && <ul>
                {items && items.map((product) => (
                    <li key={product.id}>
                        {product.name}
                        <hr />
                        <Link to={`/product/${product.id}`} >Detalhes</Link>
                    </li>
                ))}
            </ul>
            }
        </div>
    )
}

export default Search
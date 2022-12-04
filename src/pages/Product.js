import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom'


function Product() {

    const { id } = useParams();

    const url = "http://localhost:3000/products/" + id;

    const { data: product, loading, erros } = useFetch(url);


    return (
        <>
            {erros && <p>erros</p>}
            {loading && <p>carregando</p>}
            {product && <p>{product.id} mais dados {product.price} e {product.name}</p>}
            <Link to={`/product/${id}/details`} >mais detalhes!</Link>
        </>
    )
}

export default Product
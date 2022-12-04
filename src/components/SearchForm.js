import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchForm = () => {

    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/search?=" + query);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={(e) => setQuery(e.target.value)} />
            <input type="submit" value="Buscar" />
        </form>
    )
}

export default SearchForm
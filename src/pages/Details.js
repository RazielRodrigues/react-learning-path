import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const { id } = useParams();


    return (
        <div>
            <h1>MAIS DETALHES Do {id}</h1>
        </div>
    )
}

export default Details
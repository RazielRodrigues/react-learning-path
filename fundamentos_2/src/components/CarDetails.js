import React from 'react'

export const CarDetails = ({ brand, km, color, newCar }) => {
    return (
        <div>
            <h1>carros para venda:</h1>
            <p>{brand}</p>
            <p>{km}</p>
            <p>{color}</p>
            {newCar && <p>Carro novo!</p>}
        </div>
    )
}

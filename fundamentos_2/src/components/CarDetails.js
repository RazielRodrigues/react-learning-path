import React from 'react'

export const CarDetails = ({ brand, km, color }) => {
    return (
        <div>
            <p>{brand}</p>
            <p>{km}</p>
            <p>{color}</p>
        </div>
    )
}

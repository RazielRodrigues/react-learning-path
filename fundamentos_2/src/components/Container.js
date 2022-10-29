import React from 'react'

function Container({ children, propNormal }) {
    return (
        <div>

            <h2>props normaç: {propNormal}</h2>
            {children}
        </div>
    )
}

export default Container
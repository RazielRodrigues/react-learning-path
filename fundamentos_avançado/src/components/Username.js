import React from 'react'


const Username = (props) => {
    // const Username = ({ name }) => { -- forma 2 com destructing
    // const Username = (props) => { -- forma 1 pegando direto do props
    return (
        <div>
            <h2>NOme do user: {props.name}</h2>
        </div>
    )
}

export default Username
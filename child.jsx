import React from 'react'
import props from './props';

export default function Child({ text, price, hasStock, sum, aa, odjA }) {
    console.log(props)
    return (
        <>
            <h2>子女元件(child)</h2>
            <p>text: {props.text}</p>
            <p>price: {props.price}</p>
            <p>hasStock: {props.hasStock ? 'true' : 'false'}</p>
            <div>Child</div>
        </>
    )
}

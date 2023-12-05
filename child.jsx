import React from 'react'
import props from './props';
import Parent from './parent';

export default function Child(props) {
    console.log(props)
    const[cData,setData]=useState('data')
    props.setDataFromChild(cData)
    return (
        <>
            <h2>子女元件(child)</h2>
            <button onClick={()=>{
                props.setDataFromChild(cData)
            }}>回傳資料給父母</button>
            <p>text: {props.text}</p>
            <p>price: {props.price}</p>
            <p>hasStock: {props.hasStock ? 'true' : 'false'}</p>
            <div>Child</div>
        </>
    )
}

import React from 'react'

export default function ArrayMap() {
    <div>11,29</div>
    const aa = [1, 2, 3, 4, 5]

    const foo = (x) => {
        const y = x || 2
        return y + 1
    }
    return (
        <>
            <h1>array map使用方法</h1>
            <ul>
                {aa.map((v, i) => {
                return <li key={i}>{v * 2}</li>
            })}
            </ul>
        </>
    )
}

import React from 'react'

export default function counter_async() {
    const [total, setTotal] = useState(0)

    return (
        <div>
            <h1>{total}</h1>
            <button onClick={() => {
                setTotal(total + 1)
            }}>
                +1
            </button>
            <button onClick={() => {
                setTotal(total - 1)
            }}>
                -1
            </button>

        </div>
    )
}

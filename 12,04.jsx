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
    const toggleFav = (array, isbn) => {
        return array.map((v, i) => {
            if (v.isbn === isbn) return { ...v, fav: !v.fav }
            else return v
        })
    }
    reurn (
        <>
        <h1>stock_list</h1>
        <table>
            <thead>
                <tr>
                    <th>編號</th>
                    <th>股票名稱</th>
                    <th>市價</th>
                    <th>加入收藏</th>
                </tr>
            </thead>
        </table>
        </>
    )
}


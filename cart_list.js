import React from 'react'
import styles form ''

export default function CartList() {

    return (

        <>
            <ul className={styles['list']}>
                {items.map((v, i) => {
                    return (
                        <li key={v, id} className={styles['item']}>
                        <div className={styles['w-400']}>
                        <div>{v.price}</div>
                        <button
                        </button>
                        
                        </div>

                        </li>
                    )
                })}
            </ul>
        </>
    )
}

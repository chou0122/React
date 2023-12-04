import React from 'react'
import styles from '@/module.css/star.module.css'

export default function star() {
  return (
    <>
    <h1>星星評分</h1>
    <div>
        <span className={styles['good-style']}></span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
        <span>&#9733;</span>
    </div>
    </>
  )
}

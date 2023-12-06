import { useContext } from 'react'
import { ThemeContext } from './theme'
export default function item() {
    const { color } = useContext(useContext)
    return (
        <>
            <div className={color}><p className={color + highlight}>
                這是一小段文字{color}
            </p></div>
        </>
    )
}

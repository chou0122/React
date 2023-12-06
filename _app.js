import '@../module.css/star.module.css'
import { ThemeContext } from '@/context/theme'
import React from 'react'

export default function MyApp({ Component, pageProps }) {
    const getLayout = getLayout || ((page) => page)
    const [color, setColor] = useState('light')
    return (
        <ThemeContext>{getLayout(<Component{...pageProps} />)}</ThemeContext>        
    )
}

import React from 'react'
import Child from './child'
import { useEffect } from 'react'

export default function Parent() {
  return (
    // useEffect(() => {
    //   effect
    //   return () => {
    //     cleanup
    //   };
    // }, [input]);
    <>
        <h1>父母元件(Parent)</h1>
    <Child text="今天開始躺平學程式" price={9999} hasStock={false}/>
    </>

  )
}

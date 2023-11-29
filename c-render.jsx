import React from 'react'

export default function CRender() {
  const count = 0
    return <>{count && <h1>Messages:{count}</h1>}</>
    return<>{count ? <h1>Messages:{count}</h1>:''}</>
  
}

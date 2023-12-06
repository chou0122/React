import { useState } from 'react'

export default function ReRender() {
  const [total, setTotal] = useState(0)
  console.log('render');
  return (
    <>
      <h1>re-render範例</h1>
      <h1>{total}</h1>
      <button className='test' onClick={() => {
        setTotal(total + 1)
      }}>+1</button>
  const count = 0
  return <>{count && <h1>Messages:{count}</h1>}</>
  return <>{count ? <h1>Messages:{count}</h1> : ''}</>
    </>
  )

}

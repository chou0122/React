import React from 'react'

export default function copy() {
    const aa = [1,2,3]
    const ab = [...aa]  //複製第一層的aa
    aa[0]=878
    
  return (
    <div>copy說明</div>
  )
}

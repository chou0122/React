import { string } from 'prop-types'
import React from 'react'

export default function Copy() {
    // 先寫出要新增的物件值
    // 不重複id的產生方式
    // 1.專用的函示庫 uuid/nanoid
    //const newId = self.crypto.randomUUID()
    // 2.日期時間轉毫秒或用date.now()
    //const newId = Number(new Date())
    // 3.產生隨機數字或字串
    //toString(36):(string)?
    // 4.模仿資料庫id遞增方式(僅限於id是數字)
    // const ids = data.map((v) => v.id)
    // 有資料就最大值+1沒有就從1開始編號
    const newId = data.length > 0 ? Math.max(...ids) + 1 : 1
    const newObj = { id: newId, text: 'xxx' }
    constnewData = [newObj, ...data]
    setData(newData)
    return (
        <div>object-copy</div>
    )
}

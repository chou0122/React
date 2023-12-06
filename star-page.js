import React from 'react'

export default function StarPage() {
    const [value, setValue] = useState(0)
    const [value1, setValue] = useState(0)
    return (
        <>
            <Star initRating={value} onRatingChange={setValue} />
            <Star initRating={value1} onRatingChange={setValue} />
        </>
    )
}

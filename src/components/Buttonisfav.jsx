import { useState } from "react"

export function Buttonisfav({ isFavProp}) {
    const[isFav, setisFav] = useState(isFavProp)
    return (
        <button className='btn btn-info' onClick={() => setisFav(!isFav)}>
            {isFav ? '❤' : '🤍'}
        </button>
    )
}

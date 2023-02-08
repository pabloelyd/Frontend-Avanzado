import {useState} from 'react'

const ProductCard = ({name, price = 0, count = 0 }) => {
    const [value, setValue] = useState(0)

    let countState = 0
    const changeCountState = () => {
        countState = countState + 1
    }

    return(
        <section className="card">
            <img  className='card-img-top' src=" https://xiaomimx.vtexassets.com/arquivos/ids/156009-800-auto?v=637502292541570000&width=800&height=auto&aspect=true"alt="" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="card-text">Price: ${price}</p>
                <p className="card-text">Count: {count}</p>
                {count === 0 && <p>No hay productos</p>}
                <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-primary"> - </button>
                    <p className="m-0">{value}</p>
                    <button className="btn btn-primary" onClick={() => setValue (value +1 )}> + </button>
                </div>
            </div>
        </section>
    )
}

export default ProductCard
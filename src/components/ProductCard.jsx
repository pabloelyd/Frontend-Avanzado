import ButtonsCounter from './ButtonsCounter'

const ProductCard = ({ name, price = 0, count = 0 }) => {
  console.log('Render', name)
  return (
    <section className='card'>
      <img className='card-img-top' src=' https://xiaomimx.vtexassets.com/arquivos/ids/156009-800-auto?v=637502292541570000&width=800&height=auto&aspect=true' alt='' />
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p className='card-text'>Price: ${price}</p>
        {count === 0 ? <p>No hay productos</p> : <p className='card-text'>Count: {count}</p>}
        <ButtonsCounter count={count} />
      </div>
    </section>
  )
}

export default ProductCard

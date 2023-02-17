import ButtonsCounter from './ButtonsCounter'

const ProductCard = ({ name, price = 0, count = 0, photo, images }) => {
  console.log('Render', name)
  return (
    <section className='card'>
      <img
        className='card-img-top'
        src={photo}
        alt={name}
      />
      <div className='row'>
        {images.map((img, index) => <img className='col-3' src={img?.url || img} key={index} />)}
      </div>
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

import { Buttonisfav } from './ButtonIsFav'
import ButtonsCounter from './ButtonsCounter'

const ProductCard = ({ name, price = 0, count = 0, photo, isFav }) => {
  console.log('Render', name)
  return (
    <article className='card'>
      <img className='card-img-top img-height' src={photo} alt={name} />
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p className='card-text'>Price: {price} MX</p>
        {count === 0 ? <p>No hay productos</p> : <p className='card-text'>Stock: {count}</p>}
        <div className='d-flex align-items-center gap-3'>
          <ButtonsCounter count={count} />
          <Buttonisfav isFavProp={isFav} />
        </div>
      </div>
    </article>
  )
}

export default ProductCard

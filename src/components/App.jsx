
import '../styles/App.css'
import ProductCard from './ProductCard'
import { products } from '../../db.json'

function App () {
  const mappingProducts = products.map(({ id, title, stock, price, thumbnail, images }) => ({
    id,
    price,
    name: title,
    count: stock,
    photo: thumbnail,
    images
  }))

  return (
    <div className='container py-5'>
      <h1 className='text-center mb-5'>Lista de productos</h1>
      <section className='row'>
        {mappingProducts.map(product => (
          <aside key={product.id} className='col-4'>
            <ProductCard {...product} />
          </aside>
        ))}
      </section>
    </div>
  )
}

export default App
/* <UserCard name='Carlos' age= {19} validate={false} />
      <UserCard name='Pablo' validate />
      <UserCard name='Juan' />
      <UserCard1 name='didi' />

      Estos iban dentro del div */

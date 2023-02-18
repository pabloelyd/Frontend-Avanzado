
import '../styles/App.css'
import ProductCard from './ProductCard'
import { useState, useEffect } from 'react'

const API_URL = 'https://dummyjson.com/products'

function App () {
  const [products, setProducts] = useState([])

  const fetchProducts = async()=>{
    const request = await window.fetch(API_URL)
    const {products} = await request.json()
    setProducts(products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  const mappingProducts = products.map(({ id, title, stock, price, thumbnail }) => ({
    id,
    price,
    name: title,
    count: stock,
    photo: thumbnail,
    isFav: false
  }))

  return (
    <section className='container py-5'>
      <h2 className='text-center mb-5'>Lista de productos</h2>
      <section className='row gy-4'>
        {mappingProducts.map(product => (
          <aside key={product.id} className='col-4'>
            <ProductCard {...product} />
          </aside>
        ))}
      </section>
    </section>
  )
}

export default App
/* <UserCard name='Carlos' age= {19} validate={false} />
      <UserCard name='Pablo' validate />
      <UserCard name='Juan' />
      <UserCard1 name='didi' />

      Estos iban dentro del div */

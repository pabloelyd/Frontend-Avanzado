import '../styles/App.css'
import ProductCard from './ProductCard'
import { useProducts } from '../hooks/useProducts'

// USO DE AXIOS!!! A PARTIR DE LINEA 12

// const API_URL = `https://dummyjson.com/products?limit=${LIMIT}&select=${SELECT_PROPS}`

function App2 () {
  const { products, isLoading, errors } = useProducts()
  const mappingProducts = !errors && products.map((product) => ({
    ...product,
    name: product.title,
    count: product.stock,
    photo: product.thumbnail,
    isFav: false
  }))

  return (
    <section className='container py-5'>
      <h2 className='text-center mb-5'>Lista de productos</h2>
      {isLoading && <p className='text-center'>...Loading</p>}
      {!isLoading && (
        <section className='row gy-4'>
          {mappingProducts.map(product => (
            <aside key={product.id} className='col-4'>
              <ProductCard {...product} />
            </aside>
          ))}
        </section>
      )}
    </section>
  )
}

export default App2

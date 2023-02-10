
import '../styles/App.css'
import ProductCard from './ProductCard'

function App () {
  return (
    <div className='container py-5'>
      <h1 className='text-center mb-5'>Lista de productos</h1>
      <section className='row'>
        <aside className='col-4'>
          <ProductCard name='RedmiNote' count={4} price={100} />
        </aside>
        <aside className='col-4'>
          <ProductCard name='iphone' count={5} price={100} />
        </aside>
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

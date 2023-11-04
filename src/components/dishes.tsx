import Image from 'next/image'
import React from 'react'
import Button from './button'
import Card from './card'

let products = [
  {
    id: 1,
    alt: 'bandeja grande 5 tipos de fruta picada',
    src: '/dish-xl.png',
    title: 'Bandeja brande',
    description: ' 5 tipos de frutica picada',
    ingredients: 'Mamoncillos, mango, piña, manzana verde y maracuya',
    price: '18 k'
  },
  {
    id: 2,
    alt: 'bandeja mediana tres tipos de frutica picada',
    src: '/dish-m.png',
    title: 'Bandeja mediana',
    description: '3 tipos de frutica picada',
    ingredients: 'Mamoncillos, mango, piña o manzana verde',
    price: '15 k'
  },
  {
    id: 2,
    alt: 'bandeja personal dos tipos de frutica picada',
    src: '/dish-s.png',
    title: 'Bandeja personal',
    description: '2 tipos de frutica picada',
    ingredients: 'Mago y mamocillos',
    price: '10 k'
  }
]

const Dishes = () => {
  return (
    <div className='flex flex-col items-center justify-between  my-10 px-4'>
      <h2 className='py-8'>¿Cuál quieres pedir?</h2>
      <div className=' gap-10  grid grid-cols md:grid-cols-2 lg:grid-cols-3 mx-4'>
        {products.map((product) => (
          <Card key={product.id} cardProduct={product} />
        ))}
      </div>
      <div className='flex justify-center w-full text-center my-10'>
        <Button label='Hacer pedido' condition href='https://wa.me/573136642915?text=Quiero%20comprar%20frutica%20picada%20con%20pimienta,%20limón%20y%20sal' />
      </div>
    </div>
  )
}
export default Dishes
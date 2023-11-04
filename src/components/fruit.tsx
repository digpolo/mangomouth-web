'use client'
import React from 'react'
import Button from './button'
import FruitCard from './fruit.card'


let flavors = [
  {
    id: 1,
    alt: 'icono de mango',
    src: '/mango-icon.svg',
    title: 'Mango'
  },
  {
    id: 2,
    alt: 'icono de manzana',
    src: '/apple-icon.svg',
    title: 'Manzana'    
  },
  {
    id: 2,
    alt: 'icono de piña',
    src: '/pineapple-icon.svg',
    title: 'Piña'
    
  },
  {
    id: 2,
    alt: 'icono de manocillo',
    src: '/mamoncillo-icon.svg',
    title: 'Mamoncillo'    
  },
  {
    id: 2,
    alt: 'icono de maracuya',
    src: '/passion-icon.svg',
    title: 'Maracuya' 
  },
  {
    id: 2,
    alt: 'icono de limon',
    src: '/lemon-icon.svg',
    title: 'Maracuya' 
  }
]

const Fruit = () => {
  const redirectToLink = () => {
    // Reemplaza 'URL_DEL_ENLACE' con la URL a la que deseas redirigir al usuario.
    window.location.href = 'https://wa.me/573136642915?text=Quiero%20comprar%20frutica%20picada%20con%20pimienta,%20limón%20y%20sal';
  };
  return (
    <div className='flex flex-col justify-center items-center  justify-between my-10 px-4'>
      <h2 className='my-10'>Sabores cítricos para tu paladar</h2>
      <div className=' gap-10  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mx-4 my-4'>
        {flavors.map((flavor) => (
          <FruitCard key={flavor.id} cardProduct={flavor} />
        ))}
      </div>
      <div className='w-full text-center my-16'>
        <Button label='Pedir Ahora' condition href='https://wa.me/573136642915?text=Quiero%20comprar%20frutica%20picada%20con%20pimienta,%20limón%20y%20sal'/>
      </div>
    </div>
  )
}

export default Fruit
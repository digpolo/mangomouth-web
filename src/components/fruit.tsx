'use client'
import React from 'react'
import Image from 'next/image'
import Button from './button'

const Fruit = () => {
  const redirectToLink = () => {
    // Reemplaza 'URL_DEL_ENLACE' con la URL a la que deseas redirigir al usuario.
    window.location.href = 'https://wa.me/573136642915?text=Quiero%20comprar%20frutica%20picada%20con%20pimienta,%20limón%20y%20sal';
  };
  return (
    <div className='flex flex-col justify-center items-center h-screen justify-between my-10 px-4'>
      <h2 className='py-20'>Sabores cítricos para tu paladar</h2>
      <div className=' grid grid-cols-2 gap-10 md-gap-20'>
        <div className='flex flex-col items-center py-5'>
          <Image
            src='/mango-icon.svg'
            alt='imagen de plato 4 puestos'
            width={75} height={55}
          />
          <p>Mango</p>
        </div>
        <div className='flex flex-col items-center py-5'>
          <Image
            src='/mamoncillo-icon.svg'
            alt='imagen de plato 4 puestos'
            width={75} height={55}
          />
          <p>Mamocillo</p>
        </div>
        <div className='flex flex-col items-center  py-5'>
          <Image
            src='/apple-icon.svg'
            alt='imagen de plato 4 puestos'
            width={75} height={55}
          />
          <p>Guayaba manzana</p>
        </div>
        <div className='flex flex-col items-center py-5'>
          <Image
            src='/lemon-icon.svg'
            alt='imagen de plato 4 puestos'
            width={75} height={55}
          />
          <p>Limon</p>
        </div>
      </div>
      <div className='w-full text-center'>
        <Button label='COMPRAR AHORA' condition href='https://wa.me/573136642915?text=Quiero%20comprar%20frutica%20picada%20con%20pimienta,%20limón%20y%20sal'/>
      </div>
    </div>
  )
}

export default Fruit
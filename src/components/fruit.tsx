import React from 'react'
import Image from 'next/image'
import Button from './button'

const Fruit = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen justify-between my-10'>
      <h2 className='py-20'>Sabores cítricos para tu paladar</h2>
      <div className=' grid grid-cols-2 gap-10'>
        <div className='flex flex-col items-center py-5'>
          <Image
            src='/mango-icon.svg'
            alt='imagen de plato 4 puestos'
            width={55} height={55}
          />
          <p>Mango</p>
        </div>
        <div className='flex flex-col items-center py-5'>
          <Image
            src='/mamoncillo-icon.svg'
            alt='imagen de plato 4 puestos'
            width={55} height={55}
          />
          <p>Mamocillo</p>
        </div>
        <div className='flex flex-col items-center  py-5'>
          <Image
            src='/apple-icon.svg'
            alt='imagen de plato 4 puestos'
            width={55} height={55}
          />
          <p>Guayaba manzana</p>
        </div>
        <div className='flex flex-col items-center py-5'>
          <Image
            src='/lemon-icon.svg'
            alt='imagen de plato 4 puestos'
            width={55} height={55}
          />
          <p>Limon</p>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <Button label='COMPRAR AHORA' condition />
      </div>
    </div>
  )
}

export default Fruit
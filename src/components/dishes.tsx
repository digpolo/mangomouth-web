import Image from 'next/image'
import React from 'react'
import Button from './button'

const Dishes = () => {
  return (
    <div className='flex flex-col items-center justify-between h-screen my-10 px-4'>
      <h2 className='py-4'>¿Cuantos tipos de frutas prefieres?</h2>
      <div className='flex flex-col items-center'>
        <Image
          src='/4dish.svg'
          alt='imagen de plato 4 puestos'
          width={150} height={55}
        />
        <p>4 tipos de fruta</p>
      </div>
      <div className='flex flex-col items-center'>
        <Image
          src='/3dish.svg'
          alt='imagen de plato 4 puestos'
          width={90} height={55}
        />
        <p>4 tipos de fruta</p>
      </div>
      <div className='flex flex-col items-center'>
        <Image
          src='/1dish.svg'
          alt='imagen de plato 4 puestos'
          width={80} height={55}
        />
        <p>4 tipos de fruta</p>
      </div>
      <div className='flex justify-center w-full text-center'>
        <Button label='REALIZAR PEDIDO' condition href='https://wa.me/573136642915?text=Quiero%20comprar%20frutica%20picada%20con%20pimienta,%20limón%20y%20sal' />
      </div>
    </div>
  )
}
export default Dishes
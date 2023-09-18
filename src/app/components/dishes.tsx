import Image from 'next/image';
import React from 'react'
import Button from './button';

const Dishes = () => {
  return (
    <div className='flex flex-col items-center gap-6 w-full'>
      <h2>¿Cuantos tipos de frutas prefieres?</h2>
      <div className='flex flex-col items-center'>
        <Image
          src='/4dish.svg'
          alt='imagen de plato 4 puestos'
          width={200} height={55}
        />
        <p>4 tipos de fruta</p>
      </div>
      <div className='flex flex-col items-center'>
        <Image
          src='/3dish.svg'
          alt='imagen de plato 4 puestos'
          width={110} height={55}
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
      <div className='flex justify-center w-full '>
      <Button label='REALIZAR PEDIDO' condition />
      </div>
    </div>
  )
}
export default Dishes
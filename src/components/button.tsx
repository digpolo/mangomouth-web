import React from 'react'
import { buttonInterface } from '@/interfaces/button.interface'

const Button = (props:buttonInterface) => {
  return (
    <div className='  my-4 w-full'>
        <button 
            disabled={props.condition} 
            className='font-light disabled:bg-tp-dark/40 text-base text-[#fff] bg-pink w-full md:w-[340px] p-4 cursor-pointer' 
            type="button" 
            onClick={props.onClick}>
                {props.label}
        </button>
    </div>
  )
}

export default Button
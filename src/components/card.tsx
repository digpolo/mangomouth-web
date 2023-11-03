import React from 'react'
import Image from 'next/image'
type services = {
    id?: number
    alt: string
    src: string
    title: string
    description?: string
    ingredients?: string
    price?: string

};

interface CardProps {
    cardProduct: services;
}
const Card: React.FC<CardProps> = ({ cardProduct }) => {
    return (
        <div className='py-4 bg-[#FFF774]  flex flex-col rounded-xl'>
            <div className='flex items-center justify-center mx-4'>
                <Image
                    alt={cardProduct.alt}
                    src={cardProduct.src}
                    width={800}
                    height={300}
                />
            </div>
            <div className='mx-6'>
                <h3 className='font-medium text-lg pb-1 py-2'>{cardProduct.title}</h3>
                <h4>{cardProduct.description}</h4>
                <p>{cardProduct.ingredients}</p>
                <div className='flex items-center justify-center my-4'>
                    <h3 className=' w-20 h-20 text-center flex items-center justify-center rounded-full bg-[#FAEC03]'>{cardProduct.price}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card
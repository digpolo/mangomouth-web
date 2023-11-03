import React from 'react'
import Image from 'next/image'
type services = {
    id?: number
    alt: string
    src: string
    title: string
};

interface CardProps {
    cardProduct: services;
}
const FruitCard: React.FC<CardProps> = ({ cardProduct }) => {
    return (

        <div className=' '>
            <div className=''>
                <Image
                    alt={cardProduct.alt}
                    src={cardProduct.src}
                    width={100}
                    height={100}
                    className='w-32 h-32'
                />
            </div>
            <h3 className='font-medium text-xl py-4  bg-[#FFF774] rounded-xl w-40 text-center'>{cardProduct.title}</h3>
        </div>


    )
}

export default FruitCard
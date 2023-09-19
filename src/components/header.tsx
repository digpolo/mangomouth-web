import React from 'react'
import Button from './button'
import Image from 'next/image'
import NavBar from './nav-bar'

const Header = () => {
    return (
        <section className='h-screen px-4'>
            <NavBar />
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:h-auto'>
                <div className=' col-span-1 sm:h-screen sm:h-[calc(100vh-100px)] flex justify-center items-center'>
                    <div className='p-4 sm:p-8 w-full'>
                        <p className='text-white text-xl sm:text-4xl'>
                            Deliciosas fruta con pimienta, limón y sal
                        </p>
                        <div className='flex justify-start'>
                            <Button condition label="QUIERO MI MANGO MOUTH" />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 sm:h-[calc(100vh-100px)]">
                    <div className="h-full flex items-center justify-center pt-20 md:pt-0">
                        <Image
                            src='/hero-img.png'
                            alt="Dueño de un negocio planificando sus compras por adelantado"
                            className="object-contain max-h-full w-full"
                            width={1000}
                            height={1000}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header

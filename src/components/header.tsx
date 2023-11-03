'use client'
import { useState } from 'react'
import Button from './button'
import NavBar from './nav-bar'

const Header = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    return (
        <section className='h-screen px-4'>
            <NavBar />
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:h-auto'>
                <div className=' col-span-1 sm:h-screen sm:h-[calc(100vh-100px)] flex justify-center items-center'>
                    <div className='p-4 sm:p-8 w-full'>
                        <p className='font-medium text-xl  lg:text-6xl py-10  md:py-5'>
                            Disfruta de los sabores citricos mas ricos acompañados con pimienta limon y sal
                        </p>
                        <div className='flex justify-start py-10 md:py-5'>
                            <Button condition label="QUIERO MI MANGO MOUTH" href='https://wa.me/573136642915?text=Quiero%20comprar%20frutica%20picada%20con%20pimienta,%20limón%20y%20sal' />
                        </div>
                    </div>
                </div>
                <div className="col-span-1 sm:h-[calc(100vh-100px)]">
                    <div className=" flex items-center justify-center pt-0 md:pt-0 rounded-md">
                        <video autoPlay width="340" height="360" className='rounded-2xl' src='/video-hero.mp4'>
                            
                                
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header

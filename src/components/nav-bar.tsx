import React from 'react'
import Link from 'next/link';
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className='flex items-center justify-center bg-white p-5'>
            <Link href="/" className='shrink-0'>
                <Image src='/logo.svg' width={200} height={55} alt='logo mango mouth' />
            </Link>
        </div>
    )
}

export default NavBar
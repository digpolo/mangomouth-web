import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Button from './button';

const Footer = () => {
  return (
    
    <section className='bg-dark px-4 '>
      <div className='mx-auto grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-4'>
        <div className='flex flex-col items-center justify-center lg:items-start py-4 '>
          <Link href="/" className='shrink-0'>
            <Image src='/logo-yellow.svg' width={100} height={55} alt='logo mango mouth' />
          </Link>
          <p className={'text-xs text-light py-2 '}>Deliciosa fruta con pimienta, limón y sal</p>
        </div>
        <div className='flex flex-col items-start'>
          <h2 className='text-light py-3 font-semibold text-[16px]'>Cont&aacute;ctanos:</h2>
          <ul className='text-light gap-3 flex flex-col'>
            {/* <li>
              negocios@trespagos.com
            </li> */}
            <li >
              <Link href="https://www.instagram.com/mangomouthcol/" className='font-extralight'>
                Instagram
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-light py-3 font-semibold text-[16px]'>Quiero recibir atención personalizada:</p>
          <Button label='CONTACTARME' condition  href='https://wa.me/573136642915?text=Quiero%20comprar%20frutica%20picada%20con%20pimienta,%20limón%20y%20sal'/>
        </div>
        {/* <div>
          <h2 className='text-light py-3 font-semibold text-[16px] '>Informaci&oacute;n de inter&eacute;s</h2>
          <ul className='grid grid-cols-1 text-light  gap-3 flex justify-between'>
            <li><Link href="/Privacy/PrivacyPolicy">Política de privacidad</Link></li>
            <li><Link href="/Privacy/TermsAndConditions">Terminos y condiciones</Link></li>
            <li><Link href="/Privacy/Cookies">Politicas de cookies </Link></li>
          </ul>
        </div> */}
      </div>
      <div className='mx-auto text-xs text-light text-left max-w-5xl text-center py-2'>Todos los derechos reservados - mangomouthcol &copy; 2023</div>
    </section>
  )
}

export default Footer;
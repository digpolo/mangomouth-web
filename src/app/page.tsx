import Image from 'next/image'
import Header from './components/header'
import NavBar from './components/nav-bar'
import Dishes from './components/dishes'

export default function Home() {
  return (
    <div className='px-4'>
      <Header />
      <Dishes />
    </div>
  )
}

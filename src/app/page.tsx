import Header from '../components/header'
import Dishes from '../components/dishes'
import Fruit from '@/components/fruit'

export default function Home() {
  return (
    <div className='px-4'>
      <Header />
      <Dishes />
      <Fruit />
    </div>
  )
}

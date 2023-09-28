import Footer from '@/components/Footer'
import BottomHeader from '@/components/header/BottomHeader'
import Header from '../components/header/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <BottomHeader />
      <div className="py-10 bg-gray-100 "></div>
      <Footer />
    </main>
  )
}

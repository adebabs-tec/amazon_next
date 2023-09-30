import Banner from '../components/Banner'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Products from '@/components/Products'
import { ProductProps } from '../../type'

interface Props {
  productData: ProductProps
}
export default function Home({ productData }: Props) {
  console.log(productData)
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={productData} />
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://fakestoreapiserver.reactbd.com/tech')
  const productData = await res.json()
  return { props: { productData } }
}

import Image from 'next/image'
import { ProductProps } from '../../type'
import { FaHeart } from 'react-icons/fa'
import { HiShoppingCart } from 'react-icons/hi'

const Products = ({ productData }: any) => {
  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps) => {
          return (
            <div
              key={_id}
              className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden"
            >
              <div className="w-full h-[260px] relative">
                <Image
                  src={image}
                  alt="productImage"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                />
                <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 duration-300 transition-transform overflow-hidden">
                  <span className="w-full h-full border-b-[1px] border-b-gray-400 flex justify-center items-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                    <HiShoppingCart />
                  </span>
                  <span className="w-full h-full border-b-[1px] border-b-gray-400 flex justify-center items-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                    <FaHeart />
                  </span>
                </div>
              </div>
              <hr />c
            </div>
          )
        },
      )}
    </div>
  )
}

export default Products

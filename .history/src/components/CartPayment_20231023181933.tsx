import React, { useEffect, useState, useRef } from 'react'
import { SiMediamarkt } from 'react-icons/si'
import { useSelector } from 'react-redux'
import { StateProps, StoreProduct } from '../../type'
import SuccessPage from '../pages/SuccessPage'
import FormattedPrice from './FormattedPrice'
import axios from 'axios'
import PaystackButton from 'react-paystack'

const publicKey = process.env.NEXT_APP_PS_PUBLIC_TEST_KEY

const CartPayment = () => {
  const paystackRef = useRef<PaystackButton | null>(null)
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.next,
  )
  const [totalAmount, setTotalAmount] = useState(0)
  useEffect(() => {
    let amt = 0
    productData.map((item: StoreProduct) => {
      amt += item.price * item.quantity
      return amt
    })
    setTotalAmount(amt)
  }, [productData])

  const componentProps = {
    email: 'customer@email.com',
    totalAmount,
    metadata: {
      custom_fields: [
        {
          display_name: 'Product Name',
          variable_name: 'product_name',
          value: 'Sample Product',
        },
      ],
    },
  }

  const handlePaymentSuccess = (response: any) => {
    return <SuccessPage />
  }

  const handlePaymentClose = () => {
    alert('Thanks for shopping with us!')
  }

  const initiatePayment = () => {
    if (paystackRef.current) {
      paystackRef.current.handlePaystackPayment()
    }
  }

  function generateReference() {
    // You can generate a reference based on a timestamp or any other method
    return `ref_${Date.now()}`
  }

  const handleCheckout = async () => {}
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full p-1 w-6 h-6 text-sm text-white flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          Your order qualifies for FREE Shipping by choosing this option at
          checkout. See details....
        </p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total:{' '}
        <span className="font-bold text-xl">
          <FormattedPrice amount={totalAmount} />
        </span>
      </p>
      {userInfo ? (
        <div className="flex flex-col items-center">
          <button
            className="w-full h-10 text-sm font-semibold bg-amazon_blue text-white rounded-lg hover:bg-amazon_yellow hover:text-black"
            onClick={initiatePayment}
          >
            Proceed to Buy
          </button>
          <PaystackButton
            text="Make Payment"
            className="paystack-button"
            callback={handlePaymentSuccess}
            close={handlePaymentClose}
            disabled={false}
            embed={false}
            reference={generateReference()} // You can generate a unique reference for each payment
            email={componentProps.email}
            amount={componentProps.totalAmount}
            paystackkey={publicKey}
            ref={(ref) => (paystackRef.current = ref)}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button
            onClick={handleCheckout}
            className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed"
          >
            Proceed to Buy
          </button>
          <p className="text-xs mt-1 text-red-500 font-semibold animate-bounce">
            Please login to continue
          </p>
        </div>
      )}
    </div>
  )
}

export default CartPayment

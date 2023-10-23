import React from 'react'
import { PaystackButton } from 'react-paystack'

const PayButton = () => {
  const publicKey = process.env.NEXT_APP_PS_PUBLIC_TEST_KEY

  const componentProps = {
    email: 'customer@email.com',
    amount: 10000, // Amount in kobo
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

  //   const callback = (response) => {
  //     console.log(response) // Handle the payment response here
  //   }

  return (
    <PaystackButton
      text="Make Payment"
      //   class="paystack-button"
      //   callback={callback}
      //   close={callback}
      disabled={false}
      embed={false}
      //   reference={generateReference()} // You can generate a unique reference for each payment
      email={componentProps.email}
      amount={componentProps.amount}
      paystackkey={publicKey}
    />
  )
}

export default PayButton

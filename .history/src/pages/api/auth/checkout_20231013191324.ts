import { NextApiRequest, NextApiResponse } from 'next'
import { checkCustomRoutes } from 'next/dist/lib/load-custom-routes'
import { StoreProduct } from '../../../../type'

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const [items, email] = req.body
  const modifiedItems = items.map((item: StoreProduct) => ({
    quantity: item.quantity,
    price_data: {
      currency: 'usd',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        image: [item.image],
      },
    },
  }))
  // const session = await stripe.checkout.
}

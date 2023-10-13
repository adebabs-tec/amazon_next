import { NextApiRequest, NextApiResponse } from 'next'
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
      unit_amount: 
    },
  }))
}

import { NextApiRequest, NextApiResponse } from 'next'
import { StoreProduct } from '../../../../type'


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
}

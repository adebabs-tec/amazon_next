import { createSlice } from '@reduxjs/toolkit'
import { StoreProps } from '../../type'

interface NextState {
  productData: StoreProduct[]
}

const initialState = {
  productData: [],
  favoriteData: [],
  allProducts: [],
  userInfo: null,
}

export const nextSlice = createSlice({
  name: 'next',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: StoreProps) => item._id === action.payload,
      )
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity
      } else {
        state.productData.push(action.payload)
      }
    },
  },
})
export const { addToCart } = nextSlice.actions
export default nextSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { StoreProduct } from '../../type'

interface NextState {
  productData: StoreProduct[]
  favoriteData: StoreProduct[]
  allProducts: StoreProduct[]
  userInfo: null | string
}

const initialState: NextState = {
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
        (item: StoreProduct) => item._id === action.payload._id,
      )
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity
      } else {
        state.productData.push(action.payload)
      }
    },
    addFavorite: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item: StoreProduct) => item._id === action.payload._id,
      )
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity
      } else {
        state.favoriteData.push(action.payload)
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.favoriteData.find(
        (item: StoreProduct) => item._id === action.payload._id,
      )
    
  },
})
export const { addToCart } = nextSlice.actions
export default nextSlice.reducer

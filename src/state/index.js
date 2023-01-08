import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item]
      // const itemIndex = state.cart.findIndex(
      //   (item) => item.id === action.payload.id
      // )
      // if (itemIndex >= 0) {
      //   state.cart[itemIndex].count += 1
      // } else {
      //   const tempProduct = { ...action.payload.action, count: 1 }
      //   state.cart.push(tempProduct)
      // }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id)
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++
        }
        return item
      })
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--
        }
        return item
      })
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen
    },
  },
})

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions

export default cartSlice.reducer

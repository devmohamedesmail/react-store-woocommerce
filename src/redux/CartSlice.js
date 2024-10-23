import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    products: [],
}
export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddToCart: (state,action)=>{
        const product = state.products.find(item=>item.id === action.payload.id)
        !product && state.products.push(action.payload)
    },
    // increaseQuantity of the cart
    increaseCartQuantity :(state,action) => {
      const product = state.products.find(item => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      
      }
     
    },
    // decrase quantity of cart
    descreaseCartQuantity : (state,action)=>{
      const product = state.products.find(item=>item.id === action.payload)
      if(product){
        product.quantity -= 1;
      }
    },
    // remove product from cart
    removeproductfromcart:(state,action)=>{
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.payload)
      };
    }

  },
})


export const { AddToCart,increaseCartQuantity,descreaseCartQuantity,removeproductfromcart } = CartSlice.actions

export default CartSlice.reducer
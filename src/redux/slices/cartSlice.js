import {
    createSlice
} from "@reduxjs/toolkit"
import { toast } from "react-toastify";



const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    totalAmount: localStorage.getItem("totalAmount") ? JSON.parse(localStorage.getItem("totalAmount")) : 0,
    totalQuantity:  localStorage.getItem("totalQuantity") ? JSON.parse(localStorage.getItem("totalQuantity")) : 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(item => item.id === newItem.id)

            state.totalQuantity++
            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
                toast.success(`${newItem.productName} is added`,{
                    position: "top-left"
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
                toast.info(`Increased ${existingItem.productName} `,{
                    position: "top-left"
                })
            }
            
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0)

            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity))
           
        },
        deleteItem: (state, action) => {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id)
            if (existingItem) {
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
            state.totalAmount = state.cartItems.reduce((total, item) =>
                total + Number(item.price) * Number(item.quantity), 0

            )
           localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
           localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity))
            
        },
        deleteAllProduct: (state) =>{
            state.cartItems = []
            state.totalQuantity = 0
            state.totalAmount = 0;
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))
            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))
        }
       
    }
})

export const cartActions = cartSlice.actions

export default cartSlice.reducer
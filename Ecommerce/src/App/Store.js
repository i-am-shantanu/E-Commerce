import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from '../Features/ProductSlice'
import CartSlice from '../Features/CartSlice'
import HomeSlice from '../Features/HomeSlice'

const store = configureStore({

    reducer:{
        products :ProductSlice,
        cart:CartSlice,
        home:HomeSlice
    }
})

export default store
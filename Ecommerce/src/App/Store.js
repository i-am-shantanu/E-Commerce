import {configureStore} from '@reduxjs/toolkit'
import ProductSlice from '../Features/ProductSlice'
import CartSlice from '../Features/CartSlice'

const store = configureStore({

    reducer:{
        products :ProductSlice,
        cart:CartSlice
    }
})

export default store
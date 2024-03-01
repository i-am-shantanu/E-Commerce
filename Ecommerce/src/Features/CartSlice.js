import { createSlice } from "@reduxjs/toolkit";

const initialState={
    
    items:[],
    total:0

    // dummy items 
    // {
    //     quantity:1,
    //     product:{
    //         url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/face-wash-400x400.jpg",
    //         category:"Groceries",
    //         name:"Organic Face Scrub",
    //         price:"350",
    //         description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cupiditate perspiciatis. Maiores vitae, tenetur, eligendi id nulla autem, maxime sequi totam nostrum quae delectus! Quod, temporibus. Cumque neque nobis deleniti.",
    //         reviewList:[],
    //         id:'7'
    //     }
    // }
}

export const CartSlice=createSlice(
    {
        name:'cart',
        initialState,
        reducers :{

            addItems : (state,action) => {

                function checkItemInCart(obj)
                {
                    return action.payload.product.id===obj.product.id;
                }

                if(typeof state.items.find(checkItemInCart) !== typeof undefined)
                {
                    state.items=state.items.map((obj)=>{

                        if(obj.product.id!=action.payload.product.id)
                        return obj;
                        else
                        return {...obj,quantity:obj.quantity+action.payload.quantity};
                    

                    })
                }
                else
                state.items.push(action.payload);

            }



        }
    }
)

export const{addItems}=CartSlice.actions;
export default CartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    trendingProducts :[{
        url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted.jpg",
        category:"Groceries",
        name:"Assorted Coffee",
        price:"350",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cupiditate perspiciatis. Maiores vitae, tenetur, eligendi id nulla autem, maxime sequi totam nostrum quae delectus! Quod, temporibus. Cumque neque nobis deleniti.",
        reviewList:[],
        id:'10'
    },
    {
        url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500.jpg",
        category:"Groceries",
        name:"Cashew Butter",
        price:"250",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cupiditate perspiciatis. Maiores vitae, tenetur, eligendi id nulla autem, maxime sequi totam nostrum quae delectus! Quod, temporibus. Cumque neque nobis deleniti.",
        reviewList:[],
        id:'11'
    },
    {
        url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-400x400.jpg",
        category:"Groceries",
        name:"Diabetic Cookies",
        price:"250",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cupiditate perspiciatis. Maiores vitae, tenetur, eligendi id nulla autem, maxime sequi totam nostrum quae delectus! Quod, temporibus. Cumque neque nobis deleniti.",
        reviewList:[],
        id:'12'
    },
    {
        url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/eggs-400x400.jpg",
        category:"Groceries",
        name:"Farm Fresh Eggs",
        price:"340",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cupiditate perspiciatis. Maiores vitae, tenetur, eligendi id nulla autem, maxime sequi totam nostrum quae delectus! Quod, temporibus. Cumque neque nobis deleniti.",
        reviewList:[],
        id:'1'
    }],
    bestSellingProducts :[{
        url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-400x400.jpg",
        category:"Groceries",
        name:"Fresh Organic Honey",
        price:"340",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cupiditate perspiciatis. Maiores vitae, tenetur, eligendi id nulla autem, maxime sequi totam nostrum quae delectus! Quod, temporibus. Cumque neque nobis deleniti.",
        reviewList:[],
        id:'3'
    },
    {
        url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-400x400.jpg",
        category:"Groceries",
        name:"Hand Sanitizer",
        price:"150",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cupiditate perspiciatis. Maiores vitae, tenetur, eligendi id nulla autem, maxime sequi totam nostrum quae delectus! Quod, temporibus. Cumque neque nobis deleniti.",
        reviewList:[],
        id:'4'
    },
    {
        url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-400x400.jpg",
        category:"Groceries",
        name:"Hand Picked Red Chillies",
        price:"190",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cupiditate perspiciatis. Maiores vitae, tenetur, eligendi id nulla autem, maxime sequi totam nostrum quae delectus! Quod, temporibus. Cumque neque nobis deleniti.",
        reviewList:[],
        id:'5'
    },
    {
        url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-400x400.jpg",
        category:"Groceries",
        name:"Natural Extracted Edible Oil",
        price:"250",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cupiditate perspiciatis. Maiores vitae, tenetur, eligendi id nulla autem, maxime sequi totam nostrum quae delectus! Quod, temporibus. Cumque neque nobis deleniti.",
        reviewList:[],
        id:'6'
    }
 ]
}

export const HomeSlice = createSlice(
    {
        name:'home',
        initialState,
        reducers :{

            updateTrendingProducts : (state,action)=>{

                state.trendingProducts=[...action.payload]
            },
            updateBestSellingProducts : (state,action)=>{

                state.bestSellingProducts=[...action.payload]
            }
        }
    }
)

export const {updateBestSellingProducts,updateTrendingProducts}=HomeSlice.actions
export default HomeSlice.reducer
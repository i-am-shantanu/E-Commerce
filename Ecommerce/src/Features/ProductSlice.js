import { createSlice,current,nanoid } from "@reduxjs/toolkit";

const products=[{
    url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted.jpg",
    category:"Groceries",
    name:"Assorted Coffee",
    price:"350",
    id:nanoid()
},
{
    url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/cashew-butter-500.jpg",
    category:"Groceries",
    name:"Cashew Butter",
    price:"250",
    id:nanoid()
},
{
    url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/diabetic-cookies-400x400.jpg",
    category:"Groceries",
    name:"Diabetic Cookies",
    price:"250",
    id:nanoid()
},
{
    url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/eggs-400x400.jpg",
    category:"Groceries",
    name:"Farm Fresh Eggs",
    price:"340",
    id:nanoid()
},
{
    url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/orage-juice-kariz-400x400.jpg",
    category:"Juice",
    name:"Fresh Orange Juice",
    price:"180",
    id:nanoid()
},
{
    url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/organic-honey-400x400.jpg",
    category:"Groceries",
    name:"Fresh Organic Honey",
    price:"340",
    id:nanoid()
},
{
    url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/sanitizer-400x400.jpg",
    category:"Groceries",
    name:"Hand Sanitizer",
    price:"150",
    id:nanoid()
},
{
    url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/red-chillies-400x400.jpg",
    category:"Groceries",
    name:"Hand Picked Red Chillies",
    price:"190",
    id:nanoid()
},
{
    url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-400x400.jpg",
    category:"Groceries",
    name:"Natural Extracted Edible Oil",
    price:"250",
    id:nanoid()
},
{
    url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/face-wash-400x400.jpg",
    category:"Groceries",
    name:"Organic Face Scrub",
    price:"350",
    id:nanoid()
},
{
    url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/pulses-400x400.jpg",
    category:"Groceries",
    name:"Pulses from Organic Farm",
    price:"150",
    id:nanoid()
},
{
    url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/wheat-400x400.jpg",
    category:"Groceries",
    name:"Wheat from Organic Farm",
    price:"340",
    id:nanoid()
}
]

const initialState={
    products:products,
    currentProducts:products
}

export const ProductSlice=createSlice({
    name:'Product',
    initialState,
    reducers :{
        
        performFilter :(state,action) =>{

            //functionality to perform filter on the list of items
            state.currentProducts=state.products.filter((obj)=>{
                if(action.payload.category==='all')
                return(obj.price<=action.payload.maxprice)
                else
                return ((obj.category===action.payload.category) && (obj.price<=action.payload.maxprice))
            })
            
        },

        searchProducts :(state,action) =>{

            //Update items on the basis of search keywords
            console.log('fired')
            let {category,text}=action.payload
            state.currentProducts=products.filter((obj)=>{
                if(category==='all')
                return(obj.name.toLowerCase().includes(text.toLowerCase()))
                else 
                return((obj.category===category)&&(obj.name.toLowerCase().includes(text.toLowerCase())));
            })
        },

        sortProducts :(state,action) =>{

            //rearrange current product array according to user input

            if(action.payload=="ascending")
            state.currentProducts.sort((obj1,obj2)=>Number(obj1.price)-Number(obj2.price))
            else
            state.currentProducts.sort((obj1,obj2)=>Number(obj2.price)-Number(obj1.price))
        },

        setCurrentByCategory :(state,action)=>{

            if(action.payload==='all')
            state.currentProducts=state.products;
            
            else 
            state.currentProducts=state.products.filter((obj)=>obj.category===action.payload)
        }
    }
})

export const {performFilter,searchProducts,sortProducts,setCurrentByCategory}=ProductSlice.actions

export default ProductSlice.reducer
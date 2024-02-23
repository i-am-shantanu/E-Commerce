import './ProductDetails.css'
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {  useParams } from "react-router-dom"

function ProductDetails(){
const {id}=useParams()
console.log(typeof id)
const currentProducts=useSelector(state=>state.products.products)
console.log(currentProducts)
let [target]=currentProducts.filter((obj)=>obj.id===id);

const [input,setInput]=useState(1);
console.log(target);
const buttonStyle={width:'250px',borderRadius:'15px',backgroundColor:'green',color:'white',padding:'5px',fontSize:'larger',marginBottom:'15px'};

useEffect(
    ()=>{
        console.log(input);
    },
    [input]
)

function handleAddToCart(e)
{
    //implement functionality to add specified amount of items to the cart
}
    return(
    <>
    <div className="ProductDetails-container">
    <div className="box1">
        <div className="product-image">
        <img src={target.url} style={{height:'500px'}}/>
        </div>
        <div className="product-details">
        <h1 style={{fontSize:'25pt'}}>{target.name}</h1>
        <h2 style={{color:'grey'}}>Price : Rs. {target.price} </h2>
        <p style={{fontSize:'large',fontFamily:'cursive'}}>{target.description}</p>
        <div className="button"><input style={{width:'30px',height:'30px',marginRight:'15px'}} value={input} onChange={(e)=>{setInput(Number(e.target.value))}}/>
        <button style={buttonStyle} onClick={handleAddToCart}>Add to Cart</button>
        </div>
        <hr/>
        <p style={{fontSize:'large',fontFamily:'cursive'}}>Categories : {target.category}</p>
        </div>
    </div>
    <div className="review">
        
    </div>
    </div>
    </>
    )
}

export default ProductDetails


 
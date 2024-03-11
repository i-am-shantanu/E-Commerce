import './ProductDetails.css'
import { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {  useParams } from "react-router-dom"
import { addReview } from '../Features/ProductSlice'
import profile from '../assets/_avatar.jpg'
import { addItems } from '../Features/CartSlice'


function ProductDetails(){
const {id}=useParams()

const currentProducts=useSelector(state=>state.products.products)

let [target]=currentProducts.filter((obj)=>obj.id===id);

const cart=useSelector(state=>state.cart.items);
const [input,setInput]=useState(1);
const [review,setReview]=useState("");
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [message,setMessage]=useState("");

const buttonStyle={width:'250px',borderRadius:'15px',backgroundColor:'green',color:'white',padding:'5px',fontSize:'larger',marginBottom:'15px'};

useEffect(()=>{

    
    console.log(cart);

},[cart])
useEffect(()=>{
    console.log("rendered");
},[]);
const dispatch=useDispatch();
const handlesubmit =useCallback(
    (e)=>
{
    
    dispatch(
        addReview(
            {
                id,
                name,
                review,
                email
            }
        )
    );
    setName("");
    setEmail("");
    setReview("");

}
,[id,name,review,email]
)
const handleAddToCart=useCallback(
    ()=>{

        const obj = {
            quantity:input,
            product:{
                ...target
            }
        }
    
        dispatch(addItems(obj));
        setInput(1);
        setMessage("Item added to cart!");
        setTimeout(()=>{
            setMessage("");
        },5000)
    
    },
    [input]
)


    return(
    <>
    <div className="ProductDetails-container">
    <div className="message">
                <h2>{message}</h2>
    </div>
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
            <hr/>
            <div style={{fontSize:'25pt',textAlign:'center'}}>Reviews</div>
            {
                target.reviewList.map(
                    (review)=>{
                        
                        const ele=
                        (                    <div className="card" key={new Date().getTime()}>
                                                <img src={profile} style={{height:'55px',borderRadius:'50%',marginRight:'15px'}}/>
                                                <div>
                                                    <div className="name">{review.name}</div>
                                                    <div className="email">{review.email}</div>
                                                    <div className="content">{review.review}</div>
                                                </div>
                
                                            </div>)
                
                                            return ele;
                    }
                )
            }


        <div className="add-review">
            <div style={{fontSize:'20pt'}}>Add a review</div>
            <div>
                <div style={{fontSize:'15pt'}}>Your Review *</div>
                <input style={{width:'100%',height:'50px',marginTop:'10px'}} value={review} onChange={(e)=>(setReview(e.target.value))}/>
            </div>
            <div>
                <div style={{fontSize:'15pt'}}>Name *</div>
                <input style={{width:'30%',height:'30px',marginTop:'10px'}} value={name} onChange={(e)=>(setName(e.target.value))}/>
            </div>
            <div>
                <div style={{fontSize:'15pt'}}>Email *</div>
                <input style={{width:'40%',height:'30px',marginTop:'10px'}} value={email} onChange={(e)=>(setEmail(e.target.value))}/>
            </div>
            <div>
                <button style={{backgroundColor:'green',color:'white',borderRadius:'5px',height:'30px',width:'80px'}} onClick={handlesubmit}>Submit</button>
            </div>
        </div>
    </div>
</div>
</>

    )
}

export default ProductDetails


 
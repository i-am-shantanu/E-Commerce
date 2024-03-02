import './Cart.css'

import { useSelector,useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

function Cart(){

    const cartItems= useSelector(state => state.cart.items);
    const total=useSelector(state=>state.cart.total);

    console.log(cartItems);
    console.log(total);

    if(cartItems.length)
    return(
        // when the cart has valid items
        <>
        
        </>
    )

    else
    return(
        
        //when the cart is empty
        <>
            <div className="empty-cart">

                <h1>Cart</h1>
                <div className='box'>
                <div>Your cart is empty !!</div>
                <Link to ='/everything'> <button>Start Shopping</button> </Link>
                
                </div>
                
                
            </div>
        </>
        )
}
export default Cart
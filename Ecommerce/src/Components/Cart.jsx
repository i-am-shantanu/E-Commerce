import './Cart.css'
import trash from '../assets/trash.svg'
import { useSelector,useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { incrementCartItem, removeCartItem, decrementCartItem } from '../Features/CartSlice';

function Cart(){

    const cartItems= useSelector(state => state.cart.items);
    const total=useSelector(state=>state.cart.total);

    console.log(cartItems);
    console.log(total);

    const dispatch=useDispatch();

    function incrementQuantity(e){

        // implement function to increment the quantity of the target stock ny 1
        console.log(e.target.parentElement.parentElement.id);
        dispatch(incrementCartItem(e.target.parentElement.parentElement.id));
    }

    function decrementQuantity(e){

        const id=e.target.parentElement.parentElement.id;

        for(let i=0;i<cartItems.length;i++)
        {
            if(cartItems[i].product.id!=id)
            continue;
            
            else{

                if(cartItems[i].quantity>1)
                dispatch(decrementCartItem(id));
                else
                dispatch(removeCartItem(id));
                break;
            }
        }
    }

    function removeItem(e)
    {
        dispatch(removeCartItem(e.target.parentElement.parentElement.id));
    }

    if(cartItems.length)
    return(
        // when the cart has valid items
        <>
        <div className="cart-container">
            <h1 className='cart-heading'>Cart</h1>
            <table>
            <tbody>
            <tr>
                    <th style={{width:'50%'}}>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                {
                    cartItems.map((obj)=>{
                        
                        const element = (
                            <tr key={obj.product.id} id={obj.product.id}>
                                <td className='pr-cell'>
                                    <img src={trash} height={'25px'} onClick={removeItem}/>
                                    <img src={obj.product.url} style={{height:'100px'}}/>
                                    {obj.product.name}
                                </td>
                                <td className='price-cell'>
                                    Rs. {obj.product.price}
                                </td>
                                <td className='quantity-cell'>
                                    <button style={{width:'25px'}} onClick={incrementQuantity}>+</button>
                                    <input type='text' value={obj.quantity} readOnly style={{width:'20px'}}/>
                                    <button style={{width:'25px'}} onClick={decrementQuantity}>-</button>
                                </td>
                                <td className='subtotal-cell'>
                                    {obj.quantity*Number(obj.product.price)}
                                </td>
                            </tr>
                        )
                        return element
                    })
                }
            </tbody>
            </table>
        </div>
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
import './Everything.css'
import { useState } from "react";
import { useSelector } from "react-redux";

function Everything(){

    const[rangeMax,setRangeMax]=useState(400)
    const products=useSelector(state=>state.products.currentProducts)


    console.log(products);


    return(
        <>
        <div className="everything-container">
        <div className="left">
            <form >
                <input placeholder='Search Products...'></input>
                <button>Search</button>
            </form>

            <div className="filter">
                <h3 style={{color:'green'}}>Filter By price</h3>
                <input type='range' defaultValue={400} min={100} max={400} style={{accentColor:'Green'}} value={rangeMax} onChange={(e)=>{setRangeMax(Number(e.target.value))}}/>
            </div>

            <div className='sorting'>
                <select>
                    <option>Default Sorting</option>
                    <option value='ascending'>Price : Low to High</option>
                    <option value='descending'>Price :High to low</option>
                </select>
            </div>
        </div>
        <div className="right">
        
        </div>
        </div>

        </>
    )
}
export default Everything
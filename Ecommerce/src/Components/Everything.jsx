import './Everything.css'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from '../Utility_Components/SearchBar';

function Everything(){

    const[rangeMax,setRangeMax]=useState(400)
    const[searchValue,setSearchValue]=useState("")      //state variable to track the input in search bar
    const products=useSelector(state=>state.products.currentProducts)

    console.log("rendered");

    useEffect(()=>{console.log("invoked!!")},[]);

    function handleSearch(e){
        e.preventDefault();
        console.log(searchValue);
    }

    function handleSlider(e){
        setRangeMax(Number(e.target.value));
        console.log(Number(e.target.value));
    }

    function handleSelector(e){
        console.log(e.target.value);
    }
    return(
        <>
        <div className="everything-container">
        <div className="left">
            <div>
                <SearchBar/>
            </div>

            <div className="filter">
                <h3 style={{color:'green'}}>Filter By price</h3>
                <input type='range' min={100} max={400} style={{accentColor:'Green'}} value={rangeMax} onChange={(e)=>{handleSlider(e)}}/>
            </div>

            <div className='sorting' onChange={handleSelector}>
                <select>
                    <option value='default'>Default Sorting</option>
                    <option value='ascending'>Price : Low to High</option>
                    <option value='descending'>Price :High to low</option>
                </select>
            </div>
        </div>
        <div className="right" >
        </div>
        </div>

        </>
    )
}
export default Everything
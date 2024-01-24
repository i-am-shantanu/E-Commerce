import { useState } from "react";
import { useSelector } from "react-redux";

function Everything(){

    const products=useSelector(state=>state.products.currentProducts)


    console.log(products);


    return(
        <>

        </>
    )
}
export default Everything
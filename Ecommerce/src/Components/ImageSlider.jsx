import { useEffect, useState } from "react"

function ImageSlider({images}){
const [count,setCount]=useState(0)
const[url,setUrl]=useState(null)


useEffect(()=>{
    setUrl(images[count].url)
},[count])

function goBack(){

    if(count===0)
    setCount(images.length-1);
    else
    setCount(prev=>(prev-1))

}
const targetdiv={
    width:'100%',
    height:'100%',
    backgroundImage:`url(${url})`,
    backgroundSize:`100% 100%`
}

function goNext(){
    setCount(prev=>((prev+1)%images.length))
}

useEffect(()=>{

    const interval=setInterval(()=>{
        goNext();
    },2000)

    return ()=>clearInterval(interval)
},[count])


    return(
        <>
        <div style={targetdiv}>
            <button onClick={goBack}>Previous</button>
            <button onClick={goNext}>Next</button>
        </div>
        </>
    )
}
export default ImageSlider
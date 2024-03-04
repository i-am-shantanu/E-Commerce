import './Home.css'
import cart from '../assets/cart3.svg'
function Home(){

    const buttonStyle={
        width:'200px',
        height:'50px',
        backgroundColor:'#6a9739',
        color:'white',
        borderRadius:'5px',
        fontSize:'20px',
        border:'none',
        
    }
    return(
        <>
        <div className="home-container">
            <div className="hero-image">
                <div className="content">
                    <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png'/>
                    <div style={{fontSize:'20px',fontWeight:'bold'}}>Best Quality Products</div>
                    <div style={{fontSize:'60px',fontWeight:'bold'}}>Join the Organic Movement!</div>
                    <div style={{fontSize:'20px',color:'grey'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut animi tenetur, distinctio fuga quia deserunt earum.</div>
                    <button style={buttonStyle}>
                    Shop Now</button>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Home
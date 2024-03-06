import './Home.css'
import truck from'../assets/truck.svg'
import money from '../assets/cash-coin.svg'
import recycle from '../assets/recycle.svg'
import check from '../assets/patch-check-fill.svg'
import { useSelector } from "react-redux"
function Home(){

    const trendingProducts = useSelector(state=>state.home.trendingProducts);
    const bestSellingProducts = useSelector(state=>state.home.bestSellingProducts);

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
            <div className="banner">
                <div className='card'>
                    <img src={truck}/>
                    <div className='main'>Free Shipping</div>
                    <div>Avove $5 only</div>
                </div>
                <div className="card">
                    <img src={check}/>
                    <div className='main'>Certified Organic</div>
                    <div>!00% Gauranteed</div>
                </div>
                <div className='card'>
                    <img src={money}/>
                    <div className='main'>Huge Savings</div>
                    <div>At Lowest Price</div>

                </div>
                <div className="card">

                    <img src={recycle} />
                    <div className='main'>Easy Returns</div>
                    <div>No questions asked</div>
                </div>
            </div>
            <div className="heading">
                <div>Best Selling Products</div>
                <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png'/>
            </div>
            <div className="products">
                {
                    bestSellingProducts.map((obj)=>{
                        const ele =(
                            <div className="card" key={obj.id}>
                                <img src={obj.url}/>
                                <div className="category">{obj.category}</div>
                                <div className="name">{obj.name}</div>
                                <div className="price">Rs. {obj.price}</div>
                            </div>
                        )
                        return ele;
                    })
                }
                
                
            </div>
        </div>
        </>
    )
}
export default Home

// {
//     url:"https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/edible-oil-400x400.jpg",
//     category:"Groceries",
//     name:"Natural Extracted Edible Oil",
//     price:"250",
//     description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cupiditate perspiciatis. Maiores vitae, tenetur, eligendi id nulla autem, maxime sequi totam nostrum quae delectus! Quod, temporibus. Cumque neque nobis deleniti.",
//     reviewList:[],
//     id:'6'
// }
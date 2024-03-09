import './Home.css'
import truck from'../assets/truck.svg'
import money from '../assets/cash-coin.svg'
import recycle from '../assets/recycle.svg'
import check from '../assets/patch-check-fill.svg'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';

function Home(){

    const trendingProducts = useSelector(state=>state.home.trendingProducts);
    const bestSellingProducts = useSelector(state=>state.home.bestSellingProducts);

    function handleclick()
    {
        console.log('fired')
        document.getElementById('main').scrollIntoView();
    }
    return(
        <>
        <div className="home-container">
            <div className="hero-image" id='main'>
                <div className="content">
                    <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png'/>
                    <div style={{fontSize:'20px',fontWeight:'bold'}}>Best Quality Products</div>
                    <div style={{fontSize:'60px',fontWeight:'bold'}}>Join the Organic Movement!</div>
                    <div style={{fontSize:'20px',color:'grey'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut animi tenetur, distinctio fuga quia deserunt earum.</div>
                    <button >
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
                    <div>100% Gauranteed</div>
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
                            <Link to={obj.id} key={obj.id}>
                            <div className="card" >
                                <img src={obj.url}/>
                                <div className="category">{obj.category}</div>
                                <div className="name">{obj.name}</div>
                                <div className="price">Rs. {obj.price}</div>
                            </div>
                            </Link>
                        )
                        return ele;
                    })
                }
                
                
            </div>
            <div className='leaf'>
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png"/>
            </div>
            <div className="links">
                <div className="card lemon">
                    <div className='title'>Farm Fresh Fruits</div>
                    <div >Ut sollicitudin quam vel purus tempus, vel eleifend felis varius.</div>
                    <button onClick={handleclick}>Shop Now</button>
                </div>
                <div className="card lettuce">
                    <div className='title'>Fresh Vegetables</div>
                    <div>Aliquam porta justo nibh, id laoreet sapien sodales vitae justo.</div>
                    <button onClick={handleclick}>Shop Now</button>
                </div>
                <div className="card grams">
                    <div className='title'>Fresh Legumes</div>
                    <div>Phasellus sed urna mattis, viverra libero sed, aliquam est.</div>
                    <button onClick={handleclick}>Shop Now</button>
                </div>

            </div>
            <div className="banner2">
                <div>Get 25% off on your first Purchase!</div>
                <button onClick={handleclick}>Shop Now</button>
            </div>
            <div className="heading" style={{padding:'20px 0px',backgroundColor:'#f8f5f4',fontSize:'30px',marginBottom:'100px'}}>
                <div>Try It For Free. No Registration Needed</div>
            </div>
            <div className="heading">
                <div>Trending Products</div>
                <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png'/>
            </div>
            <div className="products">
                {
                    trendingProducts.map((obj)=>{
                        const ele =(
                            <Link to={obj.id} key={obj.id}>
                            <div className="card">
                                <img src={obj.url}/>
                                <div className="category">{obj.category}</div>
                                <div className="name">{obj.name}</div>
                                <div className="price">Rs. {obj.price}</div>
                            </div>
                            </Link>
                            
                        )
                        return ele;
                    })
                }
                
                
            </div>
            <div className="heading">
                <div>Customers Reviews</div>
                <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/logo-leaf-new.png'/>
            </div>

            <div className="reviews">
                <div className="links reviewLinks">
                    <div className="card ">
                        <div className='text'>
                        Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </div>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',padding:'0px 25px',minWidth:'200px'}}>
                        <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client02-free-img.png" />
                        -Miley Cirus
                        </div>
                        
                    </div>
                    <div className="card background">
                        <div className="target">
                        <h1>Deal of the Day
                        25% off on all vegetables!
                        </h1>
                        <h3> Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h3>
                        <button style={{width:'200px'}} onClick={handleclick}>Shop Now {" >>"}</button>
                        </div>
                    
                    </div>
                    <div className="card">
                        <div className='text'>Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</div>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'space-around',padding:'0px 25px',minWidth:'200px'}}>
                        <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/client01-free-img.png'/>
                        -Mike Sendler

                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <div className="featured-brands">
                <h2>Featured Brands :</h2>
                <img src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-4.svg'/>
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-5.svg" />
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-2.svg" />
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-3.svg" />
                <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/logo-1.svg"  />
            </div>
        </div>
        </>
    )
}
export default Home


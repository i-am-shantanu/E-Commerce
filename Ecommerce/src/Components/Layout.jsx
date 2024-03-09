import'./Layout.css'
import logo from '../assets/organic-store-logo5.svg'
import cart from '../assets/cart3.svg'
import { NavLink,Outlet } from 'react-router-dom';
function Layout(){

    return(
        <>
        <header>
        <div className="navbar">
           
           <div className="left">
                <NavLink to='/'><img src={logo} style={{height:'70px'}}/></NavLink>
                <NavLink to='everything'><h3>Everything</h3></NavLink>
                <NavLink to='groceries'><h3>Groceries</h3></NavLink>
                <NavLink to='juice'><h3>Juice</h3></NavLink> 
           </div>
           <div className="right">
                <NavLink to='about'><h3>About</h3></NavLink>
                <NavLink to='contact'><h3>Contact</h3></NavLink>  
                <NavLink to='cart'><img src={cart} style={{height:'20px'}}/></NavLink>
           </div>
        </div>
        </header>
        <main style={{backgroundColor: "#f8f6f3"}}>
            <Outlet/>
        </main>
        <footer>
            <div className="footers">
                <div className="left">
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png"/>
                    <h3>
                    Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.
                    </h3>
                </div>
                <div className="middle">
                    <h2>QuickLinks</h2>
                    <div ><NavLink to='about' style={{color:'#ffffffa8'}}>About</NavLink></div>
                    <div><NavLink to='cart' style={{color:'#ffffffa8'}}>Cart</NavLink></div>
                    <div>CheckOut</div>
                    <div><NavLink to='contact' style={{color:'#ffffffa8'}}>Contact</NavLink></div>
                    <div><NavLink to='/' style={{color:'#ffffffa8'}}>Home</NavLink></div>
                    <div>My Account</div>
                    <div><NavLink to='everything' style={{color:'#ffffffa8'}}>Shop</NavLink></div>
                    <div style={{height:'30px'}}></div>
                    <h2>SiteLinks</h2>
                    <div>Privacy Policy</div>
                    <div>Shipping Details</div>
                    <div>Offers Coupon</div>
                    <div>Terms & Condition</div>
                </div>
                <div className="right">
                    <h2>Download Our Mobile App</h2>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.</div>
                    <div style={{height:'50px'}}></div>
                    <h2>QuickLinks</h2>
                    <div>Know More About Us</div>
                    <div>Visit Stores</div>
                    <div>Let's Connect</div>
                    <div>Locate Stores</div>
                    <div style={{height:'20px'}}></div>
                    <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/play-store.png" height='35px'/>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Layout;


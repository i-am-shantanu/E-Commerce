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
        </>
    )
}

export default Layout;


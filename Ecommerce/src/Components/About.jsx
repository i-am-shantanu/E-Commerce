import './About.css'
import grapes from '../assets/banner-01.jpg'
import CountUp from 'react-countup'
import { Slide } from 'react-slideshow-image';
import Profile from '../assets/profile.jpg'
import cart from '../assets/cart3.svg'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize:'400px 400px',
    backgroundRepeat: "no-repeat",
    height:'400px',
    width:'300px',
    backgroundColor:'red',
    borderRadius:'15px'
  }
  const slideImages = [
    {
      url: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/farming04-free-img-o9xdxvnzch1gu353cc71s2fv9hgs2o8e1ubsjmmia0.jpg'
    },
    {
      url: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/image-02-ok9thlk7f88j35jeicf161gqa3zxv2i1l1ldi2gemg.jpg'
    },
    {
      url: 'https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/elementor/thumbs/farming03-free-img-o9vzqvrix9ebgtwlxr5iwk27s1xblzkum1b4ivvlzc.jpg'
    },
  ];

function About(){




    return(
        <>
        <div className="about-container">
            <div className="heading">
                <h1>About us</h1>
            </div>
            <div className="text-box1">
                <div className="left">
                    <h1>We Are Your Favourite Store</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos et corrupti provident vitae obcaecati ipsam quas sed voluptatem voluptatibus temporibus harum voluptate, illo nam optio a praesentium. Magni, quisquam? Voluptate!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sequi excepturi dolorem animi libero maxime! Exercitationem sit similique porro a vitae non odio itaque optio eveniet, distinctio dolores numquam eaque.
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident blanditiis magnam, autem quaerat hic minima eveniet accusantium impedit veritatis voluptatibus ducimus, ab esse quam, quidem culpa consectetur quas delectus eum!
                    </p>
                </div>
                <div className="right">
                    <img src={grapes} style={{height:'350px',borderRadius:'15px'}}/>
                </div>
            </div>
            <div className="stats">
                <div className="item">Number Speak For Themselves</div>
                <div className="item"><CountUp start={0} end={5000} duration={10} /> +<div style={{fontSize:'15pt'}}>Curated Products</div></div>
                <div className="item"><CountUp start={0} end={800} duration={10} /> +<div style={{fontSize:'15pt'}}>Product Categories</div></div>
                <div className="item"><CountUp start={0} end={40} duration={10} /> +<div style={{fontSize:'15pt'}}>Offline Stores</div></div>
            </div>
            <div className="review">
            <div className="slide-background">
                <div className="slide-container">
                    <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div key={index}>
                        <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                        </div>
                        </div>
                    ))} 
                    </Slide>

                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo nam nemo ratione natus ipsa amet consectetur tenetur.
                    </p>
                    <img src={Profile} style={{height:'70px',borderRadius:'100%',float:'left',marginRight:'20px'}}/>
                    <p style={{paddingTop:'25px'}}>Shantanu Mishra</p>
                </div>
            </div>

            <button><img src={cart} height={'30px'}/>Start Shopping</button>

            </div>
        </div>


        </>
    )
}
export default About
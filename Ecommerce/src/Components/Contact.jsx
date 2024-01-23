import Collapsible from "../Utility_Components/Collapsible"
import './Contact.css'
import telephone from'../assets/telephone-fill.svg'
import location from'../assets/geo-alt.svg'
import envelope from '../assets/envelope.svg'

const faq =[{
    title:'Pulvinar nostrud class cum facilis?',
    text:'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
},
{
    title:'Pulvinar nostrud class cum facilis?',
    text:'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
},
{
    title:'Pulvinar nostrud class cum facilis?',
    text:'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
},
{
    title:'Pulvinar nostrud class cum facilis?',
    text:'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
},
{
    title:'Pulvinar nostrud class cum facilis?',
    text:'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
},
{
    title:'Pulvinar nostrud class cum facilis?',
    text:'I am item content. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar leo.'
}]

function Contact(){

    return(
        <>
        <div className="contact-container">
            <div className="title">
                <h1>Get in Touch </h1>
            </div>
            <div className="details">
                <div className="phone">
                    <img src={telephone}/>
                    <div>+123 456 7890</div>
                    <div>+321 654 9874</div>
                </div>
                <div className="email">
                    <img src={envelope}/>
                    <div>info@example.com</div>
                    <div>support@example.com</div>
                </div>
                <div className="addrs">
                    <img src={location}/>
                    <div>1596 AVE New York</div>
                    <div>NY 10028 USA</div>
                </div>
            </div>
            <div className="title" style={{marginTop:'100px',fontSize:'15pt'}}>
                <h1>Frequently Asked Questions !!</h1>
            </div>
            <div className="collapsible-container">
            <div className="item">
                <Collapsible content={faq[0]} containerWidth="25vw"/>
                <Collapsible content={faq[1]} containerWidth="25vw"/>
                <Collapsible content={faq[2]} containerWidth="25vw"/>
            </div>
            <div className='item'>
                <Collapsible content={faq[0]} containerWidth="25vw"/>
                <Collapsible content={faq[1]} containerWidth="25vw"/>
                <Collapsible content={faq[2]} containerWidth="25vw"/>
            </div>
            </div>
            
            
        </div>
    
        </>
    )
}
export default Contact
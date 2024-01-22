
import {useState} from 'react'
function Collapsible(
    {
        content,
        contentHeight = '200px',
        containerWidth='35vw'
    }
)
{
    const [height,setHeight]=useState('0')
    function handleClick(){
        if(height==='0')
        setHeight(contentHeight);
        else
        setHeight('0');
    }

    const collapsibleContainerStyle={
        width:containerWidth,
    };
    const buttonStyle={
        width:'100%',
        border:'none',
        fontWeight:'bold'
    };
    const contentStyle={
        overflow:'hidden',
        transition:'max-height 1s ',
        backgroundColor:'transparent'
    };
    return(
        <>
        <div className="collapsible-container" style={collapsibleContainerStyle}>
            <button onClick={handleClick} style={buttonStyle}>Faq</button>
            <div className="content" style={{...contentStyle,maxHeight:height}}>
                <p>
                    {content}
                </p>
            </div>
        </div>
        </>
    )
}

export default Collapsible
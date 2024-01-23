
import {useState} from 'react'
function Collapsible(
    {
        content={},
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
        fontWeight:'bold',
        backgroundColor:'#fff7ed',
        fontSize:'large',
        borderRadius:'10px'
    };
    const contentStyle={
        overflow:'hidden',
        transition:'max-height 1s ',
        backgroundColor:'transparent'
    };
    return(
        <>
        <div className="collapsible-container" style={collapsibleContainerStyle}>
            <button onClick={handleClick} style={buttonStyle}>{content.title}</button>
            <div className="content" style={{...contentStyle,maxHeight:height}}>
                <p>
                    {content.text}
                </p>
            </div>
        </div>
        </>
    )
}

export default Collapsible
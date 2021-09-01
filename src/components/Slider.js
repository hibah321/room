import React,{ useState } from 'react'
import {Datal} from './SliderDataL'


const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const lenght = slides.length

    const nextSlide = () => {
        setCurrent( current === lenght - 1 ? 0 : current + 1 )
    };
    const prevSlide = () => {
        setCurrent (current === 0? lenght - 1 : current - 1)
    };
    return(
        <div className = "upper">
            {Datal.map((slide, index) => 
                <div className = {index === current ? "slide acitve" : "slide"} key = {index}>{index === current &&
                    <div className ="main">
                         <img className="image" src={process.env.PUBLIC_URL + slide.image} alt="imgl" />
                         <div className="text">
                             <h1>{slide.head}</h1>
                             <p>{slide.p}</p>
                         </div>
                    </div>   
                    }
                    </div>
                )
            }  
            <div className="buttons">
                <img className = "toggle" src={process.env.PUBLIC_URL + "/images/icon-angle-left.svg"} onClick = {prevSlide} alt="" />
                <img className = "toggle" src={process.env.PUBLIC_URL + "/images/icon-angle-right.svg"} onClick = {nextSlide} alt="" />
            </div>
        </div>
    )
    
}

export default Slider

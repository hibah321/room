import { data } from 'browserslist'
import React,{ useState } from 'react'
import {Datal} from './SliderDataL'
import {Datas} from './SliderDataS'
import Logo from '../icon-arrow-left'

const Slider = () => {
    const [size, setSize] = useState(window.innerWidth)
    const change = () => {
        console.log("heyy")
        setSize(window.innerWidth)
    }
    window.addEventListener('resize', change)
    if (size > 500){
    return(
        <div className = "slider">
            <img src={Logo} alt="" />
            {Datal.map((slide, index) => {
                return <img src={process.env.PUBLIC_URL + slide.image} alt="imgl" /> })}
        </div>
    )
    } else{
        return(
            <div>
                {Datas.map((slide, index) => {return <img src={process.env.PUBLIC_URL + slide.image} alt="img" /> })}
            </div>
        )
    }
}

export default Slider

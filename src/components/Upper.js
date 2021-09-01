import React from 'react'
import Slider from './Slider'
import {Datal} from './SliderDataL'

const Upper = () => {
    return (
        <div className = "upper">
            <Slider className = "slider" slides = {Datal} />
        </div>
    )
}

export default Upper

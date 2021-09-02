import React from 'react'

const lower = () => {
    return (
        <div className="lower">
            <img className = "image1" src={process.env.PUBLIC_URL + "/images/image-about-dark.jpg"} alt="" />
            <div className = "text2">
                <h2>ABOUT OUR FURNITURE</h2>
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <img className = "image1" src={process.env.PUBLIC_URL + "/images/image-about-light.jpg"} alt="" />
        </div>
    )
}

export default lower

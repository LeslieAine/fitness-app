import React from 'react'

const BgGradient = ({ trainerDetails }) => {

    const gradientClass = trainerDetails?.sex === 'man' ? 'man' : 'woman';

    return (
        <div className="fullscreen-bg">
            <div className={`blur1 ${gradientClass}`}></div>
            <div className={`blur1 ${gradientClass}`}></div>
            <div className={`blur1 ${gradientClass}`}></div>
        </div>
    )
}

export default BgGradient
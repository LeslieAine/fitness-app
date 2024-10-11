import React from 'react'

const Loader = ({trainerDetails}) => {

    const gradientClass = trainerDetails?.sex === 'man' ? 'man' : 'woman';

    return (
        <div className='loaderhidden'>
        <div className="fullscreen-bg">
            <div className={`blur11 ${gradientClass}`}></div>
            <div className={`blur11 ${gradientClass}`}></div>
            <div className={`blur11 ${gradientClass}`}></div>
        </div>
            <div className="loader-wrapper">
                <div className="loader">
                    <div className="roller"></div>
                    <div className="roller"></div>
                </div>

                <div id="loader2" className="loader">
                    <div className="roller"></div>
                    <div className="roller"></div>
                </div>

                <div id="loader3" className="loader">
                    <div className="roller"></div>
                    <div className="roller"></div>
                </div>
            </div>
        </div>

    )
}

export default Loader
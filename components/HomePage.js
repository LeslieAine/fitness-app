/* eslint-disable react/no-unescaped-entities */

import React from 'react'

const HomePage = ({ trainerDetails }) => {



    return (
        <section id="main" className="inner main" data-anchor='mainPage'>
            <div className="main__content d-flex">
                <div className="container-fluid px-0 fullheight">
                    <div className="row gx-0 gx-lg-5 fullheight">

                        <div className="col-12 col-lg-8 main__intro logoMobile">

                            <div className="intro__content" id='homesection'>

                                <div id="headline" className="headline">
                                    <h1 className="headline__title">"If you don't make time for exercise, you'll probably have to make time for illness"</h1>
                                </div>

                            </div>

                            <div className='onlineForm' style={{ width: '100%', height: "500px" }} data-fillout-id="vX3ScTbEWqus" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div>


                        </div>

                        <div className="col-12 col-lg-4 main__media">
                            <div className="media__content border-radius-l">
                                <div className="swiper">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide split-slide">
                                            <div className="media__image" style={{ backgroundImage: `url(${trainerDetails.coach_image_1})` }}></div>
                                            <div className="image-overlay"></div>
                                        </div>
                                        <div className="swiper-slide split-slide split-slide-1">
                                            <div className="media__image" style={{ backgroundImage: `url(${trainerDetails.coach_image_2})` }}></div>
                                            <div className="image-overlay"></div>
                                        </div>
                                        <div className="swiper-slide split-slide split-slide-4">
                                            <div className="media__image" style={{ backgroundImage: `url(${trainerDetails.coach_image_3})` }}></div>
                                            <div className="image-overlay"></div>
                                        </div>
                                    </div>
                                    <div className="swiper-pagination split-slider-pagination-emeric d-flex align-items-center justify-content-center"></div>
                                    <div className="swiper-button-prev split-slider-btn-emeric split-slider-btn-emeric-prev">
                                        <span className="circle"></span>
                                        <i className="fa-solid fa-chevron-left"></i>
                                    </div>
                                    <div className="swiper-button-next split-slider-btn-emeric split-slider-btn-emeric-next">
                                        <span className="circle"></span>
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </div>
                                </div>
                                <div className='onlineFormMobile' style={{ width: '100%', height: "500px" }} data-fillout-id="vX3ScTbEWqus" data-fillout-embed-type="standard" data-fillout-inherit-parameters data-fillout-dynamic-resize></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage
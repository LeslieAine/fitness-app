/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import BgGradient from './BgGradient'

const Menu = ({ trainerDetails }) => {

    return (
        <nav id="menu" className="menu">
            <BgGradient trainerDetails={trainerDetails} />
            <div className="menu__content d-flex">
                <div className="container-fluid px-0 fullheight">
                    <div className="row gx-0 gx-lg-5 fullheight">

                        <div className="col-12 col-lg-8 menu__data">
                            <div className="menudata__content">

                                <div className="menudata__links">
                                    <div className="container-fluid p-0">
                                        <div className="row g-0">
                                            <div className="col-12">

                                                <ul className="navigation">
                                                    <li>
                                                        <a href="#" id="home-trigger" className="navigation__link homebtn">
                                                            <span className="nav-star"></span>
                                                            <span className="nav-caption">Home</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" id="about-trigger" className="navigation__link aboutbtn">
                                                            <span className="nav-star"></span>
                                                            <span className="nav-caption">About Us</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" id="works-trigger" className="navigation__link worksbtn">
                                                            <span className="nav-star"></span>
                                                            <span className="nav-caption">Portfolio</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" id="contact-trigger" className="navigation__link contactbtn">
                                                            <span className="nav-star"></span>
                                                            <span className="nav-caption">Contact</span>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="menudata__contact">
                                    <div className="container-fluid contactData px-0">
                                        <div className="row gx-0 gx-lg-5">
                                            <div className="col-12 col-lg-4 menudata__item">
                                                <p className="menudata__title">Let's talk:</p>
                                                <p className="menudata__text">
                                                    <a className="contact-link" href={`mailto:${trainerDetails.email}?subject=Message%20from%20your%20site`}>{trainerDetails.email}</a>
                                                </p>
                                            </div>
                                            <div className="col-12 col-lg-8 menudata__item">
                                                {/* <p className="menudata__title"> */}
                                                    <ul className="menudata__title1">
                                                            <li>
                                                                <a href='#' target="_blank" rel="noopener noreferrer">
                                                                    <i className="fa-brands fa-instagram"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href='#' target="_blank" rel="noopener noreferrer">
                                                                    <i className="fa-brands fa-facebook-f"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href='#' target="_blank" rel="noopener noreferrer">
                                                                    <i className="fa-brands fa-tiktok"></i>
                                                                </a>
                                                            </li>
                                                    </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-12 col-lg-4 menu__media">
                            <div className="media__content border-radius-l">

                                <div className="menu__image menu-image-1" style={{ backgroundImage: `url("../img/fitness/5.jpeg")` }}></div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Menu
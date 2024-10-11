/* eslint-disable react/no-unescaped-entities */

import React from 'react'

const Header = ({ trainerDetails }) => {
    return (
        <header id="header" className="header">

            <div className="header__logo">
                <img href={`/coach/${trainerDetails.instagram_handle}`} className='logoMobile dumbbell' src="../img/dumbbell.svg" alt="logo" />
                <a className="btn btn-s btn-s-icon nameMobile" href={`/coach/${trainerDetails.instagram_handle}`}>
                    <span className="btn__background dark"></span>
                    <span className="btn__text light">
                        <em className="btn-title">{trainerDetails.business_name}</em>
                    </span>
                </a>
            </div>

            <div className="header__content d-flex align-items-center">
                <div className="container-fluid px-0 fullheight-mobile">
                    <div className="row gx-0 gx-lg-5 justify-content-end justify-content-xl-start fullheight-mobile">
                        <div className="col-auto col-lg-8 fullheight-mobile">

                            <div className="header__buttons d-flex justify-content-end align-items-center">

                                <div className="socials-desktop">
                                    <ul className="socials d-flex align-items-start">
                                        <li>
                                            <a className="btn btn-s-text" href="https://www.instagram.com" target="_blank">
                                                <span className="btn-title">Instagram</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="btn btn-s-text" href="https://www.behance.net/" target="_blank">
                                                <span className="btn-title">Tiktok</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <a id="notify-trigger" className="btn btn-s btn-s-icon logoMobile" href="#0">
                                    <span className="btn__background dark"></span>
                                    <span className="btn__text light">
                                        <i className="fa-solid fa-bell"></i>
                                        <em className="btn-title">Notify me</em>
                                    </span>
                                </a>

                            </div>

                        </div>
                        <div className="col-auto col-lg-4">

                            <div className="header__menu d-flex justify-content-end align-items-center">
                                <a id="menu-trigger" className="btn menu-trigger">
                                    <span className="menu-trigger__background"></span>
                                    <span className="menu-trigger__menu">
                                        <em className="btn-title">Menu</em>
                                    </span>
                                    <span className="menu-trigger__close">
                                        <em className="btn-title">Close</em>
                                    </span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header
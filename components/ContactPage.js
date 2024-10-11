/* eslint-disable react/no-unescaped-entities */

import React from 'react'

const ContactPage = ({trainerDetails}) => {
    return (
        <section id="contact" className="inner contact" data-anchor='contactPage' >
            <div className="inner__content d-flex">
                <div className="container-fluid px-0 fullheight">
                    <div className="row gx-0 gx-lg-5 fullheight">

                        <div className="col-12 col-lg-12 inner__data">

                            <div className="innerdata__blocks">

                                <div className="blocks__scroll">

                                    <div className="blocks__container">
                                        <div className="content-block">
                                            <div className="container-fluid px-0">
                                                <div className="row gx-5" id='contactsection'>
                                                    <div className="col-12">
                                                        <h2 className="inner__title">Let's achieve your fitness goals together.</h2>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <img className="inner__name" src="../img/svg/section-name-contact.svg" alt="About Me" />
                                                    </div>
                                                    <div className="col-12 col-md-8">
                                                        <p className="inner__text">Let's get in touch. You can call us or leave a request here.
                                                            We are always glad to see you in our office from <span>9:00 to 18:00</span>.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blocks__container">
                                        <div className="content-block">
                                            <div className="container-fluid p-0">
                                                <div className="row gx-5 gy-5 align-items-stretch">

                                                    {/* <div className="col-12 col-md-6 col-xl-4">
                                                        <div className="contactdata__item contactdata-item-1 card-auto card-gradient border-radius-s">
                                                            <div className="contactdata__image contactdata-image-1"></div>
                                                            <div className="contactdata__title">
                                                                <h5>Location</h5>
                                                            </div>
                                                            <div className="contactdata__descr">
                                                                <p className="small">
                                                                    <a className="contact-link" href="https://goo.gl/maps/nWXKpGaDPuyH6gxRA" target="_blank">11 West 53 Street,<br />New York, NY 10019</a>
                                                                </p>
                                                                <p className="small">
                                                                    <a className="contact-link" href="https://goo.gl/maps/xap5o3MZBuC6DFHz8" target="_blank">3400 Broadway,<br />Oakland, CA 94611</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div> */}

                                                    <div className="col-12 col-md-6 col-xl-4">
                                                        <div className="contactdata__item contactdata-item-2 card-auto card-white border-radius-s">
                                                            <div className="contactdata__image contactdata-image-2"></div>
                                                            <div className="contactdata__title">
                                                                <h5>Follow me</h5>
                                                            </div>
                                                            <div className="contactdata__descr">
                                                                <ul className="contactdata__socials">
                                                                    <li>
                                                                        <a className="contact-link" href="https://www.facebook.com/" target="_blank">Facebook</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="contact-link" href="https://www.instagram.com/" target="_blank">Instagram</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="contact-link" href="https://twitter.com/" target="_blank">Twitter</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="contact-link" href="https://pinterest.com/" target="_blank">Pinterest</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12 col-md-6 col-xl-4">
                                                        <div className="contactdata__item contactdata-item-3 card-auto card-white border-radius-s">
                                                            <div className="contactdata__image contactdata-image-3"></div>
                                                            <div className="contactdata__title">
                                                                <h5>Contact</h5>
                                                            </div>
                                                            <div className="contactdata__descr">
                                                                <p className="small">
                                                                    <a className="contact-link" href="tel:+12127089400">+1 212-708-9400</a>
                                                                    <br />
                                                                    <a className="contact-link" href="tel:+15104570211">+1 510-457-0211</a>
                                                                </p>
                                                                <p className="small">
                                                                    <a className="contact-link" href="mailto:example@example.com?subject=Message%20from%20your%20site">support@peregrine.com</a>
                                                                    <br />
                                                                    <a className="contact-link" href="mailto:example@example.com?subject=Message%20from%20your%20site">{trainerDetails.email}</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="blocks__container">

                                        <div className="content-block">
                                            <h3>Just say hello!</h3>
                                            <p className="block__text">Want to know more about my work, tell me about your project or just to say hello?
                                                Drop me a line and I'll get back as soon as possible.
                                            </p>
                                        </div>

                                        <div className="content-block">
                                            <div className="form-container">

                                                <div className="reply-group">
                                                    <i className="fa-solid fa-circle-check reply-group__icon"></i>
                                                    <p className="reply-group__title">Done!</p>
                                                    <span className="reply-group__text">Thanks for your message. We will get back as soon as possible</span>
                                                </div>



                                                <form className="form form-dark contact-form" id="contact-form">

                                                    <input type="hidden" name="project_name" value="input name in name field" />
                                                    <input type="hidden" name="admin_email" value="input email" />
                                                    <input type="hidden" name="form_subject" value="Contact Form Message" />

                                                    <div className="container-fluid px-0">
                                                        <div className="row gx-5">
                                                            <div className="col-12 col-md-6">
                                                                <input type="text" name="Name" placeholder="Your Name*" required />
                                                            </div>
                                                            <div className="col-12 col-md-6">
                                                                <input type="text" name="Company" placeholder="Company Name" />
                                                            </div>
                                                            <div className="col-12 col-md-6">
                                                                <input type="email" name="E-mail" placeholder="Email Adress*" required />
                                                            </div>
                                                            <div className="col-12 col-md-6">
                                                                <input type="tel" name="Phone" placeholder="Phone Number*" required />
                                                            </div>
                                                            <div className="col-12">
                                                                <textarea className="margin-s" name="Message" placeholder="A Few Words*" required></textarea>
                                                            </div>
                                                            <div className="col-12">
                                                                <span className="inputs-description">*Required fields</span>
                                                                <button className="btn btn-l" type="submit">
                                                                    <span className="btn__background dark"></span>
                                                                    <span className="btn__text light">
                                                                        <em className="btn-title">Submit</em>
                                                                        <em className="btn-hover">Submit</em>
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="blocks__container">
                                        <div className="decor">

                                            <a className="marquee small marquee-relative link-l-arrow" href={`mailto:${trainerDetails.email}?subject=Message%20from%20your%20site`} target="_blank">
                                                <div className="marquee-content scroll">
                                                    <span>{trainerDetails.email}</span>
                                                    <span>{trainerDetails.email}</span>
                                                    <span>{trainerDetails.email}</span>
                                                    <span>{trainerDetails.email}</span>
                                                </div>
                                                <div className="marquee-content scroll">
                                                    <span>{trainerDetails.email}</span>
                                                    <span>{trainerDetails.email}</span>
                                                    <span>{trainerDetails.email}</span>
                                                    <span>{trainerDetails.email}</span>
                                                </div>
                                            </a>

                                        </div>
                                    </div>

                                    {/* <div id="show-more" className="show-more">
                                        <svg className="arrows">
                                            <path className="a1" d="M0 0 L30 32 L60 0"></path>
                                            <path className="a2" d="M0 20 L30 52 L60 20"></path>
                                            <path className="a3" d="M0 40 L30 72 L60 40"></path>
                                        </svg>
                                    </div> */}


                                </div>


                            </div>


                        </div>



                        {/* <div className="col-12 col-lg-4 inner__media mediaMobile">
                            <div className="innermedia__content border-radius-l">
                                <div className="innermedia__image innermedia-image-3" style={{ backgroundImage: `url("../img/fitness/yoga.jpeg")` }}></div>
                            </div>
                        </div> */}


                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactPage
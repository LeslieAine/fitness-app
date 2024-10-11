import React from 'react'

const Popup = () => {
  return (
    <div id="notify" className="popup notify">
    <div className="popup__container">

      <div className="popup__content border-radius-l">

        <a id="notify-close" className="btn btn-s btn-s-icon popup-close" href="#0">
          <span className="btn__background light"></span>
          <span className="btn__text dark">
            <i className="fa-solid fa-xmark"></i>
            <em className="btn-title">Close</em>
            <em className="btn-hover">Close</em>
          </span>
        </a>


        <div className="popup-title">
          <p className="popup-title__title">Get to know about our launch</p>
          <p className="popup-title__text">Subscribe to our newsletter and we will send you a notification about the launch of our brand new site</p>
        </div>



        <div className="form-container">


          <div className="reply-group subscription-ok">
            <i className="fa-solid fa-circle-check reply-group__icon"></i>
            <p className="reply-group__title txt-light">Done!</p>
            <span className="reply-group__text">Thanks for subscribing. We will send you a notification about our launch.</span>
          </div>
          <div className="reply-group subscription-error">
            <i className="fa-solid fa-face-frown-open reply-group__icon"></i>
            <p className="reply-group__title">Ooops!</p>
            <span className="reply-group__text">Something went wrong. Please try again later.</span>
          </div>


          <form className="form notify-form form-dark">
            <input className="margin-l" type="email" placeholder="Your Email" required/>
            <button className="btn btn-l" type="submit">
              <span className="btn__background dark"></span>
              <span className="btn__text light">
                <em className="btn-title">Submit</em>
                <em className="btn-hover">Submit</em>
              </span>
            </button>
          </form>


        </div>


      </div>


    </div>
  </div>
  )
}

export default Popup
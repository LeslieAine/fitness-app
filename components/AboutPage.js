import React from 'react';

const AboutPage = () => {
    return (
        <section id="about" className="inner about" data-anchor='aboutPage'>
            <div className="inner__content d-flex">
                <div className="container-fluid px-0 fullheight">
                    <div className="row gx-0 gx-lg-5 fullheight">

                        <div className="col-12 col-lg-12 inner__data">
                            <div className="innerdata__blocks">
                                <div className="blocks__scroll">
                                    <div className="blocks__container">
                                        <div className="content-block">
                                            <div className="container-fluid px-0">
                                                <div className="row gx-5" id='aboutsection'>
                                                    <div className="col-12">
                                                        <h2 className="inner__title animate-in-up">Health is Wealth</h2>
                                                    </div>
                                                    <div className="col-12 col-md-4">
                                                        <img className="inner__name animate-in-up" src="../img/svg/section-name-about.svg" alt="About Us" />
                                                    </div>
                                                    <div className="col-12 col-md-8">
                                                        <p className="inner__text animate-in-up">True wealth starts with a healthy body and mind.
                                                            Embrace the journey to a better you by focusing on what truly matters: your well-being. Transform your life
                                                            through fitness, nutrition, and mindfulness.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blocks__container">
                                        <div className="content-block">
                                            <div className="container-fluid px-0">
                                                <div className="row gx-5 gy-5 align-items-stretch">
                                                    <div className="col-12 col-xl-8">
                                                        <div className="card card-white border-radius-s animate-in-up">
                                                            <div className="card__image card-image-1" style={{ backgroundImage: `url("../img/fitness/6.jpeg")` }} >
                                                                <div className='cardOverlays'>
                                                                </div>
                                                            </div>
                                                            <div className="card__title">
                                                                <h4>Personal<br /> Training</h4>
                                                                <div className="card__tags d-flex flex-wrap">
                                                                    <span className="rounded-tag">One-on-One Sessions</span>
                                                                    <span className="rounded-tag">Customized Workouts</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-xl-4">
                                                        <div className="card card-gradient border-radius-s animate-in-up">
                                                            <div className="card__image card-image-2" style={{ backgroundImage: `url("../img/fitness/2.jpeg")` }}>
                                                                <div className='cardOverlays'>
                                                                </div>
                                                            </div>
                                                            <div className="card__title">
                                                                <h4>Mental<br /> Wellness</h4>
                                                                <div className="card__tags d-flex flex-wrap">
                                                                    <span className="rounded-tag">Meditation</span>
                                                                    <span className="rounded-tag">Mindfulness Practices</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-xl-4">
                                                        <div className="card card-white border-radius-s animate-in-up">
                                                            <div className="card__image card-image-3" style={{ backgroundImage: `url("../img/fitness/4.jpeg")` }}>
                                                                <div className='cardOverlays'>
                                                                </div>
                                                            </div>
                                                            <div className="card__title">
                                                                <h4>Nutrition<br /> Coaching</h4>
                                                                <div className="card__tags d-flex flex-wrap">
                                                                    <span className="rounded-tag">Meal Planning</span>
                                                                    <span className="rounded-tag">Healthy Recipes</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-xl-8">
                                                        <div className="card card-white border-radius-s animate-in-up">
                                                            <div className="card__image card-image-4" style={{ backgroundImage: `url("../img/fitness/yoga.jpeg")` }}>
                                                                <div className='cardOverlays'>
                                                                </div>
                                                            </div>
                                                            <div className="card__title">
                                                                <h4>Holistic<br /> Health</h4>
                                                                <div className="card__tags d-flex flex-wrap">
                                                                    <span className="rounded-tag">Yoga & Pilates</span>
                                                                    <span className="rounded-tag">Mind-Body Balance</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blocks__container">
                                        <div className="content-block">
                                            <div className="skillbars">

                                                <div className="show-skillbar">
                                                    <div className="skillbar light" data-percent="20">
                                                        <span className="skillbar-title light">Strength Training</span>
                                                        <p className="skillbar-bar light" style={{ width: '20%' }}></p>
                                                        <span className="skill-bar-percent light">20%</span>
                                                    </div>
                                                </div>

                                                <div className="show-skillbar">
                                                    <div className="skillbar light" data-percent="40">
                                                        <span className="skillbar-title light">Cardio Fitness</span>
                                                        <p className="skillbar-bar light" style={{ width: '40%' }}></p>
                                                        <span className="skill-bar-percent light">40%</span>
                                                    </div>
                                                </div>

                                                <div className="show-skillbar">
                                                    <div className="skillbar light" data-percent="60">
                                                        <span className="skillbar-title light">Flexibility</span>
                                                        <p className="skillbar-bar light" style={{ width: '60%' }}></p>
                                                        <span className="skill-bar-percent light">60%</span>
                                                    </div>
                                                </div>

                                                <div className="show-skillbar">
                                                    <div className="skillbar light" data-percent="80">
                                                        <span className="skillbar-title light">Food & Nutrition</span>
                                                        <p className="skillbar-bar light" style={{ width: '80%' }}></p>
                                                        <span className="skill-bar-percent light">80%</span>
                                                    </div>
                                                </div>

                                                <div className="show-skillbar">
                                                    <div className="skillbar light" data-percent="100">
                                                        <span className="skillbar-title light">Mindfulness</span>
                                                        <p className="skillbar-bar light" style={{ width: '100%' }}></p>
                                                        <span className="skill-bar-percent light">100%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blocks__container">
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutPage;


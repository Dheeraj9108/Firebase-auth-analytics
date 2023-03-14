import React, { useEffect } from 'react'

import './default.css'

const Home = (props) => {
    return (
        <>
            <section className="smart-scroll">
                <div className="cont-fluid">
                    <nav className="navbar navbar-expand-md navbar-dark">
                        <a className="navbar-brand heading-black" href="index.html">
                            Knight
                        </a>
                        <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span data-feather="grid"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#faq">FAQ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll d-flex flex-row align-items-center text-primary" href="/signup">
                                        <em data-feather="layout" width="0" height="0" className="mr-2"></em>
                                        Sign Up
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>


            <section className="py-7 py-md-0 bg-hero" id="home">
                <div className="cont">
                    <div className="row vh-md-100">
                        <div className="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                            <h1 className="heading-black text-capitalize">Quickly build landing pages with Knight</h1>
                            <p className="lead py-3">Knight is a platform that helps freelancers and companies build beautiful landing
                                pages in minutes. Sign up for free.</p>
                            <button className="btn btn-primary d-inline-flex flex-row align-items-center">
                                Get started now
                                <em className="ml-2" data-feather="arrow-right"></em>
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="pt-6 pb-7" id="features">
                <div className="cont">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center">
                            <h2 className="heading-black">Knight offers everything you need.</h2>
                            <p className="text-muted lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi
                                commodo, tempus odio a, vestibulum nibh.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10 mx-auto">
                            <div className="row feature-boxes">
                                <div className="col-md-6 box">
                                    <div className="icon-box box-primary">
                                        <div className="icon-box-inner">
                                            <span data-feather="edit-3" width="35" height="35"></span>
                                        </div>
                                    </div>
                                    <h5>Create once. Share everywhere.</h5>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
                                        nisi commodo, tempus odio a, vestibulum nibh.</p>
                                </div>
                                <div className="col-md-6 box">
                                    <div className="icon-box box-success">
                                        <div className="icon-box-inner">
                                            <span data-feather="monitor" width="35" height="35"></span>
                                        </div>
                                    </div>
                                    <h5>Unlimited devices</h5>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
                                        nisi commodo, tempus odio a, vestibulum nibh.</p>
                                </div>
                                <div className="col-md-6 box">
                                    <div className="icon-box box-danger">
                                        <div className="icon-box-inner">
                                            <span data-feather="layout" width="35" height="35"></span>
                                        </div>
                                    </div>
                                    <h5>Beautiful tempates & layouts</h5>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
                                        nisi commodo, tempus odio a, vestibulum nibh.</p>
                                </div>
                                <div className="col-md-6 box">
                                    <div className="icon-box box-info">
                                        <div className="icon-box-inner">
                                            <span data-feather="globe" width="35" height="35"></span>
                                        </div>
                                    </div>
                                    <h5>Available globally</h5>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
                                        nisi commodo, tempus odio a, vestibulum nibh.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-6">
                        <div className="col-md-6 mr-auto">
                            <h2>Knight is more than just a page builder.</h2>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis pulvinar vestibulum. Donec eleifend, sem sed dictum mattis, turpis purus placerat eros.</p>
                            <a href="#" className="btn btn-light">
                                Try the live demo
                            </a>
                        </div>
                        <div className="col-md-5">
                            <div className="slick-about">
                                <img src="./img/blog-1.jpg" className="img-fluid rounded d-block mx-auto" alt="Work 1" />
                                <img src="./img/blog-2.jpg" className="img-fluid rounded d-block mx-auto" alt="Work 2" />
                                <img src="./img/blog-3.jpg" className="img-fluid rounded d-block mx-auto" alt="Work 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-7 bg-dark section-angle top-right bottom-right" id="pricing">
                <div className="cont">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center">
                            <h2 className="text-white heading-black">Choose your pricing plan.</h2>
                            <p className="text-light lead">Simply pricing - 7 Days free trial</p>
                        </div>
                    </div>

                    <div className="row pt-5 pricing-table">
                        <div className="col-12 mx-auto">
                            <div className="card-deck pricing-table">
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title pt-3">Personal</h3>
                                        <h2 className="card-title text-primary mb-0 pt-4">$59</h2>
                                        <div className="text-muted font-weight-medium mt-2">per month</div>
                                        <ul className="list-unstyled pricing-list">
                                            <li>1 user</li>
                                            <li>10 websites</li>
                                            <li>Access to premium templates</li>
                                            <li>Basic support</li>
                                        </ul>
                                        <a href="#" className="btn btn-primary">
                                            Start free trial
                                        </a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title pt-3">Agency</h3>
                                        <h2 className="card-title text-info mb-0 pt-4">$159</h2>
                                        <div className="text-muted font-weight-medium mt-2">per month</div>
                                        <ul className="list-unstyled pricing-list">
                                            <li>2-15 users</li>
                                            <li>50 websites</li>
                                            <li>Access to premium templates</li>
                                            <li>Priority support</li>
                                        </ul>
                                        <a href="#" className="btn btn-info">
                                            Start free trial
                                        </a>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title pt-3">Enterprise</h3>
                                        <h2 className="card-title text-primary mb-0 pt-4">$499</h2>
                                        <div className="text-muted font-weight-medium mt-2">per month</div>
                                        <ul className="list-unstyled pricing-list">
                                            <li>Unlimited users</li>
                                            <li>Unlimited websites</li>
                                            <li>Access to premium templates</li>
                                            <li>24/7 support</li>
                                        </ul>
                                        <a href="#" className="btn btn-primary">
                                            Start free trial
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-6">
                        <div className="col-md-4 mr-auto">
                            <h3>Everything is covered.</h3>
                            <p className="lead">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, tempus odio a,
                                vestibulum nibh.
                            </p>
                        </div>
                        <div className="col-md-7 offset-md-1">
                            <ul className="features-list">
                                <li>Weekly new templates</li>
                                <li>Access to new features</li>
                                <li>MailChimp integration</li>
                                <li>Stripe integration</li>
                                <li>100 refund guarantee</li>
                                <li>Advance SEO tools</li>
                                <li>Free unlimited support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-8 col-12 divider top-divider mx-auto pt-5 text-center">
                            <h3>Try Knight free for 7 days</h3>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo,
                                tempus odio a, vestibulum nibh.</p>
                            <button className="btn btn-primary">
                                Create your account
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-7" id="faq">
                <div className="cont">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center">
                            <h2>Frequently asked questions</h2>
                            <p className="text-muted lead">Answers to most common questions.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 mb-5">
                                    <h6>Can I try it for free?</h6>
                                    <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <h6>Do you have hidden fees?</h6>
                                    <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <h6>What are the payment methods you accept?</h6>
                                    <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <h6>How often do you release updates?</h6>
                                    <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <h6>What is your refund policy?</h6>
                                    <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <h6>How can I contact you?</h6>
                                    <p className="text-muted">Nam liber tempor cum soluta nobis eleifend option congue nihil imper per tem por legere me doming.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6 mx-auto text-center">
                            <h5 className="mb-4">Have questions?</h5>
                            <a href="#" className="btn btn-primary">Contact us</a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-7 bg-dark section-angle top-left bottom-left" id="blog">
                <div className="cont">
                    <div className="row">
                        <div className="col-md-6 mx-auto text-center">
                            <h2 className="heading-black">News from Knight.</h2>
                            <p className="text-muted lead">What's new at Knight.</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="card">
                                <a href="#">
                                    <img className="card-img-top img-raised" src="./img/blog-1.jpg" alt="Blog 1" />
                                </a>
                                <div className="card-body">
                                    <a href="#" className="card-title mb-2"><h5>We launch new iOS & Android mobile apps</h5></a>
                                    <p className="text-muted small-xl mb-2">Sep 27, 2018</p>
                                    <p className="card-text">Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
                                        consectetur adipiscing elit. <a href="#">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <a href="#">
                                    <img className="card-img-top img-raised" src="./img/blog-2.jpg" alt="Blog 2" />
                                </a>
                                <div className="card-body">
                                    <a href="#" className="card-title mb-2"><h5>New update is available for the editor</h5></a>
                                    <p className="text-muted small-xl mb-2">August 16, 2018</p>
                                    <p className="card-text">Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
                                        consectetur adipiscing elit. <a href="#">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <a href="#">
                                    <img className="card-img-top img-raised" src="./img/blog-3.jpg" alt="Blog 3" />
                                </a>
                                <div className="card-body">
                                    <a href="#" className="card-title mb-2"><h5>The story of building #1 page builder</h5></a>
                                    <p className="text-muted small-xl mb-2">December 2nd, 2017</p>
                                    <p className="card-text">Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
                                        consectetur adipiscing elit. <a href="#">Learn more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-6">
                        <div className="col-md-6 mx-auto text-center">
                            <a href="#" className="btn btn-primary">View all posts</a>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="py-6">
                <div className="cont">
                    <div className="row">
                        <div className="col-sm-5 mr-auto">
                            <h5>About Knight</h5>
                            <p className="text-muted">Magnis modipsae que voloratati andigen daepeditem quiate conecus aut labore.
                                Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam explabo.</p>
                            <ul className="list-inline social social-sm">
                                <li className="list-inline-item">
                                    <a href=""><i className="fa fa-facebook"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href=""><i className="fa fa-twitter"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href=""><i className="fa fa-google-plus"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href=""><i className="fa fa-dribbble"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h5>Legal</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Refund policy</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h5>Partner</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Refer a friend</a></li>
                                <li><a href="#">Affiliates</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-2">
                            <h5>Help</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Support</a></li>
                                <li><a href="#">Log in</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-muted text-center small-xl">
                            &copy; 2019 Knight - All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>


            <div className="scroll-top">
                <i className="fa fa-angle-up" aria-hidden="true"></i>
            </div>

            <div className="switcher-wrap">
                <div className="switcher-trigger">
                    <span className="fa fa-gear"></span>
                </div>
                <div className="color-switcher">
                    <h6>Color Switcher</h6>
                    <ul className="mt-3 clearfix">
                        <li className="bg-teal active" data-color="default" title="Default Teal"></li>
                        <li className="bg-purple" data-color="purple" title="Purple"></li>
                        <li className="bg-blue" data-color="blue" title="Blue"></li>
                        <li className="bg-red" data-color="red" title="Red"></li>
                        <li className="bg-green" data-color="green" title="Green"></li>
                        <li className="bg-indigo" data-color="indigo" title="Indigo"></li>
                        <li className="bg-orange" data-color="orange" title="Orange"></li>
                        <li className="bg-cyan" data-color="cyan" title="Cyan"></li>
                        <li className="bg-yellow" data-color="yellow" title="Yellow"></li>
                        <li className="bg-pink" data-color="pink" title="Pink"></li>
                    </ul>
                    <p>These are just demo colors. You can <b>easily</b> create your own color scheme.</p>
                </div>
            </div>
        </>
    )
}
export default Home

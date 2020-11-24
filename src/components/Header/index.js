import React from "react";
import "./heading.css";

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
                <div class="container"><a class="navbar-brand js-scroll-trigger" href="#page-top">NLB-Makes</a>
                    <button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i></button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">PORTFOLIO</a>
                            </li>
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">ABOUT</a>
                            </li>
                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                    {/* <!-- Masthead Avatar Image--> */}
                    <img class="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt=""/>
                    {/* <!-- Masthead Heading--> */}
                    <h1 class="masthead-heading mb-0">Nancy Lambert</h1>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Masthead Subheading--> */}
                    <p class="pre-wrap masthead-subheading font-weight-light mb-0">Full Stack Web Developer - Hacker/Maker</p>
                </div>
            </header>
        </div>
    )
}

export default Header;
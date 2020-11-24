import React from "react";

function Projects() {
    return (
        <div>
            <section class="page-section portfolio" id="portfolio">
        <div class="container">
            {/* <!-- Portfolio Section Heading--> */}
            <div class="text-center">
                <h2 class="page-section-heading text-secondary mb-0 d-inline-block">PORTFOLIO</h2>
            </div>
            {/* <!-- Icon Divider--> */}
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            {/* <!-- Portfolio Grid Items--> */}
            <div class="row justify-content-center">
                {/* <!-- Portfolio Items--> */}
                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal0">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div><img class="img-fluid" src="assets/img/portfolio/tutorial.gif" alt="Inn At The Edge Of Copyright" />
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div><img class="img-fluid" src="assets/img/portfolio/Screenshot.png" alt="Covid and Natural Hazards Map" />
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div><img class="img-fluid" src="assets/img/portfolio/sandwich.gif" alt="Eat-A-Sandwich" />
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div><img class="img-fluid" src="assets/img/portfolio/WeatherDashboard.png" alt="Weather Dashboard" />
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div><img class="img-fluid" src="assets/img/portfolio/Code_Quiz.png" alt="Code quiz" />
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-5">
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div><img class="img-fluid" src="assets/img/portfolio/WorkDayScheduler.png" alt="Workday Scheduler" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Portfolio Modal-->
    <!-- Inn at the Edge Project --> */}
    <div class="portfolio-modal modal fade" id="portfolioModal0" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal0Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fas fa-times"></i></span></button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                {/* <!-- Portfolio Modal - Title--> */}
                                <h2 class="portfolio-modal-title text-secondary mb-0">Inn At The Edge Of Copyright</h2>
                                {/* <!-- Icon Divider--> */}
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                {/* <!-- Portfolio Modal - Image--> */}
                                <a href="https://innattheedge.herokuapp.com/" target="_blank">https://innattheedge.herokuapp.com/
                                        <img class="img-fluid rounded mb-5" src="assets/img/portfolio/tutorial.gif" alt="Inn At The Edge Of Copyright"/>
                                    </a>
                                {/* <!-- Portfolio Modal - Text--> */}
                                <h6>Repo: <a href="https://github.com/n-lambert/Inn-At-The-Edge-of-Copyright" target="_blank">https://github.com/n-lambert/Inn-At-The-Edge-of-Copyright</a></h6>

                                <p class="mb-5">This text-based game is a throwback to the MUD days of the 90s where the visual effects reside primarily in the theater of the mind: The Inn At The Edge of Copyright - a nod to the HHGG Series. This was used to learn publish/subscribe
                                    handling as well as full-stack development with node, express, mySQL, and PubNub</p>
                                <button class="btn btn-primary" href="#" data-dismiss="modal"><i class="fas fa-times fa-fw"></i>Close Window</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Scheduler Project --> */}
    <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal5Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
                <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fas fa-times"></i></span></button>
                <div class="modal-body text-center">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                {/* <!-- Portfolio Modal - Title--> */}
                                <h2 class="portfolio-modal-title text-secondary mb-0">Workday Scheduler</h2>
                                {/* <!-- Icon Divider--> */}
                                <div class="divider-custom">
                                    <div class="divider-custom-line"></div>
                                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                    <div class="divider-custom-line"></div>
                                </div>
                                {/* <!-- Portfolio Modal - Image--> */}
                                <a href="https://n-lambert.github.io/DayScheduler" target="_blank">https://n-lambert.github.io/DayScheduler
                                        <img class="img-fluid rounded mb-5" src="assets/img/portfolio/WorkDayScheduler.png" alt="Workday Scheduler"/>
                                    </a>
                                {/* <!-- Portfolio Modal - Text--> */}
                                <h6>Repo: <a href="https://github.com/n-lambert/DayScheduler" target="_blank">https://github.com/n-lambert/DayScheduler</a></h6>

                                <p class="mb-5">This is a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</p>
                                <button class="btn btn-primary" href="#" data-dismiss="modal"><i class="fas fa-times fa-fw"></i>Close Window</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Projects;
import React from "react";

function About() {
    return (
        <div>
            <section class="page-section bg-primary text-white mb-0" id="about">
                <div class="container">
                    {/* <!-- About Section Heading--> */}
                    <div class="text-center">
                        <h2 class="page-section-heading d-inline-block text-white">ABOUT</h2>
                    </div>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- About Section Content--> */}
                    <div class="row">
                        <div class="col-lg-4 ml-auto">
                            <p class="pre-wrap lead">Hi! I'm Nancy and I enjoy building things. I'm a maker at heart and spend my free time figuring out how things work and making everything from costumes to robotic assistants in the IOT. I'm fueled by coffee and curiosity and you can
                        find me tinkering away at open-source projects, learning a new language (spoken or code), or building a costume for ComicCon or DragonCon.</p>
                        </div>
                        <div class="col-lg-4 mr-auto">
                            <p class="pre-wrap lead">Currently I work remotely as an IAM support engineer for OneLogin. I spend my days scripting login flows for customers wishing to integrate their favorite sites in a Single-Sign On environment. Throughout my career I have gained experience
                        in web development, data analytics, database administration, system administration, and software development. I am expanding my skillset into modern full stack development.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <figure>
                            <a href="https://github.com/n-lambert"><img src="https://github-readme-stats.vercel.app/api?username=n-lambert&theme=darcula&show_icons=true&count_private=true"/></a>
                        </figure>
                    </div>
                    </div>
    </section>
    </div>
    )
}

export default About;
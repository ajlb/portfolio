import Me from "./img/avataaars.svg";
import Resume from "./img/Nancy-Lambert.pdf";



function About (){

    return (

        <section className='main'>
            <div className="container">
                <div className="row">
                    <header className="col-12"><h2>About Me</h2></header>
                </div>
                <hr>

                </hr>
                <div id="profile-info" className="row">
                    <div className="col-12">
                        <img id="profile-pic" src={Me} className="col-lg-4 col-md-6 col-sm-12 float-left" style={{borderRadius:8+"px"}} alt='An avatar of Nancy Lambert-Brown' />
                        <p>Hi! I'm Nancy and I enjoy building things. I'm a maker at heart and spend my free time figuring out how things work and making everything from costumes to robotic assistants in the IOT. I'm fueled by coffee and curiosity and you can
                        find me tinkering away at open-source projects, learning a new language (spoken or code), or building a costume for ComicCon or DragonCon.
                        </p>
                        <p>Currently I work remotely as an IAM support engineer for OneLogin. I spend my days scripting login flows for customers wishing to integrate their favorite sites in a Single-Sign On environment. Throughout my career I have gained experience
                        in web development, data analytics, database administration, system administration, and software development. I am expanding my skillset into modern full stack development.</p>
                        <button id="resume-button"><a href={Resume} target="_blank" rel="noopener noreferrer">Check out my resume</a>!</button>
                    </div>

                </div>
            </div>
        </section>
)
}

export default About;
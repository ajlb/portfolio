import React from 'react';
import Covid from "./img/portfolio/Covid.png";
import Inn from "./img/portfolio/tutorial.gif";
import Planner from "./img/portfolio/WorkDayScheduler.png";
import Sandwich from "./img/portfolio/sandwich.gif";
import CodeQuiz from "./img/portfolio/Code_Quiz.png";
import Weather from "./img/portfolio/WeatherDashboard.png";

function Portfolio() {
    return (
        <section className="main">
            <div className="container">
                <div className="row">
                    <header className="col-12"><h2>Portfolio</h2></header>
                    <hr />
                </div>

                <div className="row">
                    <div className="col-sm-12 col-md-6 cardcol">
                        <div className="card">
                            <img className="card-img" src={Covid} alt='screenshot of Covid Danger Data website, with a map of california overlayed by counties colored by covid outbreak severity and icons for active wildfires' />
                            <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                <p><a className="stretched-link text-light" target="_blank" rel="noreferrer" href="https://clydebaron2000.github.io/Covid-Danger-Data/">Covid Danger Data</a></p>
                            </div>
                        </div>
                        <div className="ml-3"><a href="http://github.com/clydebaron2000/Covid-Danger-Data" target="_blank" rel="noopener noreferrer">Covid Danger Data Github repo</a></div>
                    </div>

                    <div className="col-sm-12 col-md-6 cardcol">
                        <div className="card">
                            <img className="card-img" src={Inn} alt='screenshot of a Multi User Dungeon (MUD) - a text based rpg.' />
                            <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                <p><a className="stretched-link text-light" target="_blank" rel="noreferrer" href="https://innattheedge.herokuapp.com">Inn At The Edge of Copyright</a></p>
                            </div>
                        </div>
                        <div className="ml-3"><a href="https://github.com/n-lambert/Inn-At-The-Edge-of-Copyright" target="_blank" rel="noopener noreferrer">Inn At The Edge of Copyright repo</a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 cardcol">
                        <div className="card">
                            <img className="card-img" src={Planner} alt='screenshot of workday scheduler website' />
                            <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                <p><a className="stretched-link text-light" target="_blank" rel="noreferrer" href="https://n-lambert.github.io/DayScheduler">Workday Scheduler</a></p>
                            </div>
                        </div>
                        <div className="ml-3"><a href="https://n-lambert.github.io/DayScheduler" target="_blank" rel="noopener noreferrer">Workday Scheduler repo</a></div>
                    </div>
                    <div className="col-sm-12 col-md-6 cardcol">
                        <div className="card">
                            <img className="card-img" src={Sandwich} alt='screenshot of Eat-A-Sandwich website' />
                            <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                <p><a className="stretched-link text-light" target="_blank" rel="noreferrer" href="https://fierce-sea-85603.herokuapp.com">Eat-A-Sandwich</a></p>
                            </div>
                        </div>
                        <div className="ml-3"><a href="https://github.com/n-lambert/sandwiches" target="_blank" rel="noopener noreferrer">Eat-A-Sandwich Github repo</a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 cardcol">
                        <div className="card">
                            <img className="card-img" src={CodeQuiz} alt='screenshot of code quiz website' />
                            <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                <p><a className="stretched-link text-light" target="_blank" rel="noreferrer" href="https://n-lambert.github.io/codeQuiz">Code Quiz</a></p>
                            </div>
                        </div>
                        <div className="ml-3"><a href="https://github.com/n-lambert/codeQuiz" target="_blank" rel="noopener noreferrer">Code Quiz repo</a></div>
                    </div>
                    <div className="col-sm-12 col-md-6 cardcol">
                        <div className="card">
                            <img className="card-img" src={Weather} alt='screenshot of Weather dashboard website' />
                            <div className="card-img-overlay d-flex align-items-end justify-content-center">
                                <p><a className="stretched-link text-light" target="_blank" rel="noreferrer" href="https://n-lambert.github.io/WeatherDashboard/">Weather Dashboard</a></p>
                            </div>
                        </div>
                        <div className="ml-3"><a href="https://github.com/n-lambert/WeatherDashboard" target="_blank" rel="noopener noreferrer">Weather Dashboard repo</a></div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Portfolio;
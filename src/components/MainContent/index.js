import React, { useContext } from "react";
import Projects from "../project";
import About from "../about";
import Contact from "../contact";
import "./styles.css";
import "./body.css";

const MainContent = () => {
    return (
        <div>
            <Projects/>
            <About/>
            <Contact/>
        </div>
    )

};

export default MainContent;
import React, { useContext } from "react";
import Projects from "../project";
import "./styles.css";
import "./body.css";

const MainContent = () => {
    return (
        <div>
            <h1>Projects:</h1>
            <Projects/>
        </div>
    )

};

export default MainContent;
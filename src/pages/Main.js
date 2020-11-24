import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import MainContent from "../components/MainContent";

function MainPage() {
    return(
        <div>
            <Header/>
                <MainContent/>
            <Footer/>
        </div>
    );
}

export default MainPage;
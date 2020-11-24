import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Content from "../components/content"

function MainPage() {
    return(
        <div>
            <Header/>
                <Content/>
            <Footer/>
        </div>
    );
}

export default MainPage;
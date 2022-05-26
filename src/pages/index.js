import * as React from "react";

import "../styles/index.scss";

import Title from "../components/Title";
import AboutPage from "../components/About";
import DownloadButton from "../components/Download";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const IndexPage = ({ isVisible }) => {
    return (
        <>
            <div>
                <DownloadButton />
                <Title />
                <AboutPage />
                <Contact />
            </div>
        </>
    );
};

export default IndexPage;

import * as React from "react";

import "../styles/index.scss";

import Title from "../components/Title";
import AboutPage from "../components/About";
import DownloadButton from "../components/Download";

const IndexPage = ({ isVisible }) => {
    return (
        <>
            <div>
                <DownloadButton />
                <Title />
                <AboutPage />
            </div>
        </>
    );
};

export default IndexPage;

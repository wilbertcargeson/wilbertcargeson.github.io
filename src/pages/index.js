import * as React from "react";

import "../styles/index.scss";

import Title from "../components/Title";
import AboutPage from "../components/About";

const IndexPage = ({ isVisible }) => {
    return (
        <>
            <div>
                <Title />
                <AboutPage />
            </div>
        </>
    );
};

export default IndexPage;

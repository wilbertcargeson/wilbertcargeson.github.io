import * as React from "react";

import ShowAvatar from "../components/Avatar";
import "../styles/index.scss";

const IndexPage = ({ isVisible }) => {
    return (
        <>
            <div className="main-page-container">
                <div className="main-border-container">
                    <h1 className="helloText">HELLO</h1>
                    <div className="avatarBox">
                        <ShowAvatar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default IndexPage;

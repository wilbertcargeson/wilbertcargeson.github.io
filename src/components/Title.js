import * as React from "react";
import { ReactDOM } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShowAvatar from "../components/Avatar";
import DownloadButton from "../components/Download";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const TitlePage = () => {
    return (
        <>
            <div className="titleBackground">
                <div className="headerContainer">
                    <p className="developement">
                        Stay tuned! I am still working on this site
                    </p>
                </div>
                <div className="title">
                    <div className="mainRow">
                        <ScrollAnimation animateIn="animate__bounce">
                            <div className="mainTitle">
                                <h1>Hi there!</h1>
                                <h1>I am Wilbert Cargeson</h1>
                            </div>
                        </ScrollAnimation>

                        <div className="avatarBox">
                            <ShowAvatar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TitlePage;

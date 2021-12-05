import * as React from "react";
import { ReactDOM } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShowAvatar from "../components/Avatar";
import DownloadButton from "../components/Download";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import myPicture from "../images/MyPicture.jpg";

const AboutPage = ({ isVisible }) => {
    return (
        <div className="aboutBackground">
            <div className="aboutContainer">
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                > */}
                <ScrollAnimation animateIn="animate__backInLeft">
                    <div className="aboutTextContainer">
                        <h1>About me</h1>
                        <p>
                            {" "}
                            A full stack developer, with great interest in game
                            development and 3D modelling. Likes Pokemon and
                            volleyball.{" "}
                        </p>
                        <br />
                        <hr />
                        <ul>
                            <li>
                                {" "}
                                University of Melbourne BSc, Computing and
                                Software Systems{" "}
                            </li>
                            <li> 2020-2021 - Web Developer - PPIA Unimelb </li>
                            <li> 2019 - Software Developer Intern - Shopee </li>
                        </ul>
                    </div>
                    {/* </motion.div> */}
                </ScrollAnimation>
                <img src={myPicture} alt="My Image" height={"400"} />
            </div>
        </div>
    );
};

export default AboutPage;

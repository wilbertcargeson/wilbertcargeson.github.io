import * as React from "react";
import { ReactDOM } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShowAvatar from "../components/Avatar";
import DownloadButton from "../components/Download";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import myPicture from "../images/MyPicture.jpg";

const Skills = ({ isVisible }) => {
    return (
        <div className="skillsBackground">
            <div className="aboutContainer">
                <div className="aboutTextContainer">
                    <h1>Skills</h1>
                    <p>Test</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;

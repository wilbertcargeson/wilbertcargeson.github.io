import * as React from "react";
import "animate.css/animate.min.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";

const Contact = ({ isVisible }) => {
    return (
        <div className="skillsBackground">
            <div className="center">
                <h1>Contact</h1>
                <div style={{ display: "flex" }}>
                    <AiOutlineMail />
                    <h2>wilbert.cargeson@gmail.com</h2>
                </div>
                <div style={{ display: "flex" }}>
                    <AiOutlinePhone />
                    <h2>+61488798841</h2>
                </div>
            </div>
        </div>
    );
};

export default Contact;

import * as React from "react";
import { ReactDOM } from "react";
import { AppBar } from "@mui/material";
import "../styles/index.scss";
import NavBar from "../components/Navbar";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimatePresence } from "framer-motion";
import ShowAvatar from "../components/Avatar";

const IndexPage = () => {
    return (
        <>
            <div className="mainRow">
                <div className="titleText">
                    <h1>Hi there! I am Wilbert Cargeson</h1>
                </div>
                <ShowAvatar />
            </div>
        </>
    );
};

export default IndexPage;

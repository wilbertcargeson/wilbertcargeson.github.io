import * as React from "react";
import { ReactDOM } from "react";
import { AppBar } from "@mui/material";
import "../styles/index.scss";
import NavBar from "../components/Navbar";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimatePresence } from "framer-motion";
import ShowAvatar from "../components/Avatar";
import { Box } from "@mui/system";

const IndexPage = () => {
    return (
        <>
            <div className="title">
                <div className="mainRow">
                    <Box width>
                        <h1 className="titleText">Hi there!</h1>
                        <h1 className="titleText">I am Wilbert Cargeson</h1>
                    </Box>

                    <ShowAvatar />
                </div>
            </div>
        </>
    );
};

export default IndexPage;

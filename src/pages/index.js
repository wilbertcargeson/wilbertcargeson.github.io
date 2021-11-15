import * as React from "react";
import { ReactDOM } from "react";
import { AppBar } from "@mui/material";
import "../styles/main.scss";
import NavBar from "../components/Navbar";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimatePresence } from "framer-motion";
import ShowAvatar from "../components/Avatar";

const IndexPage = () => {
    return (
        <>
            {/* <NavBar /> */}
            <h1>Hello there, this page is still under development</h1>
            <ShowAvatar />
        </>
    );
};

export default IndexPage;

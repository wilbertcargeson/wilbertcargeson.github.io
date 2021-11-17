import * as React from "react";
import { ReactDOM } from "react";
import { AppBar } from "@mui/material";
import "../styles/index.scss";
import NavBar from "../components/Navbar";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimatePresence, motion } from "framer-motion";
import ShowAvatar from "../components/Avatar";

const MainPage = () => {
    return (
        <>
            <NavBar />
            <h1>Hi! I am Wilbert Cargeson</h1>
        </>
    );
};

export default MainPage;

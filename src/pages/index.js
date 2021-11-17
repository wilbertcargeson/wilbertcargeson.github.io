import * as React from "react";
import { ReactDOM } from "react";
import { AppBar, IconButton, Button, Tooltip } from "@mui/material";
import "../styles/index.scss";
import NavBar from "../components/Navbar";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimatePresence, motion } from "framer-motion";
import ShowAvatar from "../components/Avatar";
import { Box } from "@mui/system";
import { AiOutlineDownload } from "react-icons/ai";
import { saveAs } from "file-saver";
import pdfFile from "../files/WilbertCargeson_Resume.pdf";

const IndexPage = ({ isVisible }) => {
    const downloadPDF = () => {
        saveAs(pdfFile, "WilbertCargeson_PDF");
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="title">
                    <div className="mainRow">
                        <div className="mainTitle">
                            <h1>Hi there!</h1>
                            <h1>I am Wilbert Cargeson</h1>
                        </div>

                        <ShowAvatar />
                    </div>
                </div>
            </motion.div>

            <div className="download">
                <Tooltip
                    title={
                        <h1
                            style={{
                                color: "black",
                                fontSize: "18px",
                            }}
                        >
                            Download Resume
                        </h1>
                    }
                    placement="left"
                >
                    <IconButton
                        aria-label="download"
                        sx={{
                            backgroundColor: "#f45e01ff",
                            "&:hover": {
                                backgroundColor: "#f45e01ff",
                                transform: "scale(1.08)",
                            },
                        }}
                        onClick={downloadPDF}
                    >
                        <AiOutlineDownload fontSize={75} />
                    </IconButton>
                </Tooltip>
            </div>

            <p className="developement">
                Stay tuned! I am still working on this site
            </p>
        </>
    );
};

export default IndexPage;

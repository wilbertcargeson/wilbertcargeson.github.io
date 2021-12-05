import * as React from "react";
import { ReactDOM } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ShowAvatar from "../components/Avatar";
import DownloadButton from "../components/Download";

const TitlePage = () => {
    return (
        <>
            <div className="titleBackground">
                <div className="headerContainer">
                    <p className="developement">
                        Stay tuned! I am still working on this site
                    </p>
                </div>
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

                            <div className="avatarBox">
                                <ShowAvatar />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default TitlePage;

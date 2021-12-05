import * as React from "react";
import { ReactDOM } from "react";
import { AppBar, IconButton, Button, Tooltip } from "@mui/material";
import { AiOutlineDownload } from "react-icons/ai";
import { saveAs } from "file-saver";
import pdfFile from "../files/Resume_WilbertCargeson.pdf";

const DownloadButton = () => {
    const downloadPDF = () => {
        saveAs(pdfFile, "WilbertCargeson_PDF");
    };
    return (
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
    );
};

export default DownloadButton;

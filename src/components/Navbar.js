import React from "react";
import { AppBar, Toolbar } from "@mui/material";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    backgroundColor: "#333",
                    border: "1.5px",
                    borderColor: "white",
                }}
            ></Toolbar>
        </AppBar>
    );
};

export default NavBar;

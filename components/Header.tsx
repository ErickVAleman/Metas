
import * as React from "react";
import Link from "next/link"
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton"
import Settings from "@material-ui/icons/Settings";
import Typography from "./UXTypography";

const theme = createMuiTheme({
    typography:{
        htmlFontSize: 10,
        useNextVariants: true,
    },
    overrides:{
        MuiAppBar: {
            root:{
                background: "linear-gradient(62grad,#000 62%,#1d4f9c 62%)",/* 'linear-gradient(26deg, #2196f3 15%, #E91E63 90%)', */
                height: 50,
                flexGrow: 1,
            },
        },
    },
});

const Header = () => (
    <MuiThemeProvider theme={theme} >
        <AppBar position="static" >
            <Toolbar variant="dense" >
                <Typography Color="inherit" >
                    Meta del Dia
                </Typography>
                <div className="float-right">
                    <Link href="/" >
                        <a className="links">Home</a>
                    </Link>
                    {' | '}
                    <Link href="/feedback" >
                        <a className="links" >Feedback</a>
                    </Link>
                    {' '}
                    <IconButton color="inherit" >
                        <Settings />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </MuiThemeProvider>
);

export default Header


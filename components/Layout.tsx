
import * as React from 'react';
import Header from "./Header";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import '../assets/styles.css';

const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
        height: "88vh",
        overflow: "auto",
        backgroundImage: "url('/static/674985.jpg')", // "#d8d8d880",
    }
});

const Layout = ({ children, classes }: { children: any, classes: any }) => (
    <div>
        <Header />
        <main className={classes.root} >
            { children }
        </main>
    </div>
)

Layout.propTypes ={
    children: PropTypes.any.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Layout);


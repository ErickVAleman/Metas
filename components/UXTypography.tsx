import * as React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        htmlFontSize: 10,
    },
    palette: {
        primary: { main: "#004767" },
        secondary: {
            light: "#0066ff",
            main: "#0044ff",
            contrastText: "#ffcc00"
        },
    },
})

type TColor = "inherit" | "primary" | "secondary" | "default" | "textPrimary" | "textSecondary" | "error" | undefined
type TVariant = "h1"| "h2"| "h3"| "h4"| "h5"| "h6"| "subtitle1"| "subtitle2"| "body1"| "body2"| "caption"| "button"| "overline"| "srOnly"| "inherit"| "display4"| "display3"| "display2"| "display1"| "headline"| "title"| "subheading"

const UXTypography = ({ children, Color, Variant }: { children: any, Color?: TColor, Variant?: TVariant }) => (
    <MuiThemeProvider theme={theme} >
        <Typography color={Color} variant={Variant} >{ children }</Typography>
    </MuiThemeProvider>
);

UXTypography.propTypes ={
    children: PropTypes.node.isRequired,
    Color: PropTypes.string,
    Variant: PropTypes.string
}

export default UXTypography
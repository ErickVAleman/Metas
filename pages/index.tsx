
import * as React from "react";
import Layout from "../components/Layout";
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card"
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";

const styles = (theme: any ) => ({
    root: {
        color: "#004767",
    }
});

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const Index = ({ classes }: { classes: any }) => (
    <Layout>
        <Grid style={{flexGrow: 1}} container spacing={16} >
            <Grid item xs>
                <Typography color="primary" variant="display1" style={{color: "#004767"}} >Home</Typography>
                <Divider />
            </Grid>
            <Grid item container spacing={16}>
                <Grid item xs >
                    <Card className={classes.root} style={{padding: "10px"}} >
                        <Typography variant="title" >Tu meta de hoy es: $50,000.00</Typography>
                        <br />
                        <Divider />
                        <br />
                        <Typography variant="title" >Tu venta es: $9,000.00</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} >
                    <Card className={classes.root} style={{padding: "10px"}} >
                        <Typography variant="h6" >Grafica de Valores</Typography>
                        <Divider />
                        <ResponsiveContainer width="100%" height={300} >
                            <LineChart data={data} >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    </Layout>
);

Index.propTypes = {
    classes: PropTypes.any.isRequired,
}

export default withStyles(styles)(Index);

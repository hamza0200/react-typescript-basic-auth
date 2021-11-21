import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, createStyles, Grid, makeStyles, Theme, Paper, LinearProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { MenuLogo } from "../Assets";
import AuthLogout from '../Auth/AuthLogout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolBarWrapper: {
        display: "flex",
        justifyContent: "space-between",
    },
    widgetWrapper: {
        padding: theme.spacing(2)
    },
    widgetTitle: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    gridCenter: {
        margin: "0 auto",
    },
  })
);
interface DashboardProps {
    data: any;
    loading: boolean;
    areas: string[];
}

// style paper component
const StyledPaper = withStyles((theme) => ({
    root: {
      padding: theme.spacing(0),
      marginTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
    }
}))(Paper);

const DashboardView: React.FC<DashboardProps> = ({data, loading, areas})=> {
  const classes = useStyles();
  return (
    <>
        {/* menu bar */}
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={classes.toolBarWrapper}>
                    <div><MenuLogo /></div>
                    {/* logout button */}
                    <div><AuthLogout /></div>
                </Toolbar>
            </AppBar>
        </Box>
        {/* content area */}
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={4}
                item
                className={classes.gridCenter}
                lg={10} sm={12} xs={12}
            >
                {/* iterate through each location */}
                {areas.map((area, i) => (
                    <Grid item xs={6} sm={4} className={classes.widgetWrapper} key={i}>
                        <StyledPaper elevation={6}>
                            <Box className={classes.widgetTitle} mb={2}>{area}</Box>
                            <Box className="align-center" mb={2} p={1}>
                                {/* weather condition */}
                                <Typography variant="body2" className="text-bold">{data[area]?.current?.condition?.text}</Typography>
                                {/* weather temperature */}
                                <Typography variant="h3" className="text-bold">{data[area]?.current?.temp_c}&deg;C</Typography>
                                {/* weather last updated */}
                                <Typography variant="caption" className="text-bold">Last updated: {data[area]?.current?.last_updated}</Typography>
                            </Box>
                        </StyledPaper>
                    </Grid>
                ))}
            </Grid>
            {/* show loader */}
            <Grid
                container
                spacing={3}
                style={{marginTop: 20}}>
                {loading && <LinearProgress style={{width: "100%"}}/>}
            </Grid>
        </Box>
    </>
  );
};

export default DashboardView;

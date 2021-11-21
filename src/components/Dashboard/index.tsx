import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, createStyles, Grid, makeStyles, Theme, Paper } from "@material-ui/core";
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
  })
);

const StyledPaper = withStyles((theme) => ({
    root: {
      padding: theme.spacing(0),
      marginTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
    }
}))(Paper);

const DashboardView = (): React.ReactElement => {
  const classes = useStyles();
  
  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={classes.toolBarWrapper}>
                    <div><MenuLogo /></div>
                    <div><AuthLogout /></div>
                </Toolbar>
            </AppBar>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
            <Grid
                container
                spacing={3}
            >
                <Grid item xs={4} className={classes.widgetWrapper}>
                    <StyledPaper elevation={6}>
                        <Box className={classes.widgetTitle} mb={2}>Dallas</Box>
                        <Box className="align-center" mb={3}>
                            <Typography variant="body2" className="text-bold">Partially Cloudy</Typography>
                            <Typography variant="h3" className="text-bold">26.1 C</Typography>
                            <Typography variant="caption" className="text-bold">Last updated: 11/10/2021</Typography>
                        </Box>
                    </StyledPaper>
                </Grid>   

                <Grid item xs={4} className={classes.widgetWrapper}>
                    <StyledPaper elevation={6}>
                        <Box className={classes.widgetTitle} mb={2}>Dallas</Box>
                        <Box className="align-center" mb={3}>
                            <Typography variant="body2" className="text-bold">Partially Cloudy</Typography>
                            <Typography variant="h3" className="text-bold">26.1 C</Typography>
                            <Typography variant="caption" className="text-bold">Last updated: 11/10/2021</Typography>
                        </Box>
                    </StyledPaper>
                </Grid> 

                <Grid item xs={4} className={classes.widgetWrapper}>
                    <StyledPaper elevation={6}>
                        <Box className={classes.widgetTitle} mb={2}>Dallas</Box>
                        <Box className="align-center" mb={3}>
                            <Typography variant="body2" className="text-bold">Partially Cloudy</Typography>
                            <Typography variant="h3" className="text-bold">26.1 C</Typography>
                            <Typography variant="caption" className="text-bold">Last updated: 11/10/2021</Typography>
                        </Box>
                    </StyledPaper>
                </Grid>  
                
            </Grid> 
        </Box>
    </>
  );
};

export default DashboardView;

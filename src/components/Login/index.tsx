import * as React from "react";
import { Box, Grid, Paper, Typography, TextField, Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Logo } from "../Assets";
import { withStyles } from "@material-ui/core/styles";
import { useSnackbar } from 'notistack';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridWrapper: {
      width: '100%', 
      maxWidth: '500px' 
    },
    fieldLabel: {
      "& .MuiFormLabel-root": {
        color: theme.palette.primary.contrastText,
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderWidth: 1
      },
    },
  })
);

// style paper component
const StyledPaper = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}))(Paper);

const LoginForm = (): React.ReactElement => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  // perform login and redirect to dashboard
  const handleLoginSubmit = () => {
    
    // sample username and password values
    const user = ['hamza', '12345'];

    // fields validation
    if(email === ''){
      enqueueSnackbar("Error! You must enter username or email address", { variant: "error" });
    }
    if(password === ''){
      enqueueSnackbar("Error! You must enter password", { variant: "error" });
    }

    if(email && password) {
      // if username and password matches, then save credentials in local storage
      if(email === user[0] && password === user[1]){
        localStorage.setItem('token', JSON.stringify(user));
        navigate("/dashboard");
      }else{
        // throw error if credentials are incorrect
          enqueueSnackbar("Error! Incorrect username or password", { variant: "error" });
      }
    }
  }

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        className="height-100vh"
      >
        {/* create login widget */}
        <Grid item className={classes.gridWrapper}>
          <StyledPaper elevation={6}>
            
            <Box className="align-center" mb={2}>
              <Logo />
            </Box>
            
            <Box className="align-center" mb={3}>
              <Typography variant="h3" className="text-bold">Login In</Typography>
              <Typography variant="body2" className="text-bold">Random Text Goes here!</Typography>
            </Box>
            
            {/* create login form */}
            <Box mb={4}>
              {/* create username field */}
              <TextField 
                onChange={(e) => setEmail(e.target.value)}
                label="Email" 
                size="small" 
                variant="outlined" 
                className={classes.fieldLabel} 
                focused 
                autoFocus 
                fullWidth 
                required 
              />
            </Box>
            
            <Box mb={4}>
              {/* create password field with hidden password */}
              <TextField 
                onChange={(e) => setPassword(e.target.value)}
                label="Password" 
                type="password"
                size="small" 
                variant="outlined" 
                className={classes.fieldLabel} 
                focused
                fullWidth 
                required 
              />
            </Box>

            <Box mb={4}>
              {/* create button */}
              <Button 
                onClick={handleLoginSubmit}
                variant="contained" 
                color="primary" 
                fullWidth>
                  Log In
              </Button>
            </Box>

        </StyledPaper>
        </Grid>   
      </Grid> 
    </>
  );
};

export default LoginForm;

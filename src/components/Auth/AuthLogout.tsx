import * as React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

// logout user and remove token from local storage
const AuthLogout = (): React.ReactElement => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token');
        navigate("/");
    }
    
    return (
        <Button 
            onClick={logout}
            color="default" 
            variant="contained"
        >
            Log Out
        </Button>
    )
};

export default AuthLogout;

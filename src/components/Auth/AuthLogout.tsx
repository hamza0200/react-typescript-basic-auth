import * as React from "react";
import { Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

// logout user and remove token from local storage
const AuthLogout = (): React.ReactElement => {
    const navigate = useNavigate();

    // handler to perform logout
    const logout = () => {
        // remove token from local storage
        localStorage.removeItem('token');
        navigate("/");
    }
    
    return (
        // logout button
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

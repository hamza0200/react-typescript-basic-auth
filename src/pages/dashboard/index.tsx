import * as React from "react";
import DashboardView from "../../components/Dashboard"

const Dashboard = (): React.ReactElement => {
  
  if(!localStorage.getItem('token')){
    window.location.href = "/";
  }

  return (
    <DashboardView />
  );
};

export default Dashboard;
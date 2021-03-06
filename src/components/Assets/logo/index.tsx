import * as React from "react";

// create main logo component
const Logo: React.FC = () => {
  return <img src={process.env.PUBLIC_URL + '/images/logo.png'} className="logo" alt="Weather API logo" />;
};

export default Logo;
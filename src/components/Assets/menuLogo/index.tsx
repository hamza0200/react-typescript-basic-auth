import * as React from "react";

const MenuLogo: React.FC = () => {
  return <img src={process.env.PUBLIC_URL + '/images/menu-icon.png'} className="menu-icon" alt="Weather API menu icon" />;
};

export default MenuLogo;
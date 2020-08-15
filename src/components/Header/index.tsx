import React, { useState } from "react";
import { Drawer } from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";
import history from "../../history";

const Header = React.memo(function Header(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleGoHome = () => {
    history.push("/");
  };

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div className="header">
      <h1>App Name</h1>
    </div>
  );
});

export default Header;
//<Menu onClick={handleDrawerToggle} />

//<Drawer
//variant="temporary"
//anchor={"left"}
//open={mobileOpen}
//onClose={handleDrawerToggle}
//ModalProps={{
//keepMounted: true, // Better open performance on mobile.
//}}
//>
//Drawer Content
//</Drawer>

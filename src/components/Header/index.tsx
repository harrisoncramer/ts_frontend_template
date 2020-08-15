import React, { useState } from "react";
import { Drawer, IconButton } from "@material-ui/core";
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
    <header className="header">
      <nav>
        <IconButton onClick={handleDrawerToggle} className="menuButton pointer">
          <Menu />
        </IconButton>
        <h1 onClick={handleGoHome} className="mainTitle pointer">
          Cloture
        </h1>
        <Drawer
          className="drawer"
          variant="temporary"
          anchor={"left"}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <IconButton onClick={handleDrawerToggle}>
            <Close />
          </IconButton>
          <div className="content">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </div>
        </Drawer>
      </nav>
    </header>
  );
});

export default Header;

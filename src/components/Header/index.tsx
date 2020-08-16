import React, { useState } from "react";
import { Drawer, IconButton } from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";
import history from "../../history";

import Links from "./links";

const Header = React.memo(function Header(props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleGoHome = () => {
    history.push("/");
  };

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <header className="header shadow">
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
          <IconButton className="close" onClick={handleDrawerToggle}>
            <Close />
          </IconButton>
          <Links
            setMobileOpen={setMobileOpen}
            links={[
              { label: "Calendar", link: "/calendar" },
              { label: "Senate", link: "/committees/senate" },
              { label: "House", link: "/committees/house" },
            ]}
          />
        </Drawer>
      </nav>
    </header>
  );
});

export default Header;

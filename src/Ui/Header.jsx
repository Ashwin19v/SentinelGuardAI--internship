import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, AppBar, Toolbar, Typography } from "@mui/material";
import SideBar from "./SideBar";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Cybersecurity Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      {isDrawerOpen && <SideBar handleDrawerToggle={handleDrawerToggle} />}
    </>
  );
};

export default Header;

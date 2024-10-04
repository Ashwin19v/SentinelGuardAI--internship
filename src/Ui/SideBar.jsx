import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";

import AlertIcon from "@mui/icons-material/Warning";
import SettingsIcon from "@mui/icons-material/Settings";
import InsightsIcon from "@mui/icons-material/Insights";

const drawerWidth = 240;

const SideBar = ({ handleDrawerToggle }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          backgroundColor: " #2d3748",
          color: "#ffffff",
          boxSizing: "border-box",
          borderRight: "1px solid #000102FF",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 2,
          borderBottom: "1px solid #010918FF",
          bgcolor: "#2d3748",
        }}
      >
        <Typography variant="h6" sx={{ color: "#ffffff" }}>
          Panel
        </Typography>
        <div onClick={handleDrawerToggle} style={{ cursor: "pointer" }}>
          <MenuIcon sx={{ color: "#ffffff" }} />
        </div>
      </Box>

      <List sx={{ width: drawerWidth, py: 0 }}>
        <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
          <ListItemIcon>
            <DashboardIcon sx={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/network-anomalies"
          onClick={handleDrawerToggle}
        >
          <ListItemIcon>
            <InsightsIcon sx={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary="Network Anomaly" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/alerts"
          onClick={handleDrawerToggle}
        >
          <ListItemIcon>
            <AlertIcon sx={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary="Security Alerts" />
        </ListItem>

        <Divider sx={{ backgroundColor: "#E8EAEDFF", margin: "8px 0" }} />

        <ListItem
          button
          component={Link}
          to="/settings"
          onClick={handleDrawerToggle}
        >
          <ListItemIcon>
            <SettingsIcon sx={{ color: "#ffffff" }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;

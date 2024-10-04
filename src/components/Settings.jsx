import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
  Switch,
  FormControlLabel,
  Paper,
} from "@mui/material";

const Settings = () => {
  const [username, setUsername] = useState("john_doe");
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");
  const [twoFactor, setTwoFactor] = useState(false);
  const [notification, setNotification] = useState("Email");
  const [darkMode, setDarkMode] = useState(false);

  const handleSaveChanges = () => {
    console.log("Changes saved:", {
      username,
      email,
      password,
      twoFactor,
      notification,
      darkMode,
    });
  };

  return (
    <Box className="bg-gray-900 min-h-screen p-4">
      <Box mt={4}>
        <Typography variant="h4" className="text-white mb-4">
          Profile Information
        </Typography>
        <Paper className="p-4 bg-gray-100">
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-100 text-white"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 text-white"
          />
          <TextField
            label="New Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-100 text-white"
          />
        </Paper>

        <Typography variant="h4" className="text-white mt-4 mb-2">
          Security Settings
        </Typography>
        <Paper className="p-4 bg-gray-100">
          <FormControlLabel
            control={
              <Switch
                checked={twoFactor}
                onChange={(e) => setTwoFactor(e.target.checked)}
                color="primary"
              />
            }
            label="Enable Two-Factor Authentication"
            className="text-white"
          />
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="notification-label" className="text-white">
              Notification Method
            </InputLabel>
            <Select
              labelId="notification-label"
              value={notification}
              onChange={(e) => setNotification(e.target.value)}
              className="bg-gray-100 text-white"
            >
              <MenuItem value="Email">Email</MenuItem>
              <MenuItem value="SMS">SMS</MenuItem>
              <MenuItem value="Push Notification">Push Notification</MenuItem>
            </Select>
          </FormControl>
        </Paper>

        <Typography variant="h4" className="text-white mt-4 mb-2">
          Appearance
        </Typography>
        <Paper className="p-4 bg-gray-100 mb-4">
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                color="primary"
              />
            }
            label="Dark Mode"
            className="text-white"
          />
        </Paper>

        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveChanges}
          className="mt-4"
        >
          Save Changes
        </Button>
      </Box>
    </Box>
  );
};

export default Settings;

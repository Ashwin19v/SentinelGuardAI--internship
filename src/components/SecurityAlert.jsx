import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Modal,
  AppBar,
  Toolbar,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
} from "@mui/material";

const alertsData = [
  {
    id: 1,
    type: "Phishing",
    severity: "High",
    message: "Multiple phishing attempts detected.",
    timestamp: "2024-10-04 14:30",
  },
  {
    id: 2,
    type: "Malware",
    severity: "Medium",
    message: "Malware detected in the system.",
    timestamp: "2024-10-04 13:15",
  },
  {
    id: 3,
    type: "Ransomware",
    severity: "Critical",
    message: "Ransomware activity reported!",
    timestamp: "2024-10-04 12:45",
  },
  {
    id: 4,
    type: "Phishing",
    severity: "High",
    message: "Multiple phishing attempts detected.",
    timestamp: "2024-10-04 14:30",
  },
  {
    id: 5,
    type: "Malware",
    severity: "Medium",
    message: "Malware detected in the system.",
    timestamp: "2024-10-04 13:15",
  },
  {
    id: 6,
    type: "Ransomware",
    severity: "Critical",
    message: "Ransomware activity reported!",
    timestamp: "2024-10-04 12:45",
  },
  {
    id: 7,
    type: "Phishing",
    severity: "High",
    message: "Multiple phishing attempts detected.",
    timestamp: "2024-10-04 14:30",
  },
  {
    id: 8,
    type: "Malware",
    severity: "Medium",
    message: "Malware detected in the system.",
    timestamp: "2024-10-04 13:15",
  },
  {
    id: 9,
    type: "Ransomware",
    severity: "Critical",
    message: "Ransomware activity reported!",
    timestamp: "2024-10-04 12:45",
  },
];

const SecurityAlert = () => {
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const handleOpen = (alert) => {
    setSelectedAlert(alert);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAlert(null);
  };

  const filteredAlerts = alertsData.filter((alert) => {
    return filter === "All" || alert.severity === filter;
  });

  return (
    <Box className="bg-gray-900 min-h-screen p-4">
      <Typography variant="h4" gutterBottom className="text-white my-4">
        Recent Security Alerts
      </Typography>

      <FormControl variant="outlined" className="mb-4" sx={{ minWidth: 200 }}>
        <InputLabel id="filter-label" className="text-white">
          Filter by Severity
        </InputLabel>
        <Select
          labelId="filter-label"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          label="Filter by Severity"
          className="bg-gray-800 text-white"
          sx={{
            "& .MuiSelect-select": {
              backgroundColor: "#1f2937",
              color: "#ffffff",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#4b5563",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fbbf24",
            },
          }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Critical">Critical</MenuItem>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} mt={3}>
        {filteredAlerts.map((alert) => (
          <Grid item xs={12} sm={6} md={4} key={alert.id}>
            <Paper
              elevation={3}
              className={`p-4 transition-transform transform hover:scale-105 duration-200 ${
                alert.severity === "Critical"
                  ? "bg-red-600 text-white"
                  : alert.severity === "High"
                  ? "bg-orange-600 text-white"
                  : alert.severity === "Medium"
                  ? "bg-yellow-600 text-black"
                  : "bg-green-600 text-white"
              }`}
              onClick={() => handleOpen(alert)}
            >
              <Box display="flex" alignItems="center">
                <Alert className="mr-2" style={{ color: "inherit" }} />
                <Typography variant="h6" className="font-bold">
                  {alert.type}
                </Typography>
              </Box>
              <Typography variant="body1" className="mt-2">
                {alert.message}
              </Typography>
              <Typography variant="caption" className="block mt-1">
                {alert.timestamp}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box className="p-4 max-w-md mx-auto mt-20 bg-gray-800 rounded shadow-lg">
          {selectedAlert && (
            <>
              <Typography variant="h5" className="text-white">
                {selectedAlert.type}
              </Typography>
              <Typography variant="body1" className="text-white">
                {selectedAlert.message}
              </Typography>
              <Typography variant="body2" className="text-gray-300">
                Severity: {selectedAlert.severity}
              </Typography>
              <Typography variant="caption" className="text-gray-400">
                Detected on: {selectedAlert.timestamp}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClose}
                className="mt-4"
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default SecurityAlert;

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  Modal,
  Paper,
  TextField,
  Alert,
} from "@mui/material";

const anomaliesData = [
  {
    id: 1,
    type: "Unusual Traffic",
    severity: "High",
    sourceIP: "192.168.1.5",
    destinationIP: "10.0.0.5",
    timestamp: "2024-10-04 14:30",
    description: "High traffic detected from unusual IP.",
  },
  {
    id: 2,
    type: "Potential Breach",
    severity: "Critical",
    sourceIP: "192.168.1.10",
    destinationIP: "10.0.0.15",
    timestamp: "2024-10-04 13:15",
    description: "Possible breach detected in network.",
  },
  {
    id: 3,
    type: "Suspicious Activity",
    severity: "Medium",
    sourceIP: "192.168.1.20",
    destinationIP: "10.0.0.25",
    timestamp: "2024-10-04 12:45",
    description: "Suspicious activity reported.",
  },
  {
    id: 4,
    type: "Unusual Traffic",
    severity: "High",
    sourceIP: "192.168.1.5",
    destinationIP: "10.0.0.5",
    timestamp: "2024-10-04 14:30",
    description: "High traffic detected from unusual IP.",
  },
  {
    id: 5,
    type: "Potential Breach",
    severity: "Critical",
    sourceIP: "192.168.1.10",
    destinationIP: "10.0.0.15",
    timestamp: "2024-10-04 13:15",
    description: "Possible breach detected in network.",
  },
  {
    id: 6,
    type: "Suspicious Activity",
    severity: "Medium",
    sourceIP: "192.168.1.20",
    destinationIP: "10.0.0.25",
    timestamp: "2024-10-04 12:45",
    description: "Suspicious activity reported.",
  },
];

const NetworkAnomaly = () => {
  const [selectedAnomaly, setSelectedAnomaly] = useState(null);
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const handleOpen = (anomaly) => {
    setSelectedAnomaly(anomaly);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAnomaly(null);
  };

  const filteredAnomalies = anomaliesData.filter((anomaly) => {
    const matchesSeverity = filter === "All" || anomaly.severity === filter;
    const matchesSearch = anomaly.description
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesSeverity && matchesSearch;
  });

  return (
    <Box className="bg-gray-900 min-h-screen p-4">
      <Typography variant="h4" gutterBottom className="text-white my-4">
        Recent Network Anomalies
      </Typography>

      <Grid container spacing={3} className="mb-4">
        <Grid item xs={12} sm={6} md={3}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="filter-label" className="text-white">
              Filter by Severity
            </InputLabel>
            <Select
              labelId="filter-label"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              label="Filter by Severity"
              className="bg-gray-500 text-white"
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Critical">Critical</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            className="bg-gray-500 text-white"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
      </Grid>

      <TableContainer component={Paper} className="bg-gray-800">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="text-white">ID</TableCell>
              <TableCell className="text-white">Type</TableCell>
              <TableCell className="text-white">Severity</TableCell>
              <TableCell className="text-white">Source IP</TableCell>
              <TableCell className="text-white">Destination IP</TableCell>
              <TableCell className="text-white">Timestamp</TableCell>
              <TableCell className="text-white">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAnomalies.map((anomaly) => (
              <TableRow
                key={anomaly.id}
                className="hover:bg-gray-300 transition duration-200"
              >
                <TableCell className="text-white">{anomaly.id}</TableCell>
                <TableCell className="text-white">{anomaly.type}</TableCell>
                <TableCell
                  className={`text-white ${
                    anomaly.severity === "Critical"
                      ? "bg-red-600"
                      : anomaly.severity === "High"
                      ? "bg-orange-600"
                      : "bg-yellow-600"
                  }`}
                >
                  {anomaly.severity}
                </TableCell>
                <TableCell className="text-white">{anomaly.sourceIP}</TableCell>
                <TableCell className="text-white">
                  {anomaly.destinationIP}
                </TableCell>
                <TableCell className="text-white">
                  {anomaly.timestamp}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleOpen(anomaly)}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal open={open} onClose={handleClose}>
        <Box className="p-4 max-w-md mx-auto mt-20 bg-gray-800 rounded shadow-lg">
          {selectedAnomaly && (
            <>
              <Typography variant="h5" className="text-white">
                {selectedAnomaly.type}
              </Typography>
              <Typography variant="body1" className="text-white">
                {selectedAnomaly.description}
              </Typography>
              <Typography variant="body2" className="text-gray-300">
                Severity: {selectedAnomaly.severity}
              </Typography>
              <Typography variant="caption" className="text-gray-400">
                Source IP: {selectedAnomaly.sourceIP}
              </Typography>
              <Typography variant="caption" className="text-gray-400">
                Destination IP: {selectedAnomaly.destinationIP}
              </Typography>
              <Typography variant="caption" className="text-gray-400">
                Detected on: {selectedAnomaly.timestamp}
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

export default NetworkAnomaly;

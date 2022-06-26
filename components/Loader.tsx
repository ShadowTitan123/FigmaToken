import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

export default function LinearIndeterminate() {
  return (
    <Box sx={{ height: 200, width: "100%", mt: 50, align: "center" }}>
      <Typography variant="h6" gutterBottom>
        Fetching your theme from Figma
      </Typography>
      <LinearProgress />
    </Box>
  );
}

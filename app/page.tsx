"use client";

import { Box, Typography } from "@mui/material";
import { Unstable_NumberInput as NumberInput } from '@mui/base';
import React, { useState } from 'react';
import BasicModal from "./modal";

// Start with npm run dev
export default function Home() {
  const [savings, setSavings] = useState<number | null>(null)

  return (
    // Outer Box
    <Box
      sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30vh"
        }}
    >

      {/* Inner box for header */}
      <Box>
        <Typography variant="h3" gutterBottom align="center">
          Hey gherl, how much do you have in your savings?
        </Typography>
      </Box>
      
      {/* Outer box for number input */}
      <Box
        sx={{ '& input': { backgroundColor: 'white', color: 'black', fontSize: '1.5rem', padding: '12px', width: '50vw' } }}
      >
          <NumberInput
            aria-label="Number input"
            placeholder="Check ur savings and type it here..."
            value={savings}
            onChange={(event, val) => setSavings(val)}
          />
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "nowrap",
          flexDirection: "column",
          alignItems: "center",
          margin: "20px"
        }}
      >
        <BasicModal savings={savings}/>
      </Box>

    </Box>
  );
}

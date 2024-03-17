"use client";
import Paper from "@mui/material/Paper";
import { alpha } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import BinaryInputField from "./TextField";

const byteMap = new Map([
  [0, false],
  [1, false],
  [2, false],
  [3, false],
  [4, false],
  [5, false],
  [6, false],
  [7, false],
]);

export default function UserInput() {
  const [byteValue, setByteValue] = useState(byteMap);

  return (
    <Container maxWidth="md">
      <Paper
        elevation={23}
        sx={{
          borderRadius: "16px",
        }}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignContent: "center",

            borderRadius: "16px",
            height: "500px",
            backgroundColor:
              theme.palette.mode === "light"
                ? "primary.light"
                : "primary.light",
          })}
        >
          <Typography
            variant="h2"
            sx={{
              height: "10%",
              textAlign: "center",
              my: 2,
              flexGrow: 0,
              flexShrink: 0,
            }}
          >
            8-Bit String Converter
          </Typography>
          <Stack
            direction={"row"}
            sx={{ width: "100%", flexWrap: "nowrap", justifyContent: "center" }}
          >
            <BinaryInputField index={0} />
            <BinaryInputField index={1} />
            <BinaryInputField index={2} />
            <BinaryInputField index={3} />
            <BinaryInputField index={4} />
            <BinaryInputField index={5} />
            <BinaryInputField index={6} />
            <BinaryInputField index={7} />
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}

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
  const binaryIndexToPowerOfTwo = new Map([
    [7, 1],
    [6, 2],
    [5, 4],
    [4, 8],
    [3, 16],
    [2, 32],
    [1, 64],
    [0, 128],
  ]);
  const [byteValue, setByteValue] = useState(byteMap);
  const [decimalValue, setDecimalValue] = useState(0);

  const updateByte = (key, value) => {
    const newValue = value !== "1" ? false : true;
    setByteValue(new Map([...byteValue, [key, newValue]]));
  };

  useEffect(() => {
    console.log("running");
    // create a sum starting at 0
    //For each key in the byteValue map, access the correspoding key in the bindaryINdex to power of two.
    // If the value in byteValue map is false, do nothing
    // if the value in byteValue map is true, add the value of the binaryIndex to the sum.
    // After iterating through the entire byteValuemap, set decimalValue to the value of sum.

    let sum = 0;

    byteValue.forEach((value, key) => {
      if (value) {
        const digitValue = binaryIndexToPowerOfTwo.get(key);
        sum += digitValue;
      }
    });
    setDecimalValue(sum);
  }, [byteValue]);

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
            {Array.from(byteValue, ([key, value]) => (
              <BinaryInputField
                onInputChange={updateByte}
                index={key}
                key={key}
              />
            ))}
          </Stack>
          <Typography variant="h5">{decimalValue}</Typography>
        </Box>
      </Paper>
    </Container>
  );
}

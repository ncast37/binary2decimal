"use client";
import Paper from "@mui/material/Paper";
import { alpha } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Hero() {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "35vh",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg,#2F024F 15%, #6709AA 40%, #B355F6 60%, transparent 80%) "
            : `linear-gradient(180deg, #D49CFC 0%, ${alpha("#6709AA", 0.9)} 40%, #3B0363 70%, transparent 100%)`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      })}
    ></Box>
  );
}

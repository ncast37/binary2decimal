"use client";
import Button from "@mui/material/Button";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Box from "@mui/material/Box";
import { ThemeContext } from "@/ThemeContextWrapper";
import { useContext } from "react";
import { useTheme } from "@mui/material";
import { alpha } from "@mui/material/styles";

export default function ThemeToggleButton() {
  const toggleTheme = useContext(ThemeContext);
  const theme = useTheme();
  const iconSize = "small";
  return (
    <Button
      size="small"
      variant="contained"
      sx={(theme) => ({
        maxHeight: "32px",
        maxWidth: "32px",
        backgroundColor:
          theme.palette.mode === "light" ? "secondary.main" : "secondary.main",
        backgroundImage: "none",
        outline: `1px solid ${theme.palette.secondary.light}`,
        "&:hover": {
          background:
            theme.palette.mode === "light" ? "success.dark" : "success.main",
          backgroundImage: "none",
          boxShadow: `0 0 0 2px  ${alpha("#E9CEFD", 0.5)}`,
        },
      })}
      onClick={toggleTheme}
    >
      {theme.palette.mode === "light" ? (
        <ModeNightIcon fontSize={iconSize} color="#FFF" />
      ) : (
        <WbSunnyIcon fontSize={iconSize} />
      )}
    </Button>
  );
}

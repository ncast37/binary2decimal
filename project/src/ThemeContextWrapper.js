"use client";
import { createContext, useState, useEffect } from "react";
import { createTheme } from "@mui/material";
import getTheme from "./getTheme";
import { ThemeProvider } from "@mui/material";

// Create context
export const ThemeContext = createContext();

export default function ThemeContextWrapper({ children }) {
  // Manage visual state (light and dark mode)
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  // Just to track mode in development - remove later
  useEffect(() => {
    console.log(`Changing mode: ${mode}`);
  }, [mode]);

  const theme = createTheme(getTheme(mode));

  return (
    <ThemeContext.Provider value={toggleMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

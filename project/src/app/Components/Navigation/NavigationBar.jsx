"use client";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import ThemeToggleButton from "./themeToggle";

export default function NavigationBar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent",
        boxShadow: 0,
        mt: 2,
        backgroundImage: "none",
      }}
    >
      <Container maxWidth="md">
        <ToolBar
          variant="regular"
          sx={(theme) => ({
            height: "10px",
            borderRadius: "999px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexShrink: 0,
            width: "100%",
            bgcolor:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.4)"
                : "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(24px)",
            border: "1px solid",
            borderColor: "divider",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
          })}
        >
          <Box>Thing 1</Box>
          <Box>Thing 2</Box>
          <Box>
            <ThemeToggleButton />
          </Box>
        </ToolBar>
      </Container>
    </AppBar>
  );
}

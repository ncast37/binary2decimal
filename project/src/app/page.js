import Image from "next/image";
import Container from "@mui/material/Container";
import NaviationBar from "./Components/Navigation/NavigationBar";
import Box from "@mui/material/Box";
import Hero from "./Components/ConverterFeature/Hero";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
      }}
    >
      <NaviationBar />
      <Hero />
    </Box>
  );
}

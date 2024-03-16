import Container from "@mui/material/Container";

export default function ClientContainer({ children }) {
  return (
    <Container
      disableGutters
      maxWidth="fixed"
      id="__next"
      sx={{
        height: "100vh",
        backgroundColor: "defaultBG",
      }}
    >
      {children}
    </Container>
  );
}

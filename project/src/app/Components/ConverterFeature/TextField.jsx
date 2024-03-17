import { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

export default function BinaryInputField({ digit, index }) {
  // False represents the digit 0
  // True represents the digit 1

  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEvent = (e) => {
    const v = e.key;
    setInputValue(v === "1" || v === "0" ? v : "");
  };

  return (
    <Box
      id="test"
      sx={{ display: "flex", flexDirection: "column", ml: "10px" }}
    >
      <TextField
        value={inputValue}
        onKeyDown={(e) => handleEvent(e)}
        id={`textField_${index}`}
        sx={{
          alignSelf: "center",
          "& .MuiOutlinedInput-root": {
            minWidth: "20px",
            maxWidth: "24px",
            borderRadius: "0px",
            textAlign: "center",
            backgroundOrigin: "border-box",
            border: isValid ? "" : "2px solid red",
          },
        }}
        inputProps={{
          inputMode: "numeric",
          pattern: "[01]*",
          maxLength: "1ch",
        }}
      />
      <Typography variant="body2">{`bit: ${index}`}</Typography>
    </Box>
  );
}

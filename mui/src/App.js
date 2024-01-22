import "./App.css";
import { Box, Stack, createTheme } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette:{
      mode:mode,
    }
  })

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{ backgroundColor: "background.default", color: "text.primary" }}
      >
        <Navbar />
        <Stack direction={"row"} spacing={{ xs: 0, sm: 2 }}>
          <Sidebar  setMode={setMode} mode={mode}/>
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
      </ThemeProvider>
    </>
  );
}

export default App;

import "./App.css";
import { Box } from "@mui/material";
import MainLayout from "./components/MainLayout";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [openTwoChart, setOpenTwoChart] = useState<boolean>(true);

  return (
    <Box display="flex">
      <MainLayout open={openTwoChart} />
      <Sidebar open={openTwoChart} setOpen={setOpenTwoChart} />
    </Box>
  );
}

export default App;

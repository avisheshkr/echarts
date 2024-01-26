import "./App.css";
import { Box } from "@mui/material";
import MainLayout from "./components/MainLayout";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import { data } from "./data/data";

function App() {
  const [openTwoChart, setOpenTwoChart] = useState<boolean>(true);
  const [chartData, setChartData] = useState(data);

  return (
    <Box display="flex">
      <MainLayout open={openTwoChart} data={chartData} />
      <Sidebar
        open={openTwoChart}
        setOpen={setOpenTwoChart}
        setData={setChartData}
        data={chartData}
      />
    </Box>
  );
}

export default App;

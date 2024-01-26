import { Add, ArrowDropDown, CalendarToday } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import ReusableButton from "./ReusableButton";
import ECharts from "./ECharts";
import {
  generateOptionsForNegativeBar,
  generateOptionsForWaterfall,
  generateOptionsForYCategory,
} from "../utils/generateOptions";
import { data, data2 } from "../data/data";
import { useState } from "react";
import * as echarts from "echarts";

// type openProps = {
//   open: boolean,
//   setOpen: boolean,
// }

const MainLayout = (props: any) => {
  const { open } = props;
  const [selectedChart, setSelectedChart] = useState<echarts.ECharts | null>(
    null
  );
  return (
    <Box flex={1} p={3}>
      {open ? (
        <>
          <Box display="flex" gap={0.5}>
            <Typography variant="h6" fontWeight="bold">
              Comparison of high performer resignation rates to the overall
              resignation rate
            </Typography>
            <Box
              width={30}
              height={30}
              bgcolor="#000"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={0.5}
            >
              <ArrowDropDown sx={{ color: "#fff" }} />
            </Box>
          </Box>
          <Typography variant="body2">
            Do high performers resign more often than others?
          </Typography>
        </>
      ) : (
        <ReusableButton text="Employee Movement Breakdown" open={open} />
      )}
      <Box mt={open ? 3 : 2} display="flex" gap={3}>
        <ReusableButton
          text={
            <>
              <CalendarToday fontSize="small" />
              <Typography
                component="span"
                variant="body2"
                fontWeight={open ? "700" : "500"}
                ml={1}
              >
                {open ? "Mar 2019" : "2019"}
              </Typography>
            </>
          }
        />

        <ReusableButton
          text={
            <>
              <Add fontSize="small" />
              <Typography
                component="span"
                variant="body2"
                fontWeight={open ? "700" : "500"}
                ml={1}
              >
                {open ? "Add a filter" : "Add filter"}
              </Typography>
            </>
          }
        />
      </Box>
      <Box
        display="flex"
        mt={3}
        width="100%"
        justifyContent="space-between"
        // position="relative"
      >
        {open ? (
          <>
            <ECharts
              chartOptions={generateOptionsForYCategory(data)}
              width="50%"
              open={open}
            />
            <ECharts
              chartOptions={generateOptionsForNegativeBar(data)}
              width="50%"
              open={open}
            />
          </>
        ) : (
          <>
            <ECharts
              chartOptions={generateOptionsForWaterfall(data2, selectedChart)}
              type="waterfall"
              width="100%"
              open={open}
              setSelectedChart={setSelectedChart}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;

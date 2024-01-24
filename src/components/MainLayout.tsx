import { Add, ArrowDropDown, CalendarToday } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import ReusableButton from "./ReusableButton";
import ECharts from "./ECharts";
import { optionsForNegative } from "../data/dataForBarNegative";
import { optionForYcategory } from "../data/dataForYcategory";
import { optionsWaterfall } from "../data/waterfallData";

// type openProps = {
//   open: boolean,
//   setOpen: boolean,
// }

const MainLayout = (props: any) => {
  const { open } = props;
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
        position="relative"
      >
        {open ? (
          <>
            <ECharts
              chartOptions={optionForYcategory}
              width="50%"
              open={open}
            />
            <ECharts
              chartOptions={optionsForNegative}
              width="50%"
              open={open}
            />
          </>
        ) : (
          <>
            <Typography
              position="absolute"
              right={15}
              bottom={205}
              textAlign="center"
              lineHeight={1}
            >
              <strong>5.23k</strong>
              <br />
              <Typography component="span" fontSize={12} fontWeight="300">
                Ending
                <br />
                Headcount
              </Typography>
            </Typography>
            <Typography
              position="absolute"
              bottom={0}
              textAlign="center"
              lineHeight={1}
            >
              <strong>4.85k</strong>
              <br />
              <Typography component="span" fontSize={12} fontWeight="300">
                Ending
                <br />
                Headcount
              </Typography>
            </Typography>
            <ECharts chartOptions={optionsWaterfall} width="100%" open={open} />
          </>
        )}
      </Box>
    </Box>
  );
};

export default MainLayout;

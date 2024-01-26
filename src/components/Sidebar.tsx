import { Box, Button, Divider, Typography } from "@mui/material";
import SummaryTable from "./SummaryTable";
import ReusableButton from "./ReusableButton";
import IconMenu from "./IconMenu";
import MovementList from "./MovementList";
import { data, data2 } from "../data/data";

const Sidebar = (props: any) => {
  const { open, setOpen, setData } = props;

  return (
    <Box
      width={300}
      height="100vh"
      bgcolor="#F3F4F6"
      boxShadow="0 0 10px 1px rgba(0, 0, 0, 0.2)"
      position="relative"
    >
      <IconMenu setOpen={setOpen} open={open} />
      <Typography fontWeight="700" pl={2} pt={open ? 0 : 2}>
        {open ? "Summary" : "Net Change"}
      </Typography>
      {open && (
        <Typography fontWeight="700" variant="body2" pl={2} mt={2}>
          Apr 2018 - Mar 2019
        </Typography>
      )}
      <Box
        bgcolor="#fff"
        ml={open ? 1 : 0.5}
        mr={open ? 0 : 0.5}
        mt={1}
        px={open ? 1 : 0}
      >
        <SummaryTable
          name={open ? "Overall" : "Headcount"}
          value={open ? "14.0 %" : "+379"}
          color={open ? "#4789F6" : "inherit"}
        />
        <Divider />
        <SummaryTable
          name={open ? "Resignation Count" : "Starting Headcount"}
          value={open ? "639" : "4.85k"}
          color={open ? "gray" : "inherit"}
        />
        <Divider />
        <SummaryTable
          name={open ? "Average Headcount" : "Ending Headcount"}
          value={open ? "4.58 K" : "5.23k"}
          color={open ? "gray" : "inherit"}
        />
        <Divider />
        <SummaryTable
          name={open ? "High Performer" : "Net in"}
          value={open ? "14.1 %" : "720"}
          color={open ? "red" : "inherit"}
        />
        <Divider />
        <SummaryTable
          name={open ? "Resignation Count" : "Net out"}
          value={open ? "152" : "348"}
          color={open ? "gray" : "inherit"}
        />
        {open && (
          <>
            <Divider />
            <SummaryTable name="Average Headcount" value="108 K" />
            <Divider />
            <SummaryTable name="Difference" value="-0.16 pp" color="#29C661" />
          </>
        )}
      </Box>
      <Box p={3} pb={open ? 2 : 1}>
        {open && <ReusableButton text="View details" fullWidth />}
        <Typography variant="body2" fontWeight="700" mt={1} mb={0.5}>
          Legend
        </Typography>
        <Divider sx={{ color: "rgba(0, 0, 0, 0.1)" }} />
        {!open && (
          <Typography variant="body2" fontSize={10} fontWeight="700" mt={1}>
            Movement Summary
          </Typography>
        )}
        {open && (
          <Box bgcolor="#fff" mt={1} p={1}>
            <Typography
              variant="body2"
              fontSize={13}
              fontWeight="700"
              color="gray"
            >
              Not all data items are shown in this chart.
              <br />
              To show these values, go to
            </Typography>
            <Button size="small" sx={{ p: 0 }}>
              Chat Settings
            </Button>
          </Box>
        )}
      </Box>
      {!open && (
        <Box bgcolor="#fff" mr={0.5} ml={3} px={open ? 1 : 0}>
          <MovementList name="Scans" color="rgba(75, 222, 129)" />
          <Divider />
          <MovementList name="Exits" color="rgba(249, 133, 133)" />
          <Divider />
          <MovementList name="Discrepancies" color="#C4C8CF" />
          <Divider />
          <MovementList name="Net Change" color="#93C5FD" />
        </Box>
      )}
      <Box display="flex" justifyContent="center" gap={2} mt={5}>
        <Button variant="outlined" onClick={() => setData(data)}>
          Data1
        </Button>
        <Button variant="outlined" onClick={() => setData(data2)}>
          Data2
        </Button>
      </Box>
    </Box>
  );
};

export default Sidebar;

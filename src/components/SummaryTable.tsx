import { Box, Typography } from "@mui/material";

type tableProps = {
  name: string;
  value: string;
  color?: string;
};

const SummaryTable = ({ name, value, color }: tableProps) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      p={1}
      color={color ? color : "gray"}
    >
      <Typography variant="body2" fontSize={13} fontWeight="bold">
        {name}
      </Typography>
      <Typography variant="body2" fontSize={13} fontWeight="bold">
        {value}
      </Typography>
    </Box>
  );
};

export default SummaryTable;

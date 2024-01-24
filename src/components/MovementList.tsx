import { Circle } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

type listProps = {
  name: string;
  color: string;
};

const MovementList = ({ name, color }: listProps) => {
  return (
    <Box display="flex" alignItems="center" p={1} gap={1}>
      <Circle sx={{ fontSize: 8, color: color }} />
      <Typography variant="body2" fontSize={12} fontWeight="bold" color={color}>
        {name}
      </Typography>
    </Box>
  );
};

export default MovementList;

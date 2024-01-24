import {
  ExpandCircleDown,
  List,
  Settings,
  WindowOutlined,
} from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { BsInfo } from "react-icons/bs";

type iconProps = {
  icon: React.ReactNode;
  bgColor?: string;
  handleOpen?: () => void;
};

const Icon = ({ icon, bgColor, handleOpen }: iconProps) => {
  return (
    <IconButton
      sx={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        backgroundColor: bgColor,
        "&:hover": {
          backgroundColor: bgColor,
        },
      }}
      onClick={handleOpen}
    >
      {icon}
    </IconButton>
  );
};

const IconMenu = ({ setOpen, open }: any) => {
  const handleOpenTwoCharts = () => {
    setOpen(true);
  };

  const handleOpenWaterfall = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        left: -25,
        top: "53%",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Icon
        icon={<BsInfo style={{ color: "#fff" }} />}
        bgColor={open ? "#1976D2" : "#6B7280"}
        handleOpen={handleOpenTwoCharts}
      />
      <Icon
        icon={<List sx={{ color: "#fff" }} fontSize="small" />}
        bgColor={open ? "#6B7280" : "#1976D2"}
        handleOpen={handleOpenWaterfall}
      />
      <Icon
        icon={<Settings sx={{ color: "#fff" }} fontSize="small" />}
        bgColor="#6B7280"
      />
      <Icon
        icon={<ExpandCircleDown sx={{ color: "#fff" }} fontSize="small" />}
        bgColor="#6B7280"
      />
      <Icon
        icon={<WindowOutlined sx={{ color: "#fff" }} fontSize="small" />}
        bgColor="#000"
      />
    </Box>
  );
};

export default IconMenu;

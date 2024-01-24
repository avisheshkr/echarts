import { Button } from "@mui/material";

const buttonStyle = {
  borderColor: "rgba(0, 0, 0, 0.2)",
  textTransform: "none",
  fontWeight: "700",
};

type buttonProps = {
  text: string | React.ReactNode;
  fullWidth?: boolean;
  open?: boolean;
};

const ReusableButton = ({ text, fullWidth, open }: buttonProps) => {
  return (
    <Button
      color="inherit"
      variant="outlined"
      sx={{ ...buttonStyle, fontWeight: open ? "700" : "500" }}
      fullWidth={fullWidth}
    >
      {text}
    </Button>
  );
};

export default ReusableButton;

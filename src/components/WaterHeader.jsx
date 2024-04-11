import { Box, Typography } from "@mui/material";

const WaterHeader = () => {
  // const [liter, setLiter] = useState(() => 2);
  // if (fractionHeight > 0) setLiter(() => 2 - fractionHeight * 0.25);
  return (
    <Box
      className="header"
      sx={{
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h3">Drink Water</Typography>
      <Typography>Goal 2 Liters</Typography>
    </Box>
  );
};

export default WaterHeader;

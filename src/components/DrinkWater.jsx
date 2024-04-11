import "../styles/utility/Grid.css";
import { Box } from "@mui/material";
import WaterHeader from "./WaterHeader";
import MainContainer from "./MainContainer";
import SmallContainers from "./SmallContainers";
import { useState } from "react";

const DrinkWater = () => {
  const [fractionHeight, setFractionHeight] = useState(null);
  const handleHeight = (height) => {
    setFractionHeight(height);
  };

  return (
    <Box className="grid" sx={{ padding: "30px 0 4px" }}>
      <WaterHeader fractionHeight={fractionHeight} />
      <MainContainer fractionHeight={fractionHeight} />
      <SmallContainers handleHeight={handleHeight} />
    </Box>
  );
};

export default DrinkWater;

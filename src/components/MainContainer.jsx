import { Box, Typography } from "@mui/material";

const MainContainer = ({ fractionHeight }) => {
  return (
    <Box
      className="main-container"
      sx={{
        border: "5px solid hsl(220 100% 30%)",
        borderRadius: "0 0 60px 60px",
        textAlign: "center",
        alignContent: "center",
        width: "min(95%, 200px)",
        height: "360px",
        background: "white",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <Box>
        <Typography
          sx={{
            color:
              fractionHeight && fractionHeight > 4
                ? "white"
                : "hsl(220 100% 45%)",
          }}
          variant="h3"
        >
          {fractionHeight > 7
            ? "100%"
            : fractionHeight > 0
            ? 2 - fractionHeight * 0.25 + "L"
            : 2 + "L"}
        </Typography>
        <Typography
          sx={{
            color:
              fractionHeight && fractionHeight > 4
                ? "white"
                : "hsl(220 100% 45%)",
            display: fractionHeight > 7 ? "none" : "initial",
          }}
          variant="h4"
        >
          Remaining
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          borderRadius: "0 0 55px 55px",
          zIndex: "-1",
          width: "100%",
          bottom: "0",
          left: "0",
          background: "hsl(220 100% 55%)",
          height: fractionHeight > 0 ? `calc(45px * ${fractionHeight})` : 0,
          transition: "height .5s ease",
          overflow: "hidden",
        }}
      ></Box>
    </Box>
  );
};

export default MainContainer;

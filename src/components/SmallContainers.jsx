import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const Containers = ({ id, handleClick, actives }) => {
  return (
    <Box
      onClick={handleClick}
      id={id}
      sx={{
        height: "80px",
        width: "45px",
        border: "4px solid hsl(220 100% 35%)",
        background: "white",
        borderRadius: "0 0 20px 20px",
        alignContent: "center",
        backgroundColor:
          actives.length && actives.includes(id)
            ? "hsl(220 100% 65%)"
            : "white",
        cursor: "pointer",
      }}
    >
      <Typography
        sx={
          actives.length && actives.includes(id)
            ? { color: "white" }
            : { color: "hsl(220 100% 45%)" }
        }
        variant="body1"
      >
        250
      </Typography>
      <Typography
        sx={
          actives.length && actives.includes(id)
            ? { color: "white" }
            : { color: "hsl(220 100% 45%)" }
        }
        variant="body1"
      >
        ml
      </Typography>
    </Box>
  );
};

const SmallContainers = ({ handleHeight }) => {
  const [containerArr, setContainerArr] = useState([]);
  const [actives, setActives] = useState([]);

  const handleClick = (e) => {
    const eleId = Number(e.currentTarget.id);
    if (!actives.includes(eleId)) {
      setActives(() => {
        const active = [];
        for (let i = 1; i <= eleId; i++) active.push(i);
        return active;
      });
    } else {
      setActives((prev) => {
        const active = [...prev];
        return active.filter((ele) => ele < eleId);
      });
    }
  };

  useEffect(() => {
    const arr = [];
    for (let i = 1; i <= 8; i++) {
      arr.push(
        <Containers
          actives={actives}
          handleClick={handleClick}
          key={i}
          id={i}
        />
      );
    }
    setContainerArr(arr);

    if (actives.length) handleHeight(actives[actives.length - 1]);
    else handleHeight(0);
  }, [actives]);

  return (
    <Box
      className="footer-container"
      sx={{
        textAlign: "center",
      }}
    >
      <Typography sx={{ color: "white" }} variant="h6">
        Select How Many Glass Of Water You Have Drank
      </Typography>
      <Box
        className="boxes"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "min(100%,300px)",
          gap: "20px",
          margin: "0 auto",
          marginTop: "20px",
          justifyContent: "center",
        }}
      >
        {containerArr.length ? containerArr : ""}
      </Box>
    </Box>
  );
};

export default SmallContainers;

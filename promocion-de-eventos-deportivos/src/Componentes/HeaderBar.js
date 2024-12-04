import React from "react";
import SportsIcon from "@mui/icons-material/Sports";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function StickyHeader() {
  return (
    <AppBar
      position="sticky"
      sx={{
        height: 50,
        backgroundColor: "primary.main",
        justifyContent: "center",
        borderRadius: "7px",
        border: "1px solid black",
        flexWrap: "wrap",
        "@media (max-width: 600px)": {
          height: "auto",
          padding: "10px 0",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          textAlign: "center",
          "@media (max-width: 600px)": {
            textAlign: "center",
            paddingLeft: "0px !important",
          },
        }}
      >
        <SportsIcon />
        <Typography variant="h5" component="div" mr={2} ml={2}>
          Eventos Deportivos Bogotá
        </Typography>
        <SportsScoreIcon />
      </Toolbar>
    </AppBar>
  );
}

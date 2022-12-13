import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Grid } from "@mui/material";

import AppBar from "../components/AppBar";
import Hero from "../components/Hero";
import Tech from "../components/Technologies";

import sketch from "../components/sketch/sketch";
import { ReactP5Wrapper as P5 } from "react-p5-wrapper";

const Home = () => {
  const gridSettings = {
    spacing: 0,
    direction: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <P5 sketch={sketch} />
      <CssBaseline />
      <AppBar />
      <Hero />
      <Grid container {...gridSettings}>
        {/* <Grid item><P5 sketch={sketch} /></Grid> */}
        <Grid item>
          <Tech />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;

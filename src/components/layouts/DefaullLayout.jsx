import React from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import { Grid } from "@mui/material";

const DefaultLayout = ({ children }) => {
  return (
    <section className="layout">
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={10}>
          {children}
        </Grid>
      </Grid>
    </section>
  );
};

export default DefaultLayout;

import React from "react";

import { Container, Grid, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../Components/Home/Home.css";
import ButtonAppBar from "../Components/Home/testCard";
//import Style3 from "../Components/StyleComponents/style3/Style3";



const useStyles = makeStyles((theme) => ({
  root: {
   display:"flex",
   flexDirection:"column",
   justifyContent:"space-between",
  
  },
  note:{
    marginTop:50
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container fixed>
      <Grid container style={{ marginTop: 50 }} className={classes.root}>
        <Grid item xs={12} md={12} lg={12}>
          <div className="hcontainer">
            <h4>  All about awesome css style</h4>
          </div>
        </Grid>
        {/* <Grid item xs={12} md={12} lg={12}>
          <Style3 />
       
        </Grid> */}
        
        <Grid item xs={12} md={12} lg={12} className={classes.note}>
          <ButtonAppBar/>
        </Grid>

       
      </Grid>
    </Container>
  );
}

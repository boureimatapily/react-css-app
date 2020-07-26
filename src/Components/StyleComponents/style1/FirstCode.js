import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    diplay: "flex",
    flexDirection:"row"
    
  },
}));

export default function FirstCode({file}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2> Download File here</h2>
      <a href={file} download>
        <Button variant="contained" color="primary"  className="link">
            <h2> Download code here... </h2> 
        </Button>
      </a>
    </div>
  );
}

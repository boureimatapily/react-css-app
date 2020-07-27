import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Button } from "@material-ui/core";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    width:100,
    height:200
  },
}));

export default function FirstCode({ file }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2> Download File here</h2>

      <a href={file} download>
      <CloudDownloadIcon  className={classes.link} />
        </a>
    </div>
  );
}

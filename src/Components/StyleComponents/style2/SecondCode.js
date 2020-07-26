import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width:"160vh"
  },
 
}));

export default function SecondCode() {
  const classes = useStyles();
// const data ="hello"
                
  return (
    <div className={classes.root}>
      <h5>code</h5>

      {/* <CKEditor editor={ClassicEditor} data={data} /> */}
    </div>
  );
}

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "../Home/Home.css";
// import { Link } from "react-router-dom";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Style3 from "../StyleComponents/style3/Style3";
import Style4 from "../StyleComponents/style4/Style4";
import Style1 from "../StyleComponents/style1/Style1"
import Style2 from "../StyleComponents/style2/Style2"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  tabvalue: {
    width: "100%",
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleChangePanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>

      <TabPanel value={value} index={0} className={classes.tabvalue}>
        <div className="hcontainer">
          <h4> Codetrain</h4>
        </div>
        <div>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                Codetrain Light
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <h3>Click here to get the code </h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h1> code</h1>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabvalue}>
        <Style1 />

        <div>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>Neon light</Typography>
              <Typography className={classes.secondaryHeading}>
                <h3>Click here to get the code </h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h1> code</h1>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabvalue}>
        <Style2 />
        <div style={{ marginTop: 50, marginBottom: 100 }}>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                Awesome Codetrain
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <h3>Click here to get the code </h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h1> code</h1>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.tabvalue}>
        <Style3 />
        <div style={{ marginTop: 50, marginBottom: 100 }}>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
               Codetrain Refraction
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <h3>Click here to get the code </h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h1> code</h1>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4} className={classes.tabvalue}>
        <Style4 />
        <div style={{ marginTop: 50, marginBottom: 100 }}>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={handleChangePanel("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
               Make it come true
              </Typography>
              <Typography className={classes.secondaryHeading}>
                <h3>Click here to get the code </h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                <h1> code</h1>
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </TabPanel>
      <TabPanel value={value} index={5} className={classes.tabvalue}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6} className={classes.tabvalue}>
        Item Seven
      </TabPanel>
    </div>
  );
}

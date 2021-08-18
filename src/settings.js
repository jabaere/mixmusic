import "./styles.css";
import React from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import facebook from "./asets/fb.png";
import instargram from "./asets/inst.png";
import tweeter from "./asets/tw.png";
import date from "./asets/date.png";
import phone from "./asets/phone.png";
import user from "./asets/user.png";
import tagline from "./asets/tagline.png";
import location from "./asets/location.png";
import mail from "./asets/mail.png";
import uploadphoto from "./asets/upload-photo.png";

import Button from "@material-ui/core/Button";
import avatar from "./asets/avatar.png";
const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "inherit",
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    width: "90%",
  },
  tabpanel: {
    backgroundColor: "inherit",
    color: "black",
    boxShadow: "none",
    borderBottom: "1px solid #e8e8e8",
  },
  cards: {
    width: "280px",
    height: "40px",
    marginTop: "15px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  cardcontent: {
    padding: "25px",
    marginLeft: "-2px",
  },
  cardimage: {
    width: "24px",
    height: "24px",
    marginLeft: "5px",
  },
});

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "flex-start",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 130,
      width: "100%",
      backgroundImage: "linear-gradient(45deg, #fa9d44, #f53f27)",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "black",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(16),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      data: [
        {
          name: "Jack",
          surname: "Wilder",
          nickname: "jack_wilder",
          status: "Music Lover",
          number: "+44 2345 6789",
          mail: "Music Lover",
          location: "3420 Dr.Dilbert Street, UK",
          birthdate: "22 June 1990",
        },
      ],
    };
  }
  handleChange(event, newVal) {
    this.setState({
      value: newVal,
    });
  }
  a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  render() {
    const { classes } = this.props;
    function TabPanel(props) {
      const { children, value, index, ...other } = props;

      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box>
              <Typography component="div">{children}</Typography>
            </Box>
          )}
        </div>
      );
    }
    return (
      <Box id="container">
        <div className={classes.root}>
          <AppBar position="static" className={classes.tabpanel}>
            <StyledTabs
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              aria-label="simple tabs example"
            >
              <StyledTab
                label="Edit Profile"
                {...this.a11yProps(0)}
                className="container"
              />
              <StyledTab
                label="Account Settings"
                {...this.a11yProps(1)}
                className="container"
              />
            </StyledTabs>
          </AppBar>
          <TabPanel value={this.state.value} index={0}>
            <Box>
              <Box p={1} display="flex">
                <img
                  alt="Remy Sharp"
                  src={avatar}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "6px",
                  }}
                ></img>
                <Box
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "white",
                    borderRadius: "8px",
                    display: "flex",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "45px",
                    marginLeft: "80px",
                    boxShadow:
                      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={uploadphoto}
                    alt="upload"
                    style={{
                      width: "24px",
                      height: "24px",
                      position: "absolute",
                    }}
                  ></img>
                </Box>
              </Box>

              <Box
                id="cards"
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
                className="container"
              >
                <Card className={classes.cards}>
                  <CardMedia
                    image={user}
                    alt="user"
                    className={classes.cardimage}
                  ></CardMedia>
                  <CardContent className={classes.cardcontent}>
                    {this.state.data[0].name}
                  </CardContent>
                </Card>
                <Card className={classes.cards}>
                  <CardMedia
                    image={user}
                    alt="user"
                    className={classes.cardimage}
                  ></CardMedia>
                  <CardContent className={classes.cardcontent}>
                    {this.state.data[0].surname}
                  </CardContent>
                </Card>
                <Card className={classes.cards}>
                  <CardMedia
                    image={user}
                    alt="user"
                    className={classes.cardimage}
                  ></CardMedia>
                  <CardContent className={classes.cardcontent}>
                    {this.state.data[0].nickname}
                  </CardContent>
                </Card>
                <Card className={classes.cards}>
                  <CardMedia
                    image={tagline}
                    alt="tagline"
                    className={classes.cardimage}
                  ></CardMedia>
                  <CardContent className={classes.cardcontent}>
                    {this.state.data[0].status}
                  </CardContent>
                </Card>
                <Card className={classes.cards}>
                  <CardMedia
                    image={phone}
                    alt="phone"
                    className={classes.cardimage}
                  ></CardMedia>
                  <CardContent className={classes.cardcontent}>
                    {this.state.data[0].number}
                  </CardContent>
                </Card>
                <Card className={classes.cards}>
                  <CardMedia
                    image={mail}
                    alt="mail"
                    className={classes.cardimage}
                  ></CardMedia>
                  <CardContent className={classes.cardcontent}>
                    {this.state.data[0].mail}
                  </CardContent>
                </Card>
                <Card className={classes.cards}>
                  <CardMedia
                    image={location}
                    alt="location"
                    className={classes.cardimage}
                  ></CardMedia>
                  <CardContent className={classes.cardcontent}>
                    {this.state.data[0].location}
                  </CardContent>
                </Card>
                <Card className={classes.cards}>
                  <CardMedia
                    image={date}
                    alt="date"
                    className={classes.cardimage}
                  ></CardMedia>
                  <CardContent className={classes.cardcontent}>
                    {this.state.data[0].birthdate}
                  </CardContent>
                </Card>
              </Box>
              <Box id="icons" display="flex" mt={2}>
                <Box className="socialIcons">
                  <img
                    src={facebook}
                    alt="facebook"
                    style={{ width: "12px", height: "12px" }}
                  ></img>
                </Box>
                <Box className="socialIcons" ml={2}>
                  <img
                    src={tweeter}
                    alt="tweeter"
                    style={{ width: "12px", height: "12px" }}
                  ></img>
                </Box>
                <Box className="socialIcons" ml={2}>
                  <img
                    src={instargram}
                    alt="instargram"
                    style={{ width: "15px", height: "15px" }}
                  ></img>
                </Box>
              </Box>
              <Button
                variant="contained"
                style={{
                  marginTop: "15px",
                  backgroundImage: "linear-gradient(45deg, #fa9d44, #f53f27)",
                  width: "150px",
                  color: "white",
                }}
                className="container"
              >
                Save
              </Button>
            </Box>
          </TabPanel>
          <TabPanel value={this.state.value} index={1}>
            Item Two
          </TabPanel>
        </div>
      </Box>
    );
  }
}
export default withStyles(useStyles)(Settings);

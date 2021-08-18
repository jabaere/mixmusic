import "./styles.css";
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { fade, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import logo from "./asets/LogoColour.png";
import logo2 from "./asets/mixtape-logo.png";
import loginwallpaper from "./asets/LoginBg.png";
import playstore from "./asets/googleplay.png";
import applestore from "./asets/applestore.png";
import search from "./asets/search.png";
import avatar from "./asets/avatar.png";
import walker from "./asets/walker.jpg";
import setting from "./asets/settings.svg";
import addmusic from "./asets/addmusic.png";
import followers from "./asets/followers.png";
import following from "./asets/following3.png";
import playlist2 from "./asets/playlist2.png";
import left from "./asets/left.svg";
import right from "./asets/right.svg";
import play from "./asets/play-white.png";
import prev from "./asets/prev.png";
import next from "./asets/next.png";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Slide, Paper } from "@material-ui/core";
import Notification from "./notification";
import MyPlaylist from "./myplaylist";
import Following from "./following";
import Settings from "./settings";
import MyProfile from "./myprofile";
import FollowersProfile from "./followersProfile";
import MyFriendsPlaylist from "./myFriendsPlaylist";
import PlaylistThread from "./playlistThread";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  search: {
    position: "relative",

    borderRadius: "12px",
    backgroundColor: fade(theme.palette.text.secondary, 0.1),
    "&:hover": {
      backgroundColor: fade(theme.palette.text.secondary, 0.25),
    },
    marginRight: theme.spacing(30),
    marginLeft: theme.spacing(30),
    width: "60%",
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(40),
      marginLeft: theme.spacing(40),

      width: "20%",
    },
    [theme.breakpoints.down("817")]: {
      marginRight: theme.spacing(20),
      marginLeft: theme.spacing(20),

      width: "40%",
    },
    [theme.breakpoints.down("650")]: {
      marginRight: theme.spacing(10),
      marginLeft: theme.spacing(10),

      width: "60%",
    },
    [theme.breakpoints.down("415")]: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),

      width: "80%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    fontSize: "14px",
    [theme.breakpoints.down("768")]: {
      fontSize: "11px",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",

    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  cardroot: {
    maxWidth: 100,
  },
  cardmedia: {
    height: 60,
  },
  large: {
    color: "black",
  },
  right: {
    display: "none",

    [theme.breakpoints.up("1026")]: {
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "start",
    },
  },
  middle: {
    width: "70vw",
    fontSize: "12px",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("894")]: {
      width: "75vw",
      fontSize: "17px",
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.down("603")]: {
      width: "100vw",
      display: "flex",
      flexDirection: "column",
    },
  },
  leftMenu: {
    width: "10%",
    backgroundColor: "white",

    [theme.breakpoints.up("sm")]: {
      width: "29%",
      backgroundColor: "#F5F5F5",
    },
  },
  rightbigRes: {
    [theme.breakpoints.up("1500")]: {
      justifyContent: "flex-start",
    },
  },
  logincontent: {
    backgroundImage: `url(${loginwallpaper})`,
    height: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw 100vh",
    overflow: "hidden",
    [theme.breakpoints.down("769")]: {
      overflow: "auto",
    },
  },
  loginpaper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",

    paddingTop: "40px",
    "& > *": {
      width: theme.spacing(40),
      height: theme.spacing(40),
      [theme.breakpoints.down("770")]: {
        marginRight: "50px",
      },
      [theme.breakpoints.down("528")]: {
        marginTop: "-160px",
        marginRight: "0px",
      },
    },
  },
  logintextfield: {
    "& > *": {
      width: "80%",
    },
  },
  title: {
    width: "35%",
    color: "white",
    fontWeight: "bolder",
    display: "flex",
    alignItems: "baseline",
    marginTop: "90px",
    marginLeft: "-65px",

    [theme.breakpoints.down("528")]: {
      marginLeft: 0,
      width: "100%",
      fontSize: "30px",
      display: "block",
      textAlign: "center",
      margin: "0 auto",
    },
    [theme.breakpoints.down("801")]: {
      margin: "0 auto",
    },
  },
  iconstitle: {
    color: "white",

    fontWeight: "bold",
    [theme.breakpoints.down("1200")]: {
      marginRight: 0,
      textAlign: "center",
    },

    [theme.breakpoints.up("850")]: {
      margin: "0 auto",
    },
  },
  appicons: {
    marginLeft: "10px",
  },
  appstoreicons: {
    [theme.breakpoints.down("769")]: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
    },
  },
  player: {
    position: "fixed",
    zIndex: 1,

    height: "70px",

    justifyContent: "center",
    margin: "40vw 100px",
    [theme.breakpoints.up("1450")]: {
      margin: "75vw 100px",
    },
    [theme.breakpoints.down("1026")]: {
      margin: "100vw 70px",
      width: "400px",
    },
    [theme.breakpoints.down("769")]: {
      margin: "107vw 70px",
      width: "400px",
    },
    [theme.breakpoints.down("525")]: {
      display: "none",
    },
  },
  playerroot: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    backgroundColor: "inherit",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(9),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  songInfo: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("525")]: {
      display: "flex",
      flexDirection: "row",
    },
  },
  menuroot: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${240}px)`,
      marginLeft: "240px",
    },
  },
  menuButton2: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar

  drawerPaper: {
    backgroundColor: "#F5F5F5",
    position: "relative",
    scrollbarWidth: "none",
    border: "none",
    width: "auto",
    height: "auto",
    [theme.breakpoints.down("1050")]: {
      height: "100vh",
    },

    [theme.breakpoints.down("603")]: {
      width: "170px",
    },
  },
  mobileView: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("603")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  settingsDiv: {
    width: "55%",
    order: 2,
    [theme.breakpoints.down("1025")]: {
      width: 0,
    },
    [theme.breakpoints.down("770")]: {
      width: 0,
    },
  },
});
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: (
        <LoginContent
          buttonOnClick={this.buttonOnClick.bind(this)}
          classes={this.props.classes}
        />
      ),
      page: "",
    };
  }
  buttonOnClick() {
    this.setState({
      login: "",
      page: (
        <App2
          classes={this.props.classes}
          signOutClick={this.signOutClick.bind(this)}
        />
      ),
    });
  }
  signOutClick() {
    this.setState({
      login: (
        <LoginContent
          buttonOnClick={this.buttonOnClick.bind(this)}
          classes={this.props.classes}
        />
      ),
      page: "",
    });
  }
  render() {
    return (
      <div>
        <div>
          {this.state.page}

          {this.state.login}
        </div>
      </div>
    );
  }
}
class LoginContent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.logincontent}>
        <Box
          id="header"
          display="flex"
          justifyContent="space-between"
          alignSelf="baseline"
          mt={2}
          width="100vw"
          alignItems="center"
        >
          <Box ml={5}>
            <img
              src={logo2}
              alt="logo"
              style={{ width: "130px", height: "35px" }}
            ></img>
          </Box>
          <Box mr={5} display="flex" alignItems="center">
            <Breadcrumbs style={{ color: "white" }} className="container">
              <Link style={{ color: "white", fontWeight: "bold" }} href="/">
                Login
              </Link>
              <Link style={{ color: "white", fontWeight: "bold" }} href="/">
                Sign Up
              </Link>
            </Breadcrumbs>
          </Box>
        </Box>

        <Box id="loginandicons" display="flex" flexDirection="column">
          <Box id="login" className={classes.loginpaper}>
            <Typography variant="h4" className={classes.title}>
              Create and share <br /> your own music chart{" "}
            </Typography>
            <Box
              id="all"
              display="flex"
              flexDirection="column"
              alignItems="baseline"
            >
              <Paper elevation={1}>
                <Typography
                  variant="h5"
                  style={{
                    fontWeight: "bold",
                    padding: "15px",
                    marginLeft: "15px",
                  }}
                  className="container"
                >
                  Login
                </Typography>
                <TextField
                  id="outlined-basic"
                  margin="dense"
                  label="Email"
                  variant="outlined"
                  className={classes.logintextfield}
                  style={{ width: "100%", marginLeft: "10%" }}
                />
                <TextField
                  id="outlined-basic"
                  margin="dense"
                  label="Password"
                  variant="outlined"
                  className={classes.logintextfield}
                  style={{ width: "100%", marginLeft: "10%" }}
                />
                <Typography
                  variant="caption"
                  style={{
                    float: "right",
                    marginRight: "27px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  className="gradient-text"
                >
                  Forgot Password?
                </Typography>

                <Button
                  onClick={this.props.buttonOnClick}
                  variant="contained"
                  style={{
                    marginTop: "20px",
                    marginLeft: "10%",
                    backgroundImage: "linear-gradient(45deg, #fa9d44, #f53f27)",
                    width: "80%",
                    color: "white",
                  }}
                  className="container"
                >
                  Login
                </Button>
                <Box display="flex" justifyContent="center" pt={5}>
                  <Typography
                    variant="caption"
                    style={{ cursor: "pointer", fontWeight: "bold" }}
                  >
                    Don't have an account?{" "}
                    <span className="gradient-text">Sign Up</span>
                  </Typography>
                </Box>
              </Paper>
              <Box
                id="app-icons"
                display="flex"
                flexDirection="column"
                mt={3}
                alignItems="center"
                className={classes.appicons}
              >
                <Typography variant="subtitle1" className={classes.iconstitle}>
                  Get The App
                </Typography>
                <Box className={classes.appstoreicons} display="flex" mt={1.5}>
                  <Box>
                    <img
                      src={playstore}
                      alt="playstore"
                      style={{
                        width: "145px",
                        height: "45px",
                        cursor: "pointer",
                      }}
                    ></img>
                  </Box>
                  <Box ml={2}>
                    <img
                      src={applestore}
                      alt="applestore"
                      style={{
                        width: "145px",
                        height: "45px",
                        cursor: "pointer",
                      }}
                    ></img>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.state = {
      leftMenu: (
        <LeftMenu
          classes={this.props.classes}
          myPlaylistClick={this.myPlaylistClick.bind(this)}
          followingClick={this.followingClick.bind(this)}
          settingsClick={this.settingsClick.bind(this)}
          followersProfileClick={this.followersProfileClick.bind(this)}
        />
      ),
      rightPage: <RightSide classes={this.props.classes} />,
      middlePage: <Middlepage classes={this.props.classes} />,
      anchorEl: null,
      mobileMoreAnchorEl: null,
      badgeContent: 1,
    };
  }

  handleProfileMenuOpen(event) {
    this.setState({
      anchorEl: event.target,
    });
  }
  handleMobileMenuClose() {
    this.setState({
      mobileMoreAnchorEl: null,
    });
  }
  handleMenuClose() {
    this.setState({
      anchorEl: null,
    });
    this.handleMobileMenuClose();
  }
  handleMobileMenuOpen(event) {
    this.setState({
      mobileMoreAnchorEl: event.target,
    });
  }
  handleProfile() {
    this.setState({
      leftMenu: (
        <LeftMenu
          classes={this.props.classes}
          myPlaylistClick={this.myPlaylistClick.bind(this)}
          followingClick={this.followingClick.bind(this)}
          settingsClick={this.settingsClick.bind(this)}
          followersProfileClick={this.followersProfileClick.bind(this)}
        />
      ),
      rightPage: <RightSide classes={this.props.classes} />,
      middlePage: <MyProfile />,
      anchorEl: null,
      mobileMoreAnchorEl: null,
    });
  }
  notificationClick() {
    this.setState({
      leftMenu: (
        <LeftMenu
          classes={this.props.classes}
          myPlaylistClick={this.myPlaylistClick.bind(this)}
          followingClick={this.followingClick.bind(this)}
          settingsClick={this.settingsClick.bind(this)}
          followersProfileClick={this.followersProfileClick.bind(this)}
        />
      ),
      rightPage: <RightSide classes={this.props.classes} />,
      middlePage: <Notification />,
      badgeContent: 0,
      anchorEl: null,
      mobileMoreAnchorEl: null,
    });
  }
  logoClickHome() {
    this.setState({
      leftMenu: (
        <LeftMenu
          classes={this.props.classes}
          myPlaylistClick={this.myPlaylistClick.bind(this)}
          followingClick={this.followingClick.bind(this)}
          settingsClick={this.settingsClick.bind(this)}
          followersProfileClick={this.followersProfileClick.bind(this)}
        />
      ),
      rightPage: <RightSide classes={this.props.classes} />,
      middlePage: <Middlepage />,
    });
  }
  myPlaylistClick() {
    this.setState({
      leftMenu: (
        <LeftMenu
          classes={this.props.classes}
          myPlaylistClick={this.myPlaylistClick.bind(this)}
          followingClick={this.followingClick.bind(this)}
          settingsClick={this.settingsClick.bind(this)}
          followersProfileClick={this.followersProfileClick.bind(this)}
        />
      ),
      rightPage: <RightSide classes={this.props.classes} />,
      middlePage: <MyPlaylist />,
      badgeContent: 1,
      anchorEl: null,
      mobileMoreAnchorEl: null,
    });
  }
  followingClick() {
    this.setState({
      leftMenu: (
        <LeftMenu
          classes={this.props.classes}
          myPlaylistClick={this.myPlaylistClick.bind(this)}
          followingClick={this.followingClick.bind(this)}
          settingsClick={this.settingsClick.bind(this)}
          followersProfileClick={this.followersProfileClick.bind(this)}
        />
      ),
      rightPage: <RightSide classes={this.props.classes} />,
      middlePage: <Following />,
      badgeContent: 1,
      anchorEl: null,
      mobileMoreAnchorEl: null,
    });
  }
  settingsClick() {
    this.setState({
      leftMenu: (
        <LeftMenu
          classes={this.props.classes}
          myPlaylistClick={this.myPlaylistClick.bind(this)}
          followingClick={this.followingClick.bind(this)}
          followersProfileClick={this.followersProfileClick.bind(this)}
        />
      ),
      rightPage: <div className={this.props.classes.settingsDiv}></div>,
      middlePage: <Settings />,
      badgeContent: 1,
      anchorEl: null,
      mobileMoreAnchorEl: null,
    });
  }
  followersProfileClick() {
    this.setState({
      leftMenu: (
        <LeftMenu
          classes={this.props.classes}
          myPlaylistClick={this.myPlaylistClick.bind(this)}
          settingsClick={this.settingsClick.bind(this)}
          followingClick={this.followingClick.bind(this)}
        />
      ),
      rightPage: <RightSide classes={this.props.classes} />,
      middlePage: (
        <FollowersProfile
          myFriendsPlaylistClick={this.myFriendsPlaylistClick.bind(this)}
        />
      ),
      badgeContent: 1,
      anchorEl: null,
      mobileMoreAnchorEl: null,
    });
  }
  myFriendsPlaylistClick() {
    this.setState({
      leftMenu: (
        <LeftMenu
          classes={this.props.classes}
          myPlaylistClick={this.myPlaylistClick.bind(this)}
          followingClick={this.followingClick.bind(this)}
          settingsClick={this.settingsClick.bind(this)}
          followersProfileClick={this.followersProfileClick.bind(this)}
        />
      ),
      rightPage: <RightSide classes={this.props.classes} />,
      middlePage: (
        <MyFriendsPlaylist playlistThread={this.playlistThread.bind(this)} />
      ),
      badgeContent: 1,
      anchorEl: null,
      mobileMoreAnchorEl: null,
    });
  }
  playlistThread() {
    this.setState({
      leftMenu: (
        <LeftMenu
          classes={this.props.classes}
          myPlaylistClick={this.myPlaylistClick.bind(this)}
          followingClick={this.followingClick.bind(this)}
          followersProfileClick={this.followersProfileClick.bind(this)}
          settingsClick={this.settingsClick.bind(this)}
        />
      ),
      rightPage: <RightSide classes={this.props.classes} />,
      middlePage: <PlaylistThread />,
      badgeContent: 1,
      anchorEl: null,
      mobileMoreAnchorEl: null,
    });
  }

  render() {
    const { classes } = this.props;

    const isMenuOpen = Boolean(this.state.anchorEl);
    const isMobileMenuOpen = Boolean(this.state.mobileMoreAnchorEl);
    const menuId = "primary-search-account-menu";
    const renderMenu = (
      <Menu
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose.bind(this)}
      >
        <MenuItem onClick={this.handleProfile.bind(this)}>Profile</MenuItem>
        <MenuItem onClick={this.settingsClick.bind(this)}>Settings</MenuItem>
        <MenuItem onClick={this.props.signOutClick}>Sign out</MenuItem>
      </Menu>
    );

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
      <Menu
        anchorEl={this.state.mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose.bind(this)}
      >
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <NotificationsNoneIcon />
          </IconButton>
          <p onClick={this.notificationClick.bind(this)}>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen.bind(this)}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
    return (
      <div className={classes.root} ref={this.wrapper}>
        <AppBar
          position="static"
          color="inherit"
          style={{ borderBottom: "1px solid #C4C4C4", boxShadow: "none" }}
        >
          <Toolbar>
            <img
              src={logo}
              alt="logo"
              onClick={this.logoClickHome.bind(this)}
              style={{
                width: "100px",
                height: "30px",
                marginLeft: "15px",
                cursor: "pointer",
              }}
            ></img>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <img
                  src={search}
                  style={{ width: "15px", height: "15px" }}
                  alt="search"
                ></img>
              </div>
              <InputBase
                placeholder="Search by playlist name or username "
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.root} ref={this.wrapper} />
            <div className={classes.sectionDesktop} ref={this.wrapper}>
              <IconButton
                color="inherit"
                onClick={this.notificationClick.bind(this)}
              >
                <Badge
                  color="secondary"
                  variant="dot"
                  overlap="circle"
                  badgeContent={this.state.badgeContent}
                >
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>

              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                color="inherit"
                onClick={this.handleProfileMenuOpen.bind(this)}
              >
                <Avatar alt="avatar" src={avatar} />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                color="inherit"
                onClick={this.handleMobileMenuOpen.bind(this)}
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        {this.state.myProfile}
        {this.state.login}
        <div style={{ width: "100%" }}>
          <Box display="flex" className={classes.mobileView}>
            {this.state.leftMenu}
            {this.state.rightPage}
            <Box order="1" className={classes.middle} width="151%">
              {this.state.middlePage}
              <Box id="player" className={classes.player}>
                <Accordion
                  style={{
                    backgroundImage:
                      "linear-gradient(45deg,  #fa9d44, #f53f27)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    style={{ height: "60px" }}
                  >
                    <Box className={classes.playerroot}>
                      <div className={classes.details}>
                        <Box display="flex" flexDirection="column">
                          <Box display="flex" alignItems="center">
                            <Avatar src={walker}></Avatar>
                            <Box
                              className={classes.songInfo}
                              ml={0.5}
                              style={{ color: "white" }}
                            >
                              <Typography variant="caption">
                                Live From Space
                              </Typography>
                              <Typography variant="caption">
                                Mac Miller
                              </Typography>
                            </Box>
                            <div className={classes.controls}>
                              <IconButton aria-label="previous">
                                {this.props.direction === "rtl" ? (
                                  <img
                                    src={next}
                                    style={{ width: "19px", height: "19px" }}
                                    alt="prev"
                                  />
                                ) : (
                                  <img
                                    src={prev}
                                    style={{ width: "19px", height: "19px" }}
                                    alt="next"
                                  />
                                )}
                              </IconButton>
                              <IconButton aria-label="play/pause">
                                <img
                                  src={play}
                                  style={{ width: "30px", height: "30px" }}
                                  alt="play"
                                />
                              </IconButton>
                              <IconButton aria-label="next">
                                {this.props.direction === "rtl" ? (
                                  <img
                                    src={next}
                                    style={{ width: "19px", height: "19px" }}
                                    alt="next"
                                  />
                                ) : (
                                  <img
                                    src={next}
                                    style={{ width: "19px", height: "19px" }}
                                    alt="next"
                                  />
                                )}
                              </IconButton>
                            </div>
                          </Box>
                        </Box>
                      </div>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails></AccordionDetails>
                </Accordion>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    );
  }
}

class Middlepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      activeIndex2: 0,
      activeIndex3: 0,
      elementIn: true,
    };
  }
  topSliderRight() {
    this.setState({
      elementIn: true,
      activeIndex: this.state.activeIndex + 1,
    });
    console.log(this.state.activeIndex);
  }
  topSliderLeft() {
    this.setState({
      elementIn: true,
      activeIndex: this.state.activeIndex - 1,
    });
    console.log(this.state.activeIndex);
  }
  monthLeft() {
    this.setState({
      elementIn: true,
      activeIndex2: this.state.activeIndex2 - 1,
    });
  }
  monthRight() {
    this.setState({
      elementIn: true,
      activeIndex2: this.state.activeIndex2 + 1,
    });
  }
  recomendedLeft() {
    this.setState({
      elementIn: true,
      activeIndex3: this.state.activeIndex3 - 1,
    });
  }
  recomendedRight() {
    this.setState({
      elementIn: true,
      activeIndex3: this.state.activeIndex3 + 1,
    });
  }
  render() {
    let { activeIndex } = this.state;
    let { activeIndex2 } = this.state;
    let { activeIndex3 } = this.state;

    const topPlaylistData = [
      [
        { id: 1, name: "Blue Night's", title: "Monet 2020", image: walker },
        { id: 2, name: "Laura's Dreams", title: "Monet 2020", image: walker },
        { id: 3, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 4, name: "Modern Ege", title: "Monet 2020", image: walker },
        { id: 5, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 6, name: "Modern Ege", title: "Monet 2020", image: walker },
        { id: 7, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 8, name: "Modern Ege", title: "Monet 2020", image: walker },
      ],
      [
        { id: 9, name: "Laura's Dreams", title: "Monet 2020", image: walker },
        { id: 10, name: "Modern Ege", title: "Monet 2020", image: walker },
        { id: 11, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 12, name: "Modern Ege", title: "Monet 2020", image: walker },
        { id: 13, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 14, name: "Modern Ege", title: "Monet 2020", image: walker },
        { id: 15, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 16, name: "Modern Ege", title: "Monet 2020", image: walker },
      ],
      [
        { id: 17, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 18, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 19, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 20, name: "Modern Ege", title: "Monet 2020", image: walker },
        { id: 21, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 22, name: "Modern Ege", title: "Monet 2020", image: walker },
        { id: 23, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 24, name: "Modern Ege", title: "Monet 2020", image: walker },
      ],
      [
        { id: 25, name: "last Ege", title: "Monet 2020", image: walker },
        { id: 26, name: "Blue Night's", title: "Monet 2020", image: walker },
        { id: 27, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 28, name: "Modern Ege", title: "Monet 2020", image: walker },
        { id: 29, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 30, name: "Modern Ege", title: "Monet 2020", image: walker },
        { id: 31, name: "21st Century", title: "Monet 2020", image: walker },
        { id: 32, name: "Modern Ege", title: "Monet 2020", image: walker },
      ],
    ];

    return (
      <Box
        className="container"
        style={{
          backgroundColor: "white",

          margin: 0,
        }}
      >
        <Box
          display="flex"
          pt={1.5}
          ml={2.3}
          mr={2.2}
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Box component="h3">Top Playlist</Box>
          <Box style={{ cursor: "pointer" }}>
            <img
              src={left}
              onClick={activeIndex !== 0 ? this.topSliderLeft.bind(this) : null}
              style={{ curos: "pointer" }}
              alt="left"
            ></img>
            <img
              src={right}
              onClick={
                activeIndex < topPlaylistData[0].length - 1
                  ? this.topSliderRight.bind(this)
                  : null
              }
              style={{ curos: "pointer" }}
              alt="pointer"
            ></img>
          </Box>
        </Box>
        <Box
          className="container"
          style={{
            backgroundColor: "inherit",
            height: "auto",
            //flexWrap: wrap
            display: "flex",
            overflow: "hidden",
            justifyContent: "space-between",
            margin: "3px",
          }}
        >
          {topPlaylistData.map((item, index) => (
            <Box key={index}>
              <Slide
                direction="right"
                in={true}
                appear={this.state.elementIn}
                mountOnEnter
                unmountOnExit
              >
                <Box mt={1} m={2}>
                  <Box>
                    <Card style={{ width: "130px", height: "130px" }}>
                      <CardActionArea>
                        <CardMedia
                          id={item[activeIndex].id}
                          image={item[activeIndex].image}
                          title={item[activeIndex].name}
                          style={{ height: "130px" }}
                        />
                      </CardActionArea>
                    </Card>
                    <CardContent style={{ padding: 0, paddingTop: "12px" }}>
                      <Typography
                        variant="subtitle1"
                        component="h4"
                        width="auto"
                        id={item[activeIndex].id}
                        className="container"
                      >
                        {item[activeIndex].name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h5"
                      >
                        {item[activeIndex].title}
                      </Typography>
                    </CardContent>
                  </Box>
                </Box>
              </Slide>
            </Box>
          ))}
        </Box>
        <Box
          display="flex"
          ml={2.3}
          mr={2.2}
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Box component="h3" variant="h4">
            Playlists of the month
          </Box>
          <Box style={{ cursor: "pointer" }}>
            <img
              src={left}
              onClick={activeIndex2 !== 0 ? this.monthLeft.bind(this) : null}
              style={{ cursor: "pointer" }}
              alt="pointer"
            ></img>
            <img
              src={right}
              onClick={
                activeIndex2 < topPlaylistData[0].length - 1
                  ? this.monthRight.bind(this)
                  : null
              }
              style={{ cursor: "pointer" }}
              alt="pointer"
            ></img>
          </Box>
        </Box>
        <Box
          className="container"
          style={{
            backgroundColor: "inherit",
            height: "auto",
            //flexWrap: wrap
            display: "flex",
            overflow: "hidden",
            justifyContent: "space-between",
            margin: "3px",
          }}
        >
          {topPlaylistData.map((item, index) => (
            <Box key={index}>
              <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                <Box mt={1} m={2}>
                  <Box>
                    <Card style={{ width: "130px", height: "130px" }}>
                      <CardActionArea>
                        <CardMedia
                          image={item[activeIndex2].image}
                          title={item[activeIndex2].name}
                          style={{ height: "130px" }}
                        />
                      </CardActionArea>
                    </Card>
                    <CardContent style={{ padding: 0, paddingTop: "12px" }}>
                      <Typography
                        variant="subtitle1"
                        component="h4"
                        width="auto"
                        className="container"
                      >
                        {item[activeIndex2].name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h5"
                      >
                        {item[activeIndex2].title}
                      </Typography>
                    </CardContent>
                  </Box>
                </Box>
              </Slide>
            </Box>
          ))}
        </Box>

        <Box
          display="flex"
          ml={2.3}
          mr={2.2}
          justifyContent="space-between"
          alignItems="baseline"
        >
          <Box component="h3" variant="h2">
            Recomended
          </Box>
          <Box style={{ cursor: "pointer" }}>
            <img
              src={left}
              onClick={
                activeIndex3 !== 0 ? this.recomendedLeft.bind(this) : null
              }
              alt="left"
            ></img>
            <img
              src={right}
              onClick={
                activeIndex3 < topPlaylistData[0].length - 1
                  ? this.recomendedRight.bind(this)
                  : null
              }
              alt="right"
            ></img>
          </Box>
        </Box>
        <Box
          className="container"
          style={{
            backgroundColor: "inherit",
            height: "auto",
            //flexWrap: wrap
            display: "flex",
            overflow: "hidden",
            justifyContent: "space-between",
            margin: "3px",
          }}
        >
          {topPlaylistData.map((item, index) => (
            <Box key={index}>
              <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                <Box mt={1} m={2}>
                  <Box>
                    <Card style={{ width: "130px", height: "130px" }}>
                      <CardActionArea>
                        <CardMedia
                          image={item[activeIndex3].image}
                          title={item[activeIndex3].name}
                          style={{ height: "130px" }}
                        />
                      </CardActionArea>
                    </Card>
                    <CardContent style={{ padding: 0, paddingTop: "12px" }}>
                      <Typography
                        variant="subtitle1"
                        component="h4"
                        width="auto"
                        className="container"
                      >
                        {item[activeIndex3].name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="h5"
                      >
                        {item[activeIndex3].title}
                      </Typography>
                    </CardContent>
                  </Box>
                </Box>
              </Slide>
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
}
class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      recentData: [
        { id: 1, name: "Playlist Name", title: "Monet 2020", image: avatar },
        { id: 2, name: "Playlist Name", title: "Monet 2020", image: avatar },
        { id: 3, name: "Playlist Name", title: "Monet 2020", image: avatar },
        { id: 4, name: "Playlist Name", title: "Monet 2020", image: avatar },
      ],
    };
  }
  componentWillReceiveProps(props) {
    this.setState({ mobileOpen: props.mobileOpen });
  }
  handleDrawerToggle() {
    this.setState({
      mobileOpen: !this.state.mobileOpen,
    });
    console.log(this.props.mobileOpen);
  }
  render() {
    const { classes, window } = this.props;

    const drawer = (
      <div>
        <div className={classes.leftMenu} />
        <Box id="menu" p={1} pt={2} pl={3}>
          <Box component="h5" color="text.secondary">
            MENU
          </Box>
          <Box
            display="flex"
            alignItems="baseline"
            style={{ cursor: "pointer" }}
            onClick={this.props.myPlaylistClick}
          >
            <Box>
              <img
                src={playlist2}
                style={{ width: "19px", height: "19px" }}
                alt="search"
              ></img>
            </Box>
            <Box ml={1} component="p">
              My Playlist
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="baseline"
            style={{ cursor: "pointer" }}
            onClick={this.props.followingClick}
          >
            <Box>
              <img
                src={following}
                style={{ width: "19px", height: "19px" }}
                alt="search"
              ></img>
            </Box>
            <Box
              className="gradient-text"
              ml={1}
              component="p"
              style={{ cursor: "pointer" }}
            >
              Following
            </Box>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Box>
              <img
                src={followers}
                style={{ width: "19px", height: "19px" }}
                alt="search"
              ></img>
            </Box>
            <Box
              ml={1}
              component="p"
              style={{ cursor: "pointer" }}
              onClick={this.props.followersProfileClick}
            >
              Followers
            </Box>
          </Box>
        </Box>
        <Box id="playlist" p={1} pl={3} width="85%">
          <Box component="h5" color="text.secondary">
            PLAYLIST
          </Box>
          <Box display="flex" alignItems="baseline">
            <Box>
              <img
                src={playlist2}
                style={{ width: "15px", height: "15px", color: "black" }}
                alt="search"
              ></img>
            </Box>
            <Box
              ml={1}
              component="p"
              style={{ cursor: "pointer" }}
              onClick={this.handleDrawerToggle.bind(this)}
            >
              Create Playlist
            </Box>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Box>
              <img
                src={addmusic}
                style={{ width: "19px", height: "19px" }}
                alt="search"
              ></img>
            </Box>
            <Box ml={1} component="p" style={{ cursor: "pointer" }}>
              Add Music
            </Box>
          </Box>
        </Box>
        <Box id="menu" p={1} pt={2} pl={3}>
          <Box component="h5" color="text.secondary">
            GENERAL
          </Box>
          <Box display="flex" alignItems="center">
            <Box>
              <img
                src={setting}
                style={{ width: "19px", height: "19px" }}
                alt="search"
              ></img>
            </Box>
            <Box
              ml={1}
              component="p"
              style={{ cursor: "pointer" }}
              onClick={this.props.settingsClick}
            >
              Settings
            </Box>
          </Box>
        </Box>
        <Box id="recent" p={1} pl={3}>
          <Box component="h5" color="text.secondary">
            RECENT PLAYED
          </Box>
          {this.state.recentData.map((item) => (
            <Box display="flex" alignItems="center" key={item.id} width="100%">
              <Box>
                <Avatar
                  alt={item.name}
                  src={item.image}
                  style={{ width: "24px", height: "24px", cursor: "pointer" }}
                ></Avatar>
              </Box>
              <Box ml={1} style={{ cursor: "pointer" }}>
                <Typography
                  variant="subtitle2"
                  component="p"
                  className="container"
                  style={{ marginTop: "10px" }}
                >
                  {item.name}
                </Typography>
                <Typography variant="caption" className="container">
                  {item.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </div>
    );

    const container =
      window !== undefined ? () => window().document.body : undefined;

    return (
      <Box order="0" className={classes.leftMenu}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge={false}
          onClick={this.handleDrawerToggle.bind(this)}
          className={classes.menuButton2}
        >
          <MenuIcon />
        </IconButton>

        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={this.props.direction === "rtl" ? "right" : "left"}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle.bind(this)}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </Box>
    );
  }
}
class RightSide extends React.Component {
  render() {
    const suggestedData = [
      { id: 1, name: "Jaguar 01", image: walker },
      { id: 2, name: "Jaguar 01", image: walker },
      { id: 3, name: "Jaguar 01", image: walker },
      { id: 4, name: "Jaguar 01", image: walker },
      { id: 5, name: "Jaguar 01", image: walker },
      { id: 6, name: "Jaguar 01", image: walker },
    ];
    const { classes } = this.props;
    return (
      <Box
        order="2"
        className={classes.right}
        style={{
          backgroundColor: "#F5F5F5",
        }}
      >
        <Box
          pt={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="73%"
          mx={"auto"}
        >
          {" "}
          <Box component="h3" variant="h4" height="auto">
            Suggested
          </Box>
          <Box
            component="p"
            color="text.secondary"
            style={{ cursor: "pointer" }}
          >
            See all
          </Box>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          className={classes.rightbigRes}
        >
          {suggestedData.map((item) => (
            <Box key={item.id} m={2}>
              <Box>
                <Card style={{ width: "80px", height: "80px" }}>
                  <CardActionArea>
                    <CardMedia
                      id={item.id}
                      image={item.image}
                      title={item.name}
                      style={{ height: "80px" }}
                    />
                  </CardActionArea>
                </Card>
                <CardContent style={{ padding: 0, paddingTop: "12px" }}>
                  <Typography
                    variant="subtitle1"
                    width="auto"
                    id={item.id}
                    className="container"
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          mx={"auto"}
          pt={2.5}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="73%"
        >
          {" "}
          <Box
            component="h3"
            variant="h4"
            height="auto"
            className={classes.large}
          >
            Playlist of the week
          </Box>
          <Box
            component="p"
            color="text.secondary"
            style={{ cursor: "pointer" }}
          >
            See all
          </Box>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          className={classes.rightbigRes}
        >
          {suggestedData.map((item) => (
            <Box key={item.id} m={2}>
              <Box>
                <Card style={{ width: "80px", height: "80px" }}>
                  <CardActionArea>
                    <CardMedia
                      id={item.id}
                      image={item.image}
                      title={item.name}
                      style={{ height: "80px" }}
                    />
                  </CardActionArea>
                </Card>
                <CardContent style={{ padding: 0, paddingTop: "12px" }}>
                  <Typography
                    variant="subtitle1"
                    width="auto"
                    id={item.id}
                    className="container"
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    );
  }
}
export default withStyles(useStyles)(Login);

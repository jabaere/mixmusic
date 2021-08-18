import "./styles.css";
import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardMedia from "@material-ui/core/CardMedia";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Popover from "@material-ui/core/Popover";

import Backdrop from "@material-ui/core/Backdrop";
import Typography from "@material-ui/core/Typography";

import walker from "./asets/walker.jpg";
import emo1 from "./asets/emo1.png";
import emo2 from "./asets/emo2.png";
import emo3 from "./asets/emo3.png";
import emo4 from "./asets/emo4.png";
import emo5 from "./asets/emo5.png";
import play from "./asets/play-white.png";
import playRed from "./asets/play-red.png";
import close from "./asets/close.svg";
import heart from "./asets/heart.svg";
const useStyles = (theme) => ({
  cardstyle: {
    border: "1px solid #C4C4C4",
    borderRadius: "4px",

    marginTop: "10px",
    maxHeight: "70px",
    maxWidth: "100%",
  },

  popover: {
    pointerEvents: "none",
    marginTop: "-30px",
    marginLeft: "-30px",
  },
  paper: {
    padding: theme.spacing(0.5),
    borderRadius: "12px",
    height: "50px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  play: {
    width: "24px",
    height: "24px",
    position: "absolute",
    marginTop: "-35px",
    marginLeft: "15px",
    marginRight: "15px",
    [theme.breakpoints.down("454")]: {
      marginLeft: "13.5px",
    },
  },
  video: {
    width: "640px",
    [theme.breakpoints.down("454")]: {
      width: "340px",
    },
  },
  playButton: {
    width: "94px",
    height: "94px",
    position: "absolute",
    marginLeft: "-355px",
    [theme.breakpoints.down("454")]: {
      width: "74px",
      height: "74px",
      position: "absolute",
      marginLeft: "-200px",
    },
  },
  closeButton: {
    width: "34px",
    height: "34px",
    position: "absolute",
    marginTop: "-160px",
    marginRight: "35px",
    [theme.breakpoints.down("454")]: {
      width: "34px",
      height: "34px",
      position: "absolute",
      marginTop: "-80px",
      marginRight: "40px",
    },
  },
  musicLover: {
    marginTop: "-32px",
    [theme.breakpoints.down("768")]: {
      marginTop: "-20px",
    },
  },
  musicLoverTop: {
    marginTop: "-25px",
    [theme.breakpoints.down("768")]: {
      marginTop: "-15px",
    },
  },
});

class MyFriendsPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: false,
      anchorEl2: false,
      data: [
        {
          id: "1",
          name: "Last Hope",
          author: "Green Day",
          title: "Monet 2020",
          image: walker,
        },
        {
          id: "2",
          name: "Last Hope",
          author: "Green Day",
          title: "Monet 2020",
          image: walker,
        },
        {
          id: "3",
          name: "Last Hope",
          author: "Green Day",
          title: "Monet 2020",
          image: walker,
        },
        {
          id: "4",
          name: "Last Hope",
          author: "Green Day",
          title: "Monet 2020",
          image: walker,
        },
      ],
      index: "",
      open: false,
    };
    this.handleRemove = this.handleRemove.bind(this);
  }
  handleMenuClose() {
    this.setState({
      anchorEl: null,
    });
  }
  handleClick(event) {
    this.setState({
      anchorEl: event.target,
    });
  }
  handleRemove(id) {
    const data = [...this.state.data];

    const updatedData = data.filter((item) => item.id !== id.id);

    this.setState({ data: updatedData, anchorEl: null });
  }

  handleClose() {
    this.setState({
      open: null,
    });
    document.getElementById("vid").pause();
  }

  handlePopoverOpen(event) {
    this.setState({
      anchorEl2: event.target,
    });
  }
  handlePopoverClose() {
    this.setState({
      anchorEl2: null,
    });
  }
  handleClosePlayer() {
    this.setState({
      open: null,
    });
  }
  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }
  playButton() {
    document.getElementById("vid").play();
    document.getElementById("press").style.display = "none";
  }
  hideClose() {
    document.getElementById("close").style.display = "none";
  }
  showClose() {
    document.getElementById("close").style.display = "block";
    document.getElementById("close").style.cursor = "pointer";
  }

  render() {
    const { classes } = this.props;
    const open = Boolean(this.state.anchorEl);
    const open2 = Boolean(this.state.open);
    const open3 = Boolean(this.state.anchorEl2);

    return (
      <Box display="flex" flexDirection="column" className="container">
        <Box id="cardContainer" display="flex">
          <Box p={3.7}>
            <Card alt="Remy Sharp" style={{ width: "100px", height: "100px" }}>
              <CardMedia component="img" image={walker} />
            </Card>
          </Box>
          <Box>
            <Box display="flex" alignItems="center">
              <h4>Jay-z' Playlist </h4>
              <span
                className="gradient-text"
                style={{
                  marginLeft: "15px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Follow
              </span>
            </Box>
            <Box
              display="flex"
              mt={-4}
              flexDirection="column"
              className={classes.musicLover}
            >
              <Box component="p">@Jayz01</Box>
              <Box
                display="flex"
                alignItems="center"
                className={classes.musicLoverTop}
              >
                <Box
                  component="p"
                  color="text.secondary"
                  style={{ cursor: "pointer" }}
                >
                  Music lover
                </Box>
                <img
                  src={heart}
                  alt="heart"
                  style={{ marginLeft: "5px", width: "12px", height: "12px" }}
                ></img>
              </Box>
            </Box>
            <Box display="block">
              <Box display="flex" mt={-1}>
                <Box>
                  <b>2M</b> Views
                </Box>
                <Box ml={3}>
                  <b>500K</b> Followers
                </Box>
                <Box ml={3}>
                  <b>2K</b> Reactions
                </Box>
              </Box>
              <Typography
                variant="subtitle1"
                className="gradient-text"
                style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={this.props.playlistThread}
              >
                Last message from the thread {">"}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          className="container"
          ml={3.5}
          mr={3.5}
        >
          {this.state.data.map((item) => (
            <Card className={classes.cardstyle} key={item.id} id={item.id}>
              <Box id="container" display="flex" justifyContent="space-between">
                <Box m={1} display="flex">
                  <Card style={{ width: "50px", height: "50px" }}>
                    <CardActionArea>
                      <CardMedia
                        image={item.image}
                        title={item.title}
                        style={{ height: "50px" }}
                      />
                      <img
                        src={play}
                        alt="play"
                        className={classes.play}
                        onClick={this.handleToggle.bind(this)}
                      ></img>
                    </CardActionArea>
                  </Card>

                  <Box display="flex" alignItems="center">
                    <Box ml={1}>{item.id}</Box>

                    <Box ml={2}>{item.name}</Box>
                    <Box ml={2}> {item.author}</Box>
                  </Box>
                </Box>
                <Box
                  id="righthalf"
                  justifyContent="flex-end"
                  display="flex"
                  alignItems="center"
                >
                  <Box
                    id="emotions"
                    display="flex"
                    justifyContent="flex-end"
                    aria-owns={open3 ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={this.handlePopoverOpen.bind(this)}
                    onMouseLeave={this.handlePopoverClose.bind(this)}
                  >
                    <Box component="span" style={{ cursor: "pointer" }}>
                      12K
                    </Box>
                    <Box display="flex" ml={1}>
                      <img
                        src={emo1}
                        alt="emo1"
                        style={{ width: "25px", height: "25px", zIndex: 3 }}
                      ></img>

                      <img
                        src={emo2}
                        alt="emo1"
                        style={{
                          width: "25px",
                          height: "25px",
                          marginLeft: "-9px",
                          zIndex: 2,
                        }}
                      ></img>

                      <img
                        src={emo5}
                        alt="emo1"
                        style={{
                          width: "25px",
                          height: "25px",
                          marginLeft: "-9px",
                          zIndex: 1,
                        }}
                      ></img>
                    </Box>
                    <Popover
                      id="mouse-over-popover"
                      className={classes.popover}
                      classes={{
                        paper: classes.paper,
                      }}
                      open={open3}
                      anchorEl={this.state.anchorEl2}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      onClose={this.handlePopoverClose.bind(this)}
                      disableRestoreFocus
                    >
                      <Box display="flex">
                        <Box zIndex={1} mr={0}>
                          <img
                            src={emo1}
                            alt="emo1"
                            style={{ width: "25px", height: "25px" }}
                          ></img>
                          <Box component="p" ml={0.8} mt={-1} fontSize={10}>
                            12K
                          </Box>
                        </Box>
                        <Box mr={0}>
                          <img
                            src={emo2}
                            alt="emo2"
                            style={{ width: "25px", height: "25px" }}
                          ></img>
                          <Box component="p" ml={0.8} mt={-1} fontSize={10}>
                            57
                          </Box>
                        </Box>
                        <Box mr={0}>
                          <img
                            src={emo3}
                            alt="emo3"
                            style={{ width: "25px", height: "25px" }}
                          ></img>
                          <Box component="p" ml={0.8} mt={-1} fontSize={10}>
                            75
                          </Box>
                        </Box>
                        <Box mr={0}>
                          <img
                            src={emo4}
                            alt="emo4"
                            style={{ width: "25px", height: "25px" }}
                          ></img>
                          <Box component="p" ml={0.8} mt={-1} fontSize={10}>
                            32
                          </Box>
                        </Box>
                        <Box mr={0}>
                          <img
                            src={emo5}
                            alt="emo5"
                            style={{ width: "25px", height: "25px" }}
                          ></img>
                          <Box component="p" ml={0.8} mt={-1} fontSize={10}>
                            13
                          </Box>
                        </Box>
                      </Box>
                    </Popover>
                  </Box>

                  <Box>
                    <IconButton
                      aria-label="more"
                      aria-controls="long-menu"
                      aria-haspopup="true"
                      onClick={this.handleClick.bind(this)}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      anchorEl={this.state.anchorEl}
                      keepMounted
                      open={open}
                      onClose={this.handleMenuClose.bind(this)}
                      PaperProps={{
                        style: {
                          display: "flex",
                          flexDirection: "row",
                        },
                      }}
                    >
                      <MenuItem>Edit</MenuItem>
                      <MenuItem onClick={() => this.handleRemove(item.id)}>
                        Delete
                      </MenuItem>
                    </Menu>
                  </Box>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
        <Backdrop className={classes.backdrop} open={open2}>
          <video
            id="vid"
            className={classes.video}
            style={{ borderRadius: "12px" }}
            controls
            onMouseEnter={this.showClose.bind(this)}
            onMouseLeave={this.hideClose.bind(this)}
          >
            <source
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              type="video/mp4"
            />
            <source
              src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              type="video/ogg"
            />
            Your browser does not support HTML video.
          </video>
          <Box display="flex">
            <Box
              display="flex"
              alignItems="center"
              style={{ cursor: "pointer" }}
            >
              <img
                id="press"
                src={playRed}
                alt="play"
                className={classes.playButton}
                onClick={this.playButton.bind(this)}
              ></img>
            </Box>
            <Box
              display="flex"
              alignItems="baseline"
              justifyContent="right"
              style={{ cursor: "pointer", width: "34px", height: "34px" }}
              onMouseEnter={this.showClose.bind(this)}
            >
              <img
                id="close"
                src={close}
                alt="src"
                onClick={this.handleClose.bind(this)}
                className={classes.closeButton}
              ></img>
            </Box>
          </Box>
        </Backdrop>
      </Box>
    );
  }
}

export default withStyles(useStyles)(MyFriendsPlaylist);

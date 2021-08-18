import "./styles.css";
import React from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import avatar from "./asets/avatar.png";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import InputAdornment from "@material-ui/core/InputAdornment";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
const useStyles = (theme) => ({
  container: {
    [theme.breakpoints.down("515")]: {
      marginLeft: '8px',
    },
    messageInput: {
      [theme.breakpoints.down("515")]: {
        width: "70%",
      },
    },
  },
});

class PlaylistThread extends React.Component {
  render() {
    const { classes } = this.props;
    const data = [
      {
        id: 1,
        name: "Lucy Gray",
        albumName: "Ed Seren-Perfect",
        image: avatar,
        time: "1hr ago",
      },
      {
        id: 2,
        name: "Lucy Gray",
        albumName: "Ed Seren-Perfect",
        image: avatar,
        time: "1hr ago",
      },
    ];
    const commentData = [
      {
        id: 1,
        name: "Jack Wilder",
        status: "lorem isspum lorem isspumlorem isspumvlorem isspum",
        image: avatar,
      },
      {
        id: 2,
        name: "Jack Wilder",
        status:
          "lorem isspum lorem isspumlorem isspumvlorem isspumlorem isspum lorem isspumlorem isspumvlorem isspumlorem isspum lorem isspumlorem isspumvlorem isspum",
        image: avatar,
      },
    ];
    return (
      <Box id="container">
        {data.map((item) => (
          <Box
            key={item.id}
            id="header"
            display="flex"
            justifyContent="space-between"
            pt={3}
            ml={3}
            className={classes.container}
          >
            <Box id="1" display="column">
              <Box display="flex" justifyContent="space-between">
                <Box display="flex">
                  <Avatar src={item.image}></Avatar>
                  <Box display="flex" flexDirection="column" ml={1}>
                    <Typography variant="subtitle1" className="container">
                      {item.name}{" "}
                      <Box
                        component="span"
                        color="text.secondary"
                        className="container"
                      >
                        added{" "}
                      </Box>
                      {item.albumName}
                    </Typography>
                    <Typography variant="caption" className="container">
                      {item.time}
                    </Typography>
                  </Box>
                </Box>
                <Box id="2" mr={3}>
                  <Typography
                    variant="subtitle1"
                    className="gradient-text"
                    style={{ cursor: "pointer" }}
                  >
                    Reply
                  </Typography>
                </Box>
              </Box>

              <Box
                id="messages"
                ml={8}
                mt={2}
                width="80%"
                className="container"
              >
                {commentData.map((item) => (
                  <Paper
                    elevation={0}
                    key={item.id}
                    style={{ backgroundColor: "#F5F5F5", marginTop: "15px" }}
                  >
                    <Box p={2} display="flex">
                      <Avatar src={item.image} />
                      <Box
                        id="info"
                        display="flex"
                        flexDirection="column"
                        ml={1}
                      >
                        <Typography variant="caption">{item.name}</Typography>
                        <Typography variant="subtitle1">
                          {item.status}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Box>
          </Box>
        ))}
        <Box ml={3}>
          <FormControl
            variant="outlined"
            style={{ display: "flex", width: "80%", margin: "15px auto" }}
            className={classes.messageInput}
          >
            <InputLabel htmlFor="reply">Reply</InputLabel>
            <OutlinedInput
              id="reply"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <span
                    edge="end"
                    className="gradient-text"
                    style={{ cursor: "pointer" }}
                  >
                    Send
                  </span>
                </InputAdornment>
              }
              labelWidth={50}
            />
          </FormControl>
        </Box>
      </Box>
    );
  }
}

export default withStyles(useStyles)(PlaylistThread);

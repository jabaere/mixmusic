import "./styles.css";
import React from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import walker from "./asets/walker.jpg";
import avatar from "./asets/avatar.png";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import heart from "./asets/heart.svg";

import facebook from "./asets/fb.png";
import instargram from "./asets/inst.png";
import tweeter from "./asets/tw.png";
import add from "./asets/add-song.png";

export default class FollowersProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const playlistData = [
      { id: 1, name: "Jaguar", title: "Monet 2020", image: walker, add: add },
      { id: 2, name: "monetna", title: "Monet 2020", image: walker, add: add },
    ];
    return (
      <Box
        display="flex"
        flexDirection="column"
        className="container"
        style={{ margin: 0 }}
      >
        <Box id="cardContainer" display="flex">
          <Box p={3}>
            <Avatar
              alt="Remy Sharp"
              src={avatar}
              style={{ width: "100px", height: "100px" }}
            />
          </Box>
          <Box>
            <Box display="flex" alignItems="center">
              <h4>Lucy Gray</h4>
              <Box
                ml={2}
                style={{
                  width: "5px",
                  height: "5px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                }}
              ></Box>
              <Box ml={2} fontSize={12}>
                London, UK
              </Box>
            </Box>
            <Box display="flex" alignItems="center" mt={-4}>
              <p>Music lover</p>
              <img
                src={heart}
                alt="heart"
                style={{ marginLeft: "5px", width: "12px", height: "12px" }}
              ></img>
            </Box>
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
            <Link>http://jayz.com</Link>
            <Box id="icons" display="flex">
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
                  alt="instagram"
                  style={{ width: "15px", height: "15px" }}
                ></img>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" className="container" flexDirection="column">
          <Typography
            fontSize={14}
            fontWeight="bold"
            style={{ marginLeft: "27px", paddingTop: "8px" }}
          >
            Lucy's playlist
          </Typography>
          <Box display="flex" ml={2}>
            {playlistData.map((item) => (
              <Box key={item.id}>
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  ml={1}
                >
                  <Card
                    style={{ width: "80px", height: "80px", marginTop: "5px" }}
                    onClick={this.props.myFriendsPlaylistClick}
                  >
                    <CardActionArea>
                      <CardMedia
                        image={item.image}
                        title={item.title}
                        style={{ height: "80px" }}
                      />
                      <img
                        src={item.add}
                        style={{
                          width: "24px",
                          height: "24px",
                          position: "absolute",
                          marginTop: "-75px",
                          marginLeft: "50px",
                        }}
                        alt="add"
                      ></img>
                    </CardActionArea>
                  </Card>
                  <CardContent
                    style={{
                      paddingTop: "12px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Box fontSize={12} fontWeight="bold">
                      {item.name}
                    </Box>
                    <Box fontSize={10} color="text.secondary">
                      {item.title}
                    </Box>
                  </CardContent>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
  }
}

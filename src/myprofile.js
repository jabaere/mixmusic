import "./styles.css";
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import walker from "./asets/walker.jpg";
import avatar from "./asets/avatar.png";
import CardActionArea from "@material-ui/core/CardActionArea";
import heart from "./asets/heart.svg";
import pencil from "./asets/pencil.svg";
import facebook from "./asets/fb.png";
import instargram from "./asets/inst.png";
import tweeter from "./asets/tw.png";

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
              <Box ml={4}>
                <img
                  src={pencil}
                  alt="pencil"
                  width="19px"
                  height="19px"
                  style={{ cursor: "pointer" }}
                ></img>
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
        <Box ml={3} display="flex" flexDirection="column" className="container">
          <Box fontSize={14} fontWeight="bold">
            My Playlist
          </Box>
          <Card style={{ width: "80px", height: "80px", marginTop: "5px" }}>
            <CardActionArea>
              <CardMedia
                image={walker}
                title={"Jaguar"}
                style={{ height: "80px" }}
              />
            </CardActionArea>
          </Card>
          <CardContent
            style={{ padding: 0, paddingTop: "12px", marginLeft: "10px" }}
          >
            <Box fontSize={12} fontWeight="bold" ml={1}>
              Jaguar
            </Box>
            <Box fontSize={10} color="text.secondary">
              Monet 2020
            </Box>
          </CardContent>
        </Box>
      </Box>
    );
  }
}

import "./styles.css";
import React from "react";

import { fade, withStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import walker from "./asets/walker.jpg";
import add from "./asets/add-song.png";
import Typography from "@material-ui/core/Typography";

export default class Following extends React.Component {
  render() {
    const topPlaylistData = [
      {
        id: 1,
        name: "Blue Night's",
        title: "Green Day",
        image: walker,
        add: add,
      },
      {
        id: 2,
        name: "Laura's Dreams",
        title: "Green Day",
        image: walker,
        add: add,
      },
      {
        id: 3,
        name: "21st Century",
        title: "Green Day",
        image: walker,
        add: add,
      },
      {
        id: 4,
        name: "Modern Ege",
        title: "Green Day",
        image: walker,
        add: add,
      },
      {
        id: 5,
        name: "21st Century",
        title: "Green Day",
        image: walker,
        add: add,
      },
      {
        id: 6,
        name: "Modern Ege",
        title: "Green Day",
        image: walker,
        add: add,
      },
      {
        id: 7,
        name: "21st Century",
        title: "Green Day",
        image: walker,
        add: add,
      },
      {
        id: 8,
        name: "Modern Ege",
        title: "Green Day",
        image: walker,
        add: add,
      },
    ];

    return (
      <Box
        display="flex"
        flexWrap="wrap"
        className="container"
        style={{
          backgroundColor: "white",
          borderLeft: "2px solid #F5F5F5",
          borderRight: "2px solid #F5F5F5",
          margin: 0,
        }}
      >
        <Box display="flex" pt={1.5} ml={5}>
          <Box component="h3">Following</Box>
        </Box>
        <Box
          className="container"
          style={{
            backgroundColor: "inherit",
            height: "auto",
            flexWrap: "wrap",
            display: "flex",
            overflow: "hidden",
            justifyContent: "center",
            margin: "2px",
          }}
        >
          {topPlaylistData.map((item) => (
            <Box key={item.id} mt={1} m={1}>
              <Box>
                <Card style={{ width: "130px", height: "130px" }}>
                  <CardActionArea>
                    <CardMedia
                      id={item.id}
                      image={item.image}
                      title={item.name}
                      style={{ height: "130px" }}
                    />
                    <img
                      src={item.add}
                      alt="add"
                      style={{
                        width: "24px",
                        height: "24px",
                        position: "absolute",
                        marginTop: "-120px",
                        marginLeft: "95px",
                      }}
                    ></img>
                  </CardActionArea>
                </Card>
                <CardContent style={{ padding: 0, paddingTop: "12px" }}>
                  <Typography
                    variant="body1"
                    component="h4"
                    width="auto"
                    id={item.id}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="h5"
                  >
                    {item.title}
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

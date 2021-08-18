import "./styles.css";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardMedia from "@material-ui/core/CardMedia";
import settings from "./asets/settings.svg";

import walker from "./asets/walker.jpg";

export default class Notification extends React.Component {
  render() {
    const data = [
      {
        name: "Jack David",
        status: "started following your playlist",
        title: "Monet 2020",
        image: walker,
      },
      {
        name: "Jack David",
        status: "started following your playlist",
        title: "Monet 2020",
        image: walker,
      },
      {
        name: "Jack David",
        status: "started following your playlist",
        title: "Monet 2020",
        image: walker,
      },
      {
        name: "Jack David",
        status: "started following your playlist",
        title: "Monet 2020",
        image: walker,
      },
    ];
    return (
      <Box
        display="flex"
        flexDirection="column"
        className="container"
        style={{ margin: 0 }}
      >
        <Box display="flex" justifyContent="flex-end" mt={2} mr={2}>
          <img
            src={settings}
            alt="settings"
            style={{ cursor: "pointer" }}
          ></img>
        </Box>
        <Box mt={2} ml={2} fontSize={18} width="20%" fontWeight="bold">
          Today
        </Box>
        {data.map((item, index) => (
          <Box key={index}>
            <Box display="flex">
              <Box m={2}>
                <Card
                  style={{ width: "50px", height: "50px", marginTop: "5px" }}
                >
                  <CardActionArea>
                    <CardMedia
                      image={item.image}
                      title={item.title}
                      style={{ height: "50px" }}
                    />
                  </CardActionArea>
                </Card>
              </Box>
              <Box
                display="flex"
                alignItems="baseline"
                style={{ borderBottom: "1px solid #C4C4C4" }}
              >
                <Box mt={3}>
                  <Box>{item.name}</Box>
                  <Box fontSize={10} color="text.secondary" mt={2}>
                    Monet 2020
                  </Box>
                </Box>
                <Box display="flex">
                  <Box ml={2}>{item.status}</Box>

                  <Box ml={15}>2min ago</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}

        <Box mt={2} ml={2} fontSize={18} width="20%" fontWeight="bold">
          Yesterday
        </Box>
        {data.map((item, index) => (
          <Box key={index}>
            <Box display="flex">
              <Box m={2}>
                <Card
                  style={{ width: "50px", height: "50px", marginTop: "5px" }}
                >
                  <CardActionArea>
                    <CardMedia
                      image={item.image}
                      title={item.title}
                      style={{ height: "50px" }}
                    />
                  </CardActionArea>
                </Card>
              </Box>
              <Box
                display="flex"
                alignItems="baseline"
                style={{ borderBottom: "1px solid #C4C4C4" }}
              >
                <Box mt={3}>
                  <Box>{item.name}</Box>
                  <Box fontSize={10} color="text.secondary" mt={2}>
                    Monet 2020
                  </Box>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box ml={2}>{item.status}</Box>

                  <Box ml={15}>2min ago</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    );
  }
}

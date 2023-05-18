import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetWallDecorIdeasQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const WallDecorIdeas = () => {
  const { data, isFetching } = useGetWallDecorIdeasQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Best Wall Decor Ideas for Home
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Looking for wall design ideas and décor to refresh your blank walls?
          Empty walls are filled with possibilities and we've got just the right
          wall designs to amp up your spaces, while bringing out the best in
          each room. While a bare wall can feel refreshing—especially when a
          room is filled with bold furniture, printed area rugs, and plenty of
          objects, having your walls treated to artwork, refreshing panelling or
          designer textures, can add character and dimension to your spaces.
          Now, in just a few simple steps, you can bring style to every square
          inch of your space, including your walls! From statement art pieces to
          whimsical wallpaper and everything else in between, every wall design
          here is packed with visual intrigue.
        </Typography>
      </Box>
      <ImageList
        gap={25}
        sx={{
          mb: 8,
          gridTemplateColumns:
            "repeat(auto-fill, minmax(280px, 1fr))!important",
        }}
      >
        {data.map((product) => (
          <Link to={"/Kitchen"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={product.image}
                  alt={"Kitchen"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={product.title} />
               
              </ImageListItem>
            </Card>
          </Link>
        ))}
      </ImageList>
    </Container>
  );
};

export default WallDecorIdeas;

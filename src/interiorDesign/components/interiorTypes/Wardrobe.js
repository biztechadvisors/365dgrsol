import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetWardrobeQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const Wardrobe = () => {
  const { data, isFetching } = useGetWardrobeQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Wardrobe Interior Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          365dgrsol design ideas is your one-stop shop for wardrobe solutions.
          Our modular wardrobe designs are ergonomically designed and come in a
          wide spectrum of colours, finishes and materials. Built for smart
          storage, our cupboard designs are function-forward, easy to use and
          promise to make stunning additions to the spaces in your bedroom.
          Explore our extensive collection of wardrobe interior designs and find
          one you can customise for your bedroom today.
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

export default Wardrobe;

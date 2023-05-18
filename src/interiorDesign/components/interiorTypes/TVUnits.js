import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetTvUnitsQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const TVUnits = () => {
  const { data, isFetching } = useGetTvUnitsQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          TV Unit & Cabinet Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Trending TV unit designs from 365dgrsol that can be customised to your
          style, preference and TV sizes. TV units are essential piece of
          furniture that serves as a focal point for your room while giving you
          amazing storage options. From wall-mounted TV unit designs for the
          living room to TV cupboard units in the hall and traditional TV
          cabinets for your bedroom, 365dgrsol helps you create a functional and
          stylish TV unit. Browse through our budget-friendly modern TV unit
          designs that will help you transform the look of your home.
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

export default TVUnits;

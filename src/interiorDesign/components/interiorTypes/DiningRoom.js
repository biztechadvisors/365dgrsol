import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetDiningRoomQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const DiningRoom = () => {
  const { data, isFetching } = useGetDiningRoomQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Dining Room Designs & Décor
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          It is often believed that a family that eats together, stays together,
          thereby making the dining room one of the most indispensable areas in
          a house! Whether you are looking for a compact dining unit or a
          spacious one, here’s your daily dose of dining room interior design
          inspiration to start your home interior journey today.
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

export default DiningRoom;

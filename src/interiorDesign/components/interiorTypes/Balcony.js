import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetBalconyQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const Balcony = () => {
  const { data, isFetching } = useGetBalconyQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Balcony Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Whether you choose to use your balcony as a reading nook, a spot for a
          sundowner or for fresco dining purposes, 365dgrsol has all the latest
          balcony designs to turn your balcony into your favourite place in the
          house. Check out our latest balcony designs that reflect your personal
          style.
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
        {data.map((product , id) => (
          <Link to={"/Kitchen"}>
            <Card key={id}>
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

export default Balcony;

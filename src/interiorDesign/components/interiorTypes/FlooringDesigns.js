import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetFlooringDesignsQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const FlooringDesigns = () => {
  const { data, isFetching } = useGetFlooringDesignsQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Latest Floor Design Ideas for Home
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Your floors are the largest surfaces in your home, and picking the
          best type of flooring for your space depends on your budget, lifestyle
          and personal preferences. Each type of flooring has its unique
          benefits, and determining which flooring is best for your space,
          depends on each room’s interior design plan and location. Be it for
          aesthetic purposes or safety reasons, getting the right flooring to
          match your interiors is a crucial step. Browse through our extensive
          catalogue of handpicked, curated flooring. Pick from vinyl flooring,
          tiles, wood flooring to carpet flooring and granite. We've got
          something for every floor!
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

export default FlooringDesigns;

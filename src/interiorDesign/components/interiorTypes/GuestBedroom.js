import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetGuestBedroomQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const GuestBedroom = () => {
  const { data, isFetching } = useGetGuestBedroomQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Guest Room Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Your guest room is an extension of your hospitality and should be
          thoughtfully designed to make all your guests feel welcome and at
          home. Browse through some stylish guest room designs from Livspace to
          spark some inspiration for your next home renovation project or for
          your new home.
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

export default GuestBedroom;

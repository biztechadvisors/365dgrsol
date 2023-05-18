import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetMasterBedroomQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const MasterBedroom = () => {
  const { data, isFetching } = useGetMasterBedroomQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Bedroom Interior Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          At 365dgrsol, we’ve got a wide range of affordable and stylish bedroom
          designs that you’ll love. Our carefully-curated master bedroom designs
          come in a variety of styles, colour schemes and decor ideas - all of
          which can be customised to your taste. Whether you’re looking for a
          contemporary style or a room with rustic sensibilities, we’ve got all
          the bedroom interior design inspiration you’ll need to create a space
          that reflects your personality and taste. Take your pick from these
          trending designs and start your bedroom renovation journey today with
          365dgrsol.
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

export default MasterBedroom;

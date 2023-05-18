import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetPoojaRoomQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const PoojaRoom = () => {
  const { data, isFetching } = useGetPoojaRoomQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Pooja Room Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          A pooja room serves as a sanctuary for peace and prayer and we know
          just how to translate these attributes into our pooja room designs. If
          you are looking for a space rooted in Indian tradition, or something
          with a contemporary aesthetic, we’ve got you covered! Browse through
          our wide range of affordable and customisable mandir designs for your
          home. Get cost estimates for free with 365dgrsol.
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

export default PoojaRoom;

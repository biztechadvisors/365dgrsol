import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetLivingRoomQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const Livingroom = () => {
  const { data, isFetching } = useGetLivingRoomQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Living Room Interior Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Discover a wide range of handpicked, living room interior designs and
          décor ideas at 365dgrsol. We bring you living room designs that are
          customizable, practical and trendy. From modular TV units to wall
          paintings and living room wall designs, you’ll find all the
          inspiration you’ll need to get started. Browse now to zero in on your
          favourite design and create a living room space that reflects your
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

export default Livingroom;

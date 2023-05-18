import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetWindowDesignsQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const WindowDesigns = () => {
  const { data, isFetching } = useGetWindowDesignsQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>

      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Window Design Ideas for Home
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Create beautiful exteriors and warm inviting interiors with our latest
          catalogue of window designs. While windows are essential for
          ventilation, they are also a crucial aesthetic component, enhancing
          the functionality of your home. At 365dgrsol, you will find windows for
          different rooms and spaces. Personalise your windows based on your
          unique preferences, shape requirements and pair it with your existing
          interiors. Here, you will discover trending window glass designs,
          sliding windows & wooden window designs, that can all help transform
          your space. With the promise of plenty of natural sunlight and fresh
          air, our latest window designs will make unique, aesthetic additions
          to the rooms in your house.
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

export default WindowDesigns;

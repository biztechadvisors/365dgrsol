import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetBathroomQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const Bathroom = () => {
  const { data, isFetching } = useGetBathroomQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Bathroom Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          365dgrsol brings you bathroom interior designs that are functional and
          also stylish. Whether you’re looking for small bathroom ideas or
          spacious ones, we’ve created some elegant bathroom designs for you to
          consider for your next home renovation project.
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

export default Bathroom;

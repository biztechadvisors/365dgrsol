import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetKidsBedroomQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const KidsBedroom = () => {
  const { data, isFetching } = useGetKidsBedroomQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Kids Bedroom Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Designing your kid’s bedroom space can be an exciting time for you and
          your child. We’re certain you’ll find a healthy dose of inspiration
          and trending kid’s room designs that will match your child's
          personality! Our handpicked, affordable kid’s bedroom designs can be
          customised to suit your space requirements and your child’s
          imagination. Get in touch with our experts today to build a bedroom
          that your child will love.
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

export default KidsBedroom;

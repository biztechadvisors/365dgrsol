import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetKitchenQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const Kitchen = () => {
  const { data, isFetching } = useGetKitchenQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Modular Kitchen Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          At 365dgrsol, we craft simple modular kitchen designs that are the
          perfect blend of functionality and style. Our curated, modular kitchen
          designs in India range from simple kitchens with minimal interiors to
          more elaborately designed kitchen interior designs. All our modern
          kitchen designs can be customised to fit your budget and existing
          space. We also have kitchen interior designs that work for all shapes:
          Be it a L-shaped kitchen, U-shaped kitchen or open kitchen design -
          crafting a kitchen interior design that works best for your home is
          our goal! Browse through our top kitchen designs of 2022 to transform
          your space today.
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

export default Kitchen;

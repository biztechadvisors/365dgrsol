import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetTileDesignsQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const TileDesigns = () => {
  const { data, isFetching } = useGetTileDesignsQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Tile Designs for Walls & Floors
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Tiles can do so much more than serve the basic function of keeping
          your spaces beautiful. We believe that every surface is an extension
          of your artistic expression & personality, which is why it is
          important to treat your rooms to quality tile designs. No matter how
          big or small your project is, we have got you covered. Browse through
          365dgrsol' latest floor and wall tile designs and take your pick! We
          have tile designs in every colour, shape, finish - crafted &
          engineered to perfection.
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

export default TileDesigns;

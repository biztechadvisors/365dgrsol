import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetWallPaintDesignsQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const WallPaintDesigns = () => {
  const { data, isFetching } = useGetWallPaintDesignsQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Wall Paint Design Ideas
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Keep your walls looking fresh with our exquisite range of wall paints.
          From smooth interior emulsions to distempers and designer finishes,
          we've got all the inspiration you'll ever need to give your rooms the
          colours they deserve. Discover a wide range of wall paint and wall
          colour combinations for all your home painting needs and for every one
          of your spaces. Get a solid colour for your master bedroom or a fun,
          colour-blocked wall for your kid's bedroom. Be creative with patterns,
          designs and finishes. If you have the idea, we have the colours. If
          you have a wall, we've got the wall paint designs!
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

export default WallPaintDesigns;

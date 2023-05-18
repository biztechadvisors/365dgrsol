import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetWallpaperDesignsQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const WallpaperDesigns = () => {
  const { data, isFetching } = useGetWallpaperDesignsQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Wallpaper Design for Home Wall Decor
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Wallpapers can add colour to your walls, giving it a personality of
          its own. If you have always wanted to decorate your wall with fun,
          quirky prints, now is your chance to do it. From animal prints to
          floral patterns & abstract wallpaper designs, each wallpaper has a
          story to tell and can add beauty to your everyday spaces. Scroll
          through our exquisitely curated collection of the latest, handpicked
          wallpaper designs and transform your rooms today! We have wallpapers
          for all wall sizes and rooms and we promise you'll be spoilt for
          choice with our extensive catalogue of trending wallpaper designs.
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

export default WallpaperDesigns;

import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetFoyerDesignsQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const FoyerDesigns = () => {
  const { data, isFetching } = useGetFoyerDesignsQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Foyer Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          With our unique foyer designs that pack both style and function,
          you’ll have a beautiful and well-organized entryway to make that
          stunning first impression. Here are some inspiring foyer design ideas
          to get you started.
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

export default FoyerDesigns;

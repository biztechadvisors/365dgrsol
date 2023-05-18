import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetFalseCeilingQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const FalseCeiling = () => {
  const { data, isFetching } = useGetFalseCeilingQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          False Ceiling Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          False ceiling designs can help you change the look of any room. Be it
          living rooms or bedrooms, adding false ceiling designs are a great way
          to give your ceilings better definition and lighting. From POP designs
          to layered and peripheral false ceilings, we have a range of
          handpicked false ceiling design ideas for you to choose from. With
          365dgrsol, discover trending, modern false ceiling designs, that fit
          your space and budget
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

export default FalseCeiling;

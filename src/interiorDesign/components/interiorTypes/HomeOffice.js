import React from "react";
import { Link } from "react-router-dom";
import "./Kitchen.css";
import { useGetHomeOfficeQuery } from "../../../store/servicesInterior";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";
const HomeOffice = () => {
  const { data, isFetching } = useGetHomeOfficeQuery();
  console.log(data);

  if (isFetching) return "Loading .....";
  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "100%" }}>
        <Typography variant="h3" gutterBottom>
          Home Office Designs
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          A smartly designed home office not only inspires creativity but also
          helps you reach your peak productivity. Whether you want it to be
          minimalistic or modern, we can help you get the look you desire. Here
          are some home office designs to get inspired from
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

export default HomeOffice;

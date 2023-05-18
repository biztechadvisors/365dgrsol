import React from "react";
import "./interior.css";
import { Link } from "react-router-dom";
import {
  Card,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Box,
  Typography,
} from "@mui/material";

const InteriorPage = () => {
  return (
    <Container>
      <section classname="animate">
        <Box sx={{ width: "100%", maxWidth: "100%" }}>
          <Typography variant="h3" gutterBottom>
            Home Interior Design
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            We bring you carefully-curated interior design ideas, to give your
            home a brand new look. Explore exclusive interior designs and trends
            that are every bit inspirational as they are practical. Our team of
            interior designers have put together ideas across kitchen, bedroom,
            living room and more, to help you pick a design that will best suit
            your home interior requirements.
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
          <Link to={"/Kitchen"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/kitchen.webp"}
                  alt={"Kitchen"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                  
                />
                <ImageListItemBar title={"Kitchen"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/Livingroom"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/living.webp"}
                  alt={"Living room"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Living room"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/MasterBedroom"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/mbr.webp"}
                  alt={"Master Bedroom"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Master Bedroom"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/TVUnits"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/tv.webp"}
                  alt={"TV Unit Designs"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"TV Unit Designs"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/FalseCeiling"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={
                    "/assets/interiorDesignIMG/InteriorIMAGES/falseCeiling.webp"
                  }
                  alt={"False Ceiling Designs"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"False Ceiling Designs"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/Wardrobe"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/wardrobe.webp"}
                  alt={"Wardrobe"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Wardrobe"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/KidsBedroom"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/kbrI.webp"}
                  alt={"Kid's Bedroom"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Kid's Bedroom"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/PoojaRoom"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/pooja.webp"}
                  alt={"Pooja Room"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Pooja Room"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/Bathroom"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/bathroom.webp"}
                  alt={"Bathroom"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Bathroom"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/DiningRoom"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/dining.webp"}
                  alt={"Dining Room"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Dining Room"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/FoyerDesigns"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/foyer.webp"}
                  alt={"Foyer"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Foyer"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/GuestBedroom"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/gbr.webp"}
                  alt={"Guest Bedroom"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Guest Bedroom"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/HomeOffice"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/ho.webp"}
                  alt={"Home Office"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Home Office"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/Balcony"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/balcony.webp"}
                  alt={"Balcony"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Balcony"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/TileDesigns"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={
                    "/assets/interiorDesignIMG/InteriorIMAGES/tileDesign.webp"
                  }
                  alt={"Tile Designs"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Tile Designs"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/WallpaperDesigns"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={
                    "/assets/interiorDesignIMG/InteriorIMAGES/wallpaperDesign.webp"
                  }
                  alt={"Wallpaper Designs"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Wallpaper Designs"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/WallPaintDesigns"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={
                    "/assets/interiorDesignIMG/InteriorIMAGES/wallPaint.webp"
                  }
                  alt={"Wall Paint Designs"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Wall Paint Designs"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/WallDecorIdeas"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={
                    "/assets/interiorDesignIMG/InteriorIMAGES/wallDecor.webp"
                  }
                  alt={"Wall Decor Ideas"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Wall Decor Ideas"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/FlooringDesigns"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/flooring.webp"}
                  alt={"Flooring Designs"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Flooring Designs"} />
              </ImageListItem>
            </Card>
          </Link>

          <Link to={"/WindowDesigns"}>
            <Card>
              <ImageListItem sx={{ height: "100% !important" }}>
                <img
                  src={"/assets/interiorDesignIMG/InteriorIMAGES/window.webp"}
                  alt={"Window Designs"}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <ImageListItemBar title={"Window Designs"} />
              </ImageListItem>
            </Card>
          </Link>
        </ImageList>
      </section>
    </Container>
  );
};

export default InteriorPage;

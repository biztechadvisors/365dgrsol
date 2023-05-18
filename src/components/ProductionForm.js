import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ProductionForm() {
  return (
    <div className="container">
      <div className="row">
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img
                  alt="complex"
                  src="https://indianmodelsclub.com/wp-content/uploads/2021/02/model_banner.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Modeling
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    We have dedicated ourselves to re-define the meaning of
                    modeling in India, and verily thrive to give each of our
                    associate models a better chance. With us, you leverage on
                    your talent and get all the bells and whistle of the
                    industry.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img
                  alt="complex"
                  src="https://digitaldealer.com/wp-content/uploads/2019/08/AdobeStock_254221178.jpeg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Tv commercial
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    We have dedicated ourselves to re-define the meaning of
                    modeling in India, and verily thrive to give each of our
                    associate models a better chance. With us, you leverage on
                    your talent and get all the bells and whistle of the
                    industry.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img
                  alt="complex"
                  src="https://firstcut.co.in/images/opportunities-1.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Casting for movies
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    We have dedicated ourselves to re-define the meaning of
                    modeling in India, and verily thrive to give each of our
                    associate models a better chance. With us, you leverage on
                    your talent and get all the bells and whistle of the
                    industry.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

    
      </div>
    </div>
  );
}

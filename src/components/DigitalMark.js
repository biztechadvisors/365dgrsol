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

export default function DigitalMark() {
  return (
    <div>
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
                  src="http://inventivecafe.com/images/page/img-about.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Cafe marketing
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Inventive Cafe India Pvt. Ltd. , the premium Web Developing
                    and Digital Marketing of India is your ultimate guide in
                    this journey of flourishing in business. As you associate
                    with Inventive Cafe India Pvt. Ltd. Inc, expect something
                    above reproach. The experienced team of professionals is the
                    backbone of the organization.
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
                  src="https://marketinginsidergroup.com/wp-content/uploads/2017/01/9323706488_7c288a9659_b.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Events marketing
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Event marketing can help you engage your customers and get
                    your brand noticed. Today’s consumer faces countless pitches
                    and advertisements ever day, so when it comes to running an
                    event, you need to catch the buyer’s eye. In this guide,
                    we’ll talk you through everything you need to get started.
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
                  src="https://inventive-smi.com/wp-content/uploads/2019/06/shutterstock_586452344.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Product marketing
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Because product marketing is closely related to some other
                    roles in marketing, it’s not that obvious what product
                    marketing is really about. That being said, once you learn
                    what product marketers do, it’s impossible to imagine
                    launching a successful product without them.
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
                  src="https://thumbs.dreamstime.com/z/promotion-marketing-commercial-advertising-reward-concept-70783197.jpg"
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Pramotion marketing
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Without a detailed plan of promoting your product, you risk
                    losing money. To find the best way to put your offer in
                    front of the right audience, consider several effective
                    strategies.
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

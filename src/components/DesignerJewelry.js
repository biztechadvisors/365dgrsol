import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Button, CardActionArea, CardActions } from "@mui/material";

export default function DesignerJewelry() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <div className="row" style={{padding:"10 15 10 15"}}>
        <Card sx={{ maxWidth: 400  }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://i.pinimg.com/474x/0c/f1/aa/0cf1aad8d3d6ca8bef00fd445270ec42.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Custome Watch design Gold & Diamond
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Click for Enquiry
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 400 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image="https://i.ytimg.com/vi/9HOTQD_jh4Q/maxresdefault.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Custome Mobile phone design Gold & Diamond
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Click for Enquiry
            </Button>
          </CardActions>
        </Card>
        </div>
        </Container>
    </React.Fragment>
  );
}

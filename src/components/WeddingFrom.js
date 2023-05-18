import React, { useRef, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Axios from "axios";
import dayjs from "dayjs";
import { useLocalStorage } from "../context/useLocalStorage";
import { auth } from "../auth/firebase";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  Button,
  Chip,
  FormControl,
  ImageListItem,
  ImageListItemBar,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import "./WeddingForm.css";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function WeddingFrom() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "block",
  };

  const { activities } = useParams();
  const history = useHistory();
  const form = useRef();
  const [attendees, setAttendees] = useLocalStorage("attendees", "");
  const [properties, setProperties] = useLocalStorage("properties", "");
  const [location, setLocation] = useLocalStorage("location", "");
  const [timer, setTimer] = useLocalStorage("timer", dayjs());
  const [state, setState] = useState([]);
  const [prop, setProp] = useState([]);
  const [place, setPlace] = useState([]);
  const [title, setTitle] = useLocalStorage("title", "");
  const [name, setName] = useLocalStorage("name", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [message, setMessage] = useLocalStorage("message", "");
  const [open, setOpen] = useState(false);
  const [res, setRes] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
  };

  const mouseHandler = (e) => setTitle(e.target.alt);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [propResponse, placeResponse] = await Promise.all([
          Axios.get("http://biztekminds.com/mycoolapp/api/properties"),
          Axios.get("http://biztekminds.com/mycoolapp/api/propertylocation"),
        ]);
        setProp(propResponse.data);
        setPlace(placeResponse.data);
      } catch (error) {
        setProp(`Error fetching properties: ${error.message}`);
        setPlace(`Error fetching locations: ${error.message}`);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (location && properties) {
      Axios.get(
        `http://biztekminds.com/mycoolapp/api/property/${location}&${properties}`
      )
        .then((response) => {
          setState(response.data);
        })
        .catch((error) => {
          setState(`Error fetching property data: ${error.message}`);
        });
    }
  }, [location, properties]);

  // insert data----------------


  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if form is valid
    if (!form.current.reportValidity()) {
      return;
    }
    // Check if logged in
    if (auth.currentUser) {
      Axios.post("http://biztekminds.com/mycoolapp/api/365detail", {
        activities: activities,
        attendies: attendees,
        time: timer,
        fulladd: title,
        name: name,
        email: email,
        message: message,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(
            "There has been a problem with your fetch operation: " +
              error.message
          );
        });
      //--------------End----------------------------
      event.target.reset();
      setTitle("");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Please Login");
      // User is not logged in
      history.push("/Login");
    }
  };

  const enabled = name.length > 0 && email.length > 0;

  return (
    <div className="main-wrapper page-aboutus">
      <section className="bredcrumb">
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="--form-control --card --flex-center --dir-column"
        >
          <div className="form-row justify-content-md-center mb-4">
            <FormControl sx={{ m: 2, minWidth: 120 }} size="medium">
              <Button
                variant="outlined"
                size="medium"
                color="secondary"
                disable
              >
                {activities}
              </Button>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
              <InputLabel id="demo-select-small">Place</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Place"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <MenuItem value="">
                  <em>Place</em>
                </MenuItem>
                {place.map((val) => (
                  <MenuItem
                    key={val.prop_city + " -" + val.prop_state}
                    value={val.prop_city}
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    {val.prop_city + " -" + val.prop_state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
              <InputLabel id="demo-select-small">Properties</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                label="Properties"
                value={properties}
                onChange={(e) => setProperties(e.target.value)}
              >
                <MenuItem value="">
                  <em>Properties</em>
                </MenuItem>
                {prop.map((val) => (
                  <MenuItem
                    key={val.prop_type}
                    value={val.prop_type}
                    onChange={(e) => setProperties(e.target.value)}
                  >
                    {val.prop_type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
              <InputLabel id="demo-select-small">Attendees</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={attendees}
                label="Attendees"
                onChange={(e) => setAttendees(e.target.value)}
              >
                <MenuItem value="">
                  <em>Attendees</em>
                </MenuItem>
                <MenuItem value={`10 to 25`}>10 to 25</MenuItem>
                <MenuItem value={`25 to 50`}>25 to 50</MenuItem>
                <MenuItem value={`51 to 100`}>51 to 100</MenuItem>
                <MenuItem value={`Over 100`}>Over 100</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="When ?"
                  renderInput={(params) => <TextField {...params} />}
                  value={timer}
                  onChange={(newValue) => {
                    setTimer(newValue);
                  }}
                />
              </LocalizationProvider>
            </FormControl>
          </div>
          <div
            style={{
              backgroundColor: "purple",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" component="h2" style={{ color: "white" }}>
              What kind of space are you looking for?
            </Typography>
          </div>

          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all .4"
            transitionDuration={300}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            itemClass="carousel-item-padding-60-px"
            style={{ marginTop: "20px" }}
          >
            {state.map((item) => (
              <ImageListItem
                key={item.prop_type}
                style={{ margin: "10px 0px 0px 10px" }}
              >
                <img
                  style={{ height: "220px" }}
                  src={`${item.prop_img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.prop_img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={
                    item.prop_type +
                    ": " +
                    item.prop_name +
                    `- ` +
                    item.prop_address
                  }
                  onClick={mouseHandler}
                />
                <ImageListItemBar
                  title={
                    item.prop_name +
                    "- " +
                    item.prop_address +
                    "- " +
                    item.prop_capacity +
                    " People Capacity"
                  }
                />
              </ImageListItem>
            ))}
          </Carousel>
          <div>
            <>
              <Paper
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  listStyle: "none",
                  p: 0.5,
                  m: 0,
                }}
                component="ul"
              >
                <ListItem>
                  <Chip label={title} />
                </ListItem>
              </Paper>
            </>
          </div>
          <br />
          <div className="form-group col-md-12">
            <textarea
              className="form-control"
              placeholder="Message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              id="exampleTextarea"
              rows="6"
            ></textarea>
          </div>
          <div className="row">
            <div className="form-group col-md-6">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                id="exampleInputName"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                id="exampleInputEmail"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={!enabled}
            onSubmit={handleSubmit}
            style={{ margin: "20px" }}
            className="btn btn-default btn-primary bold"
          >
            Submit
          </button>

          <Modal
            hideBackdrop
            disableAutoFocus
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="h3" sx={{ textAlign: "center" }}>
                <div id="postIt" style={{ color: "red", display: "block" }}>
                  {res && <div>{res}</div>}
                </div>
              </Typography>
            </Box>
          </Modal>
        </form>
      </section>
    </div>
  );
}

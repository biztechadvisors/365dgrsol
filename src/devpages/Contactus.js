import React, { useState } from "react";
import { useRef } from "react";
import Axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card } from "@mui/material";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

function Contactus() {
  const form = useRef();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    textarea: "",
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    // window.location.reload();
    setUser({
      name: "",
      email: "",
      phone: "",
      subject: "",
      textarea: "",
    });
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUser((prev) => {
      return { ...user, [name]: value };
    });
  };

  const [state, setState] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("https://biztekminds.com/mycoolapp/api/insertd1", {
      name: user.name,
      email: user.email,
      phone: user.phone,
      subject: user.subject,
      textarea: user.textarea,
    })
      .then(function (response) {
        setState(response.data.message);
        console.log(response.data.message);
        // alert(JSON.stringify(response.data.message));
        console.log(response);
        // return setMessage = response.data.message;
      })
      .catch(function (error) {
        setState(error.message);
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      });

    Axios.post("https://biztekminds.com/mycoolapp/send_mail_contactus", {
      name: user.name,
      email: user.email,
      phone: user.phone,
      subject: user.subject,
      textarea: user.textarea,
    }).catch(function (error) {
      console.error(error);
    });
    event.target.reset();
    console.log(user);
    handleOpen();
    setTimeout(handleClose, 3000);
  };

  const { name, email, phone, subject, textarea } = user;
  const enabled =
    name.length > 0 &&
    email.length > 0 &&
    phone.length > 0 &&
    subject.length > 0 &&
    textarea.length > 0;

  return (
    <div>
      <div className="main-wrapper page-contactus">
        <section className="bredcrumb">
          <div
            className="bg-image text-center"
            style={{ backgroundImage: "url('assets/img/bg-bredcrumb.jpg')" }}
          >
            <h1>Contact Us</h1>
          </div>
          <div className="#">
            <ul className="pager middle">
              <li>Home</li>
              <li>
                <a href="javascript:void(0)">Contact Us</a>
              </li>
            </ul>
          </div>
        </section>

        <section className="contactus">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="--form-control --card --flex-center --dir-column"
                >
                  <div className="sectionTitle">
                    <h2>Get in Touch</h2>
                    <p>
                      We appreciate your interest in Digitize Advisory. Please
                      reach out to us for your queries.
                    </p>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        placeholder="Name"
                        className="form-control"
                        id="exampleInputName"
                        name="name"
                        onChange={handleInput}
                        value={user.name}
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
                        onChange={handleInput}
                        value={user.email}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="number"
                        placeholder="Phone"
                        className="form-control"
                        id="exampleInputPhone"
                        name="phone"
                        onChange={handleInput}
                        value={user.phone}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="form-control"
                        id="exampleInputSubject"
                        name="subject"
                        onChange={handleInput}
                        value={user.subject}
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        name="textarea"
                        onChange={handleInput}
                        value={user.textarea}
                        id="exampleTextarea"
                        rows="6"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={!enabled}
                    onSubmit={handleSubmit}
                    // onClick={handleOpen}
                    className="btn btn-default btn-primary bold"
                  >
                    Send Message
                  </button>
                </form>

                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box>
                    <Typography id="modal-modal-description">
                      <Card
                        sx={{
                          mt: 10,
                          fontSize: 50,
                          textAlign: "center",
                          fontFamily: "Roboto",
                          fontweight: "bold",
                        }}
                      >
                        {state && <div>{state}</div>}
                      </Card>
                    </Typography>
                  </Box>
                </Modal>
              </div>
              <div className="col-lg-4">
                <div className="contact_sidebar">
                  <div className="media-box bg-sand">
                    <div className="media-icon">
                      <MarkEmailReadIcon />
                    </div>
                    <div className="media-content">
                      <b>
                        <h4>Email</h4>
                      </b>
                      <p>
                        <a href="mailto:info@365drgsol.com">
                          info@365drgsol.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="media-box bg-sand">
                    <div className="media-icon">
                      <LocationOnIcon />
                    </div>
                    <div className="media-content">
                      <b>
                        <h4>Address</h4>
                      </b>
                      <p>
                        ( Gujarat ), ( M.P ), ( Maharastra ), (Rajsthan) India.
                      </p>
                    </div>
                  </div>

                  <div className="media-box bg-sand">
                    <div className="media-icon">
                      <HeadsetMicIcon />
                    </div>
                    <div className="media-content">
                      <b>
                        <h4>Call Or Whatsapp Us</h4>
                      </b>
                      <p>
                        <a href="tel:9712332222">Whatsapp : 9712332222</a>
                      </p>
                      <p>Contact person : Shashank Kothari</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contactus;

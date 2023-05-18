import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";

export default function Admin() {
  let history = useHistory();
  
      const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
      const [isAdmin, setIsAdmin] = useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();
    // check if the entered credentials match the correct ones
    if (username === "info@365dgrsol.in" && password === "365dgrsol@123") {
      history.push('/AdminDashboad');
      setIsAdmin(true);
    } else {
      alert("Incorrect credentials");
    }
  };

  return (
    <div className="container" style={{ padding: "20px" }}>
 <form onSubmit={handleSubmit}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            ></Box>
            <Box noValidate sx={{ mt: 1 }}>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <TextField
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                label="username"
                margin="normal"
                required
              />

              <br />

              <TextField
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                label="password"
                margin="normal"
                required
              />

              <br />
              <Button type="submit">Log in</Button>
            </Box>
          </Container>
        </form>
    </div>
  );
}

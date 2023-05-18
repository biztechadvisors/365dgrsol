import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

import { Link } from "react-router-dom";
import { auth } from "../auth/firebase";
import { signOut } from "firebase/auth";
import "../App.css";

function Navbar() {
  const PrimaryMainTheme = createTheme({
    palette: {
      primary: {
        main: "#3A004C",
      },
    },
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const Logout = (event) => {
    localStorage.clear();
    signOut(auth)
      .then(() => {
        console.log("logged out");
        window.location.pathname = "Login";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={PrimaryMainTheme}>
      <AppBar position="static">
        <Container sx={{ minHeight: 80 }} maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              365dgrsol
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                  <Link to="/" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to="/Portfolio" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Portfolio</Typography>
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to="/Aboutus" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Aboutus</Typography>
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link to="/Contactus" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"> Contact Us</Typography>
                  </Link>
                </MenuItem>

                <MenuItem>
                  {localStorage.getItem("user") ? (
                    <Link to="/Login" onClick={Logout}>
                      <Typography textAlign="center"> Logout</Typography>
                    </Link>
                  ) : (
                    <Link to="/Login" onClick={handleCloseNavMenu}>
                      <Typography textAlign="center"> Login</Typography>
                    </Link>
                  )}
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              365dgrsol
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link to="/">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Home
                </Button>
              </Link>
              <Link to="/Portfolio">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Portfolio
                </Button>
              </Link>
              <Link to="/Aboutus">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Aboutus
                </Button>
              </Link>
              <Link to="/Contactus">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Contact Us
                </Button>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={user} src="#" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {localStorage.getItem("user") ? (
                  <Link to="/Login" onClick={handleCloseUserMenu}>
                    <MenuItem onClick={Logout}>Logout</MenuItem>
                  </Link>
                ) : (
                  <Link to="/Login">
                    <MenuItem onClick={handleCloseUserMenu}>Login</MenuItem>
                  </Link>
                )}

                <Link to="/Admin">
                  <MenuItem onClick={handleCloseUserMenu}>Admin</MenuItem>
                </Link>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;

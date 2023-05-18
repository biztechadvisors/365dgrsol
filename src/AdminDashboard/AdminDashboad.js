import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  MenuItem,
  Menu,
  Toolbar,
  InputBase,
  AppBar,
} from "@mui/material";

import "./AdminDashboard.css";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

const AdminDashboard = () => {
  const [dashboardAnchorEl, setDashboardAnchorEl] = React.useState(null);
  const [componentsAnchorEl, setComponentsAnchorEl] = React.useState(null);

  const openDashboardMenu = Boolean(dashboardAnchorEl);
  const openComponentsMenu = Boolean(componentsAnchorEl);

  const handleDashboardMenuClick = (event) => {
    setDashboardAnchorEl(event.currentTarget);
  };

  const handleDashboardMenuClose = () => {
    setDashboardAnchorEl(null);
  };

  const handleComponentsMenuClick = (event) => {
    setComponentsAnchorEl(event.currentTarget);
  };

  const handleComponentsMenuClose = () => {
    setComponentsAnchorEl(null);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <div className="title">
          <h1>Welcome to the Admin Panel</h1>

          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              <Button
                className="navLink"
                aria-controls="dashboard-menu"
                aria-haspopup="true"
                aria-expanded={openDashboardMenu ? "true" : undefined}
                onClick={handleDashboardMenuClick}
              >
                Dashboard
              </Button>
              <Menu
                id="dashboard-menu"
                anchorEl={dashboardAnchorEl}
                open={openDashboardMenu}
                onClose={handleDashboardMenuClose}
              >
                <Link to="/EventInquiry">
                  <MenuItem>Event Organiser Inquiry</MenuItem>
                </Link>
                <Link to="/ProductionHouseInquiry">
                  <MenuItem>Production House Inquiry</MenuItem>
                </Link>
                <Link to="/CustomiseJewelDesignInquiry">
                  <MenuItem>Customise Jewel Design Inquiry</MenuItem>
                </Link>
                <Link to="/TechElectronicsInquiry">
                  <MenuItem>Tech Electronics Inquiry</MenuItem>
                </Link>
                <Link to="/InteriorDesigningInquiry">
                  <MenuItem>Interior Designing Inquiry</MenuItem>
                </Link>
                <Link to="/DigitalMarketingInquiry">
                  <MenuItem>
                    Digital Marketing & Product Marketing Inquiry
                  </MenuItem>
                </Link>
              </Menu>
            </Typography>
            <Typography variant="h6" noWrap component="div">
              <Button
                className="navLink"
                aria-controls="components-menu"
                aria-haspopup="true"
                aria-expanded={openComponentsMenu ? "true" : undefined}
                onClick={handleComponentsMenuClick}
              >
                Components
              </Button>
              <Menu
                id="components-menu"
                anchorEl={componentsAnchorEl}
                open={openComponentsMenu}
                onClose={handleComponentsMenuClose}
              >
                <Link to="/EventOrganiser">
                  <MenuItem>Event Organiser</MenuItem>
                </Link>
                <Link to="/ProductionHouse">
                  <MenuItem>Production House</MenuItem>
                </Link>
                <Link to="/CustomiseJewelDesign">
                  <MenuItem>Customise Jewel Design</MenuItem>
                </Link>
                <Link to="/TechElectronics">
                  <MenuItem>Tech Electronics</MenuItem>
                </Link>
                <Link to="/InteriorDesigning">
                  <MenuItem>Interior Designing</MenuItem>
                </Link>
                <Link to="/DigitalMarketing">
                  <MenuItem>Digital Marketing & Product Marketing</MenuItem>
                </Link>
              </Menu>
            </Typography>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Toolbar>
        </div>
      </Box>
    </div>
  );
};

export default AdminDashboard;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ApartmentIcon from '@mui/icons-material/Apartment';
import { Link } from "react-router-dom";

const pages = ["Venta", "Alquiler", "Temporal"];
const settings = [
  "Ingresar",
  "Perfil",
  "Configuracion",
  "Favoritos",
  "Log out",
];

function Navbar() {
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
    <AppBar  position="sticky">
      <Container maxWidth="xxl" >
        <Toolbar disableGutters sx={{margin:"0 2rem"}}>
          <ApartmentIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1,  }}>
            <Link></Link>
          </ApartmentIcon>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Lato",
              fontWeight: 300,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Blue Paradise
          </Typography>
          <Typography sx={{fontSize: "3rem", fontWeight: "100"}}>|</Typography>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                href={"/" + page}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block", fontFamily: "Lato", fontWeight: "300", position: "relative", top: "0.06rem", fontSize: ".9rem", letterSpacing: ".1rem", left: "1rem" }}
              >
                <Link
                  to={`/` + page}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {page + "   |"}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, mr: "35px" }}>
            <Tooltip title="Usuario">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <ListRoundedIcon sx={{fontSize:"3rem", color: "white"}}/>
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
              {settings.map((setting) => (
                <MenuItem sx={{margin: 0, padding: 0}} key={setting} onClick={handleCloseUserMenu}>
                  <Button href={`/` + setting} key={setting} 
                  sx={{
                    width:"100%",
                    padding: "0.5rem 1rem"
                    }}>
                  <Link
                    to={`/` + setting}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    {setting}
                  </Link>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

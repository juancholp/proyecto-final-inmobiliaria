import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography } from "@mui/material";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  backgroundColor: "transparent",
  color: "white",
  border: "none",
  fontFamily: "Lato",
  letterSpacing: ".1rem",
  borderRadius: 0,
  "& a": {
    color: "inherit",
    textDecoration: "none",
  },
}));

export default function StickyFooter() {
  return (
    <Box className="footer" sx={{position: "static",
    marginTop: "28vh",
    height: "6vh",
    bottom: 0,
    width: "100vw"
    }}>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={{fontSize: "1.2rem", position: "relative",  left: "-2rem", top: "-.3rem"}}>
          <Item>
            <Typography sx={{fontFamily: "Lato", letterSpacing: ".1rem"}}>
            © 2023 Blue Paradise
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ justifyContent: "flex-end" }}>
        <Grid item xs={3}>
          <Item sx={{position: "relative", right: "-4rem", top: "-.8rem"}}>
            <a href="www.facebook.com">
              <FacebookIcon sx={{ marginRight: "3px", position: "relative", top: "5px" }} />
              Facebook
            </a>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item sx={{position: "relative", right: "-4rem", top: "-0.8rem"}}>
            <a href="www.youtube.com">
              <YouTubeIcon sx={{ marginRight: "3px", position: "relative", top: "5px" }} />
              YouTube
            </a>
          </Item>
        </Grid>
        <Grid item xs={3} sx={{marginRight: "0"}}>
          <Item sx={{position: "relative", right: "-2rem", top: "-0.8rem"}}>
            <a href="www.twitter.com">
              <TwitterIcon sx={{ marginRight: "3px", position: "relative", top: "5px" }} />
              Twitter
            </a>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

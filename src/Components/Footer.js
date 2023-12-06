import * as React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography } from "@mui/material";

const Item = styled("div")(({ theme }) => ({
  textAlign: "left",
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
    <Box
      className="footer"
      sx={{
        zIndex: "5",
        position: "fixed",
        bottom: 0,
        width: "100vw",
        padding: 0,
        height: "5vh",
        alignContent: "center",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6} sx={{ paddingLeft: 0 }}>
          <Item>
            <Typography sx={{ fontFamily: "Lato", letterSpacing: ".1rem", margin: "auto 2rem" }}>
              © 2023 Blue Paradise
            </Typography>
          </Item>
        </Grid>
        <Grid item container xs={6} justifyContent="flex-end" spacing={3}>
          <Grid item>
            <Item>
            <Typography href="www.facebook.com" sx={{position: "relative", top: "-2px"}}>
                <FacebookIcon sx={{ marginRight: "3px", position: "relative", top: "5px" }} />
                Facebook
              </Typography>
            </Item>
          </Grid>
          <Grid item>
            <Item>
            <Typography href="www.youtube.com" sx={{position: "relative", top: "-2px"}}>
                <YouTubeIcon sx={{ marginRight: "3px", position: "relative", top: "5px" }} />
                YouTube
              </Typography>
            </Item>
          </Grid>
          <Grid item>
            <Item sx={{ marginRight: "2rem"}}>
              <Typography href="www.twitter.com" sx={{position: "relative", top: "-2px"}}>
                <TwitterIcon sx={{ marginRight: "3px", position: "relative", top: "5px" }} />
                Twitter
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

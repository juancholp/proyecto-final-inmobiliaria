import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@material-ui/core/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};
const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function FormMessage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Button
          variant="outlined"
          onClick={handleClickOpen}
          sx={{
            minWidth: "10vw",
            backgroundColor: "#1976d2",
            color: "white",
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 5px 10px, rgba(0, 0, 0, 0.23) 0px 3px 3px",
            "&:hover": {
              backgroundColor: "white",
              color: "#1976d2",
            },
          }}
        >
          Consultar
        </Button>
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Consultar
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          
          <DialogContent dividers>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "50ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={2}>
                  <TextField
                    id="outlined-basic"
                    label="Nombre"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Telefono"
                    variant="outlined"
                  />
                </Stack>

                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  id="fullWidth"
                />

                <Stack direction="row">
                  <StyledTextarea
                    style={{
                      width: "100%",
                      fontSize: "1.3rem",
                      fontFamily: "Lato",
                    }}
                    variant="outlined"
                    id="outlined-multiline-flexible"
                    label="Mensaje"
                    placeholder="Ingrese su consulta y sera respuesta a la brevedad."
                    aria-label="minimum height"
                    minRows={5}
                  />
                </Stack>

                <Button
                  autoFocus
                  variant="contained"
                  fullWidth
                  onClick={handleClose}
                >
                  Enviar
                </Button>
              </Stack>
            </Box>
          </DialogContent>
        </BootstrapDialog>
      </div>
    </>
  );
}

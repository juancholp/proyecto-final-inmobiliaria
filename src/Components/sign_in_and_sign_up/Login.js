import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@material-ui/core/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { storeContext } from "../../Store/StoreProvider";


const grey = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
};

const blue = {
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
    box-shadow: 0px 2px 2px ${theme.palette.mode === "dark" ? grey[900] : grey[50]
        };

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[500] : blue[200]
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

export default function Login() {
    const [open, setOpen] = React.useState(false);
    const [store, dispatch] = React.useContext(storeContext);
    const [emailIngresado, setEmailIngresado] = React.useState()
    const handleClickOpen = () => {
        setOpen(true);
    };
    const LoginhandleClose = () => {
        // setOpen(false);
        store.listUsuarios.forEach(element => {
            console.log("dato ingresado", emailIngresado)
            if (element.user == emailIngresado) {
                console.log("encontreado")
            }
        });

        console.log(" no encontreado")


    };
    const handleClose = () => {
        setOpen(false);

    };

    return (

        <div>
            <Button variant="contained" color="success" onClick={handleClickOpen}>
                Ingresar
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Login
                </DialogTitle>

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
                            <Stack direction="column" spacing={2}>

                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    id="fullWidth"
                                    onChange={(e) => setEmailIngresado(e)}
                                />

                                <TextField
                                    id="outlined-basic"
                                    label="Contraseña"
                                    variant="outlined"
                                />

                            </Stack>
                            <Stack direction="column" spacing={2}>

                                <Button
                                    autoFocus
                                    variant="contained"
                                    fullWidth
                                    onClick={LoginhandleClose}
                                >
                                    Login
                                </Button>
                                <Button
                                    autoFocus
                                    variant="contained"
                                    fullWidth
                                    onClick={handleClose}
                                >
                                    sign up
                                </Button>

                            </Stack>

                        </Stack>
                    </Box>
                </DialogContent>

            </BootstrapDialog>
        </div>

    );
}

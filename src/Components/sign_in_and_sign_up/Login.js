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
    const [contraseñaIngresado, setContraseñaIngresado] = React.useState()

    const handleClickOpen = () => {
        setOpen(true);
    };


    const LoginhandleClose = () => {
        setOpen(false);
        store.listUsuarios.forEach(element => {
            console.log("dato ingresado", element.user)
            if (element.user === emailIngresado) {

                console.log("encontreado")
                let usuarioIngresado =
                {
                    user: emailIngresado,
                    passwords: contraseñaIngresado,
                    nameUser: element.nameUser,
                    fotoPerfil:element.fotoPerfil,
                }
                console.log("usuario",usuarioIngresado )
                dispatch({ type: "setUsuario", payload: usuarioIngresado });
            }
        });
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
                                    label="Usuario"
                                    variant="outlined"
                                    id="fullWidth"
                                    onChange={(e) => setEmailIngresado(e.target.value)}
                                />

                                <TextField
                                    id="outlined-basic"
                                    label="Contraseña"
                                    variant="outlined"
                                    onChange={(e) => setContraseñaIngresado(e.target.value)}

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

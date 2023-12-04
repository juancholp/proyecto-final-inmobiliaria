import React from "react";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
const Noticias = () => {
  const [noticias, setNoticias] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blue Paradise | Noticias";
  }, []);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=Uruguay&from=2023-12-03&sortBy=popularity&language=es&apiKey=c8df999b9e4946a18bb36ed54bddc41e"
    )
      .then((res) => res.json())
      .then((data) => setNoticias(data));
    setLoading(false);
  }, []);

  return (
    <Container
      sx={{
        mt: 4,
        mb: 4,
        p: 2,
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <h1>Noticias</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <Container
          sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 2 }}
        >
          {noticias &&
            noticias.articles.slice(0, 10).map((noticia) => (
              <Card
                sx={{ maxWidth: 345, boxShadow: 3, mb: 2 }}
                key={noticia.title}
              >
                <CardMedia
                  sx={{ height: 140 }}
                  image={noticia.urlToImage}
                  title={noticia.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {noticia.title}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{ textAlign: "left" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {noticia.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => window.open(noticia.url)} size="small">
                    Lee mas ...
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Container>
      )}
    </Container>
  );
};

export default Noticias;

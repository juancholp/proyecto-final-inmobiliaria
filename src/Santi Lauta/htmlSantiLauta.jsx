import React from 'react';

class MiComponente extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="cssSantiLauta.css" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossOrigin="anonymous"
          />
          <title>Tarjeta con Carrusel Izquierdo</title>
        </head>
        <body>
          <script src="componenteLauSanti.js"></script>
          {/* Aca viene el codigo del carrousel */}
          <div className="container text-center">
            <div className="row align-items-start">
              <div className="col">
                Carrousel
                <div id="carouselExample" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="https://cdn2.infocasas.com.uy/repo/img/th.outside654x482.59_nai_309_331_512.jpg"
                        className="d-block w-100"
                        alt="1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.59_nai_309_331_954.jpg"
                        className="d-block w-100"
                        alt="2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="https://cdn2.infocasas.com.uy/repo/img/th.outside500x1.59_nai_309_331_512.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              {/* Aca abajo viene la card del texo */}
              <div className="col">
                Texto
                <div className="card">
                  <h5 className="card-header">U$S 315.000</h5>
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>U$S 315.000</b>
                    </h5>
                    <h5 className="card-title2">
                      <b>3 Dor. 3 Baños. 129mt</b>
                    </h5>
                    <p className="card-text">
                      A pasos de la rambla, excelente planta muy amplia y
                      luminosa. 5to piso. Living comedor con grandes ventanales
                      a la calle, amplio hall de distribución con un gran mueble
                      para guardado, tres amplios dormitorios con placard, uno
                      al frente y los otros dos al contra frente muy
                      despejado.Dos baños completos hechos a nuevo. Cocina con
                      gran cantidad de placares, terraza lavadero y servicio
                      completo.- Calefacción por losa y portero. Garaje, para un
                      auto. lugar fijo .- Gastos comunes en Verano $ 25.000 en
                      Invierno 29.000.- Fondo de reserva {'>'}U$S 30.-<br/> <br
                      />Pocitos. Montevideo
                    </p>
                    <a href="#" className="btn btn-primary">
                      Consultar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

export default MiComponente;

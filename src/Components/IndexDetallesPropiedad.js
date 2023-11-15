import Breadcrumb from "./feature_propertyDetails/Breadcrumbs.js";
import { useEffect, useState } from "react";
import IconDetalle from "./feature_propertyDetails/IconDetalle.js";
import MapView from "./feature_propertyDetails/MapView.js";
import "./feature_propertyDetails/Styles/DestalleDePropiedad.css";
import DPropiedad from "./feature_propertyDetails/Descripcion.js";
import Propiedades from "./feature_propertyDetails/Propiedades.js";
import React from "react";
import "./feature_propertyDetails/Styles/imagen.css";
import Carrousel from "./Carrousel.js";
import { storeContext} from "../Store/StoreProvider";

function DetallePropiedad(props) {
  const [casa, setCasa] = useState(store.propiedades[1]);
  const [store, dispatch] = React.useContext(storeContext);
  const hilos = [
    "MarcketPlace inmobiliario",
    "Alquiler",
    "Maldonado",
    "Punta Del Este",
    "Arquiler de monoambiente",
  ];
  return (
    <div className="DetallePropiedad">
      <header className="main">
        <Breadcrumb Seguimiento={hilos} />

        <div className="DetallePropiedadImagen">
          <Carrousel />
        </div>
        <div className="carta">
          <div className="subCarta">
            <div className="encabezado">
              <h1 className="ttitle">{casa.title}</h1>
              <IconDetalle
                className="icono"
                bano={casa.banos}
                dormitorio={casa.dormitorio}
                m2Terreno={casa.m2Terreno}
              />
            </div>
            <div>
              <p className="Moneda">
                <strong>
                  {casa.tipoMoneda}
                  {casa.precio}
                </strong>
              </p>
              <p className="precio">Precio de {casa.tipoVenta}</p>
            </div>
          </div>
          <MapView />
        </div>
        <div>
        </div>
        <div className="dPropiedad">
          <DPropiedad texto={casa.descripcion} />
        </div>
      </header>
    </div>
  );
}
export default DetallePropiedad;

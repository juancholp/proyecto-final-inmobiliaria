import React from 'react';
import { useParams } from 'react-router-dom';

const DetallePropiedadComponent = ({ propiedades }) => {
  // Obtener el ID de la URL
  const { id } = useParams();

  // Encontrar la propiedad con el ID correspondiente
  const propiedad = propiedades.find((propiedad) => propiedad.id === parseInt(id, 10));

  // Renderizar la información de la propiedad
  return (
    <div>
      <h1>{`Detalles de la propiedad: ${propiedad.title}`}</h1>
      <p>{`Precio: ${propiedad.tipoMoneda} ${propiedad.precio}`}</p>
      <p>{`Descripción: ${propiedad.descripcion}`}</p>
      <p>{`Ubicación: ${propiedad.ubicacion.join(', ')}`}</p>
      <p>{`Comodidades: ${propiedad.comodidades.join(', ')}`}</p>
      <p>{`Tipo de Propiedad: ${propiedad.tipoDePropiedad}`}</p>
      <p>{`Baños: ${propiedad.baños}`}</p>
      <p>{`Dormitorios: ${propiedad.dormitorios}`}</p>
      <p>{`Año de Construcción: ${propiedad.anioConstruccion}`}</p>
      <p>{`Estado: ${propiedad.estado}`}</p>
      <img src={propiedad.imgsrc[0]} alt="Imagen de la propiedad" />
    </div>
  );
};

export default DetallePropiedadComponent;
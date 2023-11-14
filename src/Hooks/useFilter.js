export const filterResultados = (results, filterParams) => {
  const filters = filterParams;
  const filteredResults = results.filter((result) => {
    if (filters.localidad.length > 0) {
      return filters.localidad.includes(result.ubicacion[1]);
    }
    if (filters.tipo.length > 0) {
      return filters.tipo.includes(result.tipoDePropiedad);
    }
    if (filters.dormitorios.length > 0) {
      return filters.dormitorios.includes(result.dormitorio);
    }
    if (filters.moneda.length > 0) {
      return filters.moneda.includes(result.tipoMoneda);
    }
    return true;
  });

  return filteredResults;
};

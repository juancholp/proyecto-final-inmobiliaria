export const filterResultados = (results, filterParams) => {
  const filters = filterParams;
  const filteredResults = results.filter((result) => {
    if (filters.localidad.length > 0) {
      return filters.localidad.includes(result.ubicacion[1]);
    }
    if (filters.tipo.length > 0) {
      return filters.tipo.includes(result.tipoDePropiedad);
    }
    return true;
  });

  return filteredResults;
};

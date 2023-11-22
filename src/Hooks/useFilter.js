import { useContext, useEffect, useState } from "react";

const useFilter = (results, filters) => {
  const [filteredResults, setFilteredResults] = useState(results);
  useEffect(() => {
    const filteredResults = results.filter((result) => {
      return Object.keys(filters).every((key) => {
        if (result[key] === undefined) {
          return true;
        }
        if (filters[key].length === 0) {
          return true;
        }
        return result[key].includes(filters[key]);
      });
    });
    setFilteredResults(filteredResults);
  }, [results, filters]);
  return [filteredResults];
};

export { useFilter };

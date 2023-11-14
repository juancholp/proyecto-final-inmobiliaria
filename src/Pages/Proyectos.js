import React, { useContext } from "react";
import { storeContext } from "../Store/StoreProvider";

const Proyectos = () => {
  const [store, dispatch] = useContext(storeContext);
  return <div>Proyectos</div>;
};

export default Proyectos;

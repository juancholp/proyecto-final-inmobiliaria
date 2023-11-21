import {

  ListadoLocalidades,
  ListadoTipoPropiedad,
  ListadoCantidadDormitorios,
  ListadoBaños,
  ListadoTipoDePublicacion,
  ListadoMoneda,
  ListadoDeEstado,
  ListadoComodidades,
  ListadoOpciones,
  ListadoAtributos,
  ListadotypesDeAtributos,
  nombreDeGuardadoDeLosAtributos,
  Usuarios,
} from './Data.js'
import { ListadoPropiedades} from "./DataPropiedades.js"
const initialStore = () => {
  const store = {
    propiedades: ListadoPropiedades,
    localidades: ListadoLocalidades,
    tipoPropiedad: ListadoTipoPropiedad,
    typesAtributos:ListadotypesDeAtributos,
    dormitorios: ListadoCantidadDormitorios,
    baños: ListadoBaños,
    opcion: ListadoOpciones,
    publicacion: ListadoTipoDePublicacion,
    moneda: ListadoMoneda,
    estado: ListadoDeEstado,
    comodidad: ListadoComodidades,
    atributos: ListadoAtributos,
    nombreAtributosGuardado: nombreDeGuardadoDeLosAtributos,
    filters: {
      localidad: [],
      estado: [],
      tipo: [],
      dormitorios: [],
      moneda: [],
      maxPrice: 0,
      comodidad: [],
      TipoDePublicacion: [],
    },
    listUsuarios:Usuarios,
    usuarioIngresado:
    {
    nameUser:null,
    user:null,
    passwords:null,
    fotoPerfil:null,
    },

  }
  return store
}

const types = {
  setProperty: "setProperty",
  setFilters: "setFilters",
  setUsuario: "setUsuario",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.setProperty:
      return {
        ...state,
        propiedades: state.propiedades.concat( action.payload),
      };
    case types.setFilters:
      return {
        ...state,
        filters: {  ...action.payload },
      };
      case types.setUsuario:
      return {
        ...state,
        UsuarioIngresado: {  ...action.payload },
      };

    default:
      return state;
  }
};

export { types };
export { initialStore };
export default storeReducer;
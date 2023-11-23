import { createContext, useReducer } from 'react'
import storeReducer, { initialStore } from './StoreReducer'

const storeContext = createContext()

const intialData = initialStore()

export const filterParams = {
  localidad: [],
  estado: [],
  tipo: [],
  dormitorios: [],
  moneda: [],
  maxPrice: 0,
  comodidad: [],
  TipoDePublicacion: [],
}

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, intialData)

  return (
    <storeContext.Provider value={[store, dispatch]}>
      {children}
    </storeContext.Provider>
  )
}

export { storeContext }
export default StoreProvider

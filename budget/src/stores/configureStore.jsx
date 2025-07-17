// Este archivo configura y exporta la función para crear el store de Redux Toolkit.
// Se combinan los reducers de la aplicación (por ahora solo 'entries') usando combineReducers.
// La función createAppStore retorna una nueva instancia del store lista para usarse en el Provider de React.

import { configureStore as rtkConfigureStore, combineReducers } from '@reduxjs/toolkit'
import entriesReducer from '../reducers/entries.reducers'
import modalsReducer from "../reducers/modals.reducers";

const createAppStore = () => {
    return rtkConfigureStore({
        reducer: combineReducers({
            entries: entriesReducer,
            modals: modalsReducer
        })
    })
}

export default createAppStore
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import entriesReducer from '../reducers/entries.reducers'

const combinedReducers = combineReducers({
    entries: entriesReducer
  })
  
  const store = configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
  })

const configureStore = () => {
    return configureStore({
        reducer: combineReducers({
            entries: entriesReducer
        })
    })
}

export default configureStore;
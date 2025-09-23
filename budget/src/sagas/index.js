import { dispatchTest, testSagaFork } from './testSaga'
import { getAllEntries, getAllEntriesDetails } from './entriesSaga'
import { all } from 'redux-saga/effects'
import { deleteEntrySaga } from './entriesSagaDeletion'
import { addEntrySaga } from './entriesSagaAdd'

export function* rootSaga() {
    // Object.values(getAllEntries).forEach(sagaMiddleWare.run.bind(sagaMiddleWare))
    yield all([
        getAllEntries(),
        // testSagaFork(),        
        addEntrySaga(),
        deleteEntrySaga(),
        dispatchTest(),
        // getAllEntriesDetails() -> Se comenta porque los valores de entries y values deben tener datos sincronizados
    ])
}
import { dispatchTest, testSagaFork } from './testSaga'
import { getAllEntries, getAllEntriesDetails } from './entriesSaga'
import { all } from 'redux-saga/effects'
import { deleteEntrySaga } from './entriesSagaDeletion'

export function* rootSaga() {
    // Object.values(getAllEntries).forEach(sagaMiddleWare.run.bind(sagaMiddleWare))
    yield all([
        getAllEntries(),
        // testSagaFork(),        
        deleteEntrySaga(),
        dispatchTest(),
        getAllEntriesDetails()
    ])
}
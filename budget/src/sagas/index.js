import { dispatchTest, testSagaFork } from './testSaga'
import { getAllEntries, getAllEntriesDetails } from './entriesSaga'
import { all } from 'redux-saga/effects'

export function* rootSaga() {
    // Object.values(getAllEntries).forEach(sagaMiddleWare.run.bind(sagaMiddleWare))
    yield all([
        getAllEntries(),
        testSagaFork(),        
        dispatchTest(),
        getAllEntriesDetails()
    ])
}
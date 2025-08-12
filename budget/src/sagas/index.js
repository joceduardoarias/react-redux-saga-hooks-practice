import { testSaga } from './testSaga'
import { getAllEntries } from './entriesSaga'
import { all } from 'redux-saga/effects'

export function* rootSaga() {
    // Object.values(getAllEntries).forEach(sagaMiddleWare.run.bind(sagaMiddleWare))
    yield all([
        getAllEntries(),
        testSaga()
    ])
}
// import * as testSaga from './testSaga'
import * as getAllEntries from './entriesSaga'

export function initSagas(sagaMiddleWare) {
    Object.values(getAllEntries).forEach(sagaMiddleWare.run.bind(sagaMiddleWare))
}
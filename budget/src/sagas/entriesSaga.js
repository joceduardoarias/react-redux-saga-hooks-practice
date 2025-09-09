import { take, call, put, fork } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import Axios from 'axios'


export function* getAllEntries() {

    const result = yield call(Axios, 'http://localhost:5000/entries')
    console.log(result.data);
    yield put({ type: entriesTypes.POPULATE_ENTRIES, payload: result.data })
}

export function* getEntryDetails(id) {    
    const { data } = yield call(Axios, `http://localhost:5000/values/${id}`)        
    yield put({ type: entriesTypes.POPULATE_ENTRY_DETAILS, payload: { id, entry: data } })
}

export function* getAllEntriesDetails() {    
    const { payload } = yield take(entriesTypes.POPULATE_ENTRIES)
        
    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];                
        yield fork(getEntryDetails, entry.id)
    }    
}
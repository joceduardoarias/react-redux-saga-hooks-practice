import { take, call, put, fork } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import Axios from 'axios'
import { populateEntriesRedux, populateEntriesDetailsRedux } from "../actions/entries.actions"

export function* getAllEntries() {

    const { data } = yield call(Axios, 'http://localhost:5000/entries')
    console.log(data);
    yield put(populateEntriesRedux(data))
}

export function* getEntryDetails(id) {    
    const { data } = yield call(Axios, `http://localhost:5000/values/${id}`)        
    yield put(populateEntriesDetailsRedux(id, data))
}

export function* getAllEntriesDetails() {    
    const { payload } = yield take(entriesTypes.POPULATE_ENTRIES)
        
    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];                
        yield fork(getEntryDetails, entry.id)
    }    
}
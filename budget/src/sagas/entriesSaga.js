import { take, call, put, fork } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import Axios from 'axios'


export function* getAllEntries() {

    const result = yield call(Axios, 'http://localhost:5000/entries')
    console.log(result.data);

    yield put({ type: entriesTypes.POPULATE_ENTRIES, payload: result.data })
}

export function* getAllEntriesDetails() {
    const { data } = yield call(Axios, 'http://localhost:5000/values')


    for (let index = 0; index < data.length; index++) {
        const entry = data[index];
        yield fork(getEntriesDetails, entry.id)
    }

}

export function* getEntriesDetails(id) {
    console.log("got the id ", id);

}
import { call, put, take, takeLatest } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import axios from "axios";

export function* addEntrySaga() {    
    yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDb)    
}

function* addEntryToDb({payload}) {
    console.log("addEntryToDb: ",payload);
    
  const savedEntry = yield call(addEntry, payload);  
  yield put({ type: entriesTypes.ADD_ENTRY_RESULT, payload: savedEntry });
}

function addEntry(newEntry) {
    axios.post(`http://localhost:5000/entries`, newEntry)
        .then(response => response.data)
        .catch(error => {
            // Manejar el error
            console.error('Hubo un error al crear el post:', error);
        });
}
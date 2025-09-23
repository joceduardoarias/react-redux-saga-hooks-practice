import { call, put, take, takeLatest } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import axios from "axios";

export function* addEntrySaga() {
    yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDb)
}

function* addEntryToDb({ payload }) {
    console.log("addEntryToDb: ", payload);

    const savedEntry = yield call(addEntry, payload);
    console.log("savedEntry: ", savedEntry);
    yield put({ type: entriesTypes.ADD_ENTRY_RESULT, payload: savedEntry }); // Dispatch action to update the store
}

async function addEntry(newEntry) {
    console.log("addEntry: ", newEntry);

    try {
        const response = await axios.post(`http://localhost:5000/entries`, newEntry);
        return response.data;
    } catch (error) {
        // Manejar el error
        console.error('Hubo un error al crear el post:', error);
    };
}
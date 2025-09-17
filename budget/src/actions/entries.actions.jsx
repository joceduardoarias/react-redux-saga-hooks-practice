const entriesTypes = {
    GET_ENTRIES: 'GET_ENTRIES',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES',
    POPULATE_ENTRY_DETAILS: 'POPULATE_ENTRY_DETAILS',
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    REMOVE_ENTRY_RESULT: 'REMOVE_ENTRY_RESULT',
    UPDATE_ENTRY: 'UPDATE_ENTRY'
}

export default entriesTypes

export const addEntryRedux = (payload) => {
    return { type: entriesTypes.ADD_ENTRY, payload }
}

export const removeEntryRedux = (id) => {                    
    return { type: entriesTypes.REMOVE_ENTRY, payload: { id } }
}

export const updateEntryRedux = (id, entry) => {    
    return { type: entriesTypes.UPDATE_ENTRY, payload: { id, entry } }
}

export const getAllEntriesRedux = () => {    
    return { type: entriesTypes.GET_ENTRIES }
}

export const populateEntriesRedux = (entries) => {                
    return { type: entriesTypes.POPULATE_ENTRIES, payload: entries }
}

export const populateEntriesDetailsRedux = (id, entry) => {                        
    return { type: entriesTypes.POPULATE_ENTRY_DETAILS, payload: { id, entry } }
}
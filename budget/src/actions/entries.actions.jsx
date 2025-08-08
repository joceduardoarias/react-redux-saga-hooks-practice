const types = {
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY'
}

export default types

export const addEntryRedux = (payload) => {
    return { type: 'ADD_ENTRY', payload }
}

export const removeEntryRedux = (id) => {            
    return { type: 'REMOVE_ENTRY', payload: id }
}

export const updateEntryRedux = (id, entry) => {    
    return { type: 'UPDATE_ENTRY', payload: { id, entry } }
}
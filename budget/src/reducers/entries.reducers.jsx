import types from "../actions/entries.actions";


const reducer = (state = initialEntries, action) => {

  switch (action.type) {
    case types.POPULATE_ENTRIES:
                  
      return action.payload

    case types.ADD_ENTRY:

      const nextId = state.length + 1
      return [...state, { ...action.payload, id: nextId }];

    case types.REMOVE_ENTRY:

      return state.filter(entry => {
        return entry.id != action.payload
      })

    case types.UPDATE_ENTRY:

      const newEntries = [...state]
      const index = newEntries.findIndex(entry => entry.id === action.payload.id)
      newEntries[index] = { ...action.payload.entry }
      return newEntries

    default:
      return state
  }
}

export default reducer

var initialEntries = [

]
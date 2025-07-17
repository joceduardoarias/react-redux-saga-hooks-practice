const reducer = (state = initialEntries, action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      const nextId = state.length + 1
      return [...state, { ...action.payload, id: nextId }];
    case "REMOVE_ENTRY":
      return state.filter(entry => {
        return entry.id != action.payload
      })
    case "UPDATE_ENTRY":
      console.log(action);
      
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
  {
    id: 1,
    description: "Work income redux",
    value: 1000.00,
    isExpense: true
  },
  {
    id: 2,
    description: "Waater bill redux",
    value: 20.00,
    isExpense: true
  },
  {
    id: 3,
    description: "Rent redux",
    value: 300.00,
    isExpense: false
  },
  {
    id: 4,
    description: "Power bill redux",
    value: 50.00,
    isExpense: true
  },
]
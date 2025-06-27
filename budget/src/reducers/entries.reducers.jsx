const reducer =  (state = initialEntries, action) => {
    switch (action.type) {
        case "ADD_ENTRY":
            return [...state, action.payload];
        case "REMOVE_ENTRY":
            return state.filter(entry => {
                return entry.id != action.payload
            })

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
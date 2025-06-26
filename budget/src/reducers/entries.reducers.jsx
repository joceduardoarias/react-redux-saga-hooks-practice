const reducer =  (state = initialEntries, action) => {
    switch (action.type) {
        case "ADD_ ENTRY":

            return [...state, action.payload];
        case "REMOVE_ENTRY":
            return state.filter(entry => {
                return entry.id != id
            })

        default:
            return state
    }
}

export default reducer

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: 1000.00,
    isExpense: true
  },
  {
    id: 2,
    description: "Waater bill",
    value: 20.00,
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: 300.00,
    isExpense: false
  },
  {
    id: 4,
    description: "Power bill",
    value: 50.00,
    isExpense: true
  },
]
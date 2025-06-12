import DisplayBlances from "./components/DisplayBlances"
import EntryLines from "./components/EntryLines"
import MainHeader from "./components/MainHeader"
import NewEntryForm from "./components/NewEntryForm"
import { useState } from "react"
var initialEntries = [
  {
    id: 0,
    description: "Work income",
    value: "1000,00",
    isExpense: true
  },
  {
    id: 2,
    description: "Waater bill",
    value: "20,00",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "300,00",
    isExpense: false
  },
  {
    id: 4,
    description: "Power bill",
    value: "50,00",
    isExpense: true
  },
]
function App() {
  const [entries, setEntries] = useState(initialEntries)
  
  const deleteEntry = (id) => {
    const result = entries.filter(entry => {
      return entry.id != id
    })
    setEntries(result)
  }

  const addEntry = (description, value, isExpense) => {        
    const newEntry = {
      id: entries.length + 1,
      description : description,
      value: value,
      isExpense: isExpense
    }
    setEntries([...entries, newEntry])    
  }

  return (
    <>
      <MainHeader title={"Budget"} />
      <DisplayBlances />
      <MainHeader title={"History"} type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />
      <MainHeader title={"Add new transaction"} type="h3" />
      <NewEntryForm addEntry={addEntry}/>
    </>
  )
}

export default App

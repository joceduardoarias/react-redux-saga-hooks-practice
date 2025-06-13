import DisplayBlances from "./components/DisplayBlances"
import EntryLines from "./components/EntryLines"
import MainHeader from "./components/MainHeader"
import NewEntryForm from "./components/NewEntryForm"
import { useState, useEffect } from "react"
import ModalEdit from './components/ModalEdit'

var initialEntries = [
  {
    id: 1,
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
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries] // Hago una copia del array
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      resetEntry()
    }
  }, [isOpen])// Cada vez que isOpen cambia su estado se ejecuta el useEffect  


  const resetEntry = () => {
    setDescription('')
    setIsExpense(false)
    setValue('')
    setEntryId()
  }
  const deleteEntry = (id) => {
    const result = entries.filter(entry => {
      return entry.id != id
    })
    setEntries(result)
  }

  const editEntry = (id) => {
    console.log(`Editit entry with id: ${id}`);
    if (id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index]
      setEntryId(entry.id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
    }
  }
  const addEntry = () => {
    const newEntry = {
      id: entries.length + 1,
      description: description,
      value: value,
      isExpense: isExpense
    }
    setEntries([...entries, newEntry])
    resetEntry()
  }

  return (
    <>
      <MainHeader title={"Budget"} />
      <DisplayBlances />
      <MainHeader title={"History"} type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />
      <MainHeader title={"Add new transaction"} type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense} />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense} />
    </>
  )
}

export default App

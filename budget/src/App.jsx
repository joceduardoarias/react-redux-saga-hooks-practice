import DisplayBlances from "./components/DisplayBlances"
import EntryLines from "./components/EntryLines"
import MainHeader from "./components/MainHeader"
import NewEntryForm from "./components/NewEntryForm"
import { useState, useEffect } from "react"
import ModalEdit from './components/ModalEdit'
import { useDispatch, useSelector } from "react-redux"
import { getAllEntries } from "./sagas/entriesSaga"


function App() {      
  const [ expensestotal, setExpensesTotal] = useState(0)
  const [incomesTotal, setIncomesTotal] = useState(0)
  const [total, settotal] = useState(0)
  const [entry, setEntry] = useState()
  const entries = useSelector((state) => state.entries)
  const { isOpen, id } = useSelector((state) => state.modals)

  useEffect(() => {
        
   const index = entries.findIndex(entry => entry.id === id)
      
   setEntry(entries[index])
  }, [isOpen])// Cada vez que isOpen cambia su estado se ejecuta el useEffect  

  useEffect(() => {
    let totalIncome = 0
    let totalExpenses = 0
    entries.forEach(entry => {
      const value = Number(entry.value);
      if (entry.isExpense) {
        totalExpenses += value;
      } else {
        totalIncome += value;
      }
    })
    let result = totalIncome - totalExpenses
    setExpensesTotal(totalExpenses)
    setIncomesTotal(totalIncome)
    settotal(result)
  }, [entries]) 
  
  const dispatch = useDispatch()

  useEffect( () =>{
    dispatch(getAllEntries())
  }, [])
  // const resetEntry = () => {
  //   setDescription('')
  //   setIsExpense(false)
  //   setValue('')
  //   setEntryId()
  // }
     
  // Middleware para loguear acciones
  // const loggerMiddleware = storeAPI => next => action => {
  //   console.log('Action dispatched:', action)
  //   return next(action)
  // }
                        
  return (
    <>
      <MainHeader title={"Budget"} />
      <DisplayBlances total={total} incomesTotal={incomesTotal} expensestotal={expensestotal}/>
      <MainHeader title={"History"} type="h3" />
      <EntryLines 
        entries={entries} />
      <MainHeader title={"Add new transaction"} type="h3" />
      <NewEntryForm />
      <ModalEdit
        isOpen={isOpen}
        {...entry} />
    </>
  )
}

export default App

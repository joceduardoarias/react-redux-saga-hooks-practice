import DisplayBlances from "./components/DisplayBlances"
import EntryLine from "./components/EntryLine"
import MainHeader from "./components/MainHeader"
import NewEntryForm from "./components/NewEntryForm"

function App() {

  return (
    <>
    <MainHeader title={"Budget"}/>      
      <DisplayBlances />
      <MainHeader title={"History"} type="h3"/>   
      <EntryLine description={"something"} value={0} isExpense={ false }/>
      <MainHeader title={"Add new transaction"} type="h3"/>
      <NewEntryForm/>
    </>
  )
}

export default App

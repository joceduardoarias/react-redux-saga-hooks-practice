import DisplayBlances from "./components/DisplayBlances"
import MainHeader from "./components/MainHeader"
import NewEntryForm from "./components/NewEntryForm"

function App() {

  return (
    <>
    <MainHeader title={"Budget"}/>      
      <DisplayBlances />
      <MainHeader title={"History"} type="h3"/>   
      <div className="card p-3 mb-2 border-danger">
        <div className="row align-items-center text-end">
          <div className="col-6 text-start">
            Simething
          </div>
          <div className="col-3">
            $10,00
          </div>
          <div className="col-3">
            <button
              className="btn btn-outline-secondary btn-sm me-2"
            >
              ✏️
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>      
      <MainHeader title={"Add new transaction"} type="h3"/>
      <NewEntryForm/>
    </>
  )
}

export default App

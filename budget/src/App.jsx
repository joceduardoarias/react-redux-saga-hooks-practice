import MainHeader from "./components/MainHeader"

function App() {

  return (
    <>
    <MainHeader title={"Budget"}/>      
      <div className="container bg-light rounded shadow p-4" style={{ maxWidth: 400 }}>
        <h5 className="text-secondary text-center">YOUR BALANCE</h5>
        <p className="h2 text-center mb-4 fw-bold">$2,550.53</p>
        <div className="row text-center">
          <div className="col border-end">
            <p className="mb-1 text-uppercase text-muted small">Incoming</p>
            <p className="h4 text-success fw-semibold mb-0">+ $1,045.50</p>
          </div>
          <div className="col">
            <p className="mb-1 text-uppercase text-muted small">Expenses</p>
            <p className="h4 text-danger fw-semibold mb-0">- $623.50</p>
          </div>
        </div>
      </div>

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
      <form>
        <div className="row align-items-end mb-3">
          <div className="col-md-8">
            <label htmlFor="description" className="form-label">Description</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-tags"></i>
              </span>
              <input
                type="text"
                className="form-control"                
                placeholder="New shiny thing"                
              />
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="value" className="form-label">Value</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-currency-dollar"></i>
              </span>
              <input
                type="number"
                className="form-control"
                id="value"
                placeholder="100.00"                
              />
            </div>
          </div>
        </div>

        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"            
          />
          <label className="form-check-label" htmlFor="isExpense">
            Is Expense
          </label>
        </div>
      </form>



    </>
  )
}

export default App

import React from 'react'

const EntryForm = ({ description, setDescription, value, setValue, isExpense, setIsExpense }) => {
    console.log(description);
    
    return (
        <>
            <div className="row align-items-end mb-3">
                <div className="col-md-8 mb-3 mb-md-0">
                    <label htmlFor="description" className="form-label">Description</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-tags"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            placeholder="New shiny thing"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="form-check form-switch mb-4">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="isExpense"
                    checked={isExpense}
                    onChange={() => setIsExpense(oldState => !oldState)}
                />
                <label className="form-check-label ms-2" htmlFor="isExpense">
                    Is Expense
                </label>
            </div>
        </>
    )
}

export default EntryForm
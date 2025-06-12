import React from 'react'

const EntryLine = ({ description, value, isExpense = false }) => {
    return (
        <>
            <div className={ `card p-3 mb-2 ${ isExpense ? `border-success` : `border-danger` }` }>
                <div className="row align-items-center text-end">
                    <div className="col-6 text-start">
                        {description}
                    </div>
                    <div className="col-3">
                        ${value}
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
        </>
    )
}

export default EntryLine
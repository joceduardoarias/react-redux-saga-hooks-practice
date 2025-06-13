import React, { useState } from 'react'

const EntryLine = ({ id, description, value, isExpense = false, deleteEntry, editEntry }) => {
   
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
                            onClick={() => editEntry(id)}
                        >
                            ✏️
                        </button>
                        <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => deleteEntry(id)}
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
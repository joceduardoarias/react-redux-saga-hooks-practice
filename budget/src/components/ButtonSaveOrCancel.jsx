import React from 'react'

const ButtonSaveOrCancel = ({ addEntry, description, value }) => {
    
    const handleClick = (e) => {
        e.preventDefault(); // Previene el submit del formulario
        addEntry(description, Number(value));
    };

    return (
        <>
            {/* <input
                className="form-check-input"
                type="checkbox"
            />
            <label className="form-check-label" htmlFor="isExpense">
                Is Expense
            </label> */}
            <button onClick={handleClick}> ok </button>
            <button> cancel </button>
        </>
    )
}

export default ButtonSaveOrCancel
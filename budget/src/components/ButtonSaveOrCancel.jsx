import React from 'react'

const ButtonSaveOrCancel = () => {
    return (
        <>
            <input
                className="form-check-input"
                type="checkbox"
            />
            <label className="form-check-label" htmlFor="isExpense">
                Is Expense
            </label>
        </>
    )
}

export default ButtonSaveOrCancel
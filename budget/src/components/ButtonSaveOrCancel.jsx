import React from 'react'

const ButtonSaveOrCancel = ({ addEntry, description, value, isExpense }) => {
    const handleClick = (e) => {
        e.preventDefault();
        addEntry(description, Number(value), isExpense);
    };

    return (
        <>
            <button
                type="submit"
                className="btn btn-success px-4"
                onClick={handleClick}
            >
                <i className="bi bi-check-circle me-2"></i>Guardar
            </button>
            <button
                type="button"
                className="btn btn-outline-secondary px-4"
                style={{ marginLeft: "8px" }}
            >
                <i className="bi bi-x-circle me-2"></i>Cancelar
            </button>
        </>
    )
}

export default ButtonSaveOrCancel
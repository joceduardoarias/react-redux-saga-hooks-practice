import React from 'react'

const ButtonSaveOrCancel = ({ addEntry, description, value, isExpense }) => {
    
    const handleClick = (e) => {
        e.preventDefault(); // Previene el submit del formulario
        console.log(isExpense);
        
        addEntry(description, Number(value), isExpense);
    };

    return (
        <>            
            <button onClick={handleClick}> ok </button>
            <button> cancel </button>
        </>
    )
}

export default ButtonSaveOrCancel
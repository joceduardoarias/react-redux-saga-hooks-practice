import React, { useState } from 'react'
import ButtonSaveOrCancel from "../components/ButtonSaveOrCancel"
import EntryForm from './EntryForm'

const NewEntryForm = ({ addEntry }) => {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [isExpense, setIsExpense] = useState(false)

    return (
        <form className="bg-light rounded shadow p-4 mb-4" style={{ maxWidth: 600, margin: "0 auto" }}>
            <EntryForm
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <div className="d-flex gap-2 justify-content-end mt-3">
                <ButtonSaveOrCancel
                    addEntry={addEntry}
                    description={description}
                    value={value}
                    isExpense={isExpense}
                />
            </div>
        </form>
    )
}

export default NewEntryForm
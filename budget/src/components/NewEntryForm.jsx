import React, { useState } from 'react'
import ButtonSaveOrCancel from "../components/ButtonSaveOrCancel"
import EntryForm from './EntryForm'
import { useDispatch } from 'react-redux'
import { addEntryRedux } from "../actions/entries.actions";

const NewEntryForm = () => {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)
    const [isExpense, setIsExpense] = useState(false)
    const dispatch = useDispatch()
    
    const addEntry = () => {
        dispatch(addEntryRedux({
            description,
            value,
            isExpense
        }))
        setDescription('')
        setValue(0)
        setIsExpense(false)
    }
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
                />
            </div>
        </form>
    )
}

export default NewEntryForm
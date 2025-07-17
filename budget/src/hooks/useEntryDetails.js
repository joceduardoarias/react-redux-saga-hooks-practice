import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addEntryRedux } from "../actions/entries.actions";

export const useEntryDetails = (desc = "", val = "", isExp = true) => {
    const [description, setDescription] = useState(desc)
    const [value, setValue] = useState(val)
    const [isExpense, setIsExpense] = useState(isExp)
    const dispatch = useDispatch()

    useEffect(() => {                
        setDescription(desc)
        setValue(val)
        setIsExpense(isExp)
    }, [desc, val, isExp])


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
    return {description, setDescription, value, setValue, isExpense, setIsExpense, addEntry}
}
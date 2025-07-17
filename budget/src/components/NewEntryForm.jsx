import ButtonSaveOrCancel from "../components/ButtonSaveOrCancel"
import EntryForm from './EntryForm'
import { useEntryDetails } from "../hooks/useEntryDetails";

const NewEntryForm = () => {
    const newEntry = useEntryDetails()    
    
    return (
        <form className="bg-light rounded shadow p-4 mb-4" style={{ maxWidth: 600, margin: "0 auto" }}>
            <EntryForm
                description={newEntry.description}
                value={newEntry.value}
                isExpense={newEntry.isExpense}
                setDescription={newEntry.setDescription}
                setValue={newEntry.setValue}
                setIsExpense={newEntry.setIsExpense}
            />
            <div className="d-flex gap-2 justify-content-end mt-3">
                <ButtonSaveOrCancel
                    addEntry={newEntry.addEntry}                    
                />
            </div>
        </form>
    )
}

export default NewEntryForm
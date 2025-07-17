import EntryForm from './EntryForm';
import { useDispatch } from 'react-redux'
import { closeEditModal } from "../actions/modals.actions"
import { useEntryDetails } from "../hooks/useEntryDetails";

const ModalEdit = ({ isOpen, description, value, isExpense }) => {
        
    const entryUpadte = useEntryDetails(description, value, isExpense)
    const dispatch = useDispatch();
    if (!isOpen) return null;
    
    return (
        <div className="modal show fade d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit entry</h5>
                        <button type="button" className="btn-close" onClick={() => dispatch(closeEditModal())}></button>
                    </div>
                    <div className="modal-body">
                        <EntryForm description={entryUpadte.description}
                            value={entryUpadte.value}
                            isExpense={entryUpadte.isExpense}
                            setDescription={entryUpadte.setDescription}
                            setValue={entryUpadte.setValue}
                            setIsExpense={entryUpadte.setIsExpense} />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => dispatch(closeEditModal())}>
                            Cerrar
                        </button>
                        <button type="button" className="btn btn-primary" onClick={() => dispatch(closeEditModal())}>
                            Guardar cambios
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEdit
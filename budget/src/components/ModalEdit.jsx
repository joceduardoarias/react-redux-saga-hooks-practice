import React from 'react'
import EntryForm from './NewEntryForm';

const ModalEdit = ({ isOpen, setIsopen }) => {
    if (!isOpen) return null;
    return (
        <div className="modal show fade d-block" tabIndex="-1" style={{ background: "rgba(0,0,0,0.5)" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit entry</h5>
                        <button type="button" className="btn-close" onClick={() => setIsopen(false)}></button>                        
                    </div>
                    <div className="modal-body">
                        <EntryForm/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setIsopen(false)}>
                            Cerrar
                        </button>                      
                        <button type="button" className="btn btn-primary">
                            Guardar cambios
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalEdit
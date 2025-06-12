import React from 'react'
import ButtonSaveOrCancel from "../components/ButtonSaveOrCancel"
import { useState } from 'react'

const NewEntryForm = ({ addEntry }) => {
    
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)

    return (
        <form>
            <div className="row align-items-end mb-3">
                <div className="col-md-8">
                    <label htmlFor="description" className="form-label">Description</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-tags"></i>
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="New shiny thing"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>

                <div className="col-md-4">
                    <label htmlFor="value" className="form-label">Value</label>
                    <div className="input-group">
                        <span className="input-group-text">
                            <i className="bi bi-currency-dollar"></i>
                        </span>
                        <input
                            type="number"
                            className="form-control"
                            id="value"
                            placeholder="100.00"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="form-check form-switch mb-3">
                <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value}/>
            </div>
        </form>
    )
}

export default NewEntryForm
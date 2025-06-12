import React from 'react'
import DisplayBlance from "./DisplayBlance"

const DisplayBlances = () => {
    return (
        <>
            <div className="container bg-light rounded shadow p-4" style={{ maxWidth: 400 }}>
                <DisplayBlance title={"your balance"} value={0} />
                <div className="row text-center">
                    <div className="col border-end">
                        <DisplayBlance title={"income"} color={"text-success"} value={0} />
                    </div>
                    <div className="col">
                        <DisplayBlance title={"expenses"} color={"text-danger"} value={0} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayBlances
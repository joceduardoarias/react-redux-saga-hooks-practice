import React from 'react'

const DisplayBlance = ({ title, color, value = 0 }) => {
    return (
        <>
            {title === "your balance" ?
                <>
                    <h5 className="text-secondary text-uppercase text-center">{ title }</h5>
                    <p className="h2 text-center mb-4 fw-bold">{ value }</p>
                </>
                :
                <>
                    <p className="mb-1 text-uppercase text-muted small">{title}</p>
                    <p className={`h4 fw-semibold mb-0 ${color}`}>{value}</p>
                </>
            }
        </>
    )
}

export default DisplayBlance
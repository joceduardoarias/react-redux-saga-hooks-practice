import React from 'react'

const MainHeader = ({ title, type = "h1" }) => {
    return (


        type == "h1" ?
            <h1 className="text-center my-4">{title}</h1>
            : <h3 className="text-start my-4">{title}</h3>

    )
}

export default MainHeader
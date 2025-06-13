import React from 'react'
import EntryLine from "./EntryLine"

const EntryLines = ({ entries, deleteEntry, setIsOpen }) => {
    
  return (
    <>
    {
        entries.map(entry =>(
        <EntryLine key={ entry.id } { ...entry } deleteEntry={ deleteEntry } setIsOpen={setIsOpen}/>    
        ))
      }
    </>
  )
}

export default EntryLines
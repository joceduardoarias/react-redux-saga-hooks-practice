import React from 'react'
import EntryLine from "./EntryLine"

const EntryLines = ({ entries, editEntry }) => {
    
  return (
    <>
    {
        entries.map(entry =>(
        <EntryLine 
          key={entry.id} {...entry} />    
        ))
      }
    </>
  )
}

export default EntryLines
import React from 'react'
import Notes from './Notes'
import AddNote from './AddNote'

const NotesList = ({notes, handleAddNote, handleDeleteNode}) => {
  return (
    
    <div className="notes-list grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4">
        {notes.map(note=>{
            return <Notes key={note.id} id = {note.id} text = {note.text} date = {note.date} handleDeleteNode = {handleDeleteNode}/>
        })}

        <AddNote handleAddNote = {handleAddNote} />
    </div>
  )
}

export default NotesList
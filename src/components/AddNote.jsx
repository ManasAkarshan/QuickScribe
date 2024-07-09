import React, { useState } from "react";

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState("");
  const remaining = 200

  const handleChange = (e)=>{
    if(remaining-e.target.value.length >= 0){
        setNoteText(e.target.value)
    }
  }

  const handleSave = ()=>{
    if(noteText.trim().length>0){
        handleAddNote(noteText);
        setNoteText('')
    }
    
  }

  return (
    <div className=" bg-[#1F2937] new flex flex-col mb-3 rounded-md p-4 min-h-[240px] justify-between whitespace-pre-wrap ">
      <textarea
        className="border-none resize-none bg-[#1F2937] outline-none"
        rows={4}
        cols={6}
        placeholder="Add a note..." 
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer flex justify-between items-center">
        <small style={{color:'white'}}>{remaining-noteText.length} remaining</small>
        <button onClick={handleSave} className="save border-none rounded-xl bg-white text-black px-3 py-0.5 text-sm ">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;

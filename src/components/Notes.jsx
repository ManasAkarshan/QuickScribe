import React from "react";

const Notes = ({ id, text, date, handleDeleteNode }) => {
  return (
      <div className="note bg-[#2C3E50] flex flex-col mb-3 rounded-md p-4 min-h-[240px] justify-between whitespace-pre-wrap">
        <p>{text}</p>
        <div className="note-footer flex justify-between items-center">
          <small>{date}</small>
          <i className="fa-solid fa-trash cursor-pointer" onClick={()=>handleDeleteNode(id)} ></i>
        </div>
      </div>
  );
};

export default Notes;

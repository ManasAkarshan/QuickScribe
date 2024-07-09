import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import { v4 as uuidv4 } from "uuid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const [searchText, setSearchText] = useState("");
  const [lightMode, setLightMode] = useState(false);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes && savedNotes.length > 0) {
      setNotes(savedNotes);
      console.log('Loaded notes from localStorage:', savedNotes);
    } else {
      console.log('No saved notes found in localStorage');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
    console.log('Saved notes to localStorage:', notes);
  }, [notes]);

  const addNote = (text) => {
    let date = new Date();
    const newDate = date.toLocaleDateString();
    const newNote = {
      id: uuidv4(),
      text: text,
      date: newDate,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
    console.log(notes.length);
  };
  return (
    <div className={`${lightMode ? "light-mode" : ""} min-h-screen`}>
      <div className="main-container p-4 max-w-[1280px] mx-auto min-h-screen">
        <Header handleLightMode={setLightMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNode={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;

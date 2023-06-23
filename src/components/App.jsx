import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevNote) => {
      return [...prevNote, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNote) => {
      return prevNote.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea noAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            title={noteItem.title}
            content={noteItem.content}
            index={index}
            id={index}
            onChecked={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;

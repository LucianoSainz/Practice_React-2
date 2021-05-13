import axios from 'axios';
import {Note} from './Note';
import {useEffect, useState} from 'react';
import { getAllNotes } from './services/notes/getAllNotes';
import { createNote } from './services/notes/createNote';


export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
   getAllNotes().then((notes) => {
       setNotes(notes);
       setLoading(false);
     });
  
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) =>{
     event.preventDefault();

     const noteAddToState = {
      title: newNote,
      body: newNote,
      userId:1
    };

    createNote(noteAddToState).then((newNote) => {
        setNotes((prevNotes) => prevNotes.concat(newNote));
      });
       setNewNote('');
  };

  return(
    <div>
    <ol>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
      </ol>

      <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={newNote} />
      <button>New Note</button>
      </form>
    </div>
    );
}


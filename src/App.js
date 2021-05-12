import {Note} from './Note';
import {useEffect, useState} from 'react';


export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
       setNotes(json)
    });
  
  }, []);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) =>{
     event.preventDefault();
     const noteAddToState = {
       id: notes.length + 1,
       title: newNote,
       body: newNote
     };
    setNotes(notes.concat(noteAddToState));
    setNewNote('');
  }

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


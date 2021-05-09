import {Note} from './Note';
import {useState} from 'react';


export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleClick = (event) =>{
     console.log('create note');
     const noteAddToState = {
       id: notes.length + 1,
       content: newNote,
       date: new Date().toISOString(),
       important: Math.random() < 0.5
     };
    setNotes(notes.concat(noteAddToState));
    setNotes('')
  }

  return(
    <div>
    <ol>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
      </ol>

      <div>
      <input type='text' onChange={handleChange} value={newNote} />
      <button onClick={handleClick}>New Note</button>
      </div>
    </div>
    );
}


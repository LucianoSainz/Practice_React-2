import {Note} from './Note';
import {useState} from 'react';


export default function App(props) {
  const [notes, setNotes] = useState(props.notes)
  return(
    <ol>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
      <div>
      <input type='text' />
      <button>Crear nota</button>
      </div>
    </ol>
  );
}


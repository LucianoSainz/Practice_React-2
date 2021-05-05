import {Note} from './Note';
import {useState} from 'react';


export default function App(props) {
  const [notes, setNotes] = useState(props.notes)
  return(
    <div>
    <ol>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
      </ol>

      <div>
      <input type='text' />
      <button>New Note</button>
      </div>
    </div>
    );
}


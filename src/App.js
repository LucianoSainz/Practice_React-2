import {Note} from './Note';
import {useState} from 'react';


export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  //const [newNote, setNewNote] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return(
    <div>
    <ol>
      {notes.map((note) => (
        <Note key={note.id} {...note} />
      ))}
      </ol>

      <div>
      <input type='text' onChange={handleChange}/>
      <button>New Note</button>
      </div>
    </div>
    );
}


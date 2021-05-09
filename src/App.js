import {Note} from './Note';
import {useState} from 'react';


export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  //const [newNote, setNewNote] = useState('');

  const handleChange = (event) => {
    const newNote = event.target.value
  }

  const handleClick = (event) =>{
     console.log('create note')

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
      <button onClick={handleClick}>New Note</button>
      </div>
    </div>
    );
}


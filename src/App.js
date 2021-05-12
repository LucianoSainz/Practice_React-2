import axios from 'axios';
import {Note} from './Note';
import {useEffect, useState} from 'react';


export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
   axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
       const {data} = response
       setNotes(data);
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

     axios.post('https://jsonplaceholder.typicode.com/posts', noteAddToState)

     

    //setNotes(notes.concat(noteAddToState));
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


import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/App.css"

const Note = props => {
  return (
    <div className="note" >
      <h4>
       <Link id="link" to={`/edit/${props.id}`}> {props.note.name} </Link>
      </h4>
      
      <button onClick={() => props.delete(props.id)}>
       ❌
      </button>

    </div>
  )
}


const  App = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  });

  const handleOnClick = e => {
    setNotes([
      ...notes,
      {id: notes.length, name:"My Awsome Note", text: ""}
    ])

    localStorage.setItem("notes", JSON.stringify(notes))


    //location.href = `/edit/${notes.length}`
  }

  const deleteNote = id => {
    console.log("hi ! i'll delete " + id);
    setNotes(notes.map(note => note.id == id ? {} : note))
  }

  return (
    <div>
      <div id="newNote">
        <button onClick={handleOnClick}>
          add new note ➕
        </button>
      </div>
      <h1>
        {notes[0] ? notes.map((note, id) => Object.keys(note??{})[0] ? <Note note={note} id={id} delete={deleteNote}/> : "") : "you don't have notes yet"}
      </h1>
    </div>
  )
}

export default App
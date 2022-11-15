import { useLoaderData } from "react-router-dom"
import { useState, useEffect } from "react"
import "../styles/editNotes.css"

const EditName = props => {

    
    const handleOnNameChangeInput = e => {
        props.notes[props.id].name = e.target.value
        props.setNote({
            ...props.note,
            name: e.target.value
        })
      }

      const back = () => location.href = "/"

    return (
       <div id="nav">
        <button onClick={back}>
            Back
        </button>
        
        <input value={props.note.name} type="text" onChange={handleOnNameChangeInput}/>
       </div>
    )
}

const EditText = props => {
    const handleOnInputChange = e => {
        console.log("e");
        props.setNote({
            ...props.note,
            text: e.target.value
        })
        props.notes[props.id].text = e.target.value
        
    }
    
    return (
        <textarea value={props.note.text} onChange={handleOnInputChange} rows={20}></textarea>
    )
}

const EditNote = () => {
    const id = location.href.split("/")[4]
    
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));
    const [note, setNote] = useState(JSON.parse(localStorage.getItem("notes"))[id]);
    
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
      });

    return (
        <div>
            <EditName id={id} note={note} setNote={setNote} notes={notes} setNotes={setNotes}/>
            <EditText id={id} note={note} setNote={setNote} notes={notes} setNotes={setNotes}/>
        </div>
    )
}

export default EditNote
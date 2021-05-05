import {NotesPreview} from './NotesPreview.jsx'

export function NotesList(props){
    const {notes, onEditNote, onPinNote, onRemoveNote}= props
    return(
        <section className="notes-list grid">
            {notes.map((note)=><NotesPreview onRemoveNote={onRemoveNote} onPinNote={onPinNote} onEditNote={onEditNote} note={note} key={note.id}/>)}
        </section> 
    )
}
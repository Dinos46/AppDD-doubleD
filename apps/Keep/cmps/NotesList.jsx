import {NotesPreview} from './NotesPreview.jsx'

export function NotesList(props){
    const {notes, onPinNote, onRemoveNote, onChangeNoteColor}= props
    return(
        <section className="notes-list grid">
            {notes.map((note)=><NotesPreview onChangeNoteColor={onChangeNoteColor} onRemoveNote={onRemoveNote} onPinNote={onPinNote}  note={note} key={note.id}/>)}
        </section> 
    )
}
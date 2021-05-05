import {NotesPreview} from './NotesPreview.jsx'

export function NotesList({notes}){
    
    return(
        <section className="notes-list grid">
            {notes.map((note)=><NotesPreview note={note} key={note.id}/>)}
        </section>
    )
}
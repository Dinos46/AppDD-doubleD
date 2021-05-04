import {NotesPreview} from './NotesPreview.jsx'

export function NotesList({notes}){
    console.log(notes)
    return(
        <section className="notes-list">
            {/* <NotesPreview /> */}
            {notes.map((note, idx)=><NotesPreview note={note} key={idx}/>)}
        </section>
    )
}
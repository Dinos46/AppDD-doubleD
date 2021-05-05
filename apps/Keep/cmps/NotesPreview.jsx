import {NotesDynamicCmp} from './NotesDynamicCmp.jsx'

export function NotesPreview(props){
    const {note, onEditNote, onPinNote, onRemoveNote}= props
    
    return <NotesDynamicCmp onPinNote={onPinNote} onEditNote={onEditNote} onRemoveNote={onRemoveNote} note={note}  />

}
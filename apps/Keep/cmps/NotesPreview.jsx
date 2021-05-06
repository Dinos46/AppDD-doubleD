import { NotesDynamicCmp } from './NotesDynamicCmp.jsx'

export function NotesPreview(props) {
    const { note, onPinNote, onRemoveNote } = props
    return <NotesDynamicCmp onPinNote={onPinNote} onRemoveNote={onRemoveNote} note={note} />
}
import { NotesDynamicCmp } from './NotesDynamicCmp.jsx'

export function NotesPreview(props) {
    const { note, onPinNote, onRemoveNote, onChangeNoteColor } = props
    return <NotesDynamicCmp onChangeNoteColor={onChangeNoteColor} onPinNote={onPinNote} onRemoveNote={onRemoveNote} note={note} />
}
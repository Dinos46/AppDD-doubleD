import { NoteTxt } from './NoteTxt.jsx'
import { NoteTodo } from './NoteTodo.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { KeepEditPanel } from './KeepEditPanel.jsx'

export const NotesDynamicCmp = (props) => {
  const { note, onPinNote, onRemoveNote, onChangeNoteColor } = props
  switch (note.type) {
    case 'NoteText':
      return (
        <div className={`note flex`} style= {{...note.style}}>
          <NoteTxt note={note} />
          <KeepEditPanel note={note} onChangeNoteColor={onChangeNoteColor} onPinNote={onPinNote} onRemoveNote={onRemoveNote} />
        </div>
      )

    case 'NoteTodos':
      return (
        <div className="note flex" style= {{...note.style}}>
          <NoteTodo note={note} />
          <KeepEditPanel note={note} onChangeNoteColor={onChangeNoteColor} onPinNote={onPinNote} onRemoveNote={onRemoveNote} />
        </div>
      )

    case 'NoteImg':
      return (
        <div className="note flex" style= {{...note.style}}>
          <NoteImg note={note} />
          <KeepEditPanel note={note} onChangeNoteColor={onChangeNoteColor} onPinNote={onPinNote} onRemoveNote={onRemoveNote} />
        </div>
      )

    case 'NoteVideo':
      return (
        <div className="note flex"style= {{...note.style}}>
          <NoteVideo note={note} />
          <KeepEditPanel note={note} onChangeNoteColor={onChangeNoteColor} onPinNote={onPinNote} onRemoveNote={onRemoveNote} />
        </div>
      )

    default:
      return <h2>add some notes</h2>;
  }
};

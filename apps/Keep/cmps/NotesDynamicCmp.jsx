import { NoteTxt } from './NoteTxt.jsx'
import { NoteTodo } from './NoteTodo.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteVideo } from './NoteVideo.jsx'
import { KeepEditPanel } from './KeepEditPanel.jsx'

export const NotesDynamicCmp = (props) => {
  const { note, onPinNote, onRemoveNote } = props

  switch (note.type) {
    case 'NoteText':
      return (
        <div className="note flex">
          <NoteTxt note={note} />
          <KeepEditPanel note={note} onPinNote={onPinNote} onRemoveNote={onRemoveNote} />
        </div>
      )

    case 'NoteTodos':
      return (
        <div className="note flex">
          <NoteTodo note={note} />
          <KeepEditPanel note={note} onPinNote={onPinNote} onRemoveNote={onRemoveNote} />
        </div>
      )

    case 'NoteImg':
      return (
        <div className="note flex">
          <NoteImg note={note} />
          <KeepEditPanel note={note} onPinNote={onPinNote} onRemoveNote={onRemoveNote} />
        </div>
      )
    case 'NoteVideo':
      console.log('IIIII')
      return (
        <div className="note flex">
          <NoteVideo note={note} />
          <KeepEditPanel note={note} onPinNote={onPinNote} onRemoveNote={onRemoveNote} />
        </div>
      )
    default:
      return <h2>add some notes</h2>;
  }
};

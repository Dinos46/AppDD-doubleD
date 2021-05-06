import { NoteTxt } from './NoteTxt.jsx';
import { NoteTodo } from './NoteTodo.jsx';
import { NoteImg } from './NoteImg.jsx';
import { KeepEditPanel } from './KeepEditPanel.jsx'

export const NotesDynamicCmp = (props) => {
  const { note, onPinNote, onRemoveNote } = props

  switch (note.type) {
    case 'NoteText':
      return (
        <div className="card">
          <NoteTxt note={note} />
          <KeepEditPanel note={note} onPinNote={onPinNote} onRemoveNote={onRemoveNote} />
        </div>
      )

    case 'NoteTodos':
      return (
        <div className="card">
          <NoteTodo note={note} />
          <KeepEditPanel note={note} onPinNote={onPinNote} onRemoveNote={onRemoveNote} />
        </div>
      )

    case 'NoteImg':
      return (
        <div className="card">
          <NoteImg note={note} />
          <KeepEditPanel note={note} onPinNote={onPinNote} onRemoveNote={onRemoveNote} />
        </div>
      )

    default:
      return <h2>add some notes</h2>;
  }
};

import { NoteTxt } from './NoteTxt.jsx';
import { NoteTodo } from './NoteTodo.jsx';
import { NoteImg } from './NoteImg.jsx';

export const NotesDynamicCmp = ({note}) => {
    console.log(note)
  switch (note.type) {
    case 'NoteText':
      return <NoteTxt note={note} />;

    case 'NoteTodos':
      return <NoteTodo note={note}/>;

    case 'NoteImg':
      return <NoteImg note={note}/>;

    default:
      return <h2>add some notes</h2>;
  }
};

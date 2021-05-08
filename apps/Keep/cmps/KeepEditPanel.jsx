const { Link, Route } = ReactRouterDOM
import { ColorChange } from './ColorChange.jsx'

export class KeepEditPanel extends React.Component {

  state = {
    note: null,
    isPinned: false,
    isColor: false
  }

  setColorPicker = () => {
    this.setState({ isColor: !this.state.isColor }, () => { })
  }

  render() {
    const { note, onPinNote, onRemoveNote, onChangeNoteColor } = this.props
    return (
      <div className="note-editor flex">
        <Link to={`/keep/edit/${note.id}`}>
          <button type="button"><i className="far fa-edit"></i></button>
        </Link>

        <button type="button" name="pin" onClick={() => { onPinNote(note.id, note) }}><i className="fas fa-thumbtack"></i></button>

        <button type="button" onClick={() => { onRemoveNote(note.id) }}><i className="fas fa-trash-alt"></i></button>

        <button type="button" onClick={() => { this.setColorPicker() }}><i className="fas fa-palette"></i></button>

        {this.state.isColor && <ColorChange note={note} onChangeNoteColor={onChangeNoteColor} />}
      </div>
    )
  }
}

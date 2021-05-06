const { Link } = ReactRouterDOM

export class KeepEditPanel extends React.Component {

  state = {
    note: null,
    isPinned: false
  }

  render() {
    const { note, onPinNote, onRemoveNote } = this.props

    return (
      <div className="note-editor flex">
        <button>6</button>
        <Link to={`/keep/edit/${note.id}`}>
          <button type="button">edit</button>
        </Link>
        <button onClick={() => { onPinNote(note.id, note) }}>pin</button>
        <button type="button" onClick={() => { onRemoveNote(note.id) }}>delete</button>
      </div>
    )
  }
}

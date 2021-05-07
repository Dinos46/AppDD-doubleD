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
        <Link to={`/keep/edit/${note.id}`}>
          <button type="button"><i className="far fa-edit"></i></button>
        </Link>
        <button onClick={() => { onPinNote(note.id, note) }}><i className="fas fa-thumbtack"></i></button>
        <button type="button" onClick={() => { onRemoveNote(note.id) }}><i className="fas fa-trash-alt"></i></button>
      </div>
    )
  }
}

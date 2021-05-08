import { keepService } from '../services/keep.service.js'

export class KeepEdit extends React.Component {

  state = {

  }

  componentDidMount() {
    const id = this.props.match.params.noteId
    if (!id) return
    keepService.getNoteById(id).then(note => {
      this.setState({ note })
    })
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    console.log(field)
    this.setState(prevState => ({
      note: {
        ...prevState.note,
        ...prevState.note.info,
        [field]: value
      }
    }))
  }

  onEditNote = (ev) => {
    ev.preventDefault()
    const { note } = this.state
    console.log('HHHH', note)
    keepService.editNote(note).then(() => {
      this.props.history.push('/keep')

    })
  }

  

  render() {
    if (!this.state.note) return <h1>nooooooooooo</h1>
    const { type, info } = this.state.note
    return (
      <div className="edit-modal flex">
        <h2>Edit note title</h2>
        <form onSubmit={this.onEditNote}>
          {(type === 'NoteImg') && <input autoFocus onChange={this.handleChange} name="title" type="text" placeholder={info.title} />}
          {(type === 'NoteText') && <input autoFocus onChange={this.handleChange} name="txt" type="text" placeholder={info.txt} />}
          {(type === 'NoteTodos') && <input autoFocus onChange={this.handleChange} name="label" type="text" placeholder={info.label} />}
          {(type === 'NoteVideo') && <input autoFocus onChange={this.handleChange} name="url" type="text" placeholder={info.url} />}

          <button>save</button>
        </form>
      </div>
    )
  }
}
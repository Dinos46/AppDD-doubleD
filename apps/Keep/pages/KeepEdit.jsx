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
    keepService.editNote(note).then(() => {
      this.props.history.push('/keep')
    })
  }

  render() {
    if (!this.state.note) return <h1>nooooooooooo</h1>
    const { type, info } = this.state.note
    return (
      <form onSubmit={this.onEditNote}>
        {(type === 'NoteImg') && <input onChange={this.handleChange} name="title" type="text" placeholder={info.title} />}
        {(type === 'NoteText') && <input onChange={this.handleChange} name="txt" type="text" placeholder={info.txt} />}
        {(type === 'NoteTodos') && <input onChange={this.handleChange} name="label" type="text" placeholder={info.label} />}
        <button>save</button>
      </form>
    ) 
  }
}
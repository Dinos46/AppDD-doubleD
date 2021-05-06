import { keepService } from '../services/keep.service.js'



export class KeepEditPanel extends React.Component {

  state = {
    note: null,
    isPinned: false
  }

  componentDidMount() {
    // console.log(this.props)
  }

  render() {
    const {note, onEditNote, onPinNote, onRemoveNote}= this.props
    // console.log('TTTTTT',this.state.note)
    return (
      <div className="note-editor flex">
          <button>6</button>
          {/* <button onEditNote={()=>{onEditNote()}}>edit</button> */}
          {/* <button onClick={()=>{onPinNote(note.id, note)}}>pin</button> */}
          <button type="button" onClick={()=>{onRemoveNote(note.id)}}>delete</button>
      </div>
    )
  }
}
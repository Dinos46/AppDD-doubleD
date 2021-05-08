import { keepService } from './services/keep.service.js'
import { NotesFilter } from './cmps/NotesFilter.jsx'
import { NotesList } from './cmps/NotesList.jsx'
import { AddNote } from './cmps/AddNote.jsx'

export class MissKeep extends React.Component {

    state = {
        notes: null,
        filterBy: null
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.bookId !== this.props.match.params.bookId) {
            this.loadBook();
        }
    }

    componentDidMount() {
        this.loadNotes()
    }

    onChangeNoteColor = (ev, note) => {
        keepService.setNoteColor(ev.target.name, note).then(() => this.loadNotes())
    }

    loadNotes = () => {
        keepService.query(this.state.filterBy).then(notes => this.setState({ notes }))
    }

    onPinNote = (noteId, note) => {
        keepService.togglePinedNote(noteId, note).then(() => this.loadNotes())
    }

    onEditNote = (noteId) => {
        keepService.editNote(noteId)
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadNotes)
    }

    onRemoveNote = (noteId) => {
        keepService.removeNote(noteId).then(() => this.loadNotes())
    }

    render() {
        const { notes } = this.state
        if (!notes) return <h2>no todos.....</h2>

        return (
            <section className="miss-keep flex">
                <div className="keep-header flex">
                    <h2>miss keep</h2>
                    <NotesFilter onSetFilter={this.onSetFilter} />
                </div>
                <AddNote onAddNote={this.onAddNote} />
                <NotesList notes={notes} onChangeNoteColor={this.onChangeNoteColor} onPinNote={this.onPinNote} onRemoveNote={this.onRemoveNote} />

            </section >
        )
    }
}
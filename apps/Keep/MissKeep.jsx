import { keepService } from './services/keep.service.js'
import { NotesFilter } from './cmps/NotesFilter.jsx'
import { NotesList } from './cmps/NotesList.jsx'
import { AddNote } from './cmps/AddNote.jsx'


export class MissKeep extends React.Component {

    state = {
        notes: null,
        filterBy: null
    }


    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        keepService.query().then(notes => {
            this.setState({ notes })
        })
    }


    onPinNote = (noteId) => {
        keepService.togglePinedNote(noteId).then(() => {
            this.loadNotes()
        })
    }

    // onEditNote=()=>{
    //     console.log('ONEDIT')
    //         noteService.editNote(note, nodeId).then(()=>{
    //             this.loadNotes();
    //         })
    // }

    onSetFilter = (filterBy) => {

    }

    onRemoveNote = (noteId) => {
        console.log('REMOVE', noteId)
        keepService.removeNote(noteId).then(() => {
            this.loadNotes()
        })
    }

    render() {
        console.log()
        const { notes } = this.state;
        if (!notes) return <h2>no todos.....</h2>

        return (
            <section className="miss-keep flex">
                <h2>miss keep</h2>
                <NotesFilter onSetFilter={this.onSetFilter} />
                <AddNote onAddNote={this.onAddNote} />
                <NotesList notes={notes} onEditNote={this.onEditNote} onPinNote={this.onPinNote} onRemoveNote={this.onRemoveNote} />
            </section>
        )
    }
}
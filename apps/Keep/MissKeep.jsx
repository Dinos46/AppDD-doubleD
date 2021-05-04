import {keepService} from './services/keep.service.js'
import {NotesFilter} from './cmps/NotesFilter.jsx'
import {NotesList} from './cmps/NotesList.jsx'


export class MissKeep extends React.Component {

    state = {
        notes: null,
        filterBy: null
    }

    componentDidMount(){
        this.loadNotes()
    }

loadNotes = ()=>{
    keepService.query().then(notes => {
        this.setState({notes},()=>{
            console.log(this.state.notes)
        })
    })
}

    render(){
        const {notes} = this.state;
        if(!notes) return <h2>no todos.....</h2>

        return (
            <section className="miss-keep">
            <h2>miss keep</h2>
            <NotesFilter />
            <NotesList notes={notes}/>
            </section>
        )
    }
}
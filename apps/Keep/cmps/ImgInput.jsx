import { keepService } from '../services/keep.service.js'

export class ImgInput extends React.Component {

    state = {
        id: null,
        type: 'NoteImg',
        info: {
            url: null,
            title: ''
        },
        style: {
            backgroundColor: ''
        }
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.type === 'number' ? +target.value : target.value;
        this.setState((prevState) => ({
            ...prevState, info: {[field]: value, title: ''}
        }));
    };
    
    onAddNote=(ev)=>{
        ev.preventDefault();
        keepService.addNote(this.state).then(()=>{
            this.props.history.push('/keep')
        })
    }


    render() {
        console.log('RENDER',this.state)
        return (
            <form className="add-note-modal" onSubmit={this.onAddNote}>
                {/* <input name="title" onChange={this.handleChange} type="text" placeholder="your title" /> */}
                <input name="url" onChange={this.handleChange} type="text" placeholder="enter url" />
                <button>Add</button>
            </form>
        )
    }
}
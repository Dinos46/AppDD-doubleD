import { keepService } from '../services/keep.service.js'

export class TxtInput extends React.Component {

    state = {
        id: null,
        type: 'NoteText',
        isPinned: null,
        info: {
            txt: ''
        }
    }


    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({
            ...prevState, info: { [field]: value }
        }));
    };

    onAddNote = (ev) => {
        ev.preventDefault();
        keepService.addNote(this.state).then(() => {
            this.props.history.push('/keep')
        })
    }

    goBack = () => {
        this.props.history.push('/keep')
    }

    render() {
        return (
            <form onSubmit={this.onAddNote}>
                <input name="txt" onChange={this.handleChange} type="text" placeholder="enter text" />
                <button>Add</button>
                <button onClick={this.goBack} name="close">close</button>
            </form>
        )
    }
}
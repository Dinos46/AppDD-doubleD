import { keepService } from '../services/keep.service.js'

export class TxtInput extends React.Component {

    state = {
        id: null,
        type: 'NoteText',
        isPinned: null,
        style: {
            backgroundColor: ''
        },
        info: {
            title: '',
            txt: ''
        }
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const value = target.value;
        this.setState((prevState) => ({
            ...prevState, info: { ...prevState.info, [field]: value }
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
            <form className="note-inputs" onSubmit={this.onAddNote}>
                <input name="title" onChange={this.handleChange} type="text" placeholder="enter your title..." />
                <p>
                    <textarea onChange={this.handleChange} name="txt" cols="20" rows="5" placeholder="write something..."></textarea>
                </p>
                <button name="add"><i className="fas fa-plus"></i></button>
            </form>
        )
    }
}
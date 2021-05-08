import { keepService } from '../services/keep.service.js'

export class TodoInput extends React.Component {

    state = {
        id: '',
        type: 'NoteTodos',
        info: {
            label: '',
            todos: [{ txt: '', doneAt: null }],
        },
    };

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            ...prevState, info: { ...prevState.info, [field]: [{ txt: value }] }
        }));
    };

    handleLabel = ({ target }) => {
        const fieldLabele = target.name
        const valueLabele = target.value
        this.setState((prevState) => ({
            ...prevState, info: { ...prevState.info, [fieldLabele]: valueLabele }
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
                <input name="label" onChange={this.handleLabel} type="text" placeholder="enter your title..." />
                <p>
                    <textarea onChange={this.handleChange} name="todos" cols="20" rows="5" placeholder="add some todos..."></textarea>
                </p>
                <button name="add"><i className="fas fa-plus"></i></button>
            </form>
        )
    }
}
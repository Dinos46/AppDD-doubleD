import { keepService } from '../services/keep.service.js'

export class TodoInput extends React.Component {

    state = {
        id: '',
        type: 'NoteTodos',
        info: {
            lable: '',
            todos: [],
        },
    };

    handleChange = ({ target }) => {
        this.setState({info:{label: 'ggg'}})
        const field = target.name
        const value = target.value
        const labelVal = target.name === 'label' ? target.value : ''
        this.setState((prevState) => ({
            ...prevState, info: {[field]: value, todos: [1,2,2,3]}
        }));
    };
    
    onAddNote=(ev)=>{
        ev.preventDefault();
        keepService.addNote(this.state).then(()=>{
            this.props.history.push('/keep')
        })
    }

    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.onAddNote}>
                {/* <input name="todos" onChange={this.handleChange} type="text" placeholder="enter todo" /> */}
                <input name="lable" onChange={this.handleChange} type="text" placeholder="your title" />
                <button>Add todo</button>
            </form>
        )
    }
}
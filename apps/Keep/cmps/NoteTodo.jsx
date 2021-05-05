const { Link } = ReactRouterDOM;

export class NoteTodo extends React.Component {
  state = {
    id: '',
    info: {
      lable: '',
      todos: [],
    },
  };

  componentDidMount() {
    console.log(this.props.note);
    this.setNoteId(this.props.note);
    this.setNoteInfo(this.props.note);
  }

  setNoteId = ({ id }) => {
    this.setState({ id }, () => {
      console.log('ID', this.state);
    });
  };

  setNoteInfo = ({ info }) => {
    this.setState({ info: { ...info } },()=>{
        console.log('INFO', this.state)
    });
  };

  render() {
    
    
    // if(!this.state.info) return <h2>no todos</h2>

    return(
        <div className="todo-note flex">
            <h3>{this.state.id}</h3>
            <ul>
                {/* {info.todos.map(todo=>{
                    return <li><span>todo.txt</span><span>todo.doneAt</span></li>
                })} */}
            </ul>
            {/* <Link to={`/keep/${this.state.id}`}>edit</Link> */}
        </div>
    )
  }
}

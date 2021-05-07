
export class NoteTodo extends React.Component {
  state = {
    id: '',
    info: {
      lable: '',
      todos: [],
    },
  };

  componentDidMount() {
    this.setNoteId(this.props.note);
    this.setNoteInfo(this.props.note);
  }

  setNoteId = ({ id }) => {
    this.setState({ id })
  };

  setNoteInfo = ({ info }) => {
    this.setState({ info: { ...info } })
  }

  render() {

    const { info } = this.state
    if (!this.state.info) return <h2>no todos</h2>

    return (
      <div className="todo-note flex">
        <h3>{info.label}</h3>
        <ul>
          {info.todos.map((todo, idx) => {
            const date = (todo.doneAt) ? new Date(todo.doneAt).toDateString() : ''
            return <li key={idx}><span>{todo.txt }</span> <span>{ date}</span></li>
          })}
        </ul>
      </div>
    )
  }
}

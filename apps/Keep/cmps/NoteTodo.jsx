
export class NoteTodo extends React.Component {
  state = {
    id: '',
    style: {
      backgroundColor: '',
    },
    info: {
      lable: '',
      todos: [],
    },
  };

  componentDidMount() {
    this.setNoteId(this.props.note);
    this.setNoteInfo(this.props.note);
    this.setBgc(this.props.note)
  }

  setNoteId = ({ id }) => {
    this.setState({ id })
  };

  setBgc = ({ style }) => {
    this.setState({ style: { ...style } })
  }

  setNoteInfo = ({ info }) => {
    this.setState({ info: { ...info } })
  }

  render() {

    const { info, style } = this.state
    if (!this.state.info) return <h2>no todos</h2>

    return (
      <div className={`todo-note ${style.backgroundColor} flex`}>
        <h3>{info.label}</h3>
        <ul>
          {info.todos.map((todo, idx) => {
            const date = (todo.doneAt) ? new Date(todo.doneAt).toDateString() : ''
            return <li key={idx}><span>{todo.txt}</span> <span>{date}</span></li>
          })}
        </ul>
      </div>
    )
  }
}

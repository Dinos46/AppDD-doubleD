import { keepService } from '../services/keep.service.js'

export class KeepEdit extends React.Component {

  state = {
    note: null
  }



  componentDidMount() {
    const id = this.props.match.params.id;
    if (!id) return;
    keepService.getNoteById(id).then(note => {
      this.setState({ note }, () => { console.log(this.state) })
    })

  }


  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    this.setState(prevState => ({
      car: {
        ...prevState.car,
        [field]: value
      }
    }))
  }


  render() {
    return <h2>edit</h2>
  }
}
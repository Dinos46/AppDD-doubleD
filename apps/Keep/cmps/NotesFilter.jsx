export class NotesFilter extends React.Component {
    state = {
        filterBy: {
            type: '',
        },
    };

    componentDidMounr() {

    }

    handleChange = ({ target }) => {
        console.log(target)
        // const field = target.name
        // const value = target.type === 'number' ? +target.value : target.value
        // this.setState(prevState => ({
        //     car: {
        //         ...prevState.car,
        //         [field]: value
        //     }
        // }))
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
      }

    render() {
        return  <input placeholder="search note type" type="text" name="type" onChange={this.handleChange}/>
    }
}
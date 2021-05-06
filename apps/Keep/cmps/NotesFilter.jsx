export class NotesFilter extends React.Component {
    state = {
        filterBy: {
            type: '',
        },
    };

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value.toUpperCase()
        console.log('OOOOOO', value)
        this.setState(prevState => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: 'NOTE' + value
            }
        }))
    }

    onFilter = (ev) => {
        console.log('OOOOOO', this.state.filterBy)
        ev.preventDefault()
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        return (
            <form onSubmit={this.onFilter}>
                <input placeholder="search note type" type="text" name="type" onChange={this.handleChange} />
                <button> search</button>
            </form>
        )
    }
}
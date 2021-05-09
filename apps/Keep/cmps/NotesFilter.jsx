export class NotesFilter extends React.Component {
    state = {
        filterBy: {
            type: '',
        },
    };

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value.toUpperCase()
        this.setState(prevState => ({
            filterBy: {
                ...prevState.filterBy,
                [field]: 'NOTE' + value
            }
        }), () => { this.onFilter() })
    }

    onFilter = () => {
        this.props.onSetFilter(this.state.filterBy)
    }

    render() {
        return (
            <form >
                <input placeholder="search note type" type="text" name="type" onChange={this.handleChange} />
            </form>
        )
    }
}
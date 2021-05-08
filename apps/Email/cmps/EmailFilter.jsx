export class EmailFilter extends React.Component {

    state = {
        filterBy: {
            text: '',
            isRead: 'all',
        }
    }

    handleChange = (ev) => {
        const field = ev.target.name
        let value;

        switch (ev.target.value) {
            case 'read':
                value = true
                break;
            case 'unread':
                value = false
                break;
            case 'all':
                value = 'all'
            default:
                value = ev.target.value
                break;
        }

        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetFilter(this.state.filterBy)
        })
    }

    onFilterEmail = (ev) => {
        ev.preventDefault();
        this.props.onSetFilter(this.state.filterBy);
    }

    render() {

        return (
            <form className="email-filter">
                <input type="text" name="text" placeholder="search email" onChange={this.handleChange} />
                <select name="isRead" onChange={this.handleChange}>
                    <option value="all">All</option>
                    <option value="read">Read</option>
                    <option value="unread">UnRead</option>
                </select>
            </form>
        )
    }
}
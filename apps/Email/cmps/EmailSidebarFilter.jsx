
export class EmailSidebarFilter extends React.Component {

    state = {
        filterBy: 'inbox',
    }

    handleChange = (ev) => {
        this.setState({ filterBy: ev.target.value }, () => {
            this.props.onSidebarFilter(this.state.filterBy)
        })
    }

    render() {

        return (
            <section className="sidebar-container">
                <button value="inbox" onClick={this.handleChange}>
                    <i className="fas fa-inbox" />
                    Inbox
                </button>
                <button value="starred" onClick={this.handleChange}>
                    <i className="fas fa-star" />
                    Starred
                </button>
                <button value="sent" onClick={this.handleChange}>
                    <i className="fas fa-paper-plane" />
                    Sent
                </button>
                <button value="draft" onClick={this.handleChange}>
                    <i className="fas fa-file-alt" />
                    Draft
                </button>
            </section>
        )
    }
}
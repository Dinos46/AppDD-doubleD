
export class EmailSidebarFilter extends React.Component {

    state = {
        filterBy: 'Inbox',
    }

    handleChange = (ev) => {
        this.setState({ filterBy: ev.target.value }, () => {
            this.props.onSidebarFilter(this.state.filterBy)
        })
    }

    render() {
    
        return (

            <section className="sidebar-container">
                {/* <img src="../assets/img/download(1).jfif" alt=""/> */}
                <input type="button" value="Inbox" onClick={this.handleChange} />
                <input type="button" value="Starred" onClick={this.handleChange} />
                <input type="button" value="Sent" onClick={this.handleChange} />
                <input type="button" value="Draft" onClick={this.handleChange} />
            </section>
        )
    }
}
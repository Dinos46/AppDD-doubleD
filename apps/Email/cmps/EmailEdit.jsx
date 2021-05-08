
export class EmailEdit extends React.Component {

    state = {
        emailToEdit: null
    }

    componentDidMount() {
        this.setState({ emailToEdit: this.props.emailToEdit })

    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ newEmail: { ...this.state.newEmail, [field]: value } })
    }

    render() {
        console.log(this.props.emailToEdit);
        return (

            <form className="emailadd-form-container flex" >
                {/* <button onClick={this.onSaveToDraft} >Save to draft</button>
                <input type="text" name="to" placeholder="To:" onChange={this.handleChange} />

                <input type="text" name="cc"
                    placeholder="CC: (named someone else to get a copy, primary recipients will know.)"
                    onChange={this.handleChange} />

                <input type="text" name="bcc"
                    placeholder="BCC: (named someone else to get a copy, hidden to primary recipients.)"
                    onChange={this.handleChange} />

                <input type="text" name="subject" placeholder="Subject:" onChange={this.handleChange} />
                <input type="text" name="body" placeholder="Your text:" onChange={this.handleChange} />
                <button>Sent</button> */}
            </form>

        )
    }
}
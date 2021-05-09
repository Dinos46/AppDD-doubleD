export class EmailAdd extends React.Component {

    state = {
        newEmail: {
            to: '',
            cc: '',
            bcc: '',
            subject: '',
            body: '',
            status: 'sent'
        }
    }

    onAddEmail = (ev) => {
        ev.preventDefault()
        this.props.onAddEmail(this.state.newEmail)
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ newEmail: { ...this.state.newEmail, [field]: value } })
    }

    onSaveToDraft = (ev) => {
        ev.preventDefault()
        this.setState({ newEmail: { ...this.state.newEmail, status: 'draft' } }, () => {
            this.props.onAddEmail(this.state.newEmail)
        })
    }

    render() {

        return (
            <form className="emailadd-form-container flex" onSubmit={this.onAddEmail}>
                <button name="emailadd-exitbtn" onClick={() => this.props.onToggleOpenEmailAdd()}>X</button>
                <h4>New messege</h4>
                <input type="text" name="to" placeholder="To:" onChange={this.handleChange}
                    required
                />
                <input type="text" name="cc"
                    placeholder="CC: (named someone else to get a copy, primary recipients will know.)"
                    onChange={this.handleChange}
                />
                <input type="text" name="bcc"
                    placeholder="BCC: (named someone else to get a copy, hidden to primary recipients.)"
                    onChange={this.handleChange}
                />
                <input type="text" name="subject" placeholder="Subject:" onChange={this.handleChange}
                    required
                />
                <input type="text" name="body" placeholder="Your text:" onChange={this.handleChange}
                    required
                />

                <div className="emailadd-controllbtns">
                    <button>Sent</button>
                    <button onClick={this.onSaveToDraft} >Save to draft</button>
                </div>
            </form>
        )
    }
}
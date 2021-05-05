export class EmailAdd extends React.Component {

    state = {
        newEmail: {
            to: '',
            cc: '',
            bcc: '',
            subject: '',
            textarea: '',
            status: 'Draft'
        }
    }

    componentDidMount() {


    }

    onSubmit = (ev) => {
        ev.preventDefault()
        console.log('hi')

    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ newEmail: { ...this.state.newEmail, [field]: value } }, () => {
            // this.props.onSetFilter(this.state.filterBy)
        })
    }

    render() {
        console.log(this.state.newEmail);
        return (

            <form className="emailadd-form-container flex" onSubmit={this.onSubmit}>
                <input type="text" name="to" placeholder="To:" onChange={this.handleChange}/>
                <input type="text" name="cc" 

                placeholder="CC: (named someone else to get a copy, primary recipients will know.)" 
                onChange={this.handleChange}/>

                <input type="text" name="bcc"
                placeholder="BCC: (named someone else to get a copy, hidden to primary recipients.)"
                onChange={this.handleChange}/>

                <input type="text" name="subject" placeholder="Subject:" onChange={this.handleChange} />
                <textarea type="text" name="textarea" placeholder="Your text:" onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        )
    }
}
import { keepService } from '../services/keep.service.js'

export class VidInput extends React.Component {

    state = {
        id: null,
        type: "NoteVideo",
        isPinned: false,
        info: {
            title: '',
            url: ''
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState((prevState) => ({
            ...prevState, info: { [field]: value }
        }), () => {
            this.setVidUrl(this.state.info)
        });
    };

    setVidUrl = ({ url }) => {
        const embedUrl = url.replace('m/', 'm/embed/')
        this.setState({ info: { url: embedUrl } })
    }

    handelTitle = ({ target }) => {
        const fieldTitle = target.name
        const valueTitle = target.value
        this.setState((prevState) => ({
            ...prevState, info: { ...this.state.info, [fieldTitle]: valueTitle }
        }), () => {
            console.log(this.state)
        });

    }

    onAddNote = (ev) => {
        ev.preventDefault();
        keepService.addVideoNote(this.state).then(() => {
            this.props.history.push('/keep')
        })
    }

    goBack = () => {
        this.props.history.push('/keep')
    }

    render() {
        console.log('BBBBB', this.stae)
        return (
            <form className="note-inputs" onSubmit={this.onAddNote}>
                <input name="url" onChange={this.handleChange} type="text" placeholder="enter url" />
                <p>
                    <textarea onChange={this.handelTitle} name="title" cols="20" rows="5" placeholder="title..."></textarea>
                </p>
                <button name="add"><i className="fas fa-plus"></i></button>
            </form>
        )
    }
}
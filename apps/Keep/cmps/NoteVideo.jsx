export class NoteVideo extends React.Component {

    state = {
        id: null,
        type: "NoteVideo",
        isPinned: false,
        info: {
            url: ''
        }
    }

    componentDidMount() {
        this.setNoteId(this.props.note)
        this.setNoteInfo(this.props.note)
    }

    setNoteId = ({ id }) => {
        this.setState({ id })
    };

    setNoteInfo = ({ info }) => {
        this.setState({ info: { ...info } })
    }

    render() {
        const { info } = this.state
        return (
            <div className="video-container">
            <iframe src={`https://www.youtube.com/embed/${info.url}`}  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        )
    }
}
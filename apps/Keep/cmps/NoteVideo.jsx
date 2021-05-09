export class NoteVideo extends React.Component {

    state = {
        id: null,
        type: "NoteVideo",
        style: {
            backgroundColor: '',
        },
        isPinned: false,
        info: {
            title: '',
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
        this.setState({ info: { ...info } }, () => {
            this.setVidUrl(this.state.info, info.title)
        })
    }

    setVidUrl = ({ url }, title) => {
        console.log('url', url)
        const embedUrl = url.replace('/watch?v=', '/')
        console.log('url', embedUrl)
        this.setState({ info: { url: embedUrl, title } })
    }

    render() {
        const { info, style } = this.state
        return (
            <div>
                <h2>{info.title}</h2>
                <div className={`vid-note ${style.backgroundColor} flex`}>
                    <iframe src={info.url} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        )
    }
}

export class NoteTxt extends React.Component {
    state = {
        id: null,
        isPinned: null,
        info: {
            txt: ''
        }
    }

    componentDidMount() {
        this.setNoteId(this.props.note)
        this.setNoteStatus(this.props.note)
        this.setNoteInfo(this.props.note)
    }

    setNoteId = ({ id }) => {
        this.setState({ id })
    }

    setNoteStatus = ({ isPinned }) => {
        this.setState({ isPinned })
    }

    setNoteInfo = ({ info }) => {
        this.setState({ info: { ...info } })
    }

    render() {
        const { info } = this.state
        return (
            <div className="txt-note flex">
                <h2>{info.txt}</h2>
            </div>
        )
    }
}
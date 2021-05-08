
export class NoteTxt extends React.Component {
    state = {
        id: null,
        isPinned: null,
        style: {
            backgroundColor: '', 
          },
        info: {
            title: '',
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
        const { info, style } = this.state
        return (
            <div className={`txt-note ${style.backgroundColor} flex`}>
                <h2>{info.title}</h2>
                <p>{info.txt}</p>
            </div>
        )
    }
}
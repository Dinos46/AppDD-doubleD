const { Link } = ReactRouterDOM;

export class NoteImg extends React.Component {
    state = {
        id: null,
        info: {
            url: null,
            title: ''
        },
        style: {
            backgroundColor: ''
        }
    }

    componentDidMount(){
        this.setNoteId(this.props.note)    
        this.setNoteInfo(this.props.note)
        this.setNoteStyle(this.props.note)
    }

    setNoteInfo = ({info}) =>{
        this.setState({info: {...info}},()=>{
            // console.log(this.state)
        })
    }

    setNoteStyle = ({style}) =>{
        this.setState({style: {...style}},()=>{
            // console.log(this.state)
        })
    }

    setNoteId = ({id}) =>{
        this.setState({id}, ()=>{
            // console.log(this.state)
        })
    }
    


    render(){
        const {style, info} = this.state;
        return (

            <div className="img-note">
                <h3>{info.title}</h3>
                {<img src={info.url} />}
                <Link to={`/keep/${this.state.id}`}>edit</Link>
            </div>
        )
    
    }
}
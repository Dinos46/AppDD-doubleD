

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
        
        })
    }

    setNoteStyle = ({style}) =>{
        this.setState({style: {...style}},()=>{
            
        })
    }

    setNoteId = ({id}) =>{
        this.setState({id}, ()=>{
        })
    }
    


    render(){
        const {style, info} = this.state;
        return (
            <div className="img-note flex">
                <h3>{info.title}</h3>
                <div className="img-container">
                {<img src={info.url} />}
                </div>
            </div>
        )
    
    }
}
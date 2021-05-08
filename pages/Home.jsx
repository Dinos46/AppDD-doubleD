const { NavLink } = ReactRouterDOM
export class Home extends React.Component {

    state = {
        activeClass: 'active',
    }

    activeMenu = () => {
        this.setState({ activeClass: 'active' })
    }

    disableMenu = () => {
        this.setState({ activeClass: '' })
    }

    render() {
        return (
            <section className="home">
                <h1>home</h1>
            </section>
        )
    }
}
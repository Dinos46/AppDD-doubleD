const { NavLink, withRouter } = ReactRouterDOM

export class _AppHeader extends React.Component {

    state = {
        activeClass: '',
    }

    activeMenu = () => {
        this.setState({ activeClass: 'active' })
    }

    disableMenu = () => {
        this.setState({ activeClass: '' })
    }

    render() {

        return (
            <React.Fragment>
                <nav>
                    <NavLink><img className="logo" src="../assets/img/logo.svg" /></NavLink>
                    <div className={`nav-links ${this.state.activeClass}`}>
                        <img onClick={this.disableMenu} className="fa close" src="../assets/img/times-solid.svg" />
                        <ul className="clean-list">
                            <li><NavLink to="/">HOME</NavLink></li>
                            <li><NavLink>ABOUT</NavLink></li>
                            <li><NavLink to="/book">BOOKSTORE</NavLink></li>
                            <li><NavLink to="/keep">MISSKEEP</NavLink></li>
                            <li><NavLink to="/email">EMAIL</NavLink></li>
                        </ul>
                    </div>
                    <img className={`fa open ${this.state.activeClass}`} onClick={this.activeMenu} src="../assets/img/bars-solid.svg" />
                </nav>
            </React.Fragment>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)
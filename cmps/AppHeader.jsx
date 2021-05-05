const { NavLink, withRouter } = ReactRouterDOM

export class _AppHeader extends React.Component {

    state = {
        activeClass: '',
    }

    activeMenu = () => {
        this.setState({ activeClass: 'active'})
    }

    disableMenu = () => {
        this.setState({ activeClass: ''})
    }

    render() {

        return (
            <React.Fragment>
                <nav>
                    <NavLink><img className="logo" src="../assets/img/logo.svg"/></NavLink>
                    <div className={`nav-links ${this.state.activeClass}`}>
                        <img onClick={this.disableMenu} className="fa close" src="../assets/img/times-solid.svg"/>
                        <ul className="clean-list">
                            <li><NavLink>HOME</NavLink></li>
                            <li><NavLink>BOOKSTORE</NavLink></li>
                            <li><NavLink>ABOUT</NavLink></li>
                        </ul>
                    </div>
                    <img className={`fa open ${this.state.activeClass}`} onClick={this.activeMenu} src="../assets/img/bars-solid.svg"/>
                </nav>
                <div className="text-box">
                    <h1>World's greatest junior dev's.</h1>
                    <p>Amaizing apps cover for classic bookstore, sticky notes and gmail.<br/>
                    Using the spectacular front-end development framework. ReactJs.</p>
                    <NavLink className="hero-btn">Visit us to know more.</NavLink>
                </div>
            </React.Fragment>
        )
    }
}

export const AppHeader = withRouter(_AppHeader)
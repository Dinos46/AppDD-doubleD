const { NavLink, Link } = ReactRouterDOM
export class Home extends React.Component {

    render() {
        return (
            <React.Fragment>
                <section className="home">
                    <div className="text-box">
                        <h1>World's greatest junior dev's.</h1>
                        <p>Amaizing apps cover for classic bookstore, sticky notes and gmail.<br />
                    Using the spectacular front-end development framework. ReactJs.</p>
                        <NavLink to="/about" className="hero-btn">Visit us to know more.</NavLink>
                    </div>
                </section>
                <div className="main-home-container">
                    <article>
                        <h4>Book Store</h4>
                        <img src="./assets/img/missbook.jpeg" />
                        <p>Book store is a cover for classic CRUD Website, in a form of book store.</p>
                        <Link to="/book">Check it out!</Link>
                    </article>
                    <article>
                        <h4>MissKeep</h4>
                        <img src="./assets/img/misskeep.jpg" />
                        <p>A daily use app for keep our most importent/fun/memoriable tasks, photos or videos.</p>
                        <Link to="/keep">Check it out!</Link>
                    </article>
                    <article>
                        <h4>Email</h4>
                        <img src="./assets/img/email.jpg" />
                        <p>App cover for the famous super-application Gmail, use for communication via emails.</p>
                        <Link to="/email">Check it out!</Link>
                    </article>
                </div>
            </React.Fragment>
        )
    }
}
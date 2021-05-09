export function About() {
    return (
        <div className="about-container flex">
            <section className="about-content flex">
                <h2>About Double D</h2>
                <p>
                    The founders of Double D, Daniel Sheetrit and Din Ben Elisha are two young fullstuck developers with a great vision.
                    Daniel is 23 years old and he is the CEO of his imaginary company.<br />
                    Din is 31 years old and he has CO-founded the foundation tha has no founders...<br />
                    together they built this app.
            </p>
                <section className="about-img flex">
                    <section className="daniel">
                        <h3>Daniel Sheetrit</h3>
                        <div className="img-container">
                            <img src="./assets/img/daniel.jpg" alt="profile image" />
                        </div>
                    </section>

                    <section className="din">
                        <h3>Din Ben Elisha</h3>
                        <div className="img-container">
                            <img src="./assets/img/din.jpg" alt="profile image" />
                        </div>
                    </section>
                </section>
            </section>
        </div>
    )
}
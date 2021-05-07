const { NavLink, Route, Switch } = ReactRouterDOM
import { ImgInput } from './ImgInput.jsx'
import { TodoInput } from './TodoInput.jsx'
import { TxtInput } from './TxtInput.jsx'

export function AddNote() {

    return (
        <section className="add-note flex">
            <nav className="note-type-links">
                <NavLink to="/keep/add-text"><i className="fas fa-pencil-alt"></i></NavLink>
                <NavLink to="/keep/add-img"><i className="far fa-image"></i></NavLink>
                <NavLink to="/keep/add-todo"><i className="far fa-list-alt"></i></NavLink>
            </nav>

            <Switch>
                <Route component={TxtInput} path="/keep/add-text" />
                <Route component={TodoInput} path="/keep/add-todo" />
                <Route component={ImgInput} path="/keep" />
            </Switch>
        </section>
    )
}











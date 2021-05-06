const { NavLink, Route, Switch } = ReactRouterDOM
import { ImgInput } from './ImgInput.jsx'
import { TodoInput } from './TodoInput.jsx'
import { TxtInput } from './TxtInput.jsx'

export function AddNote() {

    return (
        <section className="add-note flex">
            <nav >
                <NavLink to="/keep/add-text">text</NavLink>
                <NavLink to="/keep/add-img">img</NavLink>
                {/* <NavLink to="/keep/add-todo">todo</NavLink> */}
            </nav>

            <Switch>
                <Route component={TxtInput} path="/keep/add-text" />
                <Route component={ImgInput} path="/keep/add-img" />
                <Route component={TodoInput} path="/keep/add-todo" />
            </Switch>
        </section>
    )
}











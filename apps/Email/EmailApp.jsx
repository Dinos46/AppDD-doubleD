// const { NavLink, withRouter } = ReactRouterDOM

import { emailService } from './services/email.service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailFilter } from './cmps/EmailFilter.jsx'
import { EmailSidebarFilter } from './cmps/EmailSidebarFilter.jsx'

export class EmailApp extends React.Component {

    state = {
        emails: null,
        filterBy: null,
        sidbarFilterBy: null,
    }

    componentDidMount() {
        this.onLoadEmails()

    }

    onLoadEmails = () => {
        emailService.query(this.state.filterBy).then(emails => {
            this.setState({ emails })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.onLoadEmails);
    }

    onSidebarFilter = () => {


    }

    render() {
        const { emails } = this.state
        if (!emails) return <h1 className="reloading"></h1>
        return (

            <section>
                <h1>mailApp</h1>
                <EmailSidebarFilter emails={emails} onSidebarFilter={this.onSidebarFilter}/>
                <EmailFilter onSetFilter={this.onSetFilter} />
                <EmailList emails={emails} />
            </section>
        )
    }
}

import { emailService } from './services/email.service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailFilter } from './cmps/EmailFilter.jsx'
import { EmailSidebarFilter } from './cmps/EmailSidebarFilter.jsx'
import { EmailAdd } from './cmps/EmailAdd.jsx'

export class EmailApp extends React.Component {

    state = {
        emails: null,
        filterBy: null,
        sidebarFilterBy: 'Inbox',
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        emailService.loadEmailsFromStorage()
        this.onLoadEmailsMain()
        this.onLoadEmailsSecond()
    }

    onLoadEmailsMain = () => {
        emailService.sidebarMainQuery(this.state.sidebarFilterBy)
    }

    onLoadEmailsSecond = () => {
        emailService.secondQuery(this.state.filterBy).then(emails => {
            this.setState({ emails })
        })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    onSidebarFilter = (sidebarFilterBy) => {
        this.setState({ sidebarFilterBy }, this.loadEmails)
    }

    onEditEmail = (emailId) => {
        emailService.getEmailIdx(emailId).then(emailIdx => {
            emailService.editEmailToggle(emailIdx)
            emailService.saveEmailsToStorage()
        })
        this.loadEmails()
    }

    render() {
        const { emails } = this.state
        if (!emails) return <h1 className="reloading"></h1>
        return (

            <section className="emailapp-container">
                <h1>mailApp</h1>
                <button>Compose</button>
                <EmailSidebarFilter onSidebarFilter={this.onSidebarFilter} />
                <EmailFilter onSetFilter={this.onSetFilter} />
                <EmailList emails={emails} onEditEmail={this.onEditEmail} />
                <EmailAdd />
            </section>
        )
    }
}
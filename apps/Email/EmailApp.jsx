
import { emailService } from './services/email.service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailFilter } from './cmps/EmailFilter.jsx'
import { EmailSidebarFilter } from './cmps/EmailSidebarFilter.jsx'
import { EmailAdd } from './cmps/EmailAdd.jsx'
import { EmailPreview } from './cmps/EmailPreview.jsx'

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
        emailService.secondQuery(this.state.filterBy).then(emails => this.setState({ emails }))
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    onSidebarFilter = (sidebarFilterBy) => {
        this.setState({ sidebarFilterBy }, this.loadEmails)
    }

    onAddEmail = (email) => {
        emailService.addEmail(email)
        emailService.saveEmailsToStorage()
        this.loadEmails()
    }

    onRemoveEmail = (emailId) => {
        emailService.getEmailIdx(emailId).then(emailIdx => {
            emailService.removeEmail(emailIdx)
            emailService.saveEmailsToStorage()
        })
        this.loadEmails()
    }

    onOpenEmail = (emailId) => {
        emailService.getEmailIdx(emailId).then(emailIdx => {
            emailService.openEmail(emailIdx)
            emailService.saveEmailsToStorage()
        })
        this.loadEmails()
    }

    onToggleReadEmail = (emailId) => {
        emailService.getEmailIdx(emailId).then(emailIdx => {
            emailService.toggleReadEmail(emailIdx)
            emailService.saveEmailsToStorage()
        })
        this.loadEmails()
    }

    render() {
        if (!this.state.emails) return <h1 className="reloading"></h1>

        return (

            <section className="emailapp-container">
                <h1>mailApp</h1>
                <button>Compose</button>
                <EmailSidebarFilter onSidebarFilter={this.onSidebarFilter} />
                <EmailFilter onSetFilter={this.onSetFilter} />

                <EmailList emails={this.state.emails} onToggleReadEmail={this.onToggleReadEmail}
                    onRemoveEmail={this.onRemoveEmail} onOpenEmail={this.onOpenEmail} />

                <EmailAdd onAddEmail={this.onAddEmail} />
            </section>
        )
    }
}
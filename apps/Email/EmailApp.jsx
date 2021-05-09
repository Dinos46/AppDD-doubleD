import { emailService } from './services/email.service.js'
import { EmailList } from './cmps/EmailList.jsx'
import { EmailFilter } from './cmps/EmailFilter.jsx'
import { EmailSidebarFilter } from './cmps/EmailSidebarFilter.jsx'
import { EmailAdd } from './cmps/EmailAdd.jsx'
import { EmailEdit } from './cmps/EmailEdit.jsx'

export class EmailApp extends React.Component {

    state = {
        emails: null,
        filterBy: null,
        sidebarFilterBy: 'inbox',
        isEmailAddOpen: false,
    }

    componentDidMount() {
        this.loadEmails()
    }

    componentWillUnmount() {
        emailService.closeAllEmails()
        emailService.saveEmailsToStorage()
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
        this.onToggleOpenEmailAdd()
        this.loadEmails()
    }

    onRemoveEmail = (emailId) => {
        emailService.getEmailIdx(emailId).then(emailIdx => {
            emailService.removeEmail(emailIdx)
            emailService.saveEmailsToStorage()
        })
        this.loadEmails()
    }

    onToggleStarEmail = (emailId) => {
        emailService.getEmailIdx(emailId).then(emailIdx => {
            emailService.toggleStarEmail(emailIdx)
            emailService.saveEmailsToStorage()
        })
        this.loadEmails()
    }

    onToggleOpenEmail = (emailId) => {
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

    onToggleOpenEmailAdd = () => {
        this.setState({ isEmailAddOpen: !this.state.isEmailAddOpen })
    }

    render() {
        if (!this.state.emails) return <h1 className="reloading"></h1>

        return (

            <section className="email-app">

                <button name="compose-btn" onClick={this.onToggleOpenEmailAdd}>
                    <i className="fas fa-plus" />
                    Compose
                </button>

                <EmailFilter onSetFilter={this.onSetFilter} />
                <EmailSidebarFilter onSidebarFilter={this.onSidebarFilter} />

                <EmailList emails={this.state.emails} onToggleReadEmail={this.onToggleReadEmail}
                    onRemoveEmail={this.onRemoveEmail} onToggleOpenEmail={this.onToggleOpenEmail}
                    onToggleStarEmail={this.onToggleStarEmail} />

                {this.state.isEmailAddOpen && <EmailAdd onAddEmail={this.onAddEmail}
                    onToggleOpenEmailAdd={this.onToggleOpenEmailAdd} />}

                {this.state.isEmailEditOpen && <EmailEdit emailToEdit={this.state.emailToEdit} />}

            </section>
        )
    }
}
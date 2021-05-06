import { EmailDetails } from './EmailDetails.jsx'

export function EmailPreview({ email, onRemoveEmail, onToggleReadEmail, onOpenEmail }) {

    const emailTime = new Date(email.sentAt).toLocaleString('he-IL', { dateStyle: 'short' })
    const emailBody = (email.body).substring(0, 50)
    const { name, subject, status, isRead } = email

    return (
        <React.Fragment>
            <section className={`email-preview ${isRead && 'read'}`} onClick={() => onOpenEmail(email.id)}>
                <span>{status}</span>
                <p className="email-preview-name">{name}</p>
                <p className="email-preview-body">
                    <span>{subject}</span>
                    <span>- {emailBody}...</span>
                </p>
                <p className="email-preview-time">{emailTime}</p>
            </section>

            {email.isOpen && <EmailDetails email={email} onRemoveEmail={onRemoveEmail}
                onToggleReadEmail={onToggleReadEmail} />}
        </React.Fragment>
    )
}
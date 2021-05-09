import { EmailDetails } from './EmailDetails.jsx'

export function EmailPreview({ email, onRemoveEmail, onToggleReadEmail, onToggleOpenEmail, onToggleStarEmail }) {

    const emailTime = new Date(email.sentAt).toLocaleString('he-IL', { dateStyle: 'short' })
    const emailBody = (email.body).substring(0, 50)
    const { name, subject, status, isRead, isStarred } = email

    return (
        <React.Fragment>
            <section className={`email-preview ${isRead && 'read'}`} onClick={() => onToggleOpenEmail(email.id)}>

                <div className="emailpreview-name-container">
                    <span>{name}</span>
                    <span>
                        {status === 'inbox' && <i className="fas fa-inbox" />}
                        {status === 'sent' && <i className="fas fa-paper-plane" />}
                        {status === 'draft' && <i className="fas fa-file-alt" />}
                        {isStarred && <i className="fas fa-star" />}
                    </span>
                </div>

                <div className="emailpreview-body-container">
                    <span>{subject}</span>
                    <span>- {emailBody}...</span>
                </div>

                <p className="email-preview-time">{emailTime}</p>
            </section>

            {email.isOpen && <EmailDetails email={email} onRemoveEmail={onRemoveEmail}
                onToggleReadEmail={onToggleReadEmail} onToggleStarEmail={onToggleStarEmail} />}
        </React.Fragment>
    )
}
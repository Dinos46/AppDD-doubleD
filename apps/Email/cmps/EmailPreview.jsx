export function EmailPreview({ email }) {

    const sentHour = new Date(email.sentAt).toLocaleString('he-IL', { timeStyle: 'medium' })
    const shallowCopy = email.body.substring(0, 50)

    return (
        <div className={`email-preview ${email.isRead && 'read'}`}>
            <p className="email-preview-name">{email.name}</p>
            <p className="email-preview-body">
                <span>{email.subject}</span>
                <span>- {shallowCopy}...</span>
            </p>
            <p className="email-preview-time">{sentHour}</p>
        </div>
    )
}
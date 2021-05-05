export function EmailPreview({ email, onEditEmail }) {

    const sentHour = new Date(email.sentAt).toLocaleString('he-IL')
    const shallowCopy = email.body.substring(0, 50)

    return (
        <div className={`email-preview ${email.isRead && 'read'}`} >
            <p className="email-preview-name">{email.name}</p>
            <p className="email-preview-body">
                <span>{email.subject}</span>
                <span>- {shallowCopy}...</span>
            </p>
            <button onClick={() => { onEditEmail(email.id) }}>opan</button>
            <p className="email-preview-time">{sentHour}</p>
        </div>
    )
}
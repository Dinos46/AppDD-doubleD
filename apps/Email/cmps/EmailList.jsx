import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, onToggleReadEmail, onRemoveEmail, onToggleOpenEmail, onEditEmail }) {

    return (
        <section className="email-list">
            {emails.map((email, idx) => {
                return <EmailPreview email={email} key={idx} onToggleReadEmail={onToggleReadEmail}
                    onRemoveEmail={onRemoveEmail} onToggleOpenEmail={onToggleOpenEmail}
                    onEditEmail={onEditEmail} />
            })}
        </section>
    )
}
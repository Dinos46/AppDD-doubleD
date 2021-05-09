import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, onToggleReadEmail, onRemoveEmail, onToggleOpenEmail, onToggleStarEmail }) {

    return (
        <section className="email-list">
            {emails.map((email, idx) => {
                return <EmailPreview email={email} key={idx} onToggleReadEmail={onToggleReadEmail}
                    onRemoveEmail={onRemoveEmail} onToggleOpenEmail={onToggleOpenEmail}
                    onToggleStarEmail={onToggleStarEmail} />
            })}
        </section>
    )
}
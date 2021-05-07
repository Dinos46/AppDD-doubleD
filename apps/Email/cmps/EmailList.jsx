import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, onToggleReadEmail, onRemoveEmail, onOpenEmail }) {

    return (
        <section className='email-list'>
            {emails.map((email, idx) => {
                return <EmailPreview email={email} key={idx} onToggleReadEmail={onToggleReadEmail}
                    onRemoveEmail={onRemoveEmail} onOpenEmail={onOpenEmail} />;
            })}
        </section>
    )
}
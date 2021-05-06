import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, onEditEmail }) {
    
    return (
        <section className='email-list'>
            {emails.map((email, idx) => {
                return <EmailPreview email={email} key={idx} onEditEmail={onEditEmail}/>;
            })}
        </section>
    )
}
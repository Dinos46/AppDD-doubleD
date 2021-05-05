import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails }) {

    return (
        <section className='email-list'>
            {emails.map((email, idx) => {
                return <EmailPreview email={email} key={idx} />;
            })}
        </section>
    )
}
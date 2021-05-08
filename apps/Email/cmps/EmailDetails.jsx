
export function EmailDetails({ email, onRemoveEmail, onToggleReadEmail, onEditEmail }) {

    const emailTimeLong = new Date(email.sentAt).toLocaleString('he-IL').split(',')

    return (

        <div className="email-details">

            <div className="emaildetails-topic">
                <h2>{email.subject}</h2>
                <div className="emaildetails-topic-btn">
                    <button onClick={() => onRemoveEmail(email.id)}>
                        <i className="fas fa-trash" />
                    </button>
                    <button onClick={() => onToggleReadEmail(email.id)}>
                        {email.isRead && <i className="fas fa-envelope-open" />}
                        {!email.isRead && <i className="fas fa-envelope" />}
                    </button>
                    <button onClick={() => onEditEmail(email.id)}>
                        {email.status === 'Draft' ? <i className="fas fa-pen" /> : <i className="fas fa-reply" />}
                    </button>
                </div>
            </div>

            <div className="emaildetails-details">
                <span>{email.name}</span>
                <span>{`<${email.name}@gmail.com>`}</span>
                <span>{emailTimeLong}</span>
            </div>

            <p>{email.body}</p>
        </div>
    )
}
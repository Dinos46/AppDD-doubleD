
export function EmailDetails({ email, onRemoveEmail, onToggleReadEmail }) {

    const emailTimeLong = new Date(email.sentAt).toLocaleString('he-IL').split(',')

    return (

        <div className="email-details">
            <div>
                <button onClick={() => onRemoveEmail(email.id)}>remove |</button>
                <button onClick={() => onToggleReadEmail(email.id)}>mark read/unread</button>
            </div>

            <h2>{email.subject}</h2>
            <div className="emailtopic-details">
                <p>{email.name}</p>
                <span>{`<${email.name}@gmail.com>`}</span>
                <span>{emailTimeLong}</span>
            </div>
            <p>{email.body}</p>
        </div>
    )
}
export const emailService = {
    query,
}

let gEmails = [
    {
        name: 'Shakshuka',
        subject: 'Wassap?',
        body: 'Pick up!',
        isStarred: false,
        isRead: true,
        sentAt: 1620154686522
    },
    {
        name: 'Bamya',
        subject: 'its all good bro?',
        body: 'you were high as shit last night its all good man?!',
        isStarred: false,
        isRead: false,
        sentAt: 1620157686522
    },
    {
        name: 'Hatzil',
        subject: 'money',
        body: 'its my money come back!?',
        isStarred: true,
        isRead: false,
        sentAt: 1621154686522
    }
]

let gEmailFilterdBySidebar;

// function sidebarMainQuery(filterBy) {
//     const { inbox, starred, drafts, sent} = filterBy
//     gEmailFilterdBySidebar = gEmails.map(email => {


//     })

// }

function query(filterBy) {

    if (filterBy) {
        const { text, isRead } = filterBy;
        let filterEmails = gEmails.filter(email => {
            if (isRead !== 'all') return email.name.includes(text) && email.isRead === isRead;
            return email.name.includes(text) || email.subject.includes(text) || email.body.includes(text)
        })
        return Promise.resolve(filterEmails);
    }
    return Promise.resolve(gEmails)
}
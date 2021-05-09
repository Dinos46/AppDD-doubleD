import { storage } from '../../../services/storage-service.js'
import { util } from '../../../services/util-service.js'

export const emailService = {
    sidebarMainQuery,
    secondQuery,
    loadEmailsFromStorage,
    saveEmailsToStorage,
    getEmailIdx,
    getEmailById,
    addEmail,
    removeEmail,
    toggleStarEmail,
    toggleReadEmail,
    openEmail,
    closeAllEmails
}

let gEmailsDefault = [

    {
        id: 'as3aQ4487',
        name: 'Shakshuka',
        subject: 'Wassaaaaa?',
        body: 'I tried having my mother’s phone disconnected, but the customer-service rep told me that since the account was in my dad’s name, he’d have to be the one to put in the request. The fact that he’d been dead for 40 years didn’t sway her. Then a solution hit me: “If I stop paying the bill, you can turn off the service, right?” “Well, yes,” she said reluctantly. “But that would ruin his credit.”',
        status: 'sent',
        isStarred: true,
        isRead: false,
        isOpen: false,
        sentAt: 1620154686522
    },
    {
        id: 'as3aEF487',
        name: 'Bamya',
        subject: 'its all good bro?',
        body: 'Look man you were high as shit last night its all good now?',
        status: 'inbox',
        isStarred: false,
        isRead: false,
        isOpen: false,
        sentAt: 1620157686522
    },
    {
        id: 'as3aQ2217',
        name: 'Hatzil',
        subject: 'shorot lo ktzrot',
        body: 'Misheo haham pam amar li, shorot arocot arocot arocot, ze lo tov, shorot ktazrot ze... ein',
        status: 'draft',
        isStarred: true,
        isRead: false,
        isOpen: false,
        sentAt: 1611154686522
    },
    {
        id: 'as3ttt217',
        name: 'Poor CSS',
        subject: 'css hove sevel',
        body: 'ze code shadif ve lo aya nihtav',
        status: 'inbox',
        isStarred: true,
        isRead: false,
        isOpen: false,
        sentAt: 1611154246422
    },
    {
        id: 'as3ada517',
        name: 'Jimmy Po!?',
        subject: 'Jimmy Who?',
        body: 'give my money back you fucking Moshavnik manyak, Kfar neter peace of shit',
        status: 'sent',
        isStarred: false,
        isRead: false,
        isOpen: false,
        sentAt: 1621654246722
    },
    {
        id: 'as3ada280',
        name: 'Matan Lasry',
        subject: 'Youngest dude in the block',
        body: 'once upon a time there was a young ass dude called Matan, but this nigga never gave shit to anyone, anyway long story short, this dude finishes homework fast as dried soldier that meets female stripper, and the whole course pissed off about that shit, so we gonna take him down. send me your approval',
        status: 'draft',
        isStarred: false,
        isRead: false,
        isOpen: false,
        sentAt: 1621454246822
    },
    {
        id: 'as3555280',
        name: 'Pop smoke',
        subject: 'rest in peace to the pop, make him smokeee',
        body: ` Its a room full of trap niggas Trap, strap niggas Strap
        If the opps run up in this shit, we gon clap niggas (Oh)
        Woo niggas (Huh), some slatt niggas (Slatt)
        Pockets fat like a fat nigga, yeah (Ooh)
        Shopping up in Saks Fifth with a cup of Actavis to get Christian Dior
        Look, I be all up in the stores
        Young nigga, I can buy you what you want (Yeah, yeah, yeah)
        She got a fat ass, shorty shaped like Serena (Oh)
        Long hair, brown eyes, shorty look like Selena (Selena)
        Shorty said that she was Puerto Rican (Rican)
        Her pussy wet like Katrina (Katrina, Katrina)
        Oh, 2-10 on the dashboard (Dash)
        Shorty, be clear what you ask for
        And she got that get-right momma
        And I gotta get my baby
        Listen, I dont want no problems (I dont want)
        I just want my baby (Look, look)`,
        status: 'inbox',
        isStarred: false,
        isRead: false,
        isOpen: false,
        sentAt: 1621454346822
    },
    {
        id: 'as344a280',
        name: 'fuck that shitttt',
        subject: 'its 4AM With din here',
        body: 'During World War II, my father often found himself stuck with KP duty. One day, convinced he could improve things, he told the head cook, “If you give me a...',
        status: 'draft',
        isStarred: false,
        isRead: false,
        isOpen: false,
        sentAt: 1621454246822
    },
    {
        id: 'as344a299',
        name: 'Champgane Papi',
        subject: 'nice for what??',
        body: `are for me, care for me, you said you'd care for me
        There for me, there for me, said you'd be there for me
        (Lil Weezyana shit)
        Cry for me, cry for me, you said you'd die for me
        (Murda on the beat)
        `,
        status: 'sent',
        isStarred: true,
        isRead: false,
        isOpen: false,
        sentAt: 1621454246422
    },
]

const KEY = 'emailsDB'
let gEmails
let gEmailFilterdBySidebar

function saveEmailsToStorage() {
    storage.saveToStorage(KEY, gEmails)
}

function loadEmailsFromStorage() {
    let emails = storage.loadFromStorage(KEY)
    if (!emails) emails = gEmailsDefault
    gEmails = emails
    storage.saveToStorage(KEY, gEmails)
}

function sidebarMainQuery(sidebarFilterBy) {
    if (sidebarFilterBy === 'starred') {
        gEmailFilterdBySidebar = gEmails.filter(email => email.isStarred)
    } else if (sidebarFilterBy !== 'inbox') {
        gEmailFilterdBySidebar = gEmails.filter(email => email.status === sidebarFilterBy)
    } else {
        gEmailFilterdBySidebar = gEmails
    }
}

function secondQuery(filterBy) {
    if (filterBy) {
        const { text, isRead } = filterBy

        let filterEmails = gEmailFilterdBySidebar.filter(email => {
            if (isRead !== 'all') return email.name.includes(text) && email.isRead === isRead
            return email.name.includes(text) || email.subject.includes(text) || email.body.includes(text)
        })

        return Promise.resolve(filterEmails)
    }
    return Promise.resolve(gEmailFilterdBySidebar)
}

function getEmailIdx(emailId) {
    const emailIdx = gEmails.findIndex(email => emailId === email.id)
    return Promise.resolve(emailIdx);
}

function getEmailById(emailId) {
    const email = gEmails.find(email => emailId === email.id)
    return Promise.resolve(email)
}

function toggleReadEmail(emailIdx) {
    gEmails[emailIdx].isRead = !gEmails[emailIdx].isRead
}

function openEmail(emailIdx) {
    if (!gEmails[emailIdx].isOpen) gEmails[emailIdx].isRead = true
    gEmails[emailIdx].isOpen = !gEmails[emailIdx].isOpen
}

function addEmail(email) {
    const { to, cc, bcc, subject, body, status, } = email

    let newEmail = {
        id: util.makeId(),
        name: to,
        subject: subject,
        body: body,
        status: status,
        isRead: false,
        isStarred: false,
        isOpen: false,
        sentAt: Date.now()
    }

    gEmails.unshift(newEmail)
}

function toggleStarEmail(emailIdx) {
    gEmails[emailIdx].isStarred = !gEmails[emailIdx].isStarred
}

function removeEmail(emailIdx) {
    gEmails.splice(emailIdx, 1)
}

function closeAllEmails() {
    gEmails.forEach(email => email.isOpen = false)
}
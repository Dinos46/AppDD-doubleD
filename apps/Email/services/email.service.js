import { storage } from '../../../services/storage-service.js'
import { util } from '../../../services/util-service.js'

export const emailService = {
    sidebarMainQuery,
    secondQuery,
    loadEmailsFromStorage,
    saveEmailsToStorage,
    getEmailById,
    editEmailToggle,
    getEmailIdx
}

let gEmailsDefault = [

    {
        id: 'as3aQ4487',
        name: 'Shakshuka',
        subject: 'Wassap?',
        body: 'Pick up!',
        status: 'Sent',
        isRead: true,
        sentAt: 1620154686522
    },
    {
        id: 'as3aEF487',
        name: 'Bamya',
        subject: 'its all good bro?',
        body: 'you were high as shit last night its all good man?!',
        status: 'Starred',
        isRead: false,
        sentAt: 1620157686522
    },
    {
        id: 'as3aQ2217',
        name: 'Hatzil',
        subject: 'money',
        body: 'its my money come back!?',
        status: 'Draft',
        isRead: false,
        sentAt: 1621154686522
    }
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
    if (sidebarFilterBy !== 'Inbox') {
        gEmailFilterdBySidebar = gEmails.filter(email => {
            return email.status === sidebarFilterBy
        })
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

function getEmailById(emailId) {
    var email = gEmails.find(email => {
        return emailId === email.id;
    })
    return Promise.resolve(email);
}

function getEmailIdx(emailId) {
    var emailIdx = gEmails.findIndex(email => {
        return emailId === email.id;
    })
    return Promise.resolve(emailIdx);
}

function editEmailToggle(emailIdx) {
    gEmails[emailIdx].isRead = !gEmails[emailIdx].isRead
    console.log(gEmails[emailIdx].isRead);
}
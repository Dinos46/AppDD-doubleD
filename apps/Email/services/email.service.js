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
    toggleReadEmail,
    openEmail,
    closeAllEmails
}

let gEmailsDefault = [

    {
        id: 'as3aQ4487',
        name: 'Shakshuka',
        subject: 'Wassap?',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem fugit illum porro sequi ratione consequuntur, voluptatum quia, at praesentium voluptas consectetur odio.',
        status: 'sent',
        isRead: false,
        isOpen: false,
        sentAt: 1620154686522
    },
    {
        id: 'as3aEF487',
        name: 'Bamya',
        subject: 'its all good bro?',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem fugit illum porro sequi ratione consequuntur, voluptatum quia, at praesentium voluptas consectetur odio.',
        status: 'starred',
        isRead: false,
        isOpen: false,
        sentAt: 1620157686522
    },
    {
        id: 'as3aQ2217',
        name: 'Hatzil',
        subject: 'money',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem fugit illum porro sequi ratione consequuntur, voluptatum quia, at praesentium voluptas consectetur odio.',
        status: 'draft',
        isRead: false,
        isOpen: false,
        sentAt: 1621154686522
    },
    {
        id: 'as3ada217',
        name: 'Poor CSS',
        subject: 'css hove sevel',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorem fugit illum porro sequi ratione consequuntur, voluptatum quia, at praesentium voluptas consectetur odio.',
        status: 'inbox',
        isRead: false,
        isOpen: false,
        sentAt: 1621154246522
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
    if (sidebarFilterBy !== 'inbox') {
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
        isOpen: false,
        sentAt: Date.now()
    }

    gEmails.unshift(newEmail)
}

function removeEmail(emailIdx) {
    gEmails.splice(emailIdx, 1)
}

function closeAllEmails() {
    gEmails.forEach(email => email.isOpen = false)
}
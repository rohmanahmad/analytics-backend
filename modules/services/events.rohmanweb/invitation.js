'use strict'

require('../../../filemapper')

const InviteContacts = use('InvitationContacts.Model')
const Randomize = use('modules/globals/libs/randomize.lib')
const ShortLink = use('ShortLink.Model')
const {exec} = require('child_process')
const md5 = require('md5')

const runSend = async () => {
    let contact = await InviteContacts.findOne({$or: [{is_sent: {$exists: false}}, {is_sent: 0}]})
    if (contact && contact.phone) {
        // const command = `ls -l`
        const command = `${basePath()}/modules/services/events.rohmanweb/gosend ${contact.phone} ${contact.link}`
        console.log(`sending to ${contact.name}`)
        let error = false
        const ex = exec(command)
        ex.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`)
        })

        ex.stderr.on('data', (data) => {
            console.log(`stderr: ${data}`)
            error = true
        })

        ex.on('close', async (code) => {
            if (!error) {
                console.log(`invitation has sent successfully`)
                contact['is_sent'] = 1
                await contact.save()
            }
            contact = null
        })
    } else {
        console.log('no contact found')
        process.exit(0)
    }
}

const runUpdate = async () => {
    let contact = await InviteContacts.find({$or: [{is_sent: {$exists: false}}, {is_sent: 0}]})
    if (contact && contact.length > 0) {
        let funcsInvite = []
        let funcsShort = []
        for (let x of contact) {
            const uniq = Randomize.get(7)
            const shareLink = 'https://share.rohman.web.id/' + uniq
            const link = 'https://events.rohman.web.id/wedding?uid=' + x._id
            const hash = md5(link)
            funcsInvite.push({
                updateOne: {
                    filter: {
                        _id: x._id
                    },
                    update: {
                        link: shareLink
                    },
                    upsert: false
                }
            })
            funcsShort.push({
                updateOne: {
                    filter: {
                        hash
                    },
                    update: {
                        'is_anonim': 1,
                        'url': link,
                        'uniq_code': uniq,
                        'total_visit': 0,
                        'created_at': new Date()
                    },
                    upsert: true
                }
            })
        }
        await InviteContacts.bulkWrite(funcsInvite)
        await ShortLink.bulkWrite(funcsShort)
    } else {
        console.log('no contact')
    }
}

setInterval(function () {
    runSend()
}, 20 * 1000)

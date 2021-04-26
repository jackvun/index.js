const {
    WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require('@adiwajshing/baileys');
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const fs = require("fs") 
const util = require('util')
const fetch = require('node-fetch')
const os = require('os')
const crypto = require('crypto')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { donasi } = require('./lib/donasi')
const { animenu } = require('./lib/animenu')
const { funmenu } = require('./lib/funmenu')
const { owmenu } = require('./lib/owmenu')
const { adminmenu } = require('./lib/adminmenu')
const { grupmenu } = require('./lib/grupmenu')
const { kerangmenu } = require('./lib/kerangmenu')
const { downmenu } = require('./lib/downmenu')
const { mediamenu } = require('./lib/mediamenu')
const { makermenu } = require('./lib/makermenu')
const { join } = require('./lib/join')
const { update } = require('./lib/update')
const { nsfwmenu } = require('./lib/nsfwmenu')
const { gamenu } = require('./lib/gamenu')
const { ncode } = require('./lib/ncode')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const ms = require('parse-ms')
const toMs = require('ms')
const path = require('path')
const cd = 4.32e+7
const { ind } = require('./language')

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:My Master Owner Vun\n' 
            + 'ORG: Creator Minato~Aqua™~BoT;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=601112272557:+60 111 227-2557\n' 
            + 'END:VCARD' 
blocked = []   
prefix = '/'
limitawal = 50
memberlimit = 0
ator = 'My Master Owner'
namo = 'My Master Owner Vun'
cr = '*BOT INI SUDAH TERVERIFIKASI*'
/*************************************/

/******** OWNER NUMBER**********/
const ownerNumber = ["601112272557@s.whatsapp.net"] 
/************************************/

/******** PREM NUMBER**********/
const premNumber = ["6285696191012@s.whatsapp.net","6282334183745@s.whatsapp.net","62859191730494@s.whatsapp.net","601112272557@s.whatsapp.net","6283872453888@s.whatsapp.net","6288298269251@s.whatsapp.net","6282171732892@s.whatsapp.net","14156492554@s.whatsapp.net","6282339557685@s.whatsapp.net","6285903795705@s.whatsapp.net","6288287224845@s.whatsapp.net"]
/************************************/
       
/*********** LOAD FILE ***********/
const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/prem.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const afk = JSON.parse(fs.readFileSync('./database/group/afk.json'))
const ban = JSON.parse (fs.readFileSync('./database/user/banned.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
		const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        } 
        
        const getPremiumExpired = (sender) => {
		    let position = null
		    Object.keys(prem).forEach((i) => {
		        if (prem[i].id === sender) {
		            position = i
		        }
		    })
		    if (position !== null) {
		        return prem[position].expired
		    }
		} 
		
		const expiredCheck = () => {
		    setInterval(() => {
		        let position = null
		        Object.keys(prem).forEach((i) => {
		            if (Date.now() >= prem[i].expired) {
		                position = i
		            }
		        })
		        if (position !== null) {
		            console.log(`Premium expired: ${prem[position].id}`)
		            prem.splice(position, 1)
		            fs.writeFileSync('./database/bot/prem.json', JSON.stringify(prem))
		        }
		    }, 1000)
		} 
		
		const getAllPremiumUser = () => {
		    const array = []
		    Object.keys(prem).forEach((i) => {
		        array.push(prem[i].id)
		    })
		    return array
		}
		
         
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)} hours ${pad(minutes)} minutes ${pad(seconds)} seconds`
}

function addMetadata(packname, author) {	
	if (!packname) packname = 'Minato Aqua'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})	

} 

/********** FUNCTION ***************/

const client = new WAConnection()
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('qr already scan.by','white'),color('Lord','red'),color('Rafly','white'),color(':v','yellow'))
})

client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\welcome to group *${mdata.subject}* sebelum itu intro dlu yah kakak, setelah itu baca peraturan² group`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Sayonara beban 😉,akhir dah hilang 1 beban keluarga... jangan masuk lagi yah@${num.split('@')[0]} `
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('message-new', async (mek) => {
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
            global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
            hit = 1
            const auto = budy.toLowerCase()
            if(isCmd) hit + 1
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            Const isBanned = ban.includes(sender)
	    const isBadWord = isGroup ? badword.includes(from) : false
	    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPrem = premNumber.includes(sender) || isOwner
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const costumimg = ( pesan , tipe, target , caption) => {
			client.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}
			if (auto.match('aqua')){
	        const magw = fs.readFileSync('./src/webp/aqua.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
		if (auto.match('majikayo')){
	        const magw = fs.readFileSync('./src/webp/majikayo.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
		if (auto.match('hai')){
	        const magw = fs.readFileSync('./src/webp/hai.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
		if (auto.match('wibu')){
	        const magw = fs.readFileSync('./src/webp/hai.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }
		if (auto.match('tolol')){
	        const magw = fs.readFileSync('./src/webp/tolol.webp');
            client.sendMessage(from, magw, MessageType.sticker, { quoted: mek })
	        }	
	          if (auto.match('@601112272557')){
           client.sendMessage(from, 'Jangan Tag Owner Gue Njeng, Ngerti gk??? mau gw hantam pala lu? Dia Lagi Sibuk Gblk', text, { quoted: mek })
		    }
	       if (auto.match('@6283872453888')){
           client.sendMessage(from, 'Ada apa? Kalo penting pc dia aja :3', text, { quoted: mek })
		    }
 	       if (auto.match('@6288298269251')){
           client.sendMessage(from, 'Ada apa? Kalo gk penting jangan tag dia cukk :3', text, { quoted: mek })
		    }
		    if (auto.match('@6282334183745')){
           client.sendMessage(from, 'Ada apa? Kalo gk penting jangan tag dia cukk :3', text, { quoted: mek })
		    }
		    if (auto.match('@62859191730494')){
           client.sendMessage(from, 'Ada apa? Kalo gk penting jangan tag dia cukk :3', text, { quoted: mek })
		    }
		    if (auto.match('@6285903795705')){
           client.sendMessage(from, 'Ada apa? Kalo gk penting jangan tag dia cukk :3', text, { quoted: mek })
		    }
		if (auto.match('@14156492554')){
           client.sendMessage(from, 'Jangan Tag Harun-sama, Dia lagi mantap mantap cuk :)', text, { quoted: mek })
		    }   
		if (auto.match('@6282339557685')){
		    client.sendMessage(from, 'Jangan Tag dia dong Kakak, dia lagi sibuk 😀', text, { quoted: mek })
		    }
		    if (auto.match('@6288287224845')){
		    client.sendMessage(from, 'Jangan Tag dia asw  , dia lagi main game 😒', text, { quoted: mek })
		    }
		if (auto.match('minato')){
	        const magw = fs.readFileSync('./src/mp3/aqua.mp3');
            client.sendMessage(from, magw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	        }
		if (auto.match('aqua')){
	        const magw = fs.readFileSync('./src/mp3/aqu.mp3');
            client.sendMessage(from, magw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	        }
	        if (auto.match('darling')){
	        const magw = fs.readFileSync('./src/mp3/darling.mp3');
            client.sendMessage(from, magw, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	        }
	        if (auto.match('cekprefix')){
            client.sendMessage(from, '*the prefix used now is [ / ]*', text, { quoted: mek })
	        }
		   if (auto.match('kontol')){
           client.sendMessage(from, '*MULUTNYA BANG,NANTI KENA PUKUL DIBILANG GK SAYANG BINATANG*', text, { quoted: mek })
		   }
		   if (auto.match('terserah')){
           client.sendMessage(from, 'dasar ceue:v', text, { quoted: mek })
		   }
                   if (auto.match('assalamualaikum')){
           client.sendMessage(from, 'waalaikumsalam kak', text, { quoted: mek })
		   }
		   if (auto.match('makasih')){
           client.sendMessage(from, 'sama sama kak:v', text, { quoted: mek })
		   }
		   if (auto.match('gblk')){
           client.sendMessage(from, 'kek elu :v', text, { quoted: mek })
		   }
	        /*****************END SCURITY FEATURE ********/


				
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
				
				
			//auto Expired
			expiredCheck()
			
			//function rank 
			const levelRole = getLevelingLevel(sender)
   	     var role = 'Destroyer'
   	     if (levelRole <= 3) {
   	         role = 'knight'
   	     } else if (levelRole <= 5) {
   	         role = 'assassin'
   	     } else if (levelRole <= 9) {
   	         role = 'guardian'
   	     } else if (levelRole <= 13) {
   	         role = 'commander'
   	     } else if (levelRole <= 17) {
   	         role = 'elite knights'
   	     } else if (levelRole <= 25) {
   	         role = 'dragon slayer'
   	     }
   
			var premi = 'Free'
			if (isPrem) {
				premi = 'VIP'
			} 
			if (isOwner) {
				premi = 'My Big Boss Owner'
			}
				
				
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`sorry your request limit is 0, the limit can be increased if you level up or with $buylimit`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
			//funtion limited
            const isLimit = (sender) =>{ 
          	if (isOwner && isPrem) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}
     	   
     	       if (isGroup) {
					try {
						const getmemex = groupMembers.length	
					    if (getmemex <= memberlimit) {
						reply(`maaf member group belum memenuhi syarat. minimal member group adalah ${memberlimit}`)
						setTimeout( () => {
 	                           client.groupLeave(from) 
 					   	}, 5000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("1")
							}, 4000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("2")
							}, 3000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("3")
							}, 2000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("4")
							}, 1000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("5")
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
 
 	   	if (isGroup && isBadWord) {
            if (bad.includes(messagesC)) {
                if (!isGroupAdmins) {
                var kic = `${sender.split("@")[0]}@s.whatsapp.net`
                    try { 
                        reply("Badword Detected")
                        setTimeout( () => {
 	                           client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
 					   	}, 5000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("1")
							}, 4000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("2")
							}, 3000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("3")
							}, 2000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("4")
							}, 1000)
								setTimeout( () => {
								client.updatePresence(from, Presence.composing)
								reply("*「 ANTI BADWORD 」*\nBye Bitch")
							}, 0)
                        } catch { client.sendMessage(from, `failed to kick because I m not an admin`, text , {quoted : mek}) }
                } else {
                    return reply( "admin mah bebas bruh :v")
                }
            }
        }
 
				//function antilink 
				if (messagesC.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply('Group Link Detected')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`Group Link Detected from ${sender.split("@")[0]} `)
						setTimeout( () => {
						client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 5000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("1")
					}, 4000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("2")
					}, 3000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("3")
					}, 2000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("4")
					}, 1000)
						setTimeout( () => {
						client.updatePresence(from, Presence.composing)
						reply("5")
					}, 0)
				}
 	       
 	     
 	     			// AFK
            for (let x of mentionUser) {
                if (afk.hasOwnProperty(x.split('@')[0])) {
                    ini_txt = "*DIA LAGI AFK*!?\n"
                    if (afk[x.split('@')[0]] != "") {
                        ini_txt += "KARNA " + afk[x.split('@')[0]]
                    }
                    client.sendMessage(from, ini_txt, text, {quoted: mek})
                }
            }
            if (afk.hasOwnProperty(sender.split('@')[0])) {
                reply("(*TELAH TIDAK AFK*.")
                delete afk[sender.split('@')[0]]
                fs.writeFileSync("./database/group/afk.json", JSON.stringify(afk))
            }
            
            
 	           //function balance
 	           if (isRegistered ) {
 	           const checkATM = checkATMuser(sender)
 	           try {
 	               if (checkATM === undefined) addATM(sender)
 	               const uangsaku = Math.floor(Math.random() * 10) + 90
	                addKoinUser(sender, uangsaku)
  	          } catch (err) {
   	             console.error(err)
   	         }
	        }
           	
             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) { 
				//apivinz 
				case 'tebakgambar':
				if (isBanned) return reply(ind.baned())
			        if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=apivinz`, {method: 'get'})
					ngebuff = await getBuffer(anu.result.soal)
					tebak = `➸ Jawaban : *${anu.result.jawaban}*`
					setTimeout( () => {
					client.sendMessage(from, tebak, text, {quoted: mek})
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
				break
				case 'meme':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply (mess.only.benned)
	        if (isLimit(sender)) return reply(ind.limitend(pusname))
					nganu = await fetchJson(`https://vinz.zeks.xyz/api/meme`)
					buper = await getBuffer(nganu.result)
					client.sendMessage(from, buper, image, {quoted: mek})
					await limitAdd(sender)
				break
				case 'chord':
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${body.slice(7)}&apikey=BotWeA`)
                client.sendMessage(from, anu.result, text, {quoted:mek})
                break
				case 'moddroid':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (!isPrem) return reply(ind.premon(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'happymod':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (!isPrem) return reply(ind.premon(pushname))
				if (isLimit(sender)) return reply(ind.limitend(pusname))
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nama*: ${data.result[0].title}\n*version*: ${hupo.version}\n*size:* ${hupo.size}\n*root*: ${hupo.root}\n*purchase*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
           case 'afk':
                    alasan = args.join(" ")
                    afk[sender.split('@')[0]] = alasan.toLowerCase()
                    fs.writeFileSync("./database/group/afk.json", JSON.stringify(afk))
                    ini_txt = "*AFK ACTIVE*\n"
                    if (alasan != "") {
                        ini_txt += "*ALASAN* :" + alasan
                    }
                    reply(ini_txt)
                    break
/ANGTIDEMLETE BY AQUA
	   case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./maniksrc/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./maniksrc/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./maniksrc/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return client.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'on') {
					if (isGroup) {
						if (isRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./maniksrc/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `Succes Enable Antidelete Grup!`, MessageType.text)
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan ${prefix}antidelete ctaktif`, MessageType.text)
					}
				} else if (argz[1] == 'cton') {
					if (!isGroup) {
						if (isCtRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./maniksrc/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan ${prefix}antidelete aktif`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return client.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return client.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./maniksrc/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					client.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'off') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./maniksrc/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						client.sendMessage(from, `Succes disable Antidelete Grup!`, MessageType.text)
					} else if (!isGroup) {
						client.sendMessage(from, `Untuk kontak penggunaan ${prefix}antidelete ctmati`, MessageType.text)
					}
				} else if (argz[1] == 'ctoff') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./maniksrc/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						client.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						client.sendMessage(from, `Untuk grup penggunaan ${prefix}antidelete mati`, MessageType.text)
					}
				}
				break
	   case 'bitly':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${args[0]}&apikey=BotWeA`)
                hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
                reply(hasil)
                await limitAdd(sender)
                break
				case 'register':
                if (isRegistered) return  reply(ind.rediregis())
                if (!q.includes('|')) return  reply(ind.wrongf())
                const namaUser = q.substring(0, q.indexOf('|') - 0)
                const umurUser = q.substring(q.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                if(isNaN(umurUser)) return await reply('Wrong Format')
                if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    checkLimit(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
				break
				//terhambar 
				case 'quotemaker':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
	        if (isLimit(sender)) return reply(ind.limitend(pusname))
                var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					const pref = `Usage: \n${prefix}quotemaker teks|watermark\n\nEx :\n${prefix}quotemaker ini contoh|bicit`
					if (args.length < 1) return reply(pref)
					reply(ind.wait())
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=random`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih anjim', quoted: mek})
					await limitAdd(sender)
					break
		        case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())    
			if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Minato Aqua Bot`)
                    txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/${command}?apikey=rafly04&text=${txt}`)
                    client.sendMessage(from, ini_buffer, sticker, { quoted: mek })
                    break
                case 'amongus':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} LoL Human`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/amongus?apikey=rafly04&text=${txt}`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'ytcomment':
                if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(ind.baned())
					if (!isGroup) return reply(ind.groupo())
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
               	 kk2 = txt.split("|")[1];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ytcomment?apikey=rafly04&username=${kk1}&comment=${kk2}&img=https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'doge':
					if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isRegistered) return reply(ind.noregis())
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
               	 kk2 = txt.split("|")[1];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/memegen?apikey=rafly04&texttop=${kk1}&textbottom=${kk2}&img=https://i1.sndcdn.com/avatars-000555463059-k1fr1e-t500x500.jpg`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'gugel':
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(ind.baned())
					if (!isRegistered) return reply(ind.noregis())
                    txt = args.join(" ")
                    kk1 = txt.split("|")[0];
               	 kk2 = txt.split("|")[1];
                    kk3 = txt.split("|")[2];
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/gsuggest?apikey=rafly04&text1=${kk1}&text2=${kk2}&text3=${kk3}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'gantengcek':
          if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(ind.baned())
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					client.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang '+ganteng+'\n\nJawaban : '+ teng +'', text, { quoted: mek })
					await limitAdd(sender)
					break
                case 'ewe':
          if (!isRegistered) return reply( ind.noregis())
	if (isBanned) return reply(ind.baned())
ganteng = body.slice(5)
					const ew =['TOBAT KAWAN, INGAT, JANGAN MERUSAK GENERASI GENERASI BANGSA YANG BUKAN JODOH ANDA, KASIHAN YANG JODOH DIA, EHH DAH DI REVIEW AMA ORANG LAIN']
					const we = ew[Math.floor(Math.random() * ew.length)]
					client.sendMessage(from, ''+ganteng+''+ we +'', text, { quoted: mek })
					break
      case 'cantikcek':
          if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isBanned) return reply(ind.baned())
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
					const tik = can[Math.floor(Math.random() * can.length)]
					client.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak '+cantik+'\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					await limitAdd(sender)
					break               
		case 'tolol':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())    
			if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} Asep`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/toloserti?apikey=rafly04&name=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
				case 'pinterest':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())    
			if (args.length == 0) return reply(`boo:v`)
                    query = args.join(" ")
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=rafly04&query=${query}`)
                    ini_url = ini_url.result
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                 case 'googleimage':
                 case 'googleimg':
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())   
			 if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} sagiri`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=rafly04&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        client.sendMessage(from, ini_buffer, image, {quoted: mek })
                    }
                    break
				case 'pinterestdl':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())    
			ini_url = args[0]
                    ini_url = await fetchJson(`http://lolhuman.herokuapp.com/api/pinterestdl?apikey=rafly04&url=${ini_url}`)
                    ini_url = ini_url.result["736x"]
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'pixiv':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isRegistered) return reply(ind.noregis())
                if (!isPrem) return reply(ind.premon(pushname))
                if (isBanned) return reply(ind.baned())    
			if (args.length == 0) return reply(`boo:v`)
                    query = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/pixiv?apikey=rafly04&query=${query}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
					case 'infonomor':
					if (!isRegistered) return reply(ind.noregis())
					if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
                data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
                if (data.error) return reply(data.error)
                if (data.result) return reply(data.result)
                hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
                reply(hasil)
                await limitAdd(sender)
				break 
				case 'beritahoax':
                     if (!isRegistered) return reply(ind.noregis())
                     if (isLimit(sender)) return reply(ind.limitend(pusname))
                     if (isBanned) return reply(ind.baned())
			client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Gambar* : ${i.image}\n*Title* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
				case 'tomp3':
				case 'toaudio':
                	client.updatePresence(from, Presence.composing) 
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
		    if (!isQuotedVideo) return reply('❌ reply the video ❌')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ failed ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				case 'igdl':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply(ind.noregis())
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/instagram?apikey=rafly04&url=${ini_url}`)
                    ini_url = ini_url.result
                    ini_type = image
                    if (ini_url.includes(".mp4")) ini_type = video
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, ini_type, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'fbdl':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ini_url = args[0]
                    ini_url = await fetchJson(`http://api.lolhuman.xyz/api/facebook?apikey=rafly04&url=${ini_url}`)
                    ini_url = ini_url.result[0].link
                    buffer = await getBuffer(ini_url)
                    client.sendMessage(from, buffer, video, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'tiktokdl':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
		ini_url = args[0]
                    ini_url = `http://api.lolhuman.xyz/api/tiktok?apikey=rafly04&url=${ini_url}`
                    get_result = await fetchJson(ini_url)
                    buffer = await getBuffer(get_result.result.link)
                    client.sendMessage(from, buffer, video, { quoted: mek })
                    break
				case 'ytmp4':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytvideo?apikey=rafly04&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `*_Please Wait ..._*`
                    buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    await limitAdd(sender)
                    break
                case 'ytsearch':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())    
			if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Aqua exe`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=rafly04&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x in get_result) {
                        ini_txt += `Title : ${get_result[x].title}\n`
                        ini_txt += `Views : ${get_result[x].views}\n`
                        ini_txt += `Published : ${get_result[x].published}\n`
                        ini_txt += `Thumbnail : ${get_result[x].thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${get_result[x].videoId}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'tiktokdl':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())		
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ini_link = args[0]
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/tiktokwm?apikey=rafly04&url=${ini_link}`)
                    get_result = get_result.result
                    txt += `*_Mohon tunggu beberapa saat_*`
                    buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[0].link)
                    client.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: mek })
                    await limitAdd(sender)
                    break
				case 'ytmp3':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    ini_link = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytaudio?apikey=rafly04&url=${ini_link}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Uploader : ${get_result.uploader}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.view}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `*_Please Wait..._*`
                    buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}-MinatoAquaBot.mp3`, quoted: mek })
                    await limitAdd(sender)
				break
				case 'resepmasakan':
					if (!isRegistered) return reply(ind.noregis())
                   anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep?key=${body.slice(14)}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.thumb_item)
                   hasil = `*title* \n ${anu.title} *item_name* \n ${anu.item_name} *ingredient* \n${anu.ingredient} *step* \n${anu.step}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: hasil})
                   await limitAdd(sender)
					break 
				case 'ssweb':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned()) 
			ini_link = args[0]
                 buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/ssweb?apikey=rafly04&url=${ini_link}`)
                 client.sendMessage(from, buffer, image, {quoted: mek })
                 await limitAdd(sender)
                 break
				case 'map':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
               	 anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
               	 buffer = await getBuffer(anu.gambar)
              	  client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
				break
                case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
				break
                case 'artinama':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (isBanned) return reply(ind.baned())			
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					await limitAdd(sender)
				break
				//auto respond 
				case 'ping':
          		if (!isRegistered) return reply(ind.noregis())
           		 await client.sendMessage(from, `Pong!!!!\nSpeed: ${processTime(time, moment())} _Second_`)
					break
			   case 'runtime':
				uptime = process.uptime()
				teks = `*RUNTIME* : \n${kyun(uptime)}`
				client.sendMessage(from, teks, {quoted: mek})
				break
               case 'help': 
			   case 'menu':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())

		uptime = process.uptime()
			        buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/waifu?apikey=rafly04`)
				    const reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
				    const uangku = checkATMuser(sender)
				    client.sendMessage(from, buffer, image, {quoted: mek, caption: ind.menu(pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi, client, process), text, tescuk, cr})
                                    break
				case 'info':
					if (isBanned) return reply(ind.baned())
					me = client.user
					uptime = process.uptime()
					teks = `*Name* : ${me.name}\n*User* : ${_registered.length}\n*Developer* : Rafly\n*Number* : ${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Block Contact* : ${blocked.length}\n*Runtime* : \n${kyun(uptime)}\n\n*Thanks To* : \n-Rafly(dev)\n-adiwajshing(baileys)\n-lolhuman(api)`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist': 
					teks = '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧 :\n'
					for (let block of blocked) {
						teks += `┣➢ @${block.split('@')[0]}\n`
					}
					teks += `𝗧𝗼𝘁𝗮𝗹 : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'donasi':
				case 'donate':
					client.sendMessage(from, donasi(), text, { quoted: mek, cr })
					break
				case 'ownermenu':
				if (!isOwner) return reply(ind.ownerg()) 
				    client.sendMessage(from, owmenu(), text, {quoted: mek, cr})
					break
				case 'vipmenu':
				if (!isPrem) return reply(ind.premon(pushname))
					client.sendMessage(from, adminmenu(), text, { quoted: mek, cr })
					break
				case 'gamenu':
				if (!isGroup) return reply(ind.groupo())
				if (!isRegistered) return reply( ind.noregis())
					client.sendMessage(from, gamenu(), text, { quoted: mek, cr })
					break
				case 'adminmenu':
                                if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return reply(ind.groupo())
					client.sendMessage(from, grupmenu(), text, { quoted: mek, cr })
					break
				case 'maker':
                                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())	
					client.sendMessage(from, makermenu(), text, { quoted: mek, cr })
					break
				case 'downloader':
                                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())	
					client.sendMessage(from, downmenu(), text, {quoted: mek })
					break
				case 'media':
                                if (!isRegistered) return reply(ind.noregis())
                                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())	
					client.sendMessage(from, mediamenu(), text, { quoted: mek, cr })
					break
				case 'animanga':
                                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())	
					client.sendMessage(from, animenu(), text, {quoted: mek })
					break
				case 'nsfwmenu':
                                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())    
					if (!isNsfw) return reply(ind.nsfwoff())
					client.sendMessage(from, nsfwmenu(), text, { quoted: mek, cr })
					break
				case 'listcode':
				if (!isNsfw) return reply(ind.nsfwoff())
				if (isBanned) return reply(ind.baned())
				const msgw = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/sideoppai?apikey=rafly04`);
                client.sendMessage(from, msgw, image, { quoted: mek, caption: ncode(), text, cr})
					break
				case 'funmenu':
                                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())	
					client.sendMessage(from, funmenu(), text, { quoted: mek, cr })
					break
				case 'magicshell':
                                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())	
					client.sendMessage(from, kerangmenu(), text, { quoted: mek, cr })
					break
				case 'update':
                                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())	
					client.sendMessage(from, update(), text, { quoted: mek, cr })
					break
				case 'join':
				if (isGroup) return  reply( 'personal chat only')
				if (!isPrem) return reply(ind.premon(pushname))
					client.sendMessage(from, join(), text, { quoted: mek, cr })
					break
         	   case 'owner':
                   case 'creator':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, '*Itu Owner gw🐦, kalo gk ada urusan penting jangan chat njeng* lu ngerti gk bgst?',MessageType.text, { quoted: mek} )
					break    
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(ind.noregis())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 30; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                    }
                    await reply(leaderboardlvl)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 30 user untuk bisa mengakses database`)
                }
				break
				case 'limit':
				if (isBanned) return reply(ind.baned())  
				   checkLimit(sender)
                                   break
				case 'giftlimit': 
				if (!isOwner,!isPrem) return reply(ind.premon(pushname))
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`minimum is 1`)
                if (jmla >= 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999) return reply(`max 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999`)
                if (isNaN(jmla)) return reply(`wrong format`)
                if (!nomerr) return reply(`ex : \n${prefix}giftlimit @tag 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `succes with SN: ${createSerial(8)} to number ${moment().format('DD/MM/YY HH:mm:ss')}
*「 GIFT KUOTA LIMIT 」*

• User : @${updated.id.replace('@s.whatsapp.net','')}
• Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`${nomerr} not registered`)
                        }
                break
				case 'premlist':
	            case 'listprem':
	                if (!isRegistered) return reply( ind.noregis())
	                let listPremi = '「 *PREMIUM USER LIST* 」\n\n'
	                let nomorList = 0
	                const deret = getAllPremiumUser()
	                const arrayPremi = []
	                for (let i = 0; i < deret.length; i++) {
	                    const checkExp = ms(getPremiumExpired(deret[i]) - Date.now())
	                    arrayPremi.push(getAllPremiumUser()[i])
	                    nomorList++
	                    listPremi += `${nomorList}. wa.me/${getAllPremiumUser()[i].split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
	                }
	                await reply(listPremi)
	            break
	            case 'husbu':
	           if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())    
					ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/husbu?apikey=rafly04`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
					await limitAdd(sender)
					break
                case 'randomnime':
                if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return reply(ind.groupo())
                                 buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/wallnime?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
					await limitAdd(sender)
					break
					case 'loli':
					if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (isBanned) return reply(ind.baned())		
		if (!isGroup) return reply(ind.groupo())
                reply(ind.wait())
                buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=rafly04`)
                client.sendMessage(from, buffer, image, { quoted: mek })
                await limitAdd(sender)
                break
					case 'blowjob':
                if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isNsfw) return reply(ind.nsfwoff())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=rafly04`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                    case 'randomhentai':
                if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'nsfwtrap':
                if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/trap?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'yuri':
                if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (!isGroup) return reply(ind.groupo())
                if (isBanned) return reply(ind.baned())
		if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/${command}?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                 case 'ahegao':
                 if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
		if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'hololewd':
                if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
		if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'sideoppai':
                if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
		if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'nsfwloli':
                if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/random/nsfw/chiisaihentai?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'futanari':
                if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
		if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                 case 'elf':
                 if (!isRegistered) return reply( ind.noregis())
                 if (isLimit(sender)) return reply(ind.limitend(pusname))                                                                                               
                 if (isBanned) return reply(ind.baned())
		 if (!isGroup) return reply(ind.groupo())
                      buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=rafly04`)
                      client.sendMessage(from, buffer, image, { quoted: mek })
                      await limitAdd(sender)
                      break
                case 'fanart':
                if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply(ind.baned()) 
		if (isLimit(sender)) return reply(ind.limitend(pusname))                                                                                               
                 if (!isGroup) return reply(ind.groupo())
                      buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/art?apikey=rafly04`)
                      client.sendMessage(from, buffer, image, { quoted: mek })
                      await limitAdd(sender)
                      break
                case 'fox':
                if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply(ind.baned()) 
		if (isLimit(sender)) return reply(ind.limitend(pusname))                                                                                               
                 if (!isGroup) return reply(ind.groupo())
                      buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/fox_girl?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                      await limitAdd(sender)
                      break
                case 'shota':
                if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply(ind.baned()) 
		if (isLimit(sender)) return reply(ind.limitend(pusname))                                                                                               
                 if (!isGroup) return reply(ind.groupo())
                     buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=rafly04`)
                      client.sendMessage(from, buffer, image, { quoted: mek })
                      await limitAdd(sender)
                      break
                case 'sagiri':
                case 'shinobu':
                case 'megumin':
                if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))                                                                                               
                if (!isGroup) return reply(ind.groupo())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/${command}?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'kemonomimi':
                if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))                                                                                               
                if (!isGroup) return reply(ind.groupo())
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/random2/kemonomimi?apikey=fe210ef8c6cdf3c6006ee1db`)
                client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'feets':
                if (!isRegistered) return reply( ind.noregis())
                 if (isLimit(sender)) return reply(ind.limitend(pusname))                                                                                               
                if (isBanned) return reply(ind.baned()) 
		if (!isGroup) return reply(ind.groupo())
                 if (!isNsfw) return reply(ind.nsfwoff())
                      buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/animefeets?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                      await limitAdd(sender)
                      break
                case 'booty':
                if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply(ind.baned()) 
		if (isLimit(sender)) return reply(ind.limitend(pusname))                                                                                               
                 if (!isGroup) return reply(ind.groupo())
                 if (!isNsfw) return reply(ind.nsfwoff())
                      buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption })
                      await limitAdd(sender)
                      break
                case 'neko':
                 if (!isRegistered) return reply( ind.noregis())
                 if (isBanned) return reply(ind.baned())
		 if (isLimit(sender)) return reply(ind.limitend(pusname))                                                                                               
                 if (!isGroup) return reply(ind.groupo())
                  buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/neko?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                      await limitAdd(sender)
                      break
                case 'waifu':
                 data = await fetchJson('https://waifu.pics/api/sfw/waifu')
                 if (!isRegistered) return reply( ind.noregis())
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
                 if (!isGroup) return reply(ind.groupo())
                 if (isBanned) return reply(ind.baned())
			buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/waifu?apikey=rafly04`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                      await limitAdd(sender)
                      break
				case 'nsfwneko':
				    try{
			    if (isLimit(sender)) return reply(ind.limitend(pusname))
			    if (isBanned) return reply(ind.baned())
				if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=BotWeA`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek })
                                                await limitAdd(sender)
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
				case 'nhentai':
				if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned()) 
				 if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaisearch?apikey=rafly04&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Code : ${get_result[x].id}\n`
                        txt += `Name : ${get_result[x].title_english}\n`
                        txt += `名前 : ${get_result[x].title_japanese}\n`
                        txt += `Title Native : ${get_result[x].title_native}\n`
                        txt += `Date Upload : ${get_result[x].date_upload}\n`
                        txt += `Page : ${get_result[x].page}\n`
                        txt += `Favourite : ${get_result[x].favourite}\n\n*_MinatoAqua-BOT-NHENTAI-SEARCH_*\n\n`
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
				  if (!isGroup) return reply(ind.groupo())
				 if (!isNsfw) return reply(ind.nsfwoff())
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=rafly04`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'ncode':
                if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                if (isBanned) return reply(ind.baned())
		if (!isNsfw) return reply(ind.nsfwoff())
                    henid = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=rafly04`)
                    get_result = get_result.result
                    buffer = await getBuffer(get_result)
                    client.sendMessage(from, buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}-MinatoAquaBot.pdf` })
                    await limitAdd(sender)
                    break
                 case 'nekopoi':
                 if (!isRegistered) return reply( ind.noregis())
                 if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                                  if (!isGroup) return reply(ind.groupo())
                                 if (!isNsfw) return reply(ind.nsfwoff())
                     if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/nekopoi?apikey=rafly04&url=${ini_url}`)
                    get_result = get_result.result
                    console.log(get_result)
                    txt = `Title : ${get_result.anime}\n`
                    txt += `Porducers : ${get_result.producers}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Size : ${get_result.size}\n`
                    txt += `Sinopsis : ${get_result.sinopsis}\n`
                    link = get_result.link
                    for (var x in link) {
                        txt += `\n${link[x].name}\n`
                        link_dl = link[x].link
                        for (var y in link_dl) {
                            txt += `${y} - ${link_dl[y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumb)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    break
                    case 'doudesu':
                    if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                                  if (!isGroup) return reply(ind.groupo())
                                 if (!isNsfw) return reply(ind.nsfwoff())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/doujindesu?apikey=rafly04&url=${query}`)
                    get_result = get_result.result
                    txt  = `Judul : ${get_result.title}\n`
                    txt += `Link Download PDF : ${get_result.link_dl}\n`
                    reply(txt)
                    await limitAdd(sender)
                    break
                case 'nekopoisearch':
                if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
				if (!isNsfw) return reply(ind.nsfwoff())
                query = args.join(" ")
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/nekopoisearch?apikey=rafly04&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnail}\n\n`
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break
                  case 'kaisarkomik':
                  if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
				get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/kaisarongoing?apikey=rafly04`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Type : ${get_result[x].type}\n`
                        txt += `Chapter : ${get_result[x].chapter}\n`
                        txt += `Rating : ${get_result[x].rating}\n`
                        txt += `Link : https://kaisarkomik.com/manga/${get_result[x].title}/\n\n*_https://kaisarkomik.com/_*\n\n`
                        }
                   reply(txt)
                    await limitAdd(sender)
                    break
                 case 'refreshment':
                 if (!isRegistered) return reply( ind.noregis())
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=rafly04`)
                    buffer = await getBuffer(get_result.result)
                    client.sendMessage(from, buffer, video, { quoted: mek, mimetype: Mimetype.mp4, filename: "refreshment.mp4" })
                    await limitAdd(sender)
                    break
                case 'xnxx':
                if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (isBanned) return reply(ind.baned())		
		if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} + link xnxx`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxx?apikey=rafly04&url=${query}`)
                    get_result = get_result.result
                    txt = ""
                    txt += `Title : ${get_result.title}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `View : ${get_result.title}\n`
                    txt += `Rating : ${get_result.rating}\n`
                    txt += `Like : ${get_result.like}\n`
                    txt += `Dislike : ${get_result.dislike}\n`
                    txt += `Comment : ${get_result.comment}\n`
                    txt += `Tag : ${get_result.tag.join(", ")}\n`
                    txt += `Description : ${get_result.description}\n`
                    txt += "Link : \n"
                    link = get_result.link
                    for (var x in link) {
                        txt += `${link[x].type} - ${link[x].link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
                case 'xnxxsearch':
                if (!isRegistered) return reply( ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (isBanned) return reply(ind.baned())		
		if (!isGroup) return reply(ind.groupo())
                if (!isNsfw) return reply(ind.nsfwoff())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/xnxxsearch?apikey=rafly04&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Views : ${get_result[x].views}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Uploader : ${get_result[x].uploader}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Thumbnail : ${get_result[x].thumbnail}\n\n`
                    }
                    reply(txt)
                    await limitAdd(sender)
                    break
                case 'spamsms':
                if (!isPrem) return reply(ind.premon(pushname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=rafly04&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=rafly04&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=rafly04&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=rafly04&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=rafly04&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=rafly04&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=rafly04&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=rafly04&nomor=${nomor}`)
                    reply("Success")
                    break
                  case 'spamcall':
                   if (!isPrem) return reply(ind.premon(pushname))
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 82171xxx`)
                    nomor = args[0]
                 await fetchJson(`https://videfikri.com/api/call/?nohp=${nomor}`)
                 reply("Success")
                    break
                case 'ytplay':
                if (!isPrem) return reply(ind.premon(pushname))
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytplay?apikey=rafly04&query=${query}`)
                    get_result = get_result.result
                    get_info = get_result.info
                    ini_txt = `Title : ${get_info.title}\n`
                    ini_txt += `Uploader : ${get_info.uploader}\n`
                    ini_txt += `Duration : ${get_info.duration}\n`
                    ini_txt += `View : ${get_info.view}\n`
                    ini_txt += `Like : ${get_info.like}\n`
                    ini_txt += `Dislike : ${get_info.dislike}\n`
                    ini_txt += `Description :\n ${get_info.description}\n`
                    ini_buffer = await getBuffer(get_info.thumbnail)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_info.title}.mp3`, quoted: mek })
                    get_video = await getBuffer(get_result.video[0].link)
                    client.sendMessage(from, get_video, video, { mimetype: 'video/mp4', filename: `${get_info.title}.mp4`, quoted: mek })
                    break
                    case 'spotify':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())    
		url = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotify?apikey=rafly04&url=${url}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Artists : ${get_result.artists}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Popularity : ${get_result.popularity}\n`
                    txt += `Preview : ${get_result.preview_url}\n`
                    thumbnail = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: txt })
                    get_audio = await getBuffer(get_result.link[3].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.title}.mp3`, quoted: mek })
                    await limitAdd(sender)
                    break
                case 'spotifysearch':
                    if (isBanned) return reply(ind.baned())
		    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/spotifysearch?apikey=rafly04&query=${query}`)
                    get_result = get_result.result
                    txt = ""
                    for (var x in get_result) {
                        txt += `Title : ${get_result[x].title}\n`
                        txt += `Artists : ${get_result[x].artists}\n`
                        txt += `Duration : ${get_result[x].duration}\n`
                        txt += `Link : ${get_result[x].link}\n`
                        txt += `Preview : ${get_result[x].preview_url}\n\n\n`
                    }
                    reply(txt)
                    break
          case 'animesearch':
              if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (isBanned) return reply(ind.baned())	  
		if (!isGroup) return reply(ind.groupo())
                    query = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/anime?apikey=rafly04&query=${query}`)
                    get_result = get_result.result
                    get_title = get_result.title
                    get_coverImage = get_result.coverImage
                    txt = `ID : ${get_result.id}\n`
                    txt += `IDMAL : ${get_result.idMal}\n`
                    txt += `Romaji : ${get_title.romaji}\n`
                    txt += `English : ${get_title.english}\n`
                    txt += `Native : ${get_title.native}\n`
                    txt += `Format : ${get_result.format}\n`
                    txt += `Episodes :\n ${get_result.episodes}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Status :\n ${get_result.status}\n`
                    txt += `Season : ${get_result.season}\n`
                    txt += `Season Year :\n ${get_result.seasonYear}\n`
                    txt += `Source : ${get_result.source}\n`
                    txt += `Genre :\n ${get_result.genres}\n`
                    txt += `Start Date : ${get_result.startDate}\n`
                    txt += `End Date :\n ${get_result.endDate}\n`
                    txt += `Average Score : ${get_result.averageScore}\n`
                    txt += `Description :\n ${get_result.description}\n`
                    txt += `Synonims : ${get_result.synonyms}\n`
                    buffer = await getBuffer(get_coverImage.large)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
                     case 'joox':
                    if (isBanned) return reply(ind.baned())
		    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/jooxplay?apikey=rafly04&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.info.song}\n`
                    ini_txt += `Artists : ${get_result.info.singer}\n`
                    ini_txt += `Duration : ${get_result.info.duration}\n`
                    ini_txt += `Album : ${get_result.info.album}\n`
                    ini_txt += `Uploaded : ${get_result.info.date}\n`
                    ini_txt += `Lirik :\n ${get_result.lirik}\n`
                    thumbnail = await getBuffer(get_result.image)
                    client.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
                    get_audio = await getBuffer(get_result.audio[0].link)
                    client.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${get_result.info.song}.mp3`, quoted: mek })
                    break
           case 'manga':
              if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (isBanned) return reply(ind.baned())	  
		if (!isGroup) return reply(ind.groupo())
                    query = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/manga?apikey=rafly04&query=${query}`)
                    get_result = get_result.result
                    get_title = get_result.title
                    get_coverImage = get_result.coverImage
                    txt = `ID : ${get_result.id}\n`
                    txt += `IDMAL : ${get_result.idMal}\n`
                    txt += `Romaji : ${get_title.romaji}\n`
                    txt += `English : ${get_title.english}\n`
                    txt += `Native : ${get_title.native}\n`
                    txt += `Format : ${get_result.format}\n`
                    txt += `Chapters :\n ${get_result.chapters}\n`
                    txt += `Volume : ${get_result.volumes}\n`
                    txt += `Status :\n ${get_result.status}\n`
                    txt += `Source : ${get_result.source}\n`
                    txt += `Genre :\n ${get_result.genres}\n`
                    txt += `Start Date : ${get_result.startDate}\n`
                    txt += `End Date :\n ${get_result.endDate}\n`
                    txt += `Average Score : ${get_result.averageScore}\n`
                    txt += `Description :\n ${get_result.description}\n`
                    txt += `Synonims : ${get_result.synonyms}\n`
                    buffer = await getBuffer(get_coverImage.large)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
              case 'chara':
              if (isLimit(sender)) return reply(ind.limitend(pusname))
		if (isBanned) return reply(ind.baned())	  
		if (!isGroup) return reply(ind.groupo())
                    query = args[0]
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/character?apikey=rafly04&query=${query}`)
                    get_result = get_result.result
                    get_name = get_result.name
                    get_image = get_result.image
                    txt = `ID : ${get_result.id}\n`
                    txt += `Name Full : ${get_name.full}\n`
                    txt += `Native : ${get_name.native}\n`
                    txt += `Favourites : ${get_result.favourites}\n`
                    txt += `Description :\n ${get_result.description}\n`
                    buffer = await getBuffer(get_image.large)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
                case 'kusonime':
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    if (isBanned) return reply(ind.baned())
		    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/kusonimesearch?apikey=rafly04&query=${query}`)
                    get_result = get_result.result
                    txt = `Title : ${get_result.title}\n`
                    txt += `Japanese : ${get_result.japanese}\n`
                    txt += `Genre : ${get_result.genre}\n`
                    txt += `Seasons : ${get_result.seasons}\n`
                    txt += `Producers : ${get_result.producers}\n`
                    txt += `Type : ${get_result.type}\n`
                    txt += `Status : ${get_result.status}\n`
                    txt += `Total Episode : ${get_result.total_episode}\n`
                    txt += `Score : ${get_result.score}\n`
                    txt += `Duration : ${get_result.duration}\n`
                    txt += `Released On : ${get_result.released_on}\n`
                    txt += `Desc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    buffer = await getBuffer(get_result.thumbnail)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: txt })
                    await limitAdd(sender)
                    break
                case 'tourl':
                    if ((isMedia && !mek.videoMessage || isQuotedImage) && args.length == 0) {
                        reply('wait :v')
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM","m")).message.extendedTextMessage.contextInfo : mek
                        const media = await client.downloadMediaMessage(encmedia, 'buffer')
                        const getUrl = await uploadImages(media, false)
                        sendMess(from, `${getUrl}`)
                    }
                    break
                case 'wait':
				case 'whatanime':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						if (isLimit(sender)) return reply(ind.limitend(pusname))
						if (isBanned) return reply(ind.baned())
						if (!isGroup) return reply(ind.groupo())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break
			    case 'play':
			if (isBanned) return reply(ind.baned())	
			if (isLimit(sender)) return reply(ind.limitend(pusname))
                data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=BotWeA`, {method: 'get'})
                if (data.error) return reply(data.error)
                 infomp3 = `*Lagu Ditemukan!!!*\nJudul : ${data.result.judul}\nAlbum : ${data.result.album}\nDipublikasi : ${data.result.dipublikasi}`
                buffer = await getBuffer(data.result.thumb)
                lagu = await getBuffer(data.result.mp3)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}-MinatoAquaBot.mp3`, quoted: mek})
                await limitAdd(sender)
                break
                case 'nulis':
                case 'tulis':
                case 'tulisin':
                case 'write':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
		if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/nulis?apikey=rafly04&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
				case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                case 'christmas':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
        			if (isBanned) return reply(ind.baned())      
		 if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=rafly04&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'flowerheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())    
			if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} LoL Human`)
                    txt = args.join(" ")
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=rafly04&text=${txt}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    await limitAdd(sender)
                    break
                  case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    	if (isBanned) return reply(ind.baned())
			if (args.length == 0) return reply(`Usage: ${prefix + command} text\nExample: ${prefix + command} MinatoAqua|bot`)
                     txt = args.join(" ")
                    kk1 = txt.split("|")[0];
               	 kk2 = txt.split("|")[1];
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=rafly04&text1=${kk1}&text2=${kk2}`)
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    break
                    case 'covidindo':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/indonesia?apikey=rafly04`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
                case 'covidglobal':
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/corona/global?apikey=rafly04`)
                    get_result = get_result.result
                    ini_txt = `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Dirawat : ${get_result.dirawat}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}`
                    reply(ini_txt)
                    break
				case 'mutual':
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                if (isBanned) return reply(ind.baned())
		anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case 'next':
                if (!isRegistered) return reply( ind.noregis())
                if (isBanned) return reply(ind.baned())
		if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
				case 'transfer':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('wrong format')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('62895710073737@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				case 'dompet':
				case 'money':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case 'buylimit':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('wrong format')
				const koinPerlimit = 300
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`your money is not enough`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 SUCCES 」*\n\n*sender* : Admin\n*receiver* : ${pushname}\n*payout* : ${payout} \n*price/limit* : ${koinPerlimit}/limit\n*ur money* : ${checkATMuser(sender)}\n\nsucces with SN\n${createSerial(15)}`)
				} 
				break
				case 'brainly':
					if (!isRegistered) return reply(ind.noregis())
					if (!isPrem) return reply(ind.premon(pushname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
				case 'bisakah':
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'kapankah':
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'apakah':
           if (isLimit(sender)) return reply(ind.limitend(pusname))
	   if (isBanned) return reply(ind.baned())
				apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'can':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					can = body.slice(1)
					const ca =['can','cant','try again']
					const n = ca[Math.floor(Math.random() * ca.length)]
					client.sendMessage(from, 'Question : *'+can+'*\n\nanswer : '+ n, text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'is':
           if (isLimit(sender)) return reply(ind.limitend(pusname))
					is = body.slice(1)
					const i =['yes','myes','maybe']
					const s = i[Math.floor(Math.random() * i.length)]
					client.sendMessage(from, 'Question : *'+is+'*\n\nanswer : '+ s, text, { quoted: mek })
					await limitAdd(sender)
					break
                                case 'when':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					when = body.slice(1)
					const wh =['tomorrow','next week','2days later','3days later','4days later','will never happen','2weeks later','3weeks later','4weeks later','next year','2years later','10years later','100years later','1000years later']
					const en = wh[Math.floor(Math.random() * wh.length)]
					client.sendMessage(from, 'Question : *'+when+'*\n\nanswer : '+ en, text, { quoted: mek })
					await limitAdd(sender)
					break  
				case 'rate':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					client.sendMessage(from, 'Question : *'+rate+'*\n\nanswer : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
				case 'truth':
                if (!isRegistered) return reply(ind.noregis())
                if (isBanned) return reply(ind.baned())
		if (isLimit(sender)) return reply(ind.limitend(pusname))
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender)
					break
				case 'dare':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break	
                			case 'esticker':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                		if (isBanned) return reply(ind.baned())
		    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                        emoji = encodeURI(emoji[0])
                    } catch {
                        emoji = encodeURI(emoji)
                    }
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=rafly04`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek })
                    await limitAdd(sender)
                    break
				case 'darkjokes':
               		if (isBanned) return reply(ind.baned())
			 if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return reply(ind.groupo())
                reply(ind.wait())
                buffer = await getBuffer(`https://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=rafly04`)
                client.sendMessage(from, buffer, image, { quoted: mek, caption: '*:v*' })
                await limitAdd(sender)
                break
				case 'quotes':
				if (isBanned) return reply(ind.baned())	
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    quotes = await fetchJson(`http://api.lolhuman.xyz/api/random/quotes?apikey=rafly04`)
                    quotes = quotes.result
                    author = quotes.by
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n*― ${owner}*`)
					await limitAdd(sender)
					break
				case 'fakta':
				if (isBanned) return reply(ind.baned())	
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    fakta = await fetchJson(`https://lolhuman.herokuapp.com/api/random/faktaunik?apikey=rafly04`)
                    fakta = fakta.result
                    reply(`TAHUKAH ANDA BAHWA....\n\n*_${fakta}_*`)
					await limitAdd(sender)
					break
				case 'katabijak':
					if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    katabijak = await fetchJson(`https://lolhuman.herokuapp.com/api/random/katabijak?apikey=rafly04`)
                    katabijak = katabijak.result
                    reply(`*_${katabijak}_*\n\n-Rafly`)
					await limitAdd(sender)
					break
				case 'cerpen':
					if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    cerpen = await fetchJson(`https://lolhuman.herokuapp.com/api/cerpen?apikey=rafly04`)
                    cerpen = cerpen.result
                    title = cerpen.title
                    creator = cerpen.creator
                    reply(`*Judul : ${title}*\n*Creator : ${creator}*\n*Cerpen* : \n\n${cerpen}`)
					await limitAdd(sender)
					break
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('𝗸𝗶𝗿𝗶𝗺 𝗳𝗼𝘁𝗼 𝗱𝗲𝗻??𝗮?? 𝗰𝗲𝗽𝘁𝗶𝗼𝗻 ${prefix}??𝗰𝗿')
					}
					await limitAdd(sender)
				break
				case 's': 
				case 'stiker':
				case 'sticker':
				case 'stc':
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				await limitAdd(sender)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`error`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
									//if (error) {
											// reply(ind.stikga())
											// fs.unlinkSync(media)	
											// fs.unlinkSync(ran)
											// }
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`send picture or video/gif(max10s) with caption/reply $sticker`)
					}
					break
			    case 'stickerwm':
			    case 'stcwm':
			    case 'swm':
			    if (!isPrem) return reply(ind.premon(pushname))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        ini_txt = args.join(" ").split("|")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=rafly04`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": ini_txt[0],
                                "author": ini_txt[1]
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            client.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`send picture with caption ${prefix}stickerwm+wm`)
                    }
                    break
				case 'tts':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return client.sendMessage(from, 'Diperlukan kode bahasa gblk, kalo lu gk tau kode bahasa buang aja hp lu anak anjeng!!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'Textnya mana tolol', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply('Gagal om:(')
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender)
				break
				case 'simi':
					if (args.length < 1) return reply('Textnya mana um?')
					teks = body.slice(5)
					anu = await simih(teks) 
					reply(anu)
				break 
				case 'toimg':
				case 'img':
				case 'image':
				if (isBanned) return reply(ind.baned())
				if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: ' *INI ANJENG YG LU MINTA CONVERT STICKER*'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
				break 
				//group feature 
				case 'hidetag':
                if (!isPrem) return reply(ind.premon(pushname))
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isGroup) return reply(ind.groupo())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break
				case 'add':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
				case 'oadd':
					if (!isGroup) return reply(ind.groupo())
					if (!isPrem) return reply(ind.premon(pushname))
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
				break 
				case 'profile':
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                try {
					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `┏❉ *PROFILE* \n┣⊱ Role : ${role}\n┣⊱ Number : ${sender.split("@")[0]}\n┣⊱ User XP :  \n┣⊱ ${userXp}/${requiredXp}\n┣⊱ User Level : ${userLevel}\n┗⊱  ⸨ *By Minato Aqua Bot®* ⸩ `
                client.sendMessage(from, ppimg, image, {quoted: mek, caption: resul})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
				break
				case 'mining':
                         if (isBanned) return reply(ind.baned())
			if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner, jdi elu ngerti gk borrr`)
                      if (isOwner) {
                      const one = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                      }else{
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'ngelonte':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`${pushname} cihh anak haram ingin jdi lonte :v`)
                      if (isOwner) {
                      const one = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                      }else{
                      const ngelonte = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, ngelonte)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${ngelonte}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'nguli':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (isBanned) return reply(ind.baned())
			if (!isEventon) return reply(`maaf ${pushname} event nguli tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                      }else{
                      const nguli = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, nguli)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${nguli}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'maling':
                      if (!isRegistered) return reply(ind.noregis())
                      if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event maling tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                      }else{
                      const maling = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, maling)
                      await reply(`*selamat* ${pushname} kamu mendapatkan *${maling}Xp*`)
                      }
                    await limitAdd(sender)
					break
				case 'grup':
				case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'open') {
					    reply(`the group has been opened by ${pushname}`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'close') {
						reply(`the group has beed closed by *${pushname}*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
				break      
				case 'setname':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateSubject(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
                client.groupUpdateDescription(from, `${body.slice(9)}`)
                client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
           case 'demote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`demoting positions @${mentioned[0].split('@')[0]} `, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
				case 'odemote':
					if (!isGroup) return reply(ind.groupo())
					if (!isPrem) return reply(ind.premon(pushname))
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*jabatan kamu di copot*🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`demoting positions @${mentioned[0].split('@')[0]} `, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'promote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 ????𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Done \n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Congratulation @${mentioned[0].split('@')[0]} you are now admin`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
                    	case 'opromote':
					if (!isGroup) return reply(ind.groupo())
					if (!isPrem) return reply(ind.premon(pushname))
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Done\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Congratulation @${mentioned[0].split('@')[0]} you are now admin`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
			     	case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Sayonara njeng kurang beban group lagi 1 njeng\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Sayonara njeng... akhirnya kurang lagi 1 beban group njeng menyusahkan gw aja cihhh @${mentioned[0].split('@')[0]} `, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'okick':
					if (!isGroup) return reply(ind.groupo())
					if (!isPrem) return reply(ind.premon(pushname))
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱?? 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `Sayonara njeng... akhirnya kurang lagi 1 beban group njeng menyusahkan gw aja cihhh\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Sayonara njeng... akhirnya kurang lagi 1 beban group njeng menyusahkan gw aja cihhh @${mentioned[0].split('@')[0]} `, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'listadmin':
					if (!isGroup) return reply(ind.groupo())
					teks = `𝗟𝗶𝘀𝘁 𝗮𝗱𝗺𝗶𝗻 𝗼𝗳 𝗴𝗿𝗼𝘂𝗽 *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'welcome':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('*choose* : \n\n$welcome enable\n$welcome disable')
					if (args[0] === 'enable') {
						if (isWelkom) return reply('*already active*')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*successfully activate welcome*')
					} else if (args[0] === 'disable') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('*successfully deactivate welcome*')
					} else {
						reply(ind.satukos())
					}
					break 
					case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('𝘀𝘂𝗱𝗮𝗵 𝗮𝗸𝘁𝗶𝗳 !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮??𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝘀𝗶𝗺𝗶 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️️')
					} else {
						reply(ind.satukos())
					}
					break
				case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('*choose* : \n\n$nsfw enable\n$nsfw disable')
					if (args[0] === 'enable') {
						if (isNsfw) return reply(' *already active*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('*Successfully activating NSFW gblk sange anying, please type /nsfwmenu*')
					} else if (args[0] === 'disable') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('*successfully deactivates NSFW*')
					} else {
						reply(ind.satukos())
					}
				break
                     case 'onsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('*pilih enable atau disable*')
					if (args[0] === 'enable') {
						if (isNsfw) return reply(' *already active*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('*Successfully activating NSFW, please type $nsfwmenu*')
					} else if (args[0] === 'disable') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('*successfully deactivates NSFW*')
					} else {
						reply(ind.satukos())
					}
				break
                case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('add enable or disable')
                if (args[0] === 'enable') {
                if (isLevelingOn) return reply('*already active*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === 'disable') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                 	    reply(ind.lvloff())
             	   } else {
                 	   reply(ind.satukos())
                	}
				break 
				case 'nobadword':
                    if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('add enable or disable')
                if (args[0] === 'enable') {
                if (isBadWord) return reply('*already active*')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   reply(`badword is enable`)
              	  } else if (args[0] === 'disable') {
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    reply(`badword is disable`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
				case 'linkgc':
                                case 'linkgroup':
                                case 'grouplink':
				    if (!isGroup) return reply(ind.groupo())
				    if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender)
					break
				case 'groupinfo':
                client.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			    buffer = await getBuffer(ppUrl)
		        client.sendMessage(from, buffer, image, {quoted: mek, caption: `*GROUP* : ${groupName}\n*MEMBER* : ${groupMembers.length}\n*ADMIN* : ${groupAdmins.length}\n\n ${groupDesc}`})
                break
				case 'tagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'otagall':
					if (!isGroup) return reply(ind.groupo())
					if (!isPrem) return reply(ind.premon(pushname))
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
				case 'reply':
                 if (isLimit(sender)) return reply(ind.limitend(pusname))
				 if (!isGroup) return reply(ind.groupo())
				 if (!isPrem) return reply(ind.premon(pushname))
                 if (args.length < 1) return reply(`Usage :\n${prefix}reply @tag|text|reply\n\nEx : \n${prefix}reply @tagmember|Im Gay|wtf`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("|")[0];
					var target = gh.split("|")[1];
					var bot = gh.split("|")[2];
					client.sendMessage(from, `${bot}`, text, {quoted: { mek: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break
				case 'delete':
				case 'del':
				case 'd':
				if (!isGroupAdmins) return reply(ind.admin())
				client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				break 
				case 'odelete':
				case 'odel':
				case 'od':
				if (!isGroup) return reply(ind.groupo())
				if (!isPrem) return reply(ind.premon(pushname))
				client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }) 
				break 
				case 'addbadword':
                    if (!isOwner) return reply(ind.ownerb())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isOwner) return reply(ind.ownerb())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `ListBadWord\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
                
                	
				//admin feature 
				case 'kickall':
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					client.groupRemove(from, members_id)
					break 
					case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
                    client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
				case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					break
			  	case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗴𝗮𝗸𝘁𝗶𝗳𝗸𝗮𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ 𝗠𝗲𝗻𝗼𝗻𝗮𝗸𝘁??𝗳𝗸??𝗻 EVENT 𝗱𝗶 𝗴𝗿𝗼𝘂𝗽 𝗶𝗻𝗶️*')
					} else {
						reply(ind.satukos())
					}
					break 
				case 'antilink':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.ownerg())
					if (args.length < 1) return reply('*add enable or disable*')
					if (args[0] === 'enable') {
						if (isEventon) return reply('already active')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ ACTIVATED ANTILINK*')
					} else if (args[0] === 'disable') {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('*❬ 𝗦𝗨𝗞𝗦𝗘𝗦 ❭ DEACTIVATED ANTILINK*')
					} else {
						reply(ind.satukos())
					}
					break
				case 'block':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir wa.me${body.slice(8)}@c.us`, text)
				break
				case 'unblock':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(ind.group())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `perintah Diterima, membuka blokir wa.me/${body.slice(10)}`, text)
				break 
				case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
				    client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Makasih profil barunya😗')
					break 
				case 'setpp': 
                        if (!isGroup) return reply(ind.groupo())
                       if (!isGroupAdmins) return reply(ind.admin())
                        if (!isBotGroupAdmins) return reply(ind.badmin())
                       media = await client.downloadAndSaveMediaMessage(mek)
                         await client.updateProfilePicture (from, media)
                        reply('SUCCESS CHANGE PROFILE GROUP')
					break				
				case 'leave': 
				if (!isGroup) return reply(ind.groupo())
				setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Sayonara👋', text) // ur cods
					}, 0)
                     break
				case 'oleave':
                    if (!isGroup) return reply(ind.groupo())
                    if (!isPrem) return reply(ind.premon(pushname))
                     setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
                     setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Sayonara👋', text) // ur cods
					}, 0)
                     break
				case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ *NOTICE MY SENPAI* ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 NOTICE MY SENPAI 」*\n\n${body.slice(4)}`)
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙??𝙖𝙨𝙩 ')
					}
					break
					case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
				break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
                    prefix = args[0]
                    reply(`Change Prefix To ${prefix} SUCCESS!`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('limit harus angka')
                    memberlimit = args[0]
                    reply(`Change Member limit To ${memberlimit} SUCCESS!`)
				break 
				case 'bcgc':
				     if (!isOwner) return reply(ind.ownerb())
					if (args.length < 1) return reply('.......')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
						}
						reply('Sukses broadcast group')
					}
					break 
				case 'addprem':
				if (!isOwner) return reply(ind.ownerb())
				expired = "30d"
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
				const pnom = {id: mente , expired: Date.now() + toMs(expired) }
				prem.push(pnom) 
				fs.writeFileSync('./database/user/prem.json',JSON.stringify(prem))
				reply(ind.premadd(args[0]))
				break
				case 'delprem':
				if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1 ) return reply(' tag member')
				mente = `${args[0].replace('@','')}@s.whatsapp.net`
 			   for( var j = 0; i < arr.length; j++){ 
 		       if ( arr[i] === mente) { 
    		      	  arr.splice(i, 1); 
      		   	  i--; 
      				fs.writeFileSync('./database/user/prem.json',JSON.stringify(arr))
       			 }
 			    }
				reply(ind.dellprem(args[0]))
				break 
				case 'eval':
				if (!isOwner) return reply(ind.ownerb())
                if (!q) return reply(ind.wrongf())
                try {
         	           let evaled = await eval(q)
         	           if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          	          await reply(evaled)
          		//	client.sendMessage(from, JSON.stringify(eval(body.slice(6))). text)
       	         } catch (err) {
        	            console.error(err)
          	          await reply('Error!')
  	   	       }
        	    break 
        		case 'listonline': 
        		if (!isOwner) return reply(ind.ownerb())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(from, 'List Online,oh jdi ini kumpulan sider gk berguna? gblk banget dah :v :\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break 
				case '=>':
				const cmd = body.slice(4)
				exec(cmd, (err, stdout) => {
					if (err) return client.sendMessage(from, `root@Nfz.01:~ ${err}`, text, { quoted: mek })
					if (stdout) {
						client.sendMessage(from, stdout, text)
					}
				})
				break
				case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		        case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/user/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
				case 'bass':                 
				if (!isRegistered) return reply(ind.noregis())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'getsticker':
				case 'gets':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(12)
					result = fs.readFileSync(`./strg/sticker/${namastc}.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					break
				case 'stickerlist':
				case 'liststicker':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
				case 'addsticker':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedSticker) return reply('Reply sticker')
					svst = body.slice(12)
					if (!svst) return reply('add sticker name')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					setiker.push(`${svst}`)
					fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
					fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
					client.sendMessage(from, `Sukses`, MessageType.text, { quoted: mek })
					break
				case 'addvn':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedAudio) return reply('Reply vn')
					svst = body.slice(7)
					if (!svst) return reply('where is the audio?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
					client.sendMessage(from, `Sukses`, MessageType.text, { quoted: mek })
					break
				case 'getvn':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(7)
					buffer = fs.readFileSync(`./strg/audio/${namastc}.mp3`)
					client.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
					break
				case 'listvn':
				case 'vnlist':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
				case 'addimage':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedImage) return reply('Reply image')
					svst = body.slice(10)
					if (!svst) return reply('add image name')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
					fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
					client.sendMessage(from, `Sukses `, MessageType.text, { quoted: mek })
					break
				case 'getimage':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/image/${namastc}.jpeg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
					break
				case 'imagelist':
				case 'listimage':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*List Image :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
				case 'addvideo':
				if (!isRegistered) return reply(ind.noregis())
					if (!isQuotedVideo) return reply('Reply video')
					svst = body.slice(10)
					if (!svst) return reply('add video name')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await client.downloadMediaMessage(boij)
					videonye.push(`${svst}`)
					fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
					fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
					client.sendMessage(from, `Sukses`, MessageType.text, { quoted: mek })
					break
				case 'getvideo':
				if (!isRegistered) return reply(ind.noregis())
					namastc = body.slice(10)
					buffer = fs.readFileSync(`./strg/video/${namastc}.mp4`)
					client.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
					break
				case 'listvideo':
				case 'videolist':
				if (!isRegistered) return reply(ind.noregis())
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}*`
					client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
					break	
				
				default:
			if (body.startsWith(`${prefix}${command}`)) {
                  reply(`......`)
                  }
            if (/^>/.test(pes)) {
	            let txt = pes.replace(/^>/, '')
	            let type = Function
	            if (/await/.test(pes)) type = (async () => {}).constructor
	            let func = new type('print', 'client', 'MessageType', 'mek', 'text', 'from', 'image', 'os', 'fetch', txt)
	            console.log('[EvalF]', func.toString())
	            let output
	            try {
	                output = await func((...args) => {
	                    console.log('[EvalP]', ...args)
	                    client.sendMessage(from, util.format(...args), MessageType.extendedText, {
	                        quoted: mek
	                    })
	                }, client, MessageType, mek, text, from, await image, os, fetch)
	                console.log('[EvalO]', output)
	                client.sendMessage(from, util.format(output), MessageType.extendedText, {
	                    quoted: mek
	                })
	            } catch (e) {
	                console.error('[EvalE]', e)
	                client.sendMessage(from, util.format(e), MessageType.extendedText, {
	                    quoted: mek
	                })
	            }
            }
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

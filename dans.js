/**
 * Create By Dika Ardnt.
 * Contact Me on wa.me/6288292024190
 * Follow https://github.com/DikaArdnt
 */
require('./config')
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
  downloadMediaMessage
} = require('@whiskeysockets/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const {
    exec,
    spawn,
    execSync
} = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const FormData = require('form-data')
const moment = require('moment-timezone')
const {
    JSDOM
} = require('jsdom')
const speed = require('performance-now')
const {
    performance
} = require('perf_hooks')
const {
    Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
const {
    smsg,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    format,
    parseMention,
    getRandom,
    getGroupAdmins
} = require('./lib/myfunc')
const {
    instagramdl,
    instagramdlv2,
  instagramdlv3,
  instagramdlv4,
    instagramStory,
    instagramStoryv2,
    youtubedl,
    youtubedlv2,
    youtubeSearch,
    youtubedlv3,
    tiktokdl,
    tiktokdlv2,
    tiktokdlv3,
    aiovideodl,
    savefrom,
    snapsave,
    latinToAksara,
    aksaraToLatin,
    getZodiac,
    nomorhoki,
    googleImage,
    pinterest,
    wallpaper,
    stickerTelegram,
    asmaulhusna,
    asmaulhusnajson,
    alquran,
    jadwalsholat,
    listJadwalSholat,
    mediafiredl,
    sfilemobi,
    sfilemobiSearch,
    zippyshare,
    chord
} = require('@bochilteam/scraper')
const ttdlee = require("tiktok-video-downloader");
const hx = require('hxz-api');
const xa = require('xfarr-api');
const instagramGetUrl = require("instagram-url-direct")
//const y2 = require("y2mate-api");
const ttdl = require("tiktok-video-downloader");
const { google } = require('googleapis');
const readline = require('readline');
let BodyForm = require('form-data')
const {
    ytMp4,
    ytMp3
} = require('./lib/yt.js')

/*const {
    Y2MateVideoDetail,
  Y2MateSearchResult,
  Y2MateDownload,
  Y2MateVideoDetailRaw,
  Y2MateVideoSearchResultRaw,
  Y2MateVideoDownloadRaw,
  Y2MatePlaylist,
  Y2MatePlaylistRaw,
  Y2MateClient
} = require('./lib/ytne.js')*/
const {
    igdl
} = require('./lib/dunlut.js')
const {
    simih
} = require('./lib/simi')
const {
    Configuration,
    OpenAIApi
} = require("openai")
const { v4 } = require ('uuid')
const mathjs = require('mathjs')
const { createCanvas, loadImage } = require('canvas');
const { decryptMedia } = require('@open-wa/wa-decrypt');
const tunggu = `*_Tunggu Sebentar_*`
const aikey = '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'
const AI2D = require('@arugaz/ai2d')
const { JadiAnime } = require('jadianime-ts')
const { ai2d } = require('./lib/jadianime.js') 

const zahkey = 'zenzkey_477ab5983c76'
const zahkeypt = 'zenzkey_2951e11ea6'
const zahkeyja = '12ab488d33'
lolkey = 'ardanfajars'
const got = require('got'); // if you don't have "got" - install it with "npm install got"

const apiKeyimaga = 'acc_7744b1983efa392';
const apiSecretimaga = 'ec3edc0971cff4ed22ea5d83d739471c';

const tebakTebakan = [
  {
    pertanyaan: 'Apa warna buah apel?',
    jawaban: ['merah', 'hijau', 'kuning'],
  },
  {
    pertanyaan: 'Apa binatang yang bisa terbang?',
    jawaban: ['burung', 'kelelawar', 'lalat'],
  },
  {
    pertanyaan: 'Ibu kota Indonesia?',
    jawaban: ['jakarta'],
  },
];
const questions = [
    {
        question: 'What is the capital city of Indonesia?',
        choices: ['Jakarta', 'Bandung', 'Surabaya', 'Semarang'],
        correctAnswer: 'Jakarta'
    },
    {
        question: 'Who is the author of Harry Potter?',
        choices: ['J.K. Rowling', 'Stephenie Meyer', 'Suzanne Collins', 'Veronica Roth'],
        correctAnswer: 'J.K. Rowling'
    },
    {
        question: 'What is the largest planet in our solar system?',
        choices: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        correctAnswer: 'Jupiter'
    }
];

tekspullchangelog = `_*Changelog Bot*_
  
  *_• 14 April 2023_*
  - add hoax
  - add stickerwa
  - add randomnama
  - add randomemail
  - add chat
  - add facedetect
  - add readqr
  - add changelog
  - add spotify
  - Fix some bugs
  *Change Number*

  *_• 16 April 2023_*
  - add ytsearch
  - add jadwaltvnow
  - add jadwaltv
  - add getoriurl
  - add ttp2
  - bioskopnow
  - kisahmuslim
  - toonme
  - jadianime
  - Fix some bugs

  *_• 24 April 2023_*
  - removed eid countdown in menu
  - removed jadianime
  - Fix some bugs

  *_• 26 April 2023_*
  - add jadianime
  - add captcha
  - add ppcouple
  - add chat2
  - add fakewa
  - add fakewa2
  - fix gimage

  *_• 30 April 2023_*
  - add snack (downloader)

  *_• 5 Mei 2023_*
  - add carbon
  - hackanonym

    *_• 15 Mei 2023_*
  - fix instagram Downloader
  - fix jadianime
  - penambahan pensil
  - penambahan kartun
  - ...

@DansBot`

///botgmail
// Replace with your own values
const BOT_NAME = 'My Bot';
const BOT_PHONE = '1234567890'; // Your bot's phone number
const CLIENT_ID = '363421610412-3ei49epo127jchgbjik1k1u15cc1vg3c.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly',
               'https://www.googleapis.com/auth/gmail.send'];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = util.promisify(rl.question).bind(rl);

async function createGmailAccount(email, password) {
    // Authenticate with Google
    const oauth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
    );
    const { tokens } = await oauth2Client.getToken({
        username: email,
        password: password,
        scope: SCOPES
    });
    oauth2Client.setCredentials(tokens);

    // Create a new Gmail account
    const gmail = google.gmail({
        version: 'v1',
        auth: oauth2Client
    });
    const res = await gmail.users.settings.sendAs.create({
        userId: 'me',
        requestBody: {
            sendAsEmail: `${BOT_PHONE}@s.whatsapp.net`,
            displayName: BOT_NAME,
            replyToAddress: true,
            isPrimary: true,
            treatAsAlias: true
        }
    });
    console.log(`[${BOT_NAME}] Gmail account created!`);
    console.log(res.data);
}

///database
const _samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const _mediah = JSON.parse(fs.readFileSync('./database/media.json'))
const uang = JSON.parse(fs.readFileSync('./database/uang.json'))
const koin = JSON.parse(fs.readFileSync('./database/koin.json'))
const botp = JSON.parse(fs.readFileSync('./database/beliotp.json'))
const _biodata = JSON.parse(fs.readFileSync('./database/biodata.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))



module.exports = dans = async (dans, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await dans.decodeJid(dans.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const quotedType = getContentType(m.message.message?.extendedTextMessage?.contextInfo?.quotedMessage) || null
      
        const serial = m.sender
        const isRegistered = _registered.includes(m.sender)
        const pengirim = m.sender
        const pengirimm = JSON.parse(fs.readFileSync('./database/registered.json'))
        // Group
        const groupMetadata = m.isGroup ? await dans.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const isYucup = budy.match(new RegExp(/(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|playlist\?|watch\?v=|watch\?.+(?:&|&#38;);v=))([a-zA-Z0-9\-_]{11})?(?:(?:\?|&|&#38;)index=((?:\d){1,3}))?(?:(?:\?|&|&#38;)?list=([a-zA-Z\-_0-9]{34}))?(?:\S+)?/, 'gi'))
        const isInsta = budy.match(new RegExp(/^(https?:\/\/)?(www\.)?instagram.com\/(?:p|reel)\/[a-zA-Z0-9]{4,20}\/?/, 'gi'))
        const isTiktok = budy.match(new RegExp(/\bhttps?:\/\/(?:m|www|vm|vt)\.tiktok\.com\/\S*?\b(?:(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+)|(?=\w{7})(\w*?[A-Z\d]\w*)(?=\s|\/$))\b/, 'gi'))
        const isTok = text.match(new RegExp(/\bhttps?:\/\/(?:m|www|vm)\.tiktok\.com\/\S*?\b(?:(?:(?:usr|v|embed|user|video)\/|\?shareId=|\&item_id=)(\d+)|(?=\w{7})(\w*?[A-Z\d]\w*)(?=\s|\/$))\b/, 'gi'))

      
        ///balance
        ///koin
        const cekuser2 = (serial) => {
            let position = false
            Object.keys(_biodata).forEach((i) => {
                if (_biodata[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                return _biodata[position].data
            }
        }
        const addATMkoin = (serial) => {
            const obj = {
                id: serial,
                koin: 0
            }
            koin.push(obj)
            fs.writeFileSync('./database/koin.json', JSON.stringify(koin))
        }

        const addKoinUser2 = (serial, amount) => {
            let position = false
            Object.keys(koin).forEach((i) => {
                if (koin[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                koin[position].koin -= amount;
                fs.writeFileSync('./database/koin.json', JSON.stringify(koin))
            }
        }

        const checkATMuser2 = (serial) => {
            let position = false
            Object.keys(koin).forEach((i) => {
                if (koin[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                return koin[position].koin
            }
        }
        const confirmuang2 = (serial, amount) => {
            let position = false
            Object.keys(koin).forEach((i) => {
                if (koin[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                koin[position].koin -= amount
                fs.writeFileSync('./database/koin.json', JSON.stringify(koin))
            }
        }
        ////uang
        const cekuser = (serial) => {
            let position = false
            Object.keys(_biodata).forEach((i) => {
                if (_biodata[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                return _biodata[position].data
            }
        }
        const addATM = (serial) => {
            const obj = {
                id: serial,
                uang: 0
            }
            uang.push(obj)
            fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
        }

        const addKoinUser = (serial, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount;
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }

        const checkATMuser = (serial) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        const confirmuang = (serial, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/uang.json', JSON.stringify(uang))
            }
        }
        const bayar = (serial, amount) => {
            let position = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit -= amount;
                fs.writeFileSync('./settings/limit.json', JSON.stringify(limit))
            }
        }


        //otepeh
        const isotpe = m.chat ? botp.includes(m.chat) : false
        var otpe = 'OFF'
        if (isotpe) {
            otpe = 'ON'
        }
        //automedia
        const ismediah = m.chat ? _mediah.includes(m.chat) : false
        var mediahh = 'OFF'
        if (ismediah) {
            mediahh = 'ON'
        }
        // Simi
        const isSimi = m.isGroup ? _samih.includes(m.chat) : false
        var Simihh = 'OFF'
        if (isSimi) {
            Simihh = 'ON'
        }

        try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }

            let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }

            let setting = db.data.settings[botNumber]
            if (typeof setting !== 'object') db.data.settings[botNumber] = {}
            if (setting) {
                if (!('anticall' in setting)) setting.anticall = true
                if (!isNumber(setting.status)) setting.status = 0
                if (!('autobio' in setting)) setting.autobio = false
                if (!('templateImage' in setting)) setting.templateImage = true
                if (!('templateVideo' in setting)) setting.templateVideo = false
                if (!('templateGif' in setting)) setting.templateGif = false
                if (!('templateMsg' in setting)) setting.templateMsg = false
                if (!('templateLocation' in setting)) setting.templateLocation = false
            } else global.db.data.settings[botNumber] = {
                anticall: true,
                status: 0,
                autobio: false,
                templateImage: true,
                templateVideo: false,
                templateGif: false,
                templateMsg: false,
                templateLocation: false,
            }

        } catch (err) {
            console.error(err)
        }

        // Public & Self
        if (!dans.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            dans.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        // reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })

        // auto set bio
        if (db.data.settings[botNumber].autobio) {
            let setting = global.db.data.settings[botNumber]
            if (new Date() * 1 - setting.status > 1000) {
                let uptime = await runtime(process.uptime())
                await dans.updateProfileStatus(`${dans.user.name} | Runtime : ${runtime(uptime)}`)
                setting.status = new Date() * 1
            }
        }

        // Anti Link
        if (db.data.chats[m.chat].antilink) {
            if (budy.match(`chat.whatsapp.com`)) {
                m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
                if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
                let gclink = (`https://chat.whatsapp.com/` + await dans.groupInviteCode(m.chat))
                let isLinkThisGc = new RegExp(gclink, 'i')
                let isgclink = isLinkThisGc.test(m.text)
                if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
                if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
                if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
                dans.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }

        // Mute Chat
        if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
            return
        }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
            let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
            let {
                text,
                mentionedJid
            } = hash
            let messages = await generateWAMessage(m.chat, {
                text: text,
                mentions: mentionedJid
            }, {
                userJid: dans.user.id,
                quoted: m.quoted && m.quoted.fakeObj
            })
            messages.key.fromMe = areJidsSameUser(m.sender, dans.user.id)
            messages.key.id = m.key.id
            messages.pushName = m.pushName
            if (m.isGroup) messages.participant = m.sender
            let msg = {
                ...chatUpdate,
                messages: [proto.WebMessageInfo.fromObject(messages)],
                type: 'append'
            }
            dans.ev.emit('messages.upsert', msg)
        }


        switch (command) {
            case 'infoweb':
{
			var { data } = await axios.get(`https://api.caliph.biz.id/api/wappalyzer?url=${text}/&apikey=caliphkey`)
			var textu = `Info technologies web :\n\n\n${text}\n\n`
			for (var x of data.result.technologies) {
				textu += `*Name :* ${x.name}\n`
				textu += `*Description :* ${x.description}\n`
				textu += `*Version :* ${x.version}\n\n`
			}
			m.reply(textu)
			}
			break
            case 'ytmp3coba': {
                let {
                    yta
                } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                let quality = args[1] ? args[1] : '128kbps'
                const y2 = require("y2mate-api")
                let media = await y2.detail(text)
                console.log(media)
                //if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                //dans.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                // dans.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break



            case 'cekcek': {
                var request = require('request');

                request({
                    method: 'POST',
                    url: 'http://api.bisatopup.com/tagihan/cek',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: "{  \"product\": \"PLN\",  \"phone_number\": \"081215389681\",  \"nomor_rekening\": \"524041095729\"}"
                }, function(error, response, body) {
                    console.log('Status:', response.statusCode);
                    console.log('Headers:', JSON.stringify(response.headers));
                    console.log('Response:', body);
                });
            }
            break
            case 'playrfrr': {
                m.reply('_Menu Play Berubah Menjadi !audio / !video_')
            }
            break

            case 'ramadhan': {
                const puasa = new Date('maret 22, 2023 17:00:00')
                const ayeuna = new Date().getTime()
                const ceIroh = puasa - ayeuna
                const hahari = Math.floor(ceIroh / (1000 * 60 * 60 * 24));
                const hajam = Math.floor(ceIroh % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
                const hamenit = Math.floor(ceIroh % (1000 * 60 * 60) / (1000 * 60))
                const hadetik = Math.floor(ceIroh % (1000 * 60) / 1000)
                rama = `${hahari} Hari ${hajam} Jam ${hamenit} Menit ${hadetik} Detik`


                teksq = `*_Estimasi Ramadhan 1444H adalah ${rama} Lagi_*\n\n*Hal Yang harus Dipersiapan Dalam Menyambut Bulan Ramadhan:*\n1. Perkuat Iman\n2. Persiapan Fisik dan Jasmani untuk Puasa\n3. Perdalam Ilmu dan Pengetahuan Agama\n4. Persiapan Amal dan Materi\n5. Persiapan Kebutuhan Ramadan Sehari-hari\n6. Membersihkan Lingkungan Sekitar\n7. Persiapan Jiwa dan Mental\n8. Berharap Dosa Diampuni\n9. Siapkan Perlengkapan Ibadah\n10. Banyak Berbuat Baik\n11. Melunasi Hutang Puasa Tahun Lalu\n#sumber:Tokopedia.com/blog\n\n`
                m.reply(teksq)
            }
            break
            case 'speedtest': {
                m.reply('Testing Speed...')
                let cp = require('child_process')
                let {
                    promisify
                } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let {
                        stdout,
                        stderr
                    } = o
                    if (stdout.trim()) m.reply(stdout)
                    if (stderr.trim()) m.reply(stderr)
                }
            }
            break
            case 'owner':
            case 'creator': {
                //dans.sendContact(m.chat, global.owner, m)
                m.reply(`Owner Aku kak Ardan\nmyprofile.sidans.my.id`)
            }
            break
            case 'sidiq': {
                teks = `Konfirmasi Sekali Lagi\n`
                let buttons = [{
                    buttonId: `indonowaoke`,
                    buttonText: {
                        displayText: 'beli'
                    },
                    type: 1
                }, ]
                await dans.sendButtonText(m.chat, buttons, teks, `DanStore`, m)
            }
            break
            case 'jadianim':
//try
{
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anu = await TelegraPh(media)
  console.log(anu)
 const resultu = await AI2D(anu, {
        crop: "SINGLE"
      })
      dans.sendImage(m.chat, resultu, `_Nih Kak_`, m)
//} catch {
//m.reply(`error`)
//
}
break
		case 'jadianimetes': {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  //if (!mime) return tutorfoto()
         //try {
            let img = await dans.downloadAndSaveMediaMessage(quoted)
			let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anuz = await TelegraPh(media)
            //let imagez = await TelegraPh(img)
            //let socks = await(await fetchJson("https://api.proxyscrape.com/v2/?request=getproxies&protocol=socks5&timeout=10000&country=ID")).text()
           // let Res = socks.split('\n')
            //let acakip = Res[Math.floor(Math.random() * Res.length)]
           // let acakip = `172.105.247.104:8080`
           // console.log(acakip)
                //tunggu()
                await sleep(1000)
await ai2d(anuz, {
  /*
  proxy: {
    url: "socks5://" + acakip,
    chinese: true,
    image: false,
  }, // support http & socks
  */
  crop: "SINGLE",
}).then(async (hasil) => {
            // if (!result || result.constructor.name != 'String') return reply(`gagal:V`)
            // miku.sendFile(m.chat, h, ``, `*Anjai jadi Animeh :v*`, m)
            dans.sendMessage(m.chat, { image: hasil }, { quoted: m })
           })
      //} catch (e) {
         //console.log(e)
      //   return m.reply(`Muka tidak terdeteksi`)
     // }
      }
      break
            case 'jadianime2':
//try
{
let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anu = await TelegraPh(media)
					console.log(anu)
   const buffer = await dans.downloadMediaMessage(qmsg)
					//const resultu = await AI2D(anu);
  //console.log(resultu)
  let imagez = await JadiAnime(anu)
  console.log(imagez)
      //dans.sendImage(m.chat, resultu, `_Nih Kak_`, m)
} 
//catch {
//m.reply(`Error`)
//}
break
            case 'jadianime22': { // By FarelAE
              try {
                //tunggu()
                await sleep(1000)
                const media = await dans.downloadAndSaveMediaMessage(qmsg)
                
function signV1(obj) { // By Sansekai
  function o(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (((e >> 16) + (t >> 16) + (n >> 16)) << 16) | (65535 & n);
  }
  function i(e, t, n, r, i, a) {
    return o(((a = o(o(t, e), o(r, a))) << (i = i)) | (a >>> (32 - i)), n);
  }
  function a(e, t, n, r, o, a, s) {
    return i((t & n) | (~t & r), e, t, o, a, s);
  }
  function s(e, t, n, r, o, a, s) {
    return i((t & r) | (n & ~r), e, t, o, a, s);
  }
  function u(e, t, n, r, o, a, s) {
    return i(t ^ n ^ r, e, t, o, a, s);
  }
  function l(e, t, n, r, o, a, s) {
    return i(n ^ (t | ~r), e, t, o, a, s);
  }
  function c(e, t) {
    var n, r, i, c;
    (e[t >> 5] |= 128 << t % 32), (e[14 + (((t + 64) >>> 9) << 4)] = t);
    for (var f = 1732584193, p = -271733879, d = -1732584194, h = 271733878, v = 0; v < e.length; v += 16)
      (f = a((n = f), (r = p), (i = d), (c = h), e[v], 7, -680876936)),
        (h = a(h, f, p, d, e[v + 1], 12, -389564586)),
        (d = a(d, h, f, p, e[v + 2], 17, 606105819)),
        (p = a(p, d, h, f, e[v + 3], 22, -1044525330)),
        (f = a(f, p, d, h, e[v + 4], 7, -176418897)),
        (h = a(h, f, p, d, e[v + 5], 12, 1200080426)),
        (d = a(d, h, f, p, e[v + 6], 17, -1473231341)),
        (p = a(p, d, h, f, e[v + 7], 22, -45705983)),
        (f = a(f, p, d, h, e[v + 8], 7, 1770035416)),
        (h = a(h, f, p, d, e[v + 9], 12, -1958414417)),
        (d = a(d, h, f, p, e[v + 10], 17, -42063)),
        (p = a(p, d, h, f, e[v + 11], 22, -1990404162)),
        (f = a(f, p, d, h, e[v + 12], 7, 1804603682)),
        (h = a(h, f, p, d, e[v + 13], 12, -40341101)),
        (d = a(d, h, f, p, e[v + 14], 17, -1502002290)),
        (f = s(f, (p = a(p, d, h, f, e[v + 15], 22, 1236535329)), d, h, e[v + 1], 5, -165796510)),
        (h = s(h, f, p, d, e[v + 6], 9, -1069501632)),
        (d = s(d, h, f, p, e[v + 11], 14, 643717713)),
        (p = s(p, d, h, f, e[v], 20, -373897302)),
        (f = s(f, p, d, h, e[v + 5], 5, -701558691)),
        (h = s(h, f, p, d, e[v + 10], 9, 38016083)),
        (d = s(d, h, f, p, e[v + 15], 14, -660478335)),
        (p = s(p, d, h, f, e[v + 4], 20, -405537848)),
        (f = s(f, p, d, h, e[v + 9], 5, 568446438)),
        (h = s(h, f, p, d, e[v + 14], 9, -1019803690)),
        (d = s(d, h, f, p, e[v + 3], 14, -187363961)),
        (p = s(p, d, h, f, e[v + 8], 20, 1163531501)),
        (f = s(f, p, d, h, e[v + 13], 5, -1444681467)),
        (h = s(h, f, p, d, e[v + 2], 9, -51403784)),
        (d = s(d, h, f, p, e[v + 7], 14, 1735328473)),
        (f = u(f, (p = s(p, d, h, f, e[v + 12], 20, -1926607734)), d, h, e[v + 5], 4, -378558)),
        (h = u(h, f, p, d, e[v + 8], 11, -2022574463)),
        (d = u(d, h, f, p, e[v + 11], 16, 1839030562)),
        (p = u(p, d, h, f, e[v + 14], 23, -35309556)),
        (f = u(f, p, d, h, e[v + 1], 4, -1530992060)),
        (h = u(h, f, p, d, e[v + 4], 11, 1272893353)),
        (d = u(d, h, f, p, e[v + 7], 16, -155497632)),
        (p = u(p, d, h, f, e[v + 10], 23, -1094730640)),
        (f = u(f, p, d, h, e[v + 13], 4, 681279174)),
        (h = u(h, f, p, d, e[v], 11, -358537222)),
        (d = u(d, h, f, p, e[v + 3], 16, -722521979)),
        (p = u(p, d, h, f, e[v + 6], 23, 76029189)),
        (f = u(f, p, d, h, e[v + 9], 4, -640364487)),
        (h = u(h, f, p, d, e[v + 12], 11, -421815835)),
        (d = u(d, h, f, p, e[v + 15], 16, 530742520)),
        (f = l(f, (p = u(p, d, h, f, e[v + 2], 23, -995338651)), d, h, e[v], 6, -198630844)),
        (h = l(h, f, p, d, e[v + 7], 10, 1126891415)),
        (d = l(d, h, f, p, e[v + 14], 15, -1416354905)),
        (p = l(p, d, h, f, e[v + 5], 21, -57434055)),
        (f = l(f, p, d, h, e[v + 12], 6, 1700485571)),
        (h = l(h, f, p, d, e[v + 3], 10, -1894986606)),
        (d = l(d, h, f, p, e[v + 10], 15, -1051523)),
        (p = l(p, d, h, f, e[v + 1], 21, -2054922799)),
        (f = l(f, p, d, h, e[v + 8], 6, 1873313359)),
        (h = l(h, f, p, d, e[v + 15], 10, -30611744)),
        (d = l(d, h, f, p, e[v + 6], 15, -1560198380)),
        (p = l(p, d, h, f, e[v + 13], 21, 1309151649)),
        (f = l(f, p, d, h, e[v + 4], 6, -145523070)),
        (h = l(h, f, p, d, e[v + 11], 10, -1120210379)),
        (d = l(d, h, f, p, e[v + 2], 15, 718787259)),
        (p = l(p, d, h, f, e[v + 9], 21, -343485551)),
        (f = o(f, n)),
        (p = o(p, r)),
        (d = o(d, i)),
        (h = o(h, c));
    return [f, p, d, h];
  }
  function f(e) {
    for (var t = "", n = 32 * e.length, r = 0; r < n; r += 8) t += String.fromCharCode((e[r >> 5] >>> r % 32) & 255);
    return t;
  }
  function p(e) {
    var t = [];
    for (t[(e.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1) t[r] = 0;
    for (var n = 8 * e.length, r = 0; r < n; r += 8) t[r >> 5] |= (255 & e.charCodeAt(r / 8)) << r % 32;
    return t;
  }
  function d(e) {
    for (var t, n = "0123456789abcdef", r = "", o = 0; o < e.length; o += 1) (t = e.charCodeAt(o)), (r += n.charAt((t >>> 4) & 15) + n.charAt(15 & t));
    return r;
  }
  function h(e) {
    return unescape(encodeURIComponent(e));
  }
  function v(e) {
    return f(c(p((e = h(e))), 8 * e.length));
  }
  function g(e, t) {
    return (function (e, t) {
      var n,
        r = p(e),
        o = [],
        i = [];
      for (o[15] = i[15] = void 0, 16 < r.length && (r = c(r, 8 * e.length)), n = 0; n < 16; n += 1) (o[n] = 909522486 ^ r[n]), (i[n] = 1549556828 ^ r[n]);
      return (t = c(o.concat(p(t)), 512 + 8 * t.length)), f(c(i.concat(t), 640));
    })(h(e), h(t));
  }
  function y(e, t, n) {
    return t ? (n ? g(t, e) : d(g(t, e))) : n ? v(e) : d(v(e));
  }

  function ss(e, t, n) {
    if (!t) return "";
    var r,
      i,
      a = "string" == typeof e ? e : JSON.stringify(e);
    return (
      (a = e ? ((r = a), (i = encodeURIComponent(r).match(/%[89ABab]/g)), r.length + (i ? i.length : 0)) : 0),
      "v1" === t ? ((r = n), (i = a), y("" + r + i + "HQ31X02e")) : "v2" === t ? ((n = n), (a = a), y("90A599D6" + n.split("").reverse().join("") + a)) : ""
    );
  }

  return ss(obj, "v1", "https://h5.tu.qq.com");
}

async function jadianime(media) {
  const imgData = await Buffer.from(media).toString('base64')

  const obj = {
    busiId: "different_dimension_me_img_entry",
    extra: JSON.stringify({
      face_rects: [],
      version: 2,
      platform: "web",
      data_report: {
        parent_trace_id: v4(),
        root_channel: "",
        level: 0,
      },
    }),
    images: [imgData],
  };

  const response = await axios.request({
    method: "POST",
    url: "https://ai.tu.qq.com/overseas/trpc.shadow_cv.ai_processor_cgi.AIProcessorCgi/Process",
    data: obj,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-HK,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      Connection: "keep-alive",
      "Content-Type": "application/json",
      Host: "ai.tu.qq.com",
      Origin: "https://h5.tu.qq.com",
      Referer: "https://h5.tu.qq.com/",
      "Sec-Fetch-Dest": "empty",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Site": "same-site",
      "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
      "sec-ch-ua": '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Linux"',
      "x-sign-value": signV1(obj),
      "x-sign-version": "v1",
    },
    timeout: 30000,
  });

  return response.data;
};

let wow = await jadianime(media)
if (!wow.extra){
m.reply(`Gagal convert, pastikan foto tidak pudar`) // Jika terjadi eror
}
let hasil = JSON.parse(wow.extra).img_urls[0]
//------> sock.sendMessage(m.chat, { image: { url: hasil } }, { quoted: m })
let waduh = await Jimp.read(hasil)
dans.sendMessage(m.chat, { image: await resize(waduh, 144, 200), caption: `Hasil HD: ${hasil}` }, { quoted: m })
              } catch (err) {
                console.log(err);
              }
                }
                break
            //zahwazein
            case 'jadianime':
            //if (!isCreator) return m.reply('*_Under Maintenance_*')
            if(!isMedia) return m.reply(`_kirim gambar dengan caption !jadianime/ tag gambar_`)
            {
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anu = await TelegraPh(media)
              console.log(anu)
              teksee = `Ada Yang Gunain Fitur Spesial Bos (JadiAnime)\n\nDari : ${m.sender}\nNama : ${pushname}\n\n\n\nNih Medianya \n${anu}`
              const lpr = await fetchJson(`https://api.telegram.org/bot6072392827:AAHejwYCvnt_TpZ_vQVRcUnjpJky5mWhY-4/sendMessage?chat_id=1177315536&text=${teksee}`)
              
					m.reply(`_Memproses..._\nJika Lama dalam Memproses Berarti Terjadi Error`)
            try {
              //const gmbr = await fetchJson(`https://api.caliph.biz.id/api/animeai?img=${anu}&apikey=caliphkey`)
              //console.log(gmbr)
					dans.sendImage(m.chat, `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolkey}&img=${anu}`, `_Nih Kak_`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
        }
                break
            case 'toonme':
            if(!isMedia) return m.reply(`_kirim gambar dengan caption !toonme/ tag gambar_`)
               try {
            //{
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anu = await TelegraPh(media)
                 teksee = `Ada Yang Gunain Fitur Spesial Bos (ToonMe)\n\nDari : ${m.sender}\nNama : ${pushname}\n\n\n\nNih Medianya \n${anu}`
              const lpr = await fetchJson(`https://api.telegram.org/bot6072392827:AAHejwYCvnt_TpZ_vQVRcUnjpJky5mWhY-4/sendMessage?chat_id=1177315536&text=${teksee}`)
					m.reply(`_Memproses..._`)
                    const hsl = await fetchJson(`https://api.zahwazein.xyz/photoeditor/toonme/v1?url=${anu}&apikey=${zahkeypt}&id=520fe08792237bea7734b40c`)
					dans.sendImage(m.chat, hsl.result, `_Nih Kak_`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break
            case 'kisahmuslim':
                try {
                    
                    const hh = await fetchJson(`https://api.zahwazein.xyz/islami/kisahmuslim?apikey=${zahkey}`)
                  let [kes1, kes2] = hh.result.Cerita.split`Related`
					teks = `*Kisah Muslim*\n\n\n*${hh.result.Judul}*\n${kes1}`
                    dans.sendImage(m.chat, hh.result.Thumb, teks, m)
                } catch {
                    m.reply('_Terjadi Kesalahan_')
                }
                break
            case 'bioskopnow':
			try{
			axios
				.get(`https://api.zahwazein.xyz/webzone/nowplayingbioskop?apikey=${zahkey}`)
				.then(({ data }) => {
					var text = ''
					for (var x of data.result) {
						text += `Title : ${x.title}\n`
						text += `URL : ${x.url}\n`
						text += `IMG : ${x.img}\n\n`
					}
					m.reply(text)
				})
				} catch {
			m.reply('Error')
			}
			break
            case 'getoriurl':
if(!text)return m.reply('Masukan Link Yang Ingin Dicek\ncontoh: !getoriurl https://bit.ly/dansbotz')
try{
const ori = await fetchJson(`https://api.zahwazein.xyz/convert/geturl?url=${text}&apikey=${zahkey}`)
m.reply(ori.result)
} catch {
m.reply('Gagal Mendapatkan URL original')
}
break
            //end zah
            ///lolhuman
            case 'cmb':{
			const mediaData = await dans.downloadAndSaveMediaMessage(qmsg)
				const form = new BodyForm();
			form.append("files[]", fs.createReadStream(mediaData), 's.mp4')
              
			axios.post(`https://api.lolhuman.xyz/api/musicsearch?apikey=ardanfajars`, form).then(({ data }) => {
				console.log(data.result)
				//dans.sendMessage(m.chat, { video: { url: data.result.video }, mimetype: 'video/mp4', caption })
			})
            }
			break
            //anime lol
            case 'character':
            
			if (args.length == 0) return m.reply(`Example: ${prefix + command} Miku Nakano`)
			axios.get(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${text}`).then(({ data }) => {
				var caption = `Id : ${data.result.id}\n`
				caption += `Name : ${data.result.name.full}\n`
				caption += `Native : ${data.result.name.native}\n`
				caption += `Favorites : ${data.result.favourites}\n`
				caption += `Media : \n`
				for (var x of data.result.media.nodes) {
					caption += `- ${x.title.romaji} (${x.title.native})\n`
				}
				caption += `\nDescription : \n${data.result.description.replace(/__/g, '_')}`
				dans.sendMessage(m.chat, { image: { url: data.result.image.large }, caption })
			})
			break

            case 'manga':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
			axios.get(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${text}`).then(({ data }) => {
				var caption = `Id : ${data.result.id}\n`
				caption += `Id MAL : ${data.result.idMal}\n`
				caption += `Title : ${data.result.title.romaji}\n`
				caption += `English : ${data.result.title.english}\n`
				caption += `Native : ${data.result.title.native}\n`
				caption += `Format : ${data.result.format}\n`
				caption += `Chapters : ${data.result.chapters}\n`
				caption += `Volume : ${data.result.volumes}\n`
				caption += `Status : ${data.result.status}\n`
				caption += `Source : ${data.result.source}\n`
				caption += `Start Date : ${data.result.startDate.day} - ${data.result.startDate.month} - ${data.result.startDate.year}\n`
				caption += `End Date : ${data.result.endDate.day} - ${data.result.endDate.month} - ${data.result.endDate.year}\n`
				caption += `Genre : ${data.result.genres.join(', ')}\n`
				caption += `Synonyms : ${data.result.synonyms.join(', ')}\n`
				caption += `Score : ${data.result.averageScore}%\n`
				caption += `Characters : \n`
				for (var x of data.result.characters.nodes) {
					caption += `- ${x.name.full} (${x.name.native})\n`
				}
				caption += `\nDescription : ${data.result.description}`
				dans.sendMessage(m.chat, { image: { url: data.result.coverImage.large }, caption })
			})
			break
		case 'anime':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
			axios.get(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${text}`).then(({ data }) => {
				var caption = `Id : ${data.result.id}\n`
				caption += `Id MAL : ${data.result.idMal}\n`
				caption += `Title : ${data.result.title.romaji}\n`
				caption += `English : ${data.result.title.english}\n`
				caption += `Native : ${data.result.title.native}\n`
				caption += `Format : ${data.result.format}\n`
				caption += `Episodes : ${data.result.episodes}\n`
				caption += `Duration : ${data.result.duration} mins.\n`
				caption += `Status : ${data.result.status}\n`
				caption += `Season : ${data.result.season}\n`
				caption += `Season Year : ${data.result.seasonYear}\n`
				caption += `Source : ${data.result.source}\n`
				caption += `Start Date : ${data.result.startDate.day} - ${data.result.startDate.month} - ${data.result.startDate.year}\n`
				caption += `End Date : ${data.result.endDate.day} - ${data.result.endDate.month} - ${data.result.endDate.year}\n`
				caption += `Genre : ${data.result.genres.join(', ')}\n`
				caption += `Synonyms : ${data.result.synonyms.join(', ')}\n`
				caption += `Score : ${data.result.averageScore}%\n`
				caption += `Characters : \n`
				for (var x of data.result.characters.nodes) {
					caption += `- ${x.name.full} (${x.name.native})\n`
				}
				caption += `\nDescription : ${data.result.description}`
				dans.sendMessage(m.chat, { image: { url: data.result.coverImage.large }, caption })
			})
			break
		case 'wait':
			const mediaData = await dans.downloadAndSaveMediaMessage(qmsg)
				//const filePath = '/path/to/image.jpg';
				const formData = new BodyForm();
				formData.append('image', fs.createReadStream(mediaData));
			axios.post(`https://api.lolhuman.xyz/api/wait?apikey=${lolkey}`, formData).then(({ data }) => {
				var caption = `Anilist id : ${data.result.anilist_id}\n`
				caption += `MAL id : ${data.result.mal_id}\n`
				caption += `Title Romaji : ${data.result.title_romaji}\n`
				caption += `Title Native : ${data.result.title_native}\n`
				caption += `Title English : ${data.result.title_english}\n`
				caption += `at : ${data.result.at}\n`
				caption += `Episode : ${data.result.episode}\n`
				caption += `Similarity : ${data.result.similarity}`
				dans.sendMessage(m.chat, { video: { url: data.result.video }, mimetype: 'video/mp4', caption })
			})
			break
		case 'kusonime':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
			axios.get(`https://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${args[0]}`).then(({ data }) => {
				var caption = `Title : ${data.result.title}\n`
				caption += `Japanese : ${data.result.japanese}\n`
				caption += `Genre : ${data.result.genre}\n`
				caption += `Seasons : ${data.result.seasons}\n`
				caption += `Producers : ${data.result.producers}\n`
				caption += `Type : ${data.result.type}\n`
				caption += `Status : ${data.result.status}\n`
				caption += `Total Episode : ${data.result.total_episode}\n`
				caption += `Score : ${data.result.score}\n`
				caption += `Duration : ${data.result.duration}\n`
				caption += `Released On : ${data.result.released_on}\n`
				caption += `Desc : ${data.result.desc}\n`
				for (var x in data.result.link_dl) {
					caption += `\n${x}\n`
					for (var y in link_dl[x]) {
						caption += `${y} - ${link_dl[x][y]}\n`
					}
				}
				dans.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption })
			})
			break
		case 'kusonimesearch':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
			axios.get(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${text}`).then(({ data }) => {
				var caption = `Title : ${data.result.title}\n`
				caption += `Japanese : ${data.result.japanese}\n`
				caption += `Genre : ${data.result.genre}\n`
				caption += `Seasons : ${data.result.seasons}\n`
				caption += `Producers : ${data.result.producers}\n`
				caption += `Type : ${data.result.type}\n`
				caption += `Status : ${data.result.status}\n`
				caption += `Total Episode : ${data.result.total_episode}\n`
				caption += `Score : ${data.result.score}\n`
				caption += `Duration : ${data.result.duration}\n`
				caption += `Released On : ${data.result.released_on}\n`
				caption += `Desc : ${data.result.desc}\n`
				for (var x in data.result.link_dl) {
					caption += `\n${x}\n`
					for (var y in link_dl[x]) {
						caption += `${y} - ${link_dl[x][y]}\n`
					}
				}
				dans.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption })
			})
			break
		case 'otakudesu':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
			axios.get(`https://api.lolhuman.xyz/api/otakudesu?apikey=${lolkey}&url=${args[0]}`).then(({ data }) => {
				var text = `Title : ${data.result.title}\n`
				text += `Japanese : ${data.result.japanese}\n`
				text += `Judul : ${data.result.judul}\n`
				text += `Type : ${data.result.type}\n`
				text += `Episode : ${data.result.episodes}\n`
				text += `Aired : ${data.result.aired}\n`
				text += `Producers : ${data.result.producers}\n`
				text += `Genre : ${data.result.genres}\n`
				text += `Duration : ${data.result.duration}\n`
				text += `Studios : ${data.result.status}\n`
				text += `Rating : ${data.result.rating}\n`
				text += `Credit : ${data.result.credit}\n`
				for (var x in data.result.link_dl) {
					text += `\n\n*${data.result.link_dl[x].title}*\n`
					for (var y in data.result.link_dl[x].link_dl) {
						ini_info = data.result.link_dl[x].link_dl[y]
						text += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
						text += `\`\`\`Size : \`\`\`${ini_info.size}\n`
						text += `\`\`\`Link : \`\`\`\n`
						down_link = ini_info.link_dl
						for (var z in down_link) {
							text += `${z} - ${down_link[z]}\n`
						}
					}
				}
				reply(text)
			})
			break
		case 'otakudesusearch':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
			axios.get(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${text}`).then(({ data }) => {
				var text = `Title : ${data.result.title}\n`
				text += `Japanese : ${data.result.japanese}\n`
				text += `Judul : ${data.result.judul}\n`
				text += `Type : ${data.result.type}\n`
				text += `Episode : ${data.result.episodes}\n`
				text += `Aired : ${data.result.aired}\n`
				text += `Producers : ${data.result.producers}\n`
				text += `Genre : ${data.result.genres}\n`
				text += `Duration : ${data.result.duration}\n`
				text += `Studios : ${data.result.status}\n`
				text += `Rating : ${data.result.rating}\n`
				text += `Credit : ${data.result.credit}\n`
				for (var x in data.result.link_dl) {
					text += `\n\n*${data.result.link_dl[x].title}*\n`
					for (var y in data.result.link_dl[x].link_dl) {
						var info = data.result.link_dl[x].link_dl[y]
						text += `\n\`\`\`Reso : \`\`\`${info.reso}\n`
						text += `\`\`\`Size : \`\`\`${info.size}\n`
						text += `\`\`\`Link : \`\`\`\n`
						var link = info.link_dl
						for (var z in link) {
							text += `${z} - ${link[z]}\n`
						}
					}
				}
				reply(text)
			})
			break
		case 'storynime':
			axios.get(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}`).then(({ data }) => {
				dans.sendMessage(m.chat, { video: { url: data.result }, mimetype: 'video/mp4' })
			})
			break
		
            //end anime lol
            case 'pensil':
            
            if(!isMedia) return m.reply(`_kirim gambar dengan caption !jadianime/ tag gambar_`)
            {
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anu = await TelegraPh(media)
              teksee = `Ada Yang Gunain Fitur Spesial Bos (pensil)\n\nDari : ${m.sender}\nNama : ${pushname}\n\n\n\nNih Medianya \n${anu}`
              const lpr = await fetchJson(`https://api.telegram.org/bot6072392827:AAHejwYCvnt_TpZ_vQVRcUnjpJky5mWhY-4/sendMessage?chat_id=1177315536&text=${teksee}`)
              //if (!isCreator) return m.reply('*_Under Maintenance_*')
					m.reply(`_Memproses..._`)
                    //const hsl = await fetchJson(`https://api.zahwazein.xyz/photoeditor/jadianime?url=${anu}&apikey=${zahkeyja}`)
            try {
					dans.sendImage(m.chat, `https://api.lolhuman.xyz/api/editor/pencil?apikey=${lolkey}&img=${anu}`, `_Nih Kak_`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
        }
                break
            case 'kartun':
            
            if(!isMedia) return m.reply(`_kirim gambar dengan caption !jadianime/ tag gambar_`)
            {
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anu = await TelegraPh(media)
              teksee = `Ada Yang Gunain Fitur Spesial Bos (kartun)\n\nDari : ${m.sender}\nNama : ${pushname}\n\n\n\nNih Medianya \n${anu}`
              const lpr = await fetchJson(`https://api.telegram.org/bot6072392827:AAHejwYCvnt_TpZ_vQVRcUnjpJky5mWhY-4/sendMessage?chat_id=1177315536&text=${teksee}`)
              //if (!isCreator) return m.reply('*_Under Maintenance_*')
					m.reply(`_Memproses..._\nJika Lama dalam Memproses Berarti Terjadi Error`)
                    //const hsl = await fetchJson(`https://api.zahwazein.xyz/photoeditor/jadianime?url=${anu}&apikey=${zahkeyja}`)
            try {
					dans.sendImage(m.chat, `https://api.lolhuman.xyz/api/editor/cartoon?apikey=${lolkey}&img=${anu}`, `_Nih Kak_`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
        }
                break
            				case 'hackanonym':
				if (!text) return m.reply(`Masukan Teks`)
				try{
				dans.sendImage(m.chat, `https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=ardanfajars&text=${text}`, `_Nih kak *${text}*_`, m)
				} catch {
				m.reply('error')
				}
				break
            				case 'carbon':
				if (!text) return m.reply(`Masukan Teks`)
				try{
				dans.sendImage(m.chat, `https://api.lolhuman.xyz/api/carbon?apikey=ardanfajars&code=${text}&language=python`, `_Nih kak_`, m)
				} catch {
				m.reply('error')
				}
				break
            case 'snack':
                if (!text) return m.reply('_Harap Masukan Link_')
                try {
                    const adon = await fetchJson(`https://api.lolhuman.xyz/api/snackvideo?apikey=ardanfajars&url=${text}`)
                    console.log(adon)
                    m.reply(tunggu)
                    p1 = adon.result
                    teks = `*Snack Downloader By DansBot*\n\n*Caption :* ${p1.caption}\n`

                    dans.sendMessage(m.chat, {
                        video: {
                            url: p1.url
                        },
                        caption: teks,
                        mimetype: 'video/mp4',
                        fileName: `snack.mp4`
                    }, {
                        quoted: m
                    })
                } catch {
				m.reply('error')
				}
				break
            case 'image':
				case 'gimage':
				case 'foto':
				case 'gambar':
                try {
				if(!text) return m.reply('_Mau Cari Apa?_')
                  m.reply('_Mencari..._')
				dans.sendImage(m.chat, `https://api.lolhuman.xyz/api/gimage?apikey=ardanfajars&query=${text}`, `_Nih kak *${text}*_`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan_')
                }
                break
            case 'ytsearch':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
			try{
			axios
				.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=ardanfajars&query=${text}`)
				.then(({ data }) => {
					var text = ''
					for (var x of data.result) {
						text += `Title : ${x.title}\n`
						text += `Views : ${x.views}\n`
						text += `Published : ${x.published}\n`
						text += `Thumbnail : ${x.thumbnail}\n`
						text += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
					}
					m.reply(text)
				})
				} catch {
			m.reply('Error')
			}
			break
            case 'jarak':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} klaten - jakarta`)
			//try{
			var text1 = text.split('-')[0].trim()
			var text2 = text.split('-')[1].trim()
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=ardanfajars&kota1=${text1}&kota2=${text2}`)
			var texte = `Informasi Jarak dari ${text1} ke ${text2} :\n\n`
			texte += `\`\`\`◪ Asal :\`\`\` ${data.result.from.name}\n`
			texte += `\`\`\`◪ Garis Lintang :\`\`\` ${data.result.from.latitude}\n`
			texte += `\`\`\`◪ Garis Bujur :\`\`\` ${data.result.from.longitude}\n\n`
			texte += `\`\`\`◪ Tujuan :\`\`\` ${data.result.to.name}\n`
			texte += `\`\`\`◪ Garis Lintang :\`\`\` ${data.result.to.latitude}\n`
			texte += `\`\`\`◪ Garis Bujur :\`\`\` ${data.result.to.longitude}\n\n`
			texte += `\`\`\`◪ Jarak Tempuh :\`\`\` ${data.result.jarak}\n`
			texte += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
			texte += `   ╭───────────────❏\n`
			texte += `❍┤ Kereta Api : ${data.result.kereta_api}\n`
			texte += `❍┤ Pesawat : ${data.result.pesawat}\n`
			texte += `❍┤ Mobil : ${data.result.mobil}\n`
			texte += `❍┤ Motor : ${data.result.motor}\n`
			texte += `❍┤ Jalan Kaki : ${data.result.jalan_kaki}\n`
			texte += `   ╰───────────────❏\n`
			m.reply(texte)
			//} catch {
			//m.reply('Error')
			//}
			break
            case 'jadwalbola':
			try{
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwalbola?apikey=ardanfajars`)
			var texti = 'Jadwal Bola :\n'
			for (var x of data.result) {
				texti += `Hari : ${x.hari}\n`
				texti += `Jam : ${x.jam}\n`
				texti += `Event : ${x.event}\n`
				texti += `Match : ${x.match}\n`
				texti += `TV : ${x.tv}\n\n`
			}
			m.reply(texti)
			} catch {
			m.reply('Error')
			}
			break
            case 'jadwaltv':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} RCTI`)
			try{
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/${args[0]}?apikey=ardanfajars`)
			var textu = `Jadwal TV ${args[0].toUpperCase()}\n`
			for (var x in data.result) {
				textu += `${x} - ${data.result[x]}\n`
			}
			m.reply(textu)
			} catch {
			m.reply('Error')
			}
			break
		case 'jadwaltvnow':
		try{
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=ardanfajars`)
			var textu = `Jadwal TV Now :\n`
			for (var x in data.result) {
				textu += `${x.toUpperCase()}${data.result[x]}\n\n`
			}
			m.reply(textu)
			} catch {
			m.reply('Error')
			}
			break
            case 'heroml':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} Fanny`)
			//try{
			const datax = await axios.get(`https://api.lolhuman.xyz/api/heroml/${text}?apikey=ardanfajars`)
			var captionx = `Name : ${datax.result.hero_name}\n`
			captionx += `Entrance Quotes : ${datax.result.ent_quotes}\n`
			captionx += `Role : ${datax.result.detail.role}\n`
			captionx += `Specialty : ${datax.result.detail.specialty}\n`
			captionx += `Laning : ${datax.result.detail.laning_recommendation}\n`
			captionx += `Release : ${datax.result.detail.release_date}\n`
			captionx += `Movement speed : ${datax.result.attr.movement_speed}\n`
			captionx += `Physical attack : ${datax.result.attr.physical_attack}\n`
			captionx += `Magic power : ${data.resultx.attr.magic_power}\n`
			captionx += `Physical defense : ${datax.result.attr.physical_defense}\n`
			captionx += `Magic defense : ${datax.result.attr.magic_defense}\n`
			captionx += `Critical rate : ${datax.result.attr.basic_atk_crit_rate}\n`
			captionx += `Hp : ${datax.result.attr.hp}\n`
			captionx += `Mana : ${datax.result.attr.mana}\n`
			captionx += `Mana regen : ${datax.result.attr.mana_regen}\n`
			dans.sendMessage(from, { image: { url: datax.result.icon }, captionx })
			//} catch {
			//m.reply('Error')
			//}
			break
            case 'spotify':
if(!text) return m.reply('_Masukan Judul_')
try{
const spo = await fetchJson (`https://api.lolhuman.xyz/api/spotifysearch?apikey=ardanfajars&query=${text}`)
const spot = spo.result[0]
const teks = `*Spotify Play*\n\n*Judul:* ${spot.title}\n*Artist:* ${spot.artists}\n*Popularitas:*  ${spot.popularity}\n*Link:* ${spot.link}\n\n _File Audio Sedang Dikirim_`
  m.reply(teks)
const spo2 = await fetchJson (`https://api.lolhuman.xyz/api/spotify?apikey=ardanfajars&url=${spot.link}`)
dans.sendMessage(m.chat, {
                    audio: {
                        url: spo2.result.link
                    },
                    mimetype: 'audio/mpeg',
                    fileName: `${spot.title}.mp3`
                }, {
                    quoted: m
                })
} catch {
m.reply(`_Terjadi Kesalahan_`)
}
break
            case 'randomemail':
	try{
			const angku = [1,2,3,4,5,6,7,8,9,0]
			angku1 = angku[Math.floor(Math.random() * angku.length)]
			angku2 = angku[Math.floor(Math.random() * angku.length)]
			angku3 = angku[Math.floor(Math.random() * angku.length)]
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/nama?apikey=ardanfajars`)
			let [kes1, kes2] = data.result.split` `
			email = `*Random Email*\n\n*Nama:* ${data.result}\n*Email:* ${kes1}${kes2}${angku1}${angku2}${angku3}@gmail.com\n\n`
			m.reply(email)
			} catch {
			m.reply(`_gagal membuat_`)
			}
			break
            case 'hoax':
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=ardanfajars`)
			var textu = 'Info Hoax :\n'
			for (var x of data.result) {
				textu += `Title : ${x.title}\n`
				textu += `Link : ${x.link}\n`
				textu += `Posted : ${x.posted}\n`
				textu += `Description : ${x.desc}\n\n`
			}
			m.reply(textu)
			break
            case 'shopee':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} tas gendong`)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/shopee?apikey=ardanfajars&query=${text}`)
			var texto = 'Shopee Search : \n'
			for (var x of data.result) {
				texto += `Name : ${x.name}\n`
				texto += `Terjual : ${x.sold}\n`
				texto += `Stock : ${x.stock}\n`
				texto += `Lokasi : ${x.shop_loc}\n`
				texto += `Link : ${x.link_produk}\n\n`
			}
			m.reply(texto)
			break
            case 'randomnama':
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/nama?apikey=ardanfajars`)
			m.reply(data.result)
			break
case 'stickerwa':
			if (args.length == 0) return m.reply(`Example: ${prefix + command} patrick`)
			axios.get(`https://api.lolhuman.xyz/api/stickerwa?apikey=ardanfajars&query=${text}`).then(({ data }) => {
				let pack = data.result[Math.floor(Math.random() * data.result.length)]
				let sticker = pack.stickers[Math.floor(Math.random() * pack.stickers.length)]
        console.log(sticker)
				dans.sendImageAsSticker(m.chat, sticker, m, {
                        packname: 'By.DansBot',
                        author: pushname
                    })
			})
			break
case 'readqr':
                try {
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anu = await TelegraPh(media)
                    const hsl = await fetchJson(`https://api.lolhuman.xyz/api/read-qr?apikey=ardanfajars&img=${anu}`)
                    m.reply(hsl.result)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break
				
				case 'facedetect':
                try {
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anu = await TelegraPh(media)
                    //const hsl = await fetchJson(`https://api.akuari.my.id/other/removebg?link=${anu}`)
                    dans.sendImage(m.chat, `https://api.lolhuman.xyz/api/facedetect?apikey=ardanfajars&img=${anu}`, `_Nih Kak_`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break

case 'chat':
                //try {
				if(!text) return m.reply('_Masukan Teks!_')
            mee = m.sender
            let [kes1, kes2] = mee.split`@`
            const kuii = `${kes1}@g.us`
            console.log(kuii)
				//try {
                  //  ppuser = await dans.profilePictureUrl(m.sender, 'image')
                //} catch {
                   // ppuser = 'https://tinyurl.com/yx93l6da'
                //}
           // console.log("download profile picture from: " + ppuser)
           // const aass = getBuffer(ppuser)
            //dans.sendMessage(m.chat, { image: { url: ppuser }, caption: `Welcome To ` })
            //m.reply(m.sender)
            //console.log(m.sender)
           // m.reply(ppuser)
            //var { datanus } = await axios.get(ppuser, { responseType: "arraybuffer" })
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    //let media = await dans.downloadAndSaveMediaMessage(ppuser)
                    //let anu = await TelegraPh(ppuser)
            //console.log(anu)
            //dans.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bubblechat?apikey=ardanfajars&avatar=https://tinyurl.com/yx93l6da&name=${pushname}&text=${text}` }, caption: `Welcome To ` })
					await dans.sendImageAsSticker(m.chat, `https://api.lolhuman.xyz/api/bubblechat?apikey=ardanfajars&avatar=https://tinyurl.com/yx93l6da&name=${pushname}&text=${text}`, m, {
                        packname: 'By.DansBot',
                       author: pushname
                 })
                //.} catch {
                 //   m.reply('_Terjadi Kesalahan Saat Memproses_')
               // }
                break
            
///endlolhuman



            
            ///random dari hp
        case 'imagga':
				//try
				{
				const mediaData = await dans.downloadAndSaveMediaMessage(qmsg)
				//const filePath = '/path/to/image.jpg';
				const formData = new BodyForm();
				formData.append('images', fs.createReadStream(mediaData));
				const response = await got.post('https://api.imagga.com/v2/uploads', {body: formData, username: apiKeyimaga, password: apiSecretimaga});
				console.log(response.body.status.text);
				//} catch {
				//m.reply('error')
				}
				break
				case 'imaggaa':
				//try
				{
				const mediaData = await dans.downloadAndSaveMediaMessage(qmsg)
				let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anu = await TelegraPh(media)
				const imageUrl = anu
				const url = 'https://api.imagga.com/v2/tags?image_url=' + encodeURIComponent(imageUrl);
				const response = await got(url, {username: apiKeyimaga, password: apiSecretimaga});
				console.log(response.body);
				//} catch {
				//m.reply('error')
				}
				break
            case 'tesout':
				//try
        {
				
				 const sections = [
    {
	title: "Section 1",
	rows: [
	    {title: "Option 1", rowId: "option1"},
	    {title: "Option 2", rowId: "option2", description: "This is a description"}
	]
    },
   {
	title: "Section 2",
	rows: [
	    {title: "Option 3", rowId: "option3"},
	    {title: "Option 4", rowId: "option4", description: "This is a description V2"}
	]
    },
]

const listMessage = {
  text: "This is a list",
  footer: "nice footer, link: https://google.com",
  title: "Amazing boldfaced list title",
  buttonText: "Required, text on the button to view the list",
  sections
}

const sendMsg = await dans.sendMessage(m.chat, listMessage)
			//	} catch {
			//	m.reply('error')
				}
				break
            
            case 'captcha':
            try {
					pp = await fetchJson(`https://api.caliph.biz.id/api/captchagen?apikey=caliphkey`)
					dans.sendImage(m.chat, pp.result.image_url, `_${pp.result.text}_`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break
				
								case 'fakewa2':
                try {
				if(!text) return m.reply('_Masukan Teks!_\n\n contoh : !chat2 dans&+62 xxx-xxxx-xxx&teks')
            mee = m.sender
            let [nama, nomer, ucap] = text.split`&`
			dans.sendImage(m.chat, `https://api.caliph.biz.id/api/fakechat/wa?name=${nama}&text=${ucap}&num=${nomer}&apikey=caliphkey`, `_Nih kak_`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break
				case 'fakewa':
                try {
				if(!text) return m.reply('_Masukan Teks!_\n\n contoh : !fakewa dans&+62 xxx-xxxx-xxx&teks')
            mee = m.sender
            let [nama, nomer, ucap] = text.split`&`
                           
					await dans.sendImageAsSticker(m.chat, `https://api.caliph.biz.id/api/fakechat/wa?name=${nama}&text=${ucap}&num=${nomer}&apikey=caliphkey`, m, {
                        packname: 'By.DansBot',
                       author: pushname
                 })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break
            case 'ppcouple':
            try {
					pp = await fetchJson(`https://api.caliph.biz.id/api/ppcouple?apikey=caliphkey`)
					cwe = pp.cewe
					cwo = pp.cowo
					dans.sendImage(m.chat, cwo, `_Male_`, m)
					dans.sendImage(m.chat, cwe, `_Female_`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break
            case 'jadianime22':
                //try {
				{
				let { jadianimex } = require('./lib/jadianimx')
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
          let anux = await TelegraPh(media)
                    let anu = await jadianimex(media)
					console.log(anu)
					//m.reply(`_Memproses..._`)
                    //const hsl = await fetchJson(`https://api.zahwazein.xyz/photoeditor/jadianime?url=${anu}&apikey=${zahkeyja}`)
					//dans.sendImage(m.chat, `https://api.zahwazein.xyz/photoeditor/jadianime?url=${anu}&apikey=${zahkeyja}`, `_Nih Kak_`, m)
                //} catch {
                  //  m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break
            case 'jadianimx':
				//try
            {
				let media = await dans.downloadAndSaveMediaMessage(qmsg)
          let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
          res = await TelegraPh(media)
anu = jadianime.JadiAnime(`${res}`).then( res => (
dans.sendMessage(m.chat, { image: { url: res.img }, caption: '⭔ nih' }, { quoted: m })
))
				//let imani = await JadiAnime(media)
				//console.log(imani)
				//} catch {
				// m.reply('_Terjadi Kesalahan Saat Memproses_')
				}
				break
            case 'chat2':
                try {
				if(!text) return m.reply('_Masukan Teks!_\n\n contoh : !chat2 dans&teks')
            mee = m.sender
            let [nama, ucap] = text.split`&`
                           
					await dans.sendImageAsSticker(m.chat, `https://api.lolhuman.xyz/api/bubblechat?apikey=ardanfajars&avatar=https://tinyurl.com/yx93l6da&name=${nama}&text=${ucap}`, m, {
                        packname: 'By.DansBot',
                       author: pushname
                 })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break
           case 'tebak':
				//try{
				
currentQuestionIndex = 0;
            const currentQuestion = questions[currentQuestionIndex];
            const messageText = `${currentQuestion.question}\n\n${currentQuestion.choices.join('\n')}`;
            m.reply(messageText)
       if (currentQuestionIndex >= 0) { // jika sedang dalam kuis
            const currentQuestion = questions[currentQuestionIndex];
            if (msg === currentQuestion.correctAnswer.toLowerCase()) {
                const messageText = 'Correct answer!🎉';
                m.reply(messageText)
            } else {
                const messageText = 'Wrong answer!😞';
                m.reply(messageText)
            }
            currentQuestionIndex++;
            if (currentQuestionIndex >= questions.length) { // jika sudah selesai
                currentQuestionIndex = -1;
                const messageText = 'Quiz has ended. Thank you for participating!🙂';
                m.reply(messageText)
            } else { // jika masih ada pertanyaan
                const nextQuestion = questions[currentQuestionIndex];
                const messageText = `${nextQuestion.question}\n\n${nextQuestion.choices.join('\n')}`;
                m.reply(messageText)
            }
        }
		
		
		
				
				
				//} catch {
				//m.reply('error')
				//}
				break
            
            case 'warnai':
                //try {
				{
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
   // const decryptedMedia = await decryptMedia(media, null, true);
					//if (decryptedMedia.mimetype.includes('image')) {
					const image = await loadImage(media);
					const canvas = createCanvas(image.width, image.height);
					const ctx = canvas.getContext('2d');

					// Memodifikasi gambar dengan mewarnai
					// Memodifikasi gambar dengan mewarnai
      ctx.drawImage(image, 0, 0);
      ctx.globalCompositeOperation = 'color';
      ctx.globalAlpha = 0.7;
      ctx.fillStyle = '#ffffff'; // Warna yang digunakan untuk mewarnai
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'destination-atop';
      ctx.drawImage(image, 0, 0);


					const imageBuffer = canvas.toBuffer();
					const imageMessage = dans.sendImage(m.chat, imageBuffer, `_Nih Kak_`, m)
        //  }
              //  } catch {
               //     m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break

          case 'buaemail':{
            //dans.sendMessage(m.chat, `Please provide your Gmail credentials for ${BOT_NAME}:`);
            const angku = [1,2,3,4,5,6,7,8,9,0]
			angku1 = angku[Math.floor(Math.random() * angku.length)]
			angku2 = angku[Math.floor(Math.random() * angku.length)]
			angku3 = angku[Math.floor(Math.random() * angku.length)]
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/random/nama?apikey=ardanfajars`)
			let [kes1, kes2] = data.result.split` `
			email = `${kes1}${kes2}${angku1}${angku2}${angku3}@gmail.com`
             const password = 'dans12345'
            m.reply(email)
            //const email = await dans.prompt(m.chat, 'Email');
            //const password = await dans.prompt(m.chat, 'Password');

            // Create a new Gmail account
            try {
                await createGmailAccount(email, password);
                m.reply(`Gmail account created for ${BOT_NAME}!`);
            } catch (err) {
                console.error(`[${BOT_NAME}] Error creating Gmail account:`, err);
                m.reply(`Error creating Gmail account for ${BOT_NAME}: ${err.message}`);
            }
          }
            break
            case 'changelog':
try{
  teks = `_*Changelog Bot*_
  
  *_• 14 April 2023_*
  *_• 16 April 2023_*
  *_• 24 April 2023_*
  *_• 26 April 2023_*
  - penambahan beberapa fitur
  - perbaikan

  *_• 30 April 2023_*
  - penambahan snack (downloader)

  *_• 5 Mei 2023_*
  - penambahan carbon
  - penambahan hackanonym

    *_• 15 Mei 2023_*
  - perbaikan instagram Downloader
  - perbaikan jadianime
  - ...

@DansBot`
teks2 = `_*Changelog Bot*_

  _*Terbaru*_
  
  *_• 17 Juli 2023_*
  - add !character
  - add !manga
  - add !anime
  - ...
  *==========================*


  *==========================*
  
  *_• 14 April 2023_*
  - add hoax
  - add stickerwa
  - add randomnama
  - add randomemail
  - add chat
  - add facedetect
  - add readqr
  - add changelog
  - add spotify
  - Fix some bugs
  *Change Number*

  *_• 16 April 2023_*
  - add ytsearch
  - add jadwaltvnow
  - add jadwaltv
  - add getoriurl
  - add ttp2
  - bioskopnow
  - kisahmuslim
  - toonme
  - jadianime
  - Fix some bugs

  *_• 24 April 2023_*
  - removed eid countdown in menu
  - removed jadianime
  - Fix some bugs

  *_• 26 April 2023_*
  - add jadianime
  - add captcha
  - add ppcouple
  - add chat2
  - add fakewa
  - add fakewa2
  - fix gimage

  *_• 30 April 2023_*
  - add snack (downloader)

  *_• 5 Mei 2023_*
  - add carbon
  - hackanonym

    *_• 15 Mei 2023_*
  - fix instagram Downloader
  - fix jadianime
  - penambahan kartun
  - penambahan pensil

    *_• 8 Juni 2023_*
  - instagram Downloader Error
  - fix fitur ai
  - fix jadianime

  *_• 28 Juni 2023_*
  - instagram Downloader fix
  - fix jadianime
  - add infoweb

  *_• 15 Juli 2023_*
  - fix tiktok
  - fix ai
  - fix draw
  - fix tts
  - fix nulis
  - fix autodown
  - delete toonme

  *_• 17 Juli 2023_*
  - add !character
  - add !manga
  - add !anime
  - ...
@DansBot`
  m.reply(teks2)
} catch {
m.reply('_gagal mendapat informasi_')
}
break
            case 'tikcoba': {
               hx.igdl(text)
    .then(result => {
     console.log(result)
});
            }
            break
          
          case 'tts':
                if (!text) return m.reply('_masukan bahasa dan teks_\ncontoh : !tts id|dansbot\n\nbahasa :https://id.wikipedia.org/wiki/Daftar_bahasa_menurut_ISO_639-2')
               bahasa = text.split('|')[0] ? text.split('|')[0] : '-'
                
                teksnyi = text.split('|')[1] ? text.split('|')[1] : '-'
                 if (!teksnyi) return m.reply('_masukan teks\ncontoh : !tts id|dansbot_')
                try {
                    dans.sendMessage(m.chat, {
                        audio: {
                            url: `https://api.lolhuman.xyz/api/gtts/${bahasa}?apikey=${lolkey}&text=${teksnyi}`
                        },
                        mimetype: 'audio/mpeg',
                        fileName: `tts_dansbot.mp3`
                    }, {
                        quoted: m
                    })
                } catch {
                    m.reply(`_Terjadi Kesalahan_`)
                }
                break
            
          case 'tts2':
                if (!text) return m.reply('_Masukan Teks_')
                try {
                    dans.sendMessage(m.chat, {
                        audio: {
                            url: `https://api.lolhuman.xyz/api/gtts/id?apikey=${lolkey}&text=${text}`
                        },
                        mimetype: 'audio/mpeg',
                        fileName: `tts_dansbot.mp3`
                    }, {
                        quoted: m
                    })
                } catch {
                    m.reply(`_Terjadi Kesalahan_`)
                }
                break
            case 'ssweb':
                if (!text) return m.reply('_Masukan Teks Yang Ingin Discreenshot_')
                try {
                    dans.sendImage(m.chat, `https://saipulanuar.ga/api/download/ssweb?url=${text}`, 'Done', m)
                } catch {
                    m.reply(`_Terjadi Kesalahan_`)
                }
                break
            case 'qrcode':
                if (!text) return m.reply('_Masukan Teks Yang Ingin Dibuat QRCode_')
                try {
                    dans.sendImage(m.chat, `https://api.akuari.my.id/other/qrcode?text=${text}`, 'Done', m)
                } catch {
                    m.reply(`_Terjadi Kesalahan Saat Membuat QRCode_`)
                }
                break

            case 'snobg':
                //try 
                {
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anu = await TelegraPh(media)
                  m.reply(tunggu)
                  console.log(anu)
                    //const hsl = await fetchJson(`https://api.caliph.biz.id/api/removebg?img=${anu}&apikey=caliphkey`)
                  //let media2 = await dans.downloadAndSaveMediaMessage(hsl)
                 // let anu2 = await TelegraPh(media2)
                 // console.log(anu2)
                  //const bk = await getBuffer(hsl)
                    await dans.sendImageAsSticker(m.chat, `https://api.caliph.biz.id/api/removebg?img=${anu}&apikey=caliphkey`, m, {
                        packname: 'By.DansBot',
                        author: pushname
                    })
                //} catch {
                    //m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break
            case 'removebg':
          case 'nobg':
                try {
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anu = await TelegraPh(media)
                  m.reply(tunggu)
                     // const hsl = await fetchJson(`https://api.caliph.biz.id/api/removebg?img=${anu}&apikey=caliphkey`)
                    dans.sendImage(m.chat, `https://api.caliph.biz.id/api/removebg?img=${anu}&apikey=caliphkey`, `_Nih Kak_`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break
                ////shortlink
            case 'tinyurl':
                try {
                    if (!text) return m.reply('_Masukan Link Yang Ingin Dipendekkan_')
                    const tin = await fetchJson(`https://api.akuari.my.id/short/tinyurl?link=${text}`)
                    teksnya = `*TINYURL SHORTLINK*\n\n*Link :* ${text}\n*Result :* ${tin.hasil}\n`
                    m.reply(teksnya)
                } catch {
                    m.reply(`_Terjadi Kesalahan Pada Sistem_`)
                }
                break
                ///////MENU///////
            case 'list':
            case 'menu':
            case 'help':
            case '?': {
                const puasa = new Date('april 20, 2023 17:00:00')
                const ayeuna = new Date().getTime()
                const ceIroh = puasa - ayeuna
                const hahari = Math.floor(ceIroh / (1000 * 60 * 60 * 24));
                const hajam = Math.floor(ceIroh % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
                const hamenit = Math.floor(ceIroh % (1000 * 60 * 60) / (1000 * 60))
                const hadetik = Math.floor(ceIroh % (1000 * 60) / 1000)
                rama = `${hahari} 𝑯𝒂𝒓𝒊 ${hajam} 𝑱𝒂𝒎 ${hamenit} 𝑴𝒆𝒏𝒊𝒕 ${hadetik} 𝑫𝒆𝒕𝒊𝒌`
                timezone = "Asia/Jakarta"
                const salam = moment(Date.now()).tz(timezone).locale('id').format('a')
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                hostname = os.hostname()
                plat = os.platform()
                let timestamp = speed()
                let latensii = speed() - timestamp
                speeds = latensii.toFixed(4)
                memor = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
                let dnew = new Date(new Date + 3600000)
                runtimes = runtime(process.uptime())
                let week = dnew.toLocaleDateString('id', {
                    weekday: 'long'
                })
                let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
                let date = dnew.toLocaleDateString('id', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                })
                let dateIslamic = Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                }).format(dnew)

                anu = `Hai 👋,Selamat ${salam} Kak *${pushname}* , Perkenalkan aku DansBot.

=======================
- - - *Info Bot* - - -
*Nama Bot :* DansBot
*Speed :* ${speeds} Second
*CPU :* ${cpus.length} Core CPU (${cpus[0].model.trim()})
*Memory Used :* ${memor}
*Hostname :* DansPC
*Platform :* ${plat}
*Runtime :* ${runtimes}
*last Update:* 15/6/23
=======================
*Hari :* ${week} ${weton}
*Tanggal :* ${date}		
*Hijriah :* ${dateIslamic}

=======================
*=======================*

- - - _*advertisement*_  - - -

- Youtube Premium 4 bulan *15k*
- Sewa Bot *Bayar Seikhlasnya*
chat wa.me/6288983554021
*=======================*
=======================

menunya:

✦ *Changelog* ✦
!changelog

✦ *Sticker menu* ✦
!sticker
!stickerwm
!snobg
!smeme
!ttp
!ttp2
!stickerwa
!chat
!chat2
!fakewa

✦ *Photo Editor* ✦
!jadianime
!kartun
!pensil

✦ *Tools* ✦
!carimusik 
!tts
!ssweb
!removebg
!qrcode
!readqr
!facedetect 
!toindo 
  (translate ke Indonesia)
!toing
  (translate ke Inggris)
!getoriurl
!infoweb

✦ *Download* ✦
!ytsearch
!ytmp3
!ytmp4
!audio
!video
!tiktok
!tiktokaudio
!instagram
!twitter
!cocofun
!spotify
!snack
!autodown2 on/off
 (fitur otomatis download dari link tiktok,instagram,youtube)

✦ *Artificial Intelligence (AI)* ✦
!ai
!catatanbelajar
!buatulasan
!draw

✦ *Search* ✦
!wikipedia
!lirik

✦ *Information* ✦
!hoax
!jadwaltv
!jadwaltvnow
!bioskopnowk
!character
!manga
!anime

✦ *Islami* ✦
!alaudio
!alayat
!randomayat
!js (jadwal sholat)
!kisahnabi
!iqra
!renungan
!kisahmuslim

✦ *Random Teks* ✦
!katabijak
!katailham
!bacot
!sindiran
!fakta
!pantunpakboy
!cerpen
!candaan 
!katasenja
!quotesbucin
!quotesgalau
!quotesjawa
!randomnama
!randomemail

✦ *image* ✦
!image
!pinterest
!darkjoke
!darkmeme
!nulis (teks)
!dadu
!ijoke
!ppcouple

✦ *image Maker* ✦
!carbon
!hackanonym

✦ *Asupan Foto* ✦
!indonesia
!malaysia
!korea
!jepang
!china

✦ *Asupan video* ✦
!chika
!rikagusriani
!bocil
!geayubi
!santuy
!ukhty
!asupan
!delvira
!ayu
!bunga
!aura
!nisa
!ziva
!yana
!viona
!syania
!riri
!syifa
!mama_gina
!alcakenya
!mangayutri 

✦ *Convert* ✦
!halah
!hilih
!huluh
!heleh
!holoh

✦ *Primbon Menu* ✦
!nomorhoki
!artimimpi
!artinama
!ramaljodoh
!ramaljodohbali
!suamiistri
!ramalcinta
!cocoknama
!pasangan
!jadiannikah
!sifatusaha
!rezeki
!pekerjaan
!nasib
!penyakit
!tarot
!fengshui
!haribaik
!harisangar
!harisial
!nagahari
!arahrezeki
!peruntungan
!weton
!karakter
!keberuntungan
!memancing
!masasubur
!zodiak
!shio

✦ *grub* ✦
!simih on/off
  ⤷ Chat Dengan SimSimi
!autodown on/off
  ⤷ Auto Download Video/Foto dari tiktok
    ⤷ _(tiktok,Instagram,Youtube)_


✦ *TextPro* ✦
!neon-love
!led
!3dgolden
!christmas
!3drainbow
!halloweenskeleton
!magma
!space
!transformer
!thunder
!cinematichorror
!summer
!summer2
!business
!lightglow
!batman
!sketch


=======================
    _Bot Masih dalam Pengembangan, Jika Menemukan error pada bot Silakan lapor Ke Owner Bot Dengan cara "!report (laporan kamu)"_
*Terima kasih*

*Peringatan*
_Semua Data Yang Dikirimkan Kepada Bot Atau Dari Bot Bukan Merupakan Tanggung Jawab Owner Bot & Semua Data Yang Dikirim Tidak Akan Disimpan Pada Database Bot._͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
...........
sc : hisoka
recode : Ardan
...........


				`
                m.reply(anu)
            }
            break
            case 'balas': {
                if (!isCreator) throw mess.owner
                a = args.join(' ')
                if (!a) return reply('Masukan Parameter\n.balas no|balasan')
                b = a.split('|')[0]
                cok = a.split('|')[1]
                teks = `*Report Reply Notification*\n\n\n_"${cok}"_`
                dans.sendMessage(b, {
                    text: teks
                })
                m.reply(`sukses mengirim`)
            }
            break
            case 'balas2': {
                if (!isCreator) throw mess.owner
                a = args.join(' ')
                if (!a) return reply('Masukan Parameter\n.balas no|balasan')
                b = a.split('|')[0]
                cok = a.split('|')[1]
                //teks = `*Pesan Dari owner*\n\n\n_"${cok}"_`
                dans.sendMessage(b, {
                    text: cok
                })
                m.reply(`sukses mengirim`)
            }
            break
            case 'listgc': {
                let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                for (let i of anu) {
                    let metadata = await dans.groupMetadata(i)
                    teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                }
                dans.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await dans.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await dans.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await dans.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'report':
            case 'lapor': {
                if (!text) return m.reply(`Masukan laporan kamu`)
                m.reply(`Berhasil Mengirim Laporan Ke Owner Bot`)
                teks = `*Ada Laporan Bos*\n\n*Dari :* ${m.sender}\n*Nama :* ${pushname}\n\n\n\n${text}`
              teks2 = `Ada Laporan Bos\n\nDari : ${m.sender}\nNama : ${pushname}\n\n\n\n${text}`
              const lpr = await fetchJson(`https://api.telegram.org/bot6233235874:AAFfZ2jlfaa2bOt5YNwXrJT0SvfBAHrsbLU/sendMessage?chat_id=1177315536&text=${teks2}`)
                dans.sendMessage('120363148595770229@g.us', {
                    text: teks
                })
            }
            break
            case 'ping':
        case 'p': 
		{	
			const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `
            m.reply(`*pong!!*\n\nKecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server\n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${respon}`)
		}
                break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                dans.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break

                /// convert
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                let media = await dans.downloadMediaMessage(qmsg)
                let {
                    toAudio
                } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                dans.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })
            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
                m.reply(mess.wait)
                let media = await dans.downloadMediaMessage(qmsg)
                let {
                    toAudio
                } = require('./lib/converter')
                let audio = await toAudio(media, 'mp4')
                dans.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mpeg',
                    fileName: `Convert By ${dans.user.name}.mp3`
                }, {
                    quoted: m
                })
            }
            break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await dans.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    dans.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'tourl': {
                m.reply(mess.wait)
                let {
                    UploadFileUgu,
                    webp2mp4File,
                    TelegraPh,
                  floNime
                } = require('./lib/uploader')
                let media = await dans.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                  console.log(anu)
                    //m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            //pendaftaran
            case 'register':
                if (isRegistered) return await m.reply(`Kamu Sudah Terdaftar`)
                //if (!text.includes('|')) return await piyo.sendFile(from, './media/register.png' , id)
                if (!text) return m.reply(`!daftar Nama|Umur|Asal\n\nContoh : !daftar Ardan|19|Klaten\n\n\n_Harap isi Dengan Benar_`)
                a = args.join(' ')
                nama = a.split('|')[0]
                umur = a.split('|')[1]
                if (!umur) return m.reply('Masukan Umur')
                asal = a.split('|')[2]
                if (!asal) return m.reply('Masukan Asal')
                const dataDiri = text.split('|').join('-')
                const datane = {
                    id: serial,
                    data: dataDiri
                }
                _registered.push(m.sender)
                _biodata.push(datane)
                addATM(serial)
                addATMkoin(serial)
                fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
                fs.writeFileSync('./database/biodata.json', JSON.stringify(_biodata))
                m.reply(`*Selamat Anda Sekarang Terdaftar Pada Sistem Bot*\n\nDengan data\nNama : ${nama} \nUmur : ${umur} \n Asal : ${asal}\n\n\n`)
                break

            case 'cekregister':
                try {
                    const aa = cekuser(serial)
                    console.log(aa)
                    nama = aa.split('-')[0]
                    umur = aa.split('-')[1]
                    asal = aa.split('-')[2]
                    if (isRegistered) return await m.reply(`*Kamu Telah Terdaftar*\n\nDengan data:\n*Nama :* ${nama} \n*Umur :* ${umur} \n *Asal :* ${asal}\n\n\n`)

                } catch {
                    m.reply(`*Kamu Belum Terdaftar*`)
                }
                break
                ///peruangan
            case 'tukarkoin': {
                m.reply(`Pengembangan`)
            }
            break
            case 'kelaimkoine': {
                pengurang = "1000"
                const awal = checkATMuser2(serial)
                jumlahe = -1000
                addKoinUser2(serial, jumlahe)

                teks = `*Koin kamu Berhasil Ditambahkan _1000_ Dari Bonus Pembelian*\n\n\n*Koin awal :* Rp${awal}\n*Koin Sekarang :* Rp.${checkATMuser2(serial)}\n\n_Tukarkan Koin Kamu per 1000 koin Menjadi Uang Rp.500_\n\n`
                dans.sendMessage(serial, {
                    text: teks
                })
            }
            break
            case 'tambahuang': {
                if (!isCreator) return m.reply(`Anda Siapa`)
                nomere1 = text.split('|')[0]
                nomere = `${nomere1}@s.whatsapp.net`
                jumlahe1 = text.split('|')[1]
                jumlahe = `-${jumlahe1}`
                addKoinUser(nomere, jumlahe)
                const awal = checkATMuser(nomere) - jumlahe1
                teks = `*Saldo kamu Berhasil Ditambahkan _Rp.${jumlahe1}_*\n\n*Dari :* Admin\n*Saldo awal :* Rp${awal}\n*Saldo Sekarang :* Rp.${checkATMuser(nomere)}`
                tekss = `*Saldo Berhasil Ditambahkan _Rp.${jumlahe1}_*\n\n*Dari :* Admin\n*Saldo awal :* Rp.${awal}\n*Saldo Sekarang :* Rp.${checkATMuser(nomere)}`
                dans.sendMessage(nomere, {
                    text: teks
                })
                dans.sendMessage('6281215389681@s.whatsapp.net', {
                    text: tekss
                })
            }
            break

            case 'kuranguang': {
                if (!isCreator) return m.reply(`Anda Siapa`)
                nomere1 = text.split('|')[0]
                nomere = `${nomere1}@s.whatsapp.net`
                jumlahe = text.split('|')[1]
                confirmuang(nomere, jumlahe)
            }
            break

            case 'bal':

                const kantong = checkATMuser(serial)
                const kantong2 = checkATMuser2(serial)
                m.reply(`Halo ${pushname}, Kamu Memiliki Uang Sejumlah Rp. ${kantong}\n\nDan Kamu Memiliki Koin Sebanyak Rp. ${kantong2}`)
                break

                ////tokodansbot
            case 'store': {
                const sections = [{
                        title: "Youtube Premium",
                        rows: [{
                                title: "2 Bulan",
                                rowId: "ytprem2"
                            },
                            {
                                title: "4 Bulan",
                                rowId: "ytprem4",
                                description: "Nikmati Nonton Video Tanpa iklan Dengan youtube Premium"
                            }
                        ]
                    },
                    {
                        title: "Nomer Verifikasi Whatsapp",
                        rows: [{
                                title: "Indonesia (+62)",
                                rowId: "indonowa",
                                description: "Jasa OTP Whatsapp nomer indonesia"

                            },

                            {
                                title: "Indonesia (+62)",
                                rowId: "indonoemail",
                                description: "Jasa OTP email nomer indonesia"

                            },
                            {
                                title: "Indonesia (+62)",
                                rowId: "indonograb",
                                description: "Jasa OTP Grab nomer indonesia"

                            }
                        ]
                    },
                    {
                        title: "Follower Instagram",
                        rows: [{
                            title: "coming soon",
                            rowId: "option4",
                            description: "Akan datang "
                        }]
                    },
                ]

                const listMessage = {
                    text: "produk kami",
                    footer: "Silakan Dipilih-Pilih",
                    title: "DANS STORE",
                    buttonText: "Produk",
                    sections
                }
                dans.sendMessage(m.chat, listMessage, {
                    quoted: m
                })
            }
            break
            case 'indonowa': {
                teks = `*Jasa Verifikasi Nomer Whatsapp Indonesia*\n\n*-Dapat Nomer Indonesia*\n*-Aman*\n*-Garansi jika Nomer Tidak Bisa Login*\n\nHanya *Rp.5000/OTP*\n\n\n`
                let buttons = [{
                        buttonId: `indonowaoke1`,
                        buttonText: {
                            displayText: 'Beli Sekarang'
                        },
                        type: 1
                    }

                ]
                let buttonMessage = {
                    image: {
                        url: 'https://assets.p-store.net/images/products/59761-1.png'
                    },
                    caption: teks,
                    footer: `DanStore`,
                    buttons: buttons,
                    headerType: 4
                }
                dans.sendMessage(m.chat, buttonMessage, {
                    quoted: m
                })
            }
            break
            case 'indonowaoke1': {
                teks = `Konfirmasi Sekali Lagi\n`
                let buttons = [{
                    buttonId: `indonowaoke`,
                    buttonText: {
                        displayText: 'beli'
                    },
                    type: 1
                }, ]
                await dans.sendButtonText(m.chat, buttons, teks, `DanStore`, m)

            }
            break
            case 'indonowaoke': {
                if (!isRegistered) return m.reply(`*Kamu Belum Terdaftar Di Database Bot Untuk Melanjutkan Pembelian*`)
                const koinPerlimit = 1500 //Silahkan Custom Sendiri Price BuyLimit
                const total = 5000
                if (checkATMuser(serial) <= total) return m.reply(`Wadidaw, Uangmu Tidak Cukup, Silakan Isi Saldomu Terlebih dahulu dengan menghubungi owner`)
                if (checkATMuser(serial) >= total) {
                    confirmuang(serial, total)
                    tekss = `*Ada Pesanan Bos*\n\n*Dari :* ${m.sender}\n*Nama :* ${pushname}\n\n\n\nWa Indo`
                    dans.sendMessage('6281215389681@s.whatsapp.net', {
                        text: tekss
                    })
                    teks = `*「 PEMBAYARAN BERHASIL 」*\n\n❏ *pengirim* : Admin\n❏ *Produk* : OTP WA Indonesia\n❏ *Harga* : ${total} \n❏ *sisa uang mu* : Rp. ${checkATMuser(serial)}\n\n*proses berhasil*\n\n\n_Silakan tunggu Nomor Dikirim_\nTerima kasih\n\n\n Jam Proses : 09:00-20:00`
                    m.reply(teks)
                }
            }
            break
            case 'ytprem2': {
                teks = `*Youtube Premium 2 Bulan*\n\n*Bebas iklan, putar di latar*\nTonton video tanpa iklan, sambil menggunakan aplikasi lain, atau saat layar terkunci.\n\n*Dapat didownload*\nSimpan video untuk ditonton saat Anda sangat membutuhkannya – seperti saat di pesawat atau di jalan.\n\n*YouTube Music Premium*\nDownload aplikasi musik dan dengarkan tanpa gangguan.\n\n\nKuy Rasakan Menonton Youtube Tanpa Gangguan\n\nHanya *Rp.7000*\n\n\n`
                let buttons = [{
                        buttonId: `ytprem2oke`,
                        buttonText: {
                            displayText: 'Beli Sekarang'
                        },
                        type: 1
                    }

                ]
                let buttonMessage = {
                    image: {
                        url: 'https://telegra.ph/file/94c5fbea853602f1e2950.png'
                    },
                    caption: teks,
                    footer: `DanStore`,
                    buttons: buttons,
                    headerType: 4
                }
                dans.sendMessage(m.chat, buttonMessage, {
                    quoted: m
                })
            }
            break
            case 'ytprem4': {
                teks = `*Youtube Premium 4 Bulan*\n\n*Bebas iklan, putar di latar*\nTonton video tanpa iklan, sambil menggunakan aplikasi lain, atau saat layar terkunci.\n\n*Dapat didownload*\nSimpan video untuk ditonton saat Anda sangat membutuhkannya – seperti saat di pesawat atau di jalan.\n\n*YouTube Music Premium*\nDownload aplikasi musik dan dengarkan tanpa gangguan.\n\n\nKuy Rasakan Menonton Youtube Tanpa Gangguan\n\nHanya *Rp.12.000*\n\n\n`
                let buttons = [{
                        buttonId: `ytprem4oke`,
                        buttonText: {
                            displayText: 'Beli Sekarang'
                        },
                        type: 1
                    }

                ]
                let buttonMessage = {
                    image: {
                        url: 'https://telegra.ph/file/94c5fbea853602f1e2950.png'
                    },
                    caption: teks,
                    footer: `DanStore`,
                    buttons: buttons,
                    headerType: 4
                }
                dans.sendMessage(m.chat, buttonMessage, {
                    quoted: m
                })
            }
            break
            case 'ytprem2oke': {
                if (!isRegistered) return m.reply(`*Kamu Belum Terdaftar Di Database Bot Untuk Melanjutkan Pembelian*`)
                const koinPerlimit = 1500 //Silahkan Custom Sendiri Price BuyLimit
                const total = 7000
                if (checkATMuser(serial) <= total) return m.reply(`Wadidaw, Uangmu Tidak Cukup, Silakan Isi Saldomu Terlebih dahulu dengan menghubungi owner`)
                if (checkATMuser(serial) >= total) {
                    confirmuang(serial, total)
                    tekss = `*Ada Pesanan Bos*\n\n*Dari :* ${m.sender}\n*Nama :* ${pushname}\n\n\n\nProduk Yt Premium 2 Bulan`
                    dans.sendMessage('6281215389681@s.whatsapp.net', {
                        text: tekss
                    })
                    teks = `*「 PEMBAYARAN BERHASIL 」*\n\n❏ *pengirim* : Admin\n❏ *Produk* : Youtube Premium 2 Bulan\n❏ *Harga* : ${total} \n❏ *sisa uang mu* : Rp. ${checkATMuser(serial)}\n\n*proses berhasil*\n\n\n_Silakan tunggu Informasi Akun Dikirim_\nTerima kasih\n\n\n Jam Proses : 09:00-20:00`
                    let buttons = [{
                        buttonId: `kelaimkoine`,
                        buttonText: {
                            displayText: 'Klaim Gratis Koin'
                        },
                        type: 1
                    }, ]
                    await dans.sendButtonText(m.chat, buttons, teks, `DanStore`, m)
                }
            }
            break
            case 'ytprem4oke': {
                if (!isRegistered) return m.reply(`*Kamu Belum Terdaftar Di Database Bot Untuk Melanjutkan Pembelian*`)
                const koinPerlimit = 1500 //Silahkan Custom Sendiri Price BuyLimit
                const total = 12000
                if (checkATMuser(serial) <= total) return m.reply(`Wadidaw, Uangmu Tidak Cukup, Silakan Isi Saldomu Terlebih dahulu dengan menghubungi owner`)
                if (checkATMuser(serial) >= total) {
                    confirmuang(serial, total)
                    tekss = `*Ada Pesanan Bos*\n\n*Dari :* ${m.sender}\n*Nama :* ${pushname}\n\n\n\nProduk Yt Premium 4 Bulan`
                    dans.sendMessage('6281215389681@s.whatsapp.net', {
                        text: tekss
                    })
                    teks = `*「 PEMBAYARAN BERHASIL 」*\n\n❏ *pengirim* : Admin\n❏ *Produk* : Youtube Premium 4 Bulan\n❏ *Harga* : ${total} \n❏ *sisa uang mu* : Rp. ${checkATMuser(serial)}\n\n*proses berhasil*\n\n\n_Silakan tunggu Informasi Akun Dikirim_\nTerima kasih\n\n\n Jam Proses : 09:00-20:00`
                    let buttons = [{
                        buttonId: `kelaimkoine`,
                        buttonText: {
                            displayText: 'Klaim Gratis Koin'
                        },
                        type: 1
                    }, ]
                    await dans.sendButtonText(m.chat, buttons, teks, `DanStore`, m)
                }
            }
            break
            case 'tesbutdffgg': {
                teks = `*Jasa Verifikasi Email Indonesia*\n\n*-Dapat Nomer Indonesia*\n*-Aman*\n\nHanya *Rp.2000/OTP*\n\n\n`
                let buttons = [{
                        buttonId: `indonoemailoke1`,
                        buttonText: {
                            displayText: 'Beli Sekarang'
                        },
                        type: 1
                    }

                ]
                let buttonMessage = {
                    image: {
                        url: 'https://1.bp.blogspot.com/-mggZu-mUO_k/X5j-FQ5RfDI/AAAAAAAAHYE/o3MO4GLD4KQUJ1aDUQEMKdRoCCVNrJsjwCLcBGAsYHQ/s1000/logo%2Bgmail-01.png'
                    },
                    caption: teks,
                    footer: `DanStore`,
                    buttons: buttons,
                    headerType: 4
                }
                dans.sendMessage(m.chat, buttonMessage, {
                    quoted: m
                })
            }
            break
            case 'indonoemailoke1': {
                if (!isRegistered) return m.reply(`*Kamu Belum Terdaftar Di Database Bot Untuk Melanjutkan Pembelian*`)
                teks = `Konfirmasi Sekali Lagi\n*PERHATIAN* _Pesanan Tidak Dapat Dibatalkan_ `
                let buttons = [{
                    buttonId: `indonoemailoke`,
                    buttonText: {
                        displayText: 'beli'
                    },
                    type: 1
                }, ]
                await dans.sendButtonText(m.chat, buttons, teks, `DanStore`, m)

            }
            break
            case 'indonoemailoke': {
                try {
                    if (!isRegistered) return m.reply(`*Kamu Belum Terdaftar Di Database Bot Untuk Melanjutkan Pembelian*`)
                    const koinPerlimit = 2000 //Silahkan Custom Sendiri Price BuyLimit
                    const total = 2000
                    if (checkATMuser(serial) <= total) return m.reply(`Wadidaw, Uangmu Tidak Cukup, Silakan Isi Saldomu Terlebih dahulu dengan menghubungi owner`)
                    if (checkATMuser(serial) >= total) {
                        confirmuang(serial, total)
                        tekss = `*Ada Pesanan Bos*\n\n*Dari :* ${m.sender}\n*Nama :* ${pushname}\n\n\n\nemail`
                        dans.sendMessage('6281215389681@s.whatsapp.net', {
                            text: tekss
                        })
                        const order = await fetchJson(`https://kodeotp.org/api?api_key=c7ccfcb06673c20e80e2f8368c1560b9&action=get_number&country_id=6&service_id=go&operator=random&order_type=istimewa`)

                        teks = `*「 PEMBAYARAN BERHASIL 」*\n\n❏ *pengirim* : Admin\n❏ *Produk* : OTP Email Indonesia\n❏ *Harga* : ${total} \n❏ *sisa uang mu* : Rp. ${checkATMuser(serial)}\n\n*proses berhasil*\n*Nomer:* ${order.data.number}\n*Status :* ${order.data.status}\n\n\n\n_Silakan Untuk Memasukan Nomer Dan Klik Cek Otp dibawah_\n_*PESANAN TIDAK DAPAT DIBATALKAN JIKA SUDAH MENERIMA SMS*_ .\nTerima kasih\n\n\n Jam Proses : 24jam sesuai ketersediaan nomer`
                        const orderid = order.data.order_id

                        let buttons = [{
                                buttonId: `indonoemailcek ${orderid}`,
                                buttonText: {
                                    displayText: 'Cek OTP'
                                },
                                type: 1
                            },
                            {
                                buttonId: `indonoemailbatal ${orderid}`,
                                buttonText: {
                                    displayText: 'BATALKAN'
                                },
                                type: 1
                            },
                        ]
                        await dans.sendButtonText(m.chat, buttons, teks, `DanStore`, m)
                    }
                } catch {
                    m.reply(`_Sedang dalam proses restock, mohon tunggu sebentar._`)
                }
            }
            break
            case 'indonograb': {
                teks = `*Jasa Verifikasi Nomer Regis Grab Indonesia *\n\n*-Dapat Nomer Indonesia*\n*-Aman*\n\nHanya *Rp.2000/OTP*\n\n\n`
                let buttons = [{
                        buttonId: `indonograboke1`,
                        buttonText: {
                            displayText: 'Beli Sekarang'
                        },
                        type: 1
                    }

                ]
                let buttonMessage = {
                    image: {
                        url: 'https://seeklogo.com/images/G/grab-logo-7020E74857-seeklogo.com.png'
                    },
                    caption: teks,
                    footer: `DanStore`,
                    buttons: buttons,
                    headerType: 4
                }
                dans.sendMessage(m.chat, buttonMessage, {
                    quoted: m
                })
            }
            break

            case 'indonograboke1': {
                if (!isRegistered) return m.reply(`*Kamu Belum Terdaftar Di Database Bot Untuk Melanjutkan Pembelian*`)
                teks = `Konfirmasi Sekali Lagi\n*PERHATIAN* _Pesanan Tidak Dapat Dibatalkan_ `
                let buttons = [{
                    buttonId: `indonograboke`,
                    buttonText: {
                        displayText: 'beli'
                    },
                    type: 1
                }, ]
                await dans.sendButtonText(m.chat, buttons, teks, `DanStore`, m)

            }
            break
            case 'indonograboke': {
                if (!isRegistered) return m.reply(`*Kamu Belum Terdaftar Di Database Bot Untuk Melanjutkan Pembelian*`)
                const koinPerlimit = 2000 //Silahkan Custom Sendiri Price BuyLimit
                const total = 2000
                if (checkATMuser(serial) <= total) return m.reply(`Wadidaw, Uangmu Tidak Cukup, Silakan Isi Saldomu Terlebih dahulu dengan menghubungi owner`)
                if (checkATMuser(serial) >= total) {
                    confirmuang(serial, total)
                    tekss = `*Ada Pesanan Bos*\n\n*Dari :* ${m.sender}\n*Nama :* ${pushname}\n\n\n\nemail`
                    dans.sendMessage('6281215389681@s.whatsapp.net', {
                        text: tekss
                    })
                    const order = await fetchJson(`https://kodeotp.org/api?api_key=c7ccfcb06673c20e80e2f8368c1560b9&action=get_number&country_id=6&service_id=jg&operator=random&order_type=reguler`)

                    teks = `*「 PEMBAYARAN BERHASIL 」*\n\n❏ *pengirim* : Admin\n❏ *Produk* : OTP Grab Indonesia\n❏ *Harga* : ${total} \n❏ *sisa uang mu* : Rp. ${checkATMuser(serial)}\n\n*proses berhasil*\n*Nomer:* ${order.data.number}\n*Status :* ${order.data.status}\n\n\n\n_Silakan Untuk Memasukan Nomer Dan Klik Cek Otp dibawah_\n_*PESANAN TIDAK DAPAT DIBATALKAN JIKA SUDAH MENERIMA SMS*_ .\nTerima kasih\n\n\n Jam Proses : 24jam sesuai ketersediaan nomer`
                    const orderid = order.data.order_id

                    let buttons = [{
                            buttonId: `indonoemailcek ${orderid}`,
                            buttonText: {
                                displayText: 'Cek OTP'
                            },
                            type: 1
                        },
                        {
                            buttonId: `indonoemailbatal ${orderid}`,
                            buttonText: {
                                displayText: 'BATALKAN'
                            },
                            type: 1
                        },
                    ]
                    await dans.sendButtonText(m.chat, buttons, teks, `DanStore`, m)
                }
            }
            break

            case 'indonoemailcek': {
                if (!isRegistered) return m.reply(`*Kamu Belum Terdaftar Di Database Bot Untuk Melanjutkan Pembelian*`)
                const orderid = text
                const order = await fetchJson(`https://kodeotp.org/api?api_key=c7ccfcb06673c20e80e2f8368c1560b9&action=get_status&order_id=${text}`)
                teks = `*「 OTP 」*\n\n❏ *Produk* : OTP Indonesia\n *Nomer :* ${order.data.number}\n*Status :* ${order.data.status}\n*SMS :* ${order.data.SMS}\n\n*Perhatian* _Klik DONE Untuk Melanjutkan Transaksi Berikutnya & Klik Batalkan Jika Tidak Jadi Menggunakan OTP_`


                let buttons = [{
                        buttonId: `indonoemailcek ${orderid}`,
                        buttonText: {
                            displayText: 'Cek OTP'
                        },
                        type: 1
                    },
                    {
                        buttonId: `okekeownergaes ${orderid}`,
                        buttonText: {
                            displayText: 'DONE'
                        },
                        type: 1
                    },
                    {
                        buttonId: `indonoemailbatal ${orderid}`,
                        buttonText: {
                            displayText: 'Batalkan'
                        },
                        type: 1
                    }
                ]
                await dans.sendButtonText(m.chat, buttons, teks, `DanStore`, m)
            }
            break

            case 'indonoemailbatal': {
                if (!isRegistered) return m.reply(`*Kamu Belum Terdaftar Di Database Bot Untuk Melanjutkan Pembelian*`)
                const orderid = text
                const order = await fetchJson(`https://kodeotp.org/api?api_key=c7ccfcb06673c20e80e2f8368c1560b9&action=set_status&order_id=${text}&status=cancel`)
                //m.reply(`Pesanan Berhasil Dibatalkan`)
            }
            break


            case 'okekeownergaes': {
                if (!isRegistered) return m.reply(`*Kamu Belum Terdaftar Di Database Bot Untuk Melanjutkan Pembelian*`)
                tekss = `*Pesanan Berhasil*\n\n*Dari :* ${m.sender}\n*Nama :* ${pushname}\n\n\n\nemail ${text}`
                dans.sendMessage('6281215389681@s.whatsapp.net', {
                    text: tekss
                })


            }
            break
            //info
            case 'kotaku':
                try {
                    const aa = cekuser(serial)
                    console.log(aa)
                    nama = aa.split('-')[0]
                    umur = aa.split('-')[1]
                    asal = aa.split('-')[2]
                    const wiki = await fetchJson(`https://api.akuari.my.id/search/wiki?query=${asal}`)
                    cuaca = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${asal}?apikey=ardanfajars`)
                    cc = cuaca.result
                    const kode = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${asal}?apikey=ardanfajars`)
                    const kd = kode.result
                    const p = kd
                    teks1 = `Jadwal Sholat Untuk Wilayah *${kd.wilayah}* Dan Sekitarnya.\n*Berlaku Hari Ini ${kd.tanggal}*\n\n*Imsak :* ${p.imsak}\n*Subuh :* ${p.subuh}\n*Terbit :* ${p.terbit}\n*Dhuha :* ${p.dhuha}\n*Dzuhur :* ${p.dzuhur}\n*Ashar :* ${p.ashar}\n*Maghrib :* ${p.maghrib}\n*Isya :* ${p.isya}`
                    caca = `Cuaca: ${cc.cuaca}\nSuhu: ${cc.suhu}\nAngin: ${cc.angin}\nDeskripsi: ${cc.description}\nKelembapan: ${cc.kelembapan}\nUdara ${cc.udara}`
                    teks = `_Menurut data kamu di database bot, kamu berasal dari *${asal}*_\n\n*${asal}*\n${wiki.result[0].wiki}\n\n― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― \n*Cuaca ${asal}*\n${caca}\n\n― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― ― 
    \n${teks1}\n\n`
                    m.reply(teks)

                } catch {
                    m.reply(`*Kamu Belum Terdaftar*`)
                }
                break
                /////////ai
            case 'draw':
                try {

                    if (!text) return m.reply(`Membuat gambar dengan ai \n contoh : .draw mobil`)
                    const teksi = await fetchJson(`https://api.akuari.my.id/edukasi/terjemah?query=${text}&kode=en`)
                    const teks = teksi.terjemah
                    console.log(teks)
                    const configuration = new Configuration({
                        apiKey: aikey,
                    });
                    const openai = new OpenAIApi(configuration);

                    const response = await openai.createImage({
                        prompt: teks,
                        n: 1,
                        size: '512x512'
                    });
                    var imgq = response.data.data[0].url;
                    console.log(imgq)
                    const imgs = await getBuffer(imgq)
                    await dans.sendMessage(m.chat, {
                        image: imgs,
                        caption: `Nih Kak *${text}*`
                    }, {
                        quoted: m
                    })
                } catch (err) {
                    console.log(err)
                    m.reply('Maaf, sepertinya ada yang error')
                }
                break
            case 'buatulasan':
                try {

                    if (!text) return m.reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} bot bagus,rapi ...`)
                    const configuration = new Configuration({
                        apiKey: aikey,
                    });
                    const openai = new OpenAIApi(configuration);
                    const teks = `tolong buatkan ulasan dengan catatan ${text}`
                    const response = await openai.createCompletion({
                        model: "text-davinci-003",
                        prompt: teks,
                        temperature: 1,
                        max_tokens: 3000,
                        top_p: 1.0,
                        frequency_penalty: 0.0,
                        presence_penalty: 0.0,
                    });
                    m.reply(`${response.data.choices[0].text}\n\n`)
                } catch (err) {
                    console.log(err)
                    m.reply('Maaf, sepertinya ada yang error')
                }
                break
            case 'catatanbelajar':
                try {

                    if (!text) return m.reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} bahasa pemograman javascript`)
                    const configuration = new Configuration({
                        apiKey: aikey,
                    });
                    const openai = new OpenAIApi(configuration);
                    const teks = `Apa 5 poin kunci yang harus saya ketahui saat mempelajari ${text}`
                    const response = await openai.createCompletion({
                        model: "text-davinci-003",
                        prompt: teks,
                        temperature: 1,
                        max_tokens: 3000,
                        top_p: 1.0,
                        frequency_penalty: 0.0,
                        presence_penalty: 0.0,
                    });
                    m.reply(`${response.data.choices[0].text}\n\n`)
                } catch (err) {
                    console.log(err)
                    m.reply('Maaf, sepertinya ada yang error')
                }
                break
            case 'ai':
                try {

                    if (!text) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu bot whatsapp`)
                    const configuration = new Configuration({
                        apiKey: aikey,
                    });
                    const openai = new OpenAIApi(configuration);

                    const response = await openai.createCompletion({
                        model: "text-davinci-003",
                        prompt: text,
                        temperature: 1,
                        max_tokens: 4000,
                        top_p: 1.0,
                        frequency_penalty: 0.0,
                        presence_penalty: 0.0,
                    });
                    m.reply(`${response.data.choices[0].text}\n\n`)
                } catch (err) {
                    console.log(err)
                    m.reply('Maaf, sepertinya ada yang error')
                }
                break
            case 'plntagihantegalngandong':
                kirem = m.reply
                lolapi = "ardanfajars" 
            {
                    //try{
                    kirem('Sedang Mengumpulkan Data & Menjumlahkan...')
                    const a = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041095729?apikey=${lolapi}`)
                    const b = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524042004164?apikey=${lolapi}`)
                    const c = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041529877?apikey=ardanfajars`)
                    const d = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041143273?apikey=ardanfajars`)
                    const e = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041114669?apikey=ardanfajars`)
                    //const f = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041103920?apikey=ardanfajars`)
                    const g = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041136709?apikey=ardanfajars`)
                    const h = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041136725?apikey=ardanfajars`)
                    const i = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041137139?apikey=ardanfajars`)

                    const j = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041140243?apikey=ardanfajars`)
                    const k = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041140250?apikey=ardanfajars`)

                    const l = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041140276?apikey=ardanfajars`)
                    const m = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041141636?apikey=ardanfajars`)
                    const n = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041141644?apikey=ardanfajars`)
                    //const o = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041141651?apikey=ardanfajars`)
                    const p = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041141677?apikey=ardanfajars`)
                    const q = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041141715?apikey=ardanfajars`)
                    const r = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041141756?apikey=ardanfajars`)
                    const s = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041143813?apikey=ardanfajars`)
                    const t = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041143854?apikey=ardanfajars`)
                    const u = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041144123?apikey=ardanfajars`)
                    const v = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041221204?apikey=ardanfajars`)
                    const w = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041304115?apikey=ardanfajars`)
                    //const x = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041308711?apikey=ardanfajars`)
                    const y = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041414303?apikey=ardanfajars`)
                    const z = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041443132?apikey=ardanfajars`)
                    const aa = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041464087?apikey=ardanfajars`)
                    const ab = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041464730?apikey=ardanfajars`)
                    const ac = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041464748?apikey=ardanfajars`)
                    const ad = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041478690?apikey=ardanfajars`)
                    const ae = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041508063?apikey=ardanfajars`)
                    const af = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041516672?apikey=ardanfajars`)
                    const ag = await fetchJson(`https://api.lolhuman.xyz/api/tagihanlistrik/524041523937?apikey=ardanfajars`)
                    //kirem(`_Data Didapatkan_`)
                    console.log(l)
                    const az = `${a.result.amount}+3000`
                    const bz = `${b.result.amount}+3000`
                    const cz = `${c.result.amount}+3000`
                    const dz = `${d.result.amount}+3000`
                    const ez = `${e.result.amount}+3000`
                    //const fz = `${f.result.amount}+3000`
                    const gz = `${g.result.amount}+3000`
                    const hz = `${h.result.amount}+3000`
                    const iz = `${i.result.amount}+3000`

                    const jz = `${j.result.amount}+3000`
                    const kz = `${k.result.amount}+3000`

                    const lz = `${l.result.amount}+3000`
                    const mz = `${m.result.amount}+3000`
                    const nz = `${n.result.amount}+3000`
                    //const oz = `${o.result.amount}+3000`
                    const pz = `${p.result.amount}+3000`
                    const qz = `${q.result.amount}+3000`
                    const rz = `${r.result.amount}+3000`
                    const sz = `${s.result.amount}+3000`
                    const tz = `${t.result.amount}+3000`
                    const uz = `${u.result.amount}+3000`
                    const vz = `${v.result.amount}+3000`
                    const wz = `${w.result.amount}+3000`
                    //const xz = `${x.result.amount}+3000`
                    const yz = `${y.result.amount}+3000`
                    const zz = `${z.result.amount}+3000`
                    const aaz = `${aa.result.amount}+3000`
                    const abz = `${ab.result.amount}+3000`
                    const acz = `${ac.result.amount}+3000`
                    const adz = `${ad.result.amount}+3000`
                    const aez = `${ae.result.amount}+3000`
                    const afz = `${af.result.amount}+3000`
                    const agz = `${ag.result.amount}+3000`


                    const za = mathjs.evaluate(az)
                    const zb = mathjs.evaluate(bz)
                    const zc = mathjs.evaluate(cz)
                    const zd = mathjs.evaluate(dz)
                    const ze = mathjs.evaluate(ez)
                    //const zf = mathjs.evaluate(fz)
                    const zg = mathjs.evaluate(gz)
                    const zh = mathjs.evaluate(hz)
                    const zi = mathjs.evaluate(iz)

                    const zj = mathjs.evaluate(jz)
                    const zk = mathjs.evaluate(kz)

                    const zl = mathjs.evaluate(lz)
                    const zm = mathjs.evaluate(mz)
                    const zn = mathjs.evaluate(nz)
                    //const zo = mathjs.evaluate(oz)
                    const zp = mathjs.evaluate(pz)
                    const zq = mathjs.evaluate(qz)
                    const zr = mathjs.evaluate(rz)
                    const zs = mathjs.evaluate(sz)
                    const zt = mathjs.evaluate(tz)
                    const zu = mathjs.evaluate(uz)
                    const zv = mathjs.evaluate(vz)
                    const zw = mathjs.evaluate(wz)
                    //const zx = mathjs.evaluate(xz)
                    const zy = mathjs.evaluate(yz)
                    const zzz = mathjs.evaluate(zz)
                    const zaa = mathjs.evaluate(aaz)
                    const zab = mathjs.evaluate(abz)
                    const zac = mathjs.evaluate(acz)
                    const zad = mathjs.evaluate(adz)
                    const zae = mathjs.evaluate(aez)
                    const zaf = mathjs.evaluate(afz)
                    const zag = mathjs.evaluate(agz)
                    const hsl = `${za}+${zb}+${zc}+${zd}+${ze}+${zg}+${zh}+${zi}+${zj}+${zk}+${zl}+${zm}+${zn}+${zp}+${zq}+${zr}+${zs}+${zt}+${zu}+${zv}+${zw}+${zy}+${zz}+${zaa}+${zab}+${zac}+${zad}+${zae}+${zaf}+${zag}`
                    const total = mathjs.evaluate(hsl)
                    const teks = `*Tagihan Listrik Tegal Ngandong*

1.${a.result.name} = *Rp.${za}*
2.${b.result.name} = *Rp.${zb}*
3.${c.result.name} = *Rp.${zc}*
4.${d.result.name} = *Rp.${zd}*
5.${e.result.name} = *Rp.${ze}*
6.${g.result.name} = *Rp.${zg}*
7.${h.result.name} = *Rp.${zh}*
8.${i.result.name} = *Rp.${zi}*
9.${j.result.name} = *Rp.${zj}*
10.${k.result.name} = *Rp.${zk}*
11.${l.result.name} = *Rp.${zl}*
12.${m.result.name} = *Rp.${zm}*
13.${n.result.name} = *Rp.${zn}*
14.${p.result.name} = *Rp.${zp}*
15.${q.result.name} = *Rp.${zq}*
16.${r.result.name} = *Rp.${zr}*
17.${s.result.name} = *Rp.${zs}*
18.${t.result.name} = *Rp.${zt}*
19.${u.result.name} = *Rp.${zu}*
20.${v.result.name} = *Rp.${zv}*
21.${w.result.name} = *Rp.${zw}*
22.${y.result.name} = *Rp.${zy}*
23.${z.result.name} = *Rp.${zzz}*
24.${aa.result.name} = *Rp.${zaa}*
25.${ab.result.name} = *Rp.${zab}*
26.${ac.result.name} = *Rp.${zac}*
27.${ad.result.name} = *Rp.${zad}*
28.${ae.result.name} = *Rp.${zae}*
29.${af.result.name} = *Rp.${zaf}*
30.${ag.result.name} = *Rp.${zag}*


Total : *${total}*`
                    kirem(teks)
                    //}catch{
                    //m.reply(`Tagihan Terpantau Sudah Dibayarkan...`)
                    //}
                }
                break

                ////////endpln
                ///////////islami////
            case 'randomayat': {
                const a = await fetchJson(`https://quran-api-id.vercel.app/random`)
                okehn = a.image.secondary
                let [ke1, ke2, ke3, ke4, ke5, ke6, ke7] = okehn.split`/`
                var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/' + ke6 + '.json')
                var {
                    name,
                    name_translations,
                    number_of_ayah,
                    number_of_surah,
                    recitations
                } = responsih2.data
                //pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n"

                teksnya = `*Random Ayat Al-Quran*\n\n*. ${a.arab} .*\n"${a.translation}"\n\n${name}:${ke6}\n\n\n*==Tafsir==*\n\n_Kemenag :_\n${a.tafsir.kemenag.short}\n\n_Quraish :_\n${a.tafsir.quraish}\n\n_Jalalayn :_\n${a.tafsir.jalalayn}\n\n`
                const msg = dans.sendMessage(m.chat, {
                    audio: {
                        url: a.audio.alafasy
                    },
                    mimetype: 'audio/mpeg',
                    fileName: `random.mp3`
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    dans.sendMessage(m.chat, {
                        text: teksnya
                    }, {
                        quoted: m
                    })
                }, 5000)
                // dans.sendMessage(m.chat, teksnya , { quoted: msg })
                //dans.sendMessage(m.chat, { text: teksnya}, { quoted: m })
                //await dans.sendMessage(m.chat, { text: teksnya }, { quoted: beh })
            }
            break

            case 'renungan': {
                dans.sendImage(m.chat, `https://api.akuari.my.id/islami/renunganislam`, `Nih Kak`, m)
            }
            break
            case 'js':
            case 'jsholat':
            case 'jadwalsholat':
            case 'jadwalshalat': {
                if (text == "") return m.reply(`Kirim perintah *${prefix + command}[ kota ]*\nContoh : ${prefix + command} klaten`)
                const kode = await fetchJson(`https://saipulanuar.ga/api/muslim/jadwalshalat?kota=${text}`)
                const kd = kode.result[0]
                const p = kd.jadwal
                teks = `Jadwal Sholat Untuk Wilayah *${kd.lokasi}, ${kd.daerah}* Dan Sekitarnya.\n*Berlaku Hari Ini ${p.tanggal}*\n\n*Imsak :* ${p.imsak}\n*Subuh :* ${p.subuh}\n*Terbit :* ${p.terbit}\n*Dhuha :* ${p.dhuha}\n*Dzuhur :* ${p.dzuhur}\n*Ashar :* ${p.ashar}\n*Maghrib :* ${p.maghrib}\n*Isya :* ${p.isya}`
                m.reply(teks)
            }
            break
            case 'kisahnabi': {
                if (!text) return m.reply(`Hai Kak ${pushname}, Harap Masukan Nama Nabi...!`)
                try {
                    const a = await fetchJson(`https://saipulanuar.ga/api/muslim/kisahnabi?nabi=${text}`)
                    const b = a.result
                    const teksq = `*Kisah Nabi*\n\n\n*Nama:* ${b.name}\n*Tahun Kelahiran:* ${b.thn_kelahiran}\n*Umur:* ${b.usia}\n*Tanah Kelahiran:* ${b.tmp}\n\n${b.description}\n`
                    dans.sendImage(m.chat, b.image_url, teksq, m)
                } catch {
                    m.reply(`Mohon Maaf :(\nTerjadi Kesalahan...`)
                }
            }
            break
            case 'alayat': {
                lolapi = "ardanfajars"
                try {
                    aq = args[0]
                    if (!args[0]) return m.reply(`Harap masukan Surat Dan Ayat\nContoh: !alayat al-fatihah 1`)
                    if (!args[1]) return m.reply(`Masukan Ayatnya kaka`)
                    if (!text) return m.reply(`Surat?`)
                    ayat = "ayat"
                    bhs = ""
                    var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                    var surah = responseh.data
                    var idx = surah.data.findIndex(function(post, index) {
                        if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                            return true;
                    });
                    nmr = surah.data[idx].number
                    console.log(nmr)
                    if (!isNaN(nmr)) {
                        if (args.length > 2) {
                            ayat = args[0]
                        }
                        if (args.length == 2) {
                            var last = function last(array, n) {
                                if (array == null) return void 0;
                                if (n == null) return array[array.length - 1];
                                return array.slice(Math.max(array.length - n, 0));
                            };
                            ayat = last[args]
                        }
                        pesan = ""
                        if (isNaN(ayat)) //{
                            var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/' + nmr + '.json')
                        var {
                            name,
                            name_translations,
                            number_of_ayah,
                            number_of_surah,
                            recitations
                        } = responsih2.data
                        pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n"
                        pesan = pesan + "Dilantunkan oleh " + recitations[0].name + "\n"
                        console.log()
                        //m.reply(pesan)
                        console.log(recitations[0].audio_url)
                        console.log(number_of_surah)
                        console.log(args[1])

                        dans.sendMessage(m.chat, {
                            audio: {
                                url: `https://api.lolhuman.xyz/api/quran/audio/${number_of_surah}/${args[1]}?apikey=${lolapi}`
                            },
                            mimetype: 'audio/mpeg',
                            fileName: `${args[0]}_${args[1]}.mp3`
                        }, {
                            quoted: m
                        })
                    }
                } catch {
                    m.reply(`Mohon Maaf :(\nTerjadi Kesalahan Saat Memproses Audio`)
                }
            }
            break
            case 'iqra': {
                oh = `Example : ${prefix + command} 3\n\Available IQRA : 1,2,3,4,5,6`
                if (!text) throw oh
                yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                dans.sendMessage(m.chat, {
                    document: yy,
                    mimetype: 'application/pdf',
                    fileName: `iqra${text}.pdf`
                }, {
                    quoted: m
                }).catch((err) => m.reply(oh))
            }
            break
            case 'alaudio': {
              
teksal = `_Dikarenakan Terjadi Masalah Pada Menu Button_\nMaka Dari itu Menu Alaudio berubah\n\nPerubahan:\n\n Audio Dari *Mishari Rashid al-Afasy* Menjadi _alaudio1_\nAudio Dari *Abdur-Rahman as-Sudais* Menjadi _alaudio2\nAudio Dari *Saad al-Ghamdi* Menajdi _alaudio3_\n\n\n_@dansBot_`
				m.reply(teksal)
                if (!text) return m.reply(`Hai Kak ${pushname}, Harap Makukan Surat Yang Ingin dicari...!`)
                try {
                    ayat = "ayat"
                    bhs = ""
                    var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                    var surah = responseh.data
                    //console.log(surah.data)
                    var idx = surah.data.findIndex(function(post, index) {
                        if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                            return true;
                    });
                    nmr = surah.data[idx].number
                    if (!isNaN(nmr)) {
                        if (args.length > 2) {
                            ayat = args[1]
                        }
                        if (args.length == 2) {
                            var last = function last(array, n) {
                                if (array == null) return void 0;
                                if (n == null) return array[array.length - 1];
                                return array.slice(Math.max(array.length - n, 0));
                            };
                            ayat = last(args)
                        }
                        pesan = ""
                        var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/' + nmr + '.json')
                        var {
                            name,
                            name_translations,
                            number_of_ayah,
                            number_of_surah,
                            recitations
                        } = responsih2.data
                        pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n"

                        let buttons = [{
                                buttonId: `alaudio1 ${text}`,
                                buttonText: {
                                    displayText: 'Mishari Rashid al-`Afasy'
                                },
                                type: 1
                            },
                            {
                                buttonId: `alaudio2 ${text}`,
                                buttonText: {
                                    displayText: `Abdur-Rahman as-Sudais`
                                },
                                type: 1
                            },
                            {
                                buttonId: `alaudio3 ${text}`,
                                buttonText: {
                                    displayText: `Saad al-Ghamdi `
                                },
                                type: 1
                            },
                        ]


                       

                    }
                } catch {
                    m.reply(`Mohon Maaf :(\nTerjadi Kesalahan...`)
                }
            }
            break

            case 'alaudio1': {
                try {
                    if (!text) return m.reply(`Surat?`)
                    //console.log(`niki mazeh ${args[0]}`)
                    ayat = "ayat"
                    bhs = ""
                    var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                    var surah = responseh.data
                    var idx = surah.data.findIndex(function(post, index) {
                        console.log(`niki mazeh ${args[0]}`)
                        if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                            return true;
                    });
                    nmr = surah.data[idx].number
                    if (!isNaN(nmr)) {
                        if (args.length > 2) {
                            ayat = args[1]
                        }
                        if (args.length == 2) {
                            var last = function last(array, n) {
                                if (array == null) return void 0;
                                if (n == null) return array[array.length - 1];
                                return array.slice(Math.max(array.length - n, 0));
                            };
                            ayat = last(args)
                        }
                        pesan = ""
                        if (isNaN(ayat)) {
                            var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/' + nmr + '.json')
                            var {
                                name,
                                name_translations,
                                number_of_ayah,
                                number_of_surah,
                                recitations
                            } = responsih2.data
                            pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n"
                            pesan = pesan + "Dilantunkan oleh " + recitations[0].name + "\n"
                            //m.reply(pesan)

                            dans.sendMessage(m.chat, {
                                audio: {
                                    url: recitations[0].audio_url
                                },
                                mimetype: 'audio/mpeg',
                                fileName: `${name}_${recitations[0].name}.mp3`
                            }, {
                                quoted: m
                            })

                        } else {
                            var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + ayat)
                            var {
                                data
                            } = responsih2.data
                            var last = function last(array, n) {
                                if (array == null) return void 0;
                                if (n == null) return array[array.length - 1];
                                return array.slice(Math.max(array.length - n, 0));
                            };
                            bhs = last(args)
                            pesan = ""
                            pesan = pesan + data.text.arab + "\n\n"
                            if (bhs == "en") {
                                pesan = pesan + data.translation.en
                            } else {
                                pesan = pesan + data.translation.id
                            }
                            pesan = pesan + "\n\n(Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + ")"
                            await Client.sendFileFromUrl(from, data.audio.secondary[0])
                            dans.sendMessage(m.chat, {
                                audio: {
                                    url: data.audio.secondary[0]
                                },
                                mimetype: 'audio/mpeg',
                                fileName: `${data.surah.name.transliteration.id}.mp3`
                            }, {
                                quoted: m
                            })
                            await m.reply(pesan)
                        }
                    }
                } catch {
                    m.reply(`Mohon Maaf :(\nTerjadi Kesalahan Saat Memproses Audio`)
                }

            }
            break
            case 'alaudio2': {
                try {
                    if (!text) return m.reply(`Surat?`)
                    ayat = "ayat"
                    bhs = ""
                    var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                    var surah = responseh.data
                    var idx = surah.data.findIndex(function(post, index) {
                        if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                            return true;
                    });
                    nmr = surah.data[idx].number
                    if (!isNaN(nmr)) {
                        if (args.length > 2) {
                            ayat = args[1]
                        }
                        if (args.length == 2) {
                            var last = function last(array, n) {
                                if (array == null) return void 0;
                                if (n == null) return array[array.length - 1];
                                return array.slice(Math.max(array.length - n, 0));
                            };
                            ayat = last(args)
                        }
                        pesan = ""
                        if (isNaN(ayat)) {
                            var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/' + nmr + '.json')
                            var {
                                name,
                                name_translations,
                                number_of_ayah,
                                number_of_surah,
                                recitations
                            } = responsih2.data
                            pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n"
                            pesan = pesan + "Dilantunkan oleh " + recitations[1].name + "\n"
                            //m.reply(pesan)

                            dans.sendMessage(m.chat, {
                                audio: {
                                    url: recitations[1].audio_url
                                },
                                mimetype: 'audio/mpeg',
                                fileName: `${name}_${recitations[1].name}.mp3`
                            }, {
                                quoted: m
                            })

                        } else {
                            var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + ayat)
                            var {
                                data
                            } = responsih2.data
                            var last = function last(array, n) {
                                if (array == null) return void 0;
                                if (n == null) return array[array.length - 1];
                                return array.slice(Math.max(array.length - n, 0));
                            };
                            bhs = last(args)
                            pesan = ""
                            pesan = pesan + data.text.arab + "\n\n"
                            if (bhs == "en") {
                                pesan = pesan + data.translation.en
                            } else {
                                pesan = pesan + data.translation.id
                            }
                            pesan = pesan + "\n\n(Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + ")"
                            dans.sendMessage(m.chat, {
                                audio: {
                                    url: data.audio.secondary[0]
                                },
                                mimetype: 'audio/mpeg',
                                fileName: `${data.surah.name.transliteration.id}.mp3`
                            }, {
                                quoted: m
                            })
                            await m.reply(pesan)
                        }
                    }
                } catch {
                    m.reply(`Mohon Maaf :(\nTerjadi Kesalahan Saat Memproses Audio`)
                }
            }
            break
            case 'alaudio3': {
                try {
                    if (!text) return m.reply(`Surat?`)
                    ayat = "ayat"
                    bhs = ""
                    var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                    var surah = responseh.data
                    var idx = surah.data.findIndex(function(post, index) {
                        if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                            return true;
                    });
                    nmr = surah.data[idx].number
                    if (!isNaN(nmr)) {
                        if (args.length > 2) {
                            ayat = args[1]
                        }
                        if (args.length == 2) {
                            var last = function last(array, n) {
                                if (array == null) return void 0;
                                if (n == null) return array[array.length - 1];
                                return array.slice(Math.max(array.length - n, 0));
                            };
                            ayat = last(args)
                        }
                        pesan = ""
                        if (isNaN(ayat)) {
                            var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/' + nmr + '.json')
                            var {
                                name,
                                name_translations,
                                number_of_ayah,
                                number_of_surah,
                                recitations
                            } = responsih2.data
                            pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n"
                            pesan = pesan + "Dilantunkan oleh " + recitations[1].name + "\n"
                            //m.reply(pesan)

                            dans.sendMessage(m.chat, {
                                audio: {
                                    url: recitations[2].audio_url
                                },
                                mimetype: 'audio/mpeg',
                                fileName: `${name}_${recitations[2].name}.mp3`
                            }, {
                                quoted: m
                            })

                        } else {
                            var responsih2 = await axios.get('https://api.quran.sutanlab.id/surah/' + nmr + "/" + ayat)
                            var {
                                data
                            } = responsih2.data
                            var last = function last(array, n) {
                                if (array == null) return void 0;
                                if (n == null) return array[array.length - 1];
                                return array.slice(Math.max(array.length - n, 0));
                            };
                            bhs = last(args)
                            pesan = ""
                            pesan = pesan + data.text.arab + "\n\n"
                            if (bhs == "en") {
                                pesan = pesan + data.translation.en
                            } else {
                                pesan = pesan + data.translation.id
                            }
                            pesan = pesan + "\n\n(Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + ")"
                            dans.sendMessage(m.chat, {
                                audio: {
                                    url: data.audio.secondary[0]
                                },
                                mimetype: 'audio/mpeg',
                                fileName: `${data.surah.name.transliteration.id}.mp3`
                            }, {
                                quoted: m
                            })
                            await m.reply(pesan)
                        }
                    }
                } catch {
                    m.reply(`Mohon Maaf :(\nTerjadi Kesalahan Saat Memproses Audio`)
                }
            }
            break



            case 'alayat': {
                try {
                    aq = args[0]
                    if (!args[0]) return m.reply(`Harap masukan Surat Dan Ayat\nContoh: !alayat al-fatihah 1`)
                    if (!args[1]) return m.reply(`Masukan Ayatnya kaka`)
                    if (!text) return m.reply(`Surat?`)
                    ayat = "ayat"
                    bhs = ""
                    var responseh = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah.json')
                    var surah = responseh.data
                    var idx = surah.data.findIndex(function(post, index) {
                        if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                            return true;
                    });
                    nmr = surah.data[idx].number
                    console.log(nmr)
                    if (!isNaN(nmr)) {
                        if (args.length > 2) {
                            ayat = args[0]
                        }
                        if (args.length == 2) {
                            var last = function last(array, n) {
                                if (array == null) return void 0;
                                if (n == null) return array[array.length - 1];
                                return array.slice(Math.max(array.length - n, 0));
                            };
                            ayat = last[args]
                        }
                        pesan = ""
                        if (isNaN(ayat)) //{
                            var responsih2 = await axios.get('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/islam/surah/' + nmr + '.json')
                        var {
                            name,
                            name_translations,
                            number_of_ayah,
                            number_of_surah,
                            recitations
                        } = responsih2.data
                        pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + name + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n"
                        pesan = pesan + "Dilantunkan oleh " + recitations[0].name + "\n"
                        console.log()
                        //m.reply(pesan)
                        console.log(recitations[0].audio_url)
                        console.log(number_of_surah)
                        console.log(args[1])

                        dans.sendMessage(m.chat, {
                            audio: {
                                url: `https://api.lolhuman.xyz/api/quran/audio/${number_of_surah}/${args[1]}?apikey=${lolapi}`
                            },
                            mimetype: 'audio/mpeg',
                            fileName: `${args[0]}_${args[1]}.mp3`
                        }, {
                            quoted: m
                        })
                    }
                } catch {
                    m.reply(`Mohon Maaf :(\nTerjadi Kesalahan Saat Memproses Audio`)
                }
            }
            break

            ////endislami////
            ////////DOWNLOADER///////
            case 'igcobas':{
				let links = await instagramGetUrl(text)
				console.log(links)
				}
            break
          case 'ig':
            case 'igdl':
            case 'instagram':
                try {
                  //if (!isCreator) return m.reply('*_Under Maintenance_*')
                    if (!text) return m.reply('Linknya?')
                    m.reply(tunggu)
                    const igs = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${lolkey}&url=${text}`)
					console.log(igs)
                    const teksx = `*IG DOWNLOADER*\n\n*Dari:* ${igs.result.account.username} _(${igs.result.account.full_name})_\n${igs.result.caption} \n\n*_Media Sedang Dikirim._*\n\n@dans_bot`
                    m.reply(teksx)
                    for (let i of igs.result.media) {
                        //let link = await getBuffer(i.url)
                        console.log(i)
                      setTimeout(() => {
                    dans.sendFileUrl(m.chat, i, `_Nih Kak_`, m)
                }, 5000)
                       
                }
                } catch {
                  m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
                break
            case 'ytmp3xx': {
                m.reply(tunggu)
                const yt = await fetchJson(`https://api.akuari.my.id/downloader/youtube3?link=${text}&type=480`)
                dans.sendMessage(m.chat, {
                    audio: {
                        url: yt.audio.audio
                    },
                    mimetype: 'audio/mpeg',
                    fileName: `${yt.title}.mp3`
                }, {
                    quoted: m
                })
            }
            break
            case 'ytmp4xx': {
                m.reply(tunggu)
                const yt = await fetchJson(`https://api.akuari.my.id/downloader/yt1?link=${text}`)
                console.log(yt)
                dans.sendMessage(m.chat, {
                    video: {
                        url: yt.urldl_video
                    },
                    mimetype: 'video/mp4',
                    fileName: `${yt.info.title}.mp4`
                }, {
                    quoted: m
                })
            }
            break
            case 'ytmp3': {
                try {
                    const yt = await youtubedl(text).catch(async () => await youtubedlv2(url))
                    const dl_url = await yt.audio['128kbps'].download()
                    console.log(dl_url)
                    let yts = require("yt-search")
                    let search = await yts(yt.title)
                    let anu = search.videos[0]
                    teksnyax = `Mengirim lagu *${anu.title}* dari *${anu.author.name}*\ntunggu sebentar...`
                    dans.sendImage(m.chat, yt.thumbnail, teksnyax, m)
                    dans.sendMessage(m.chat, {
                        audio: {
                            url: dl_url
                        },
                        mimetype: 'audio/mpeg',
                        fileName: `${anu.title}.mp3`
                    }, {
                        quoted: m
                    })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break
            case 'ytmp3q':
            case 'ytaudioq': {
                try {
                    if (!text) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                    m.reply(tunggu)
                    const yt = await fetchJson(`https://api.akuari.my.id/downloader/youtube3?link=${text}&type=480`)
                    console.log(yt)
                    dans.sendImage(m.chat, yt.thumbnail, `⭔ Title : ${yt.title}`, m)
                    dans.sendMessage(m.chat, {
                        audio: {
                            url: yt.audio.audio
                        },
                        mimetype: 'audio/mpeg',
                        fileName: `${yt.title}.mp3`
                    }, {
                        quoted: m
                    })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break
            case 'ytmp4': {
                try {
                    if (!text) return m.reply(`Example : ${prefix + command} link`)
                    m.reply(tunggu)
                    const yt = await youtubedl(text).catch(async () => await youtubedlv2(text))
					const dl_url = await yt.video['360p'].download()
                    console.log(`\n\nMendownload Media YT ${yt.title}\n\n`)
					let yts = require("yt-search")
        let search = await yts(yt.title)
        let anu = search.videos[0]
                    teks = `Mengirim Video *${anu.title}* dari *${anu.author.name}*\ntunggu sebentar...`
                    // dans.sendImage(m.chat, yt.info.thumbnail, teks, m)
                    m.reply(teks)
                    dans.sendMessage(m.chat, {
                        video: {
                            url: dl_url
                        },
                        mimetype: 'video/mp4',
                        fileName: `${yt.title}.mp4`
                    }, {
                        quoted: m
                    })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break
            case 'ytmp44': {
                try {
                    if (!text) return m.reply(`Example : ${prefix + command} link`)
                    m.reply(tunggu)
                    const yt = await fetchJson(`https://saipulanuar.ga/api/download/ytmp4-v2?url=${text}`)
                    console.log(yt)
                    teks = `Mengirim Video *${yt.result.title}* \ntunggu sebentar...`
                    // dans.sendImage(m.chat, yt.info.thumbnail, teks, m)

                    m.reply(teks)
                    dans.sendMessage(m.chat, {
                        video: {
                            url: yt.result.url
                        },
                        mimetype: 'video/mp4',
                        fileName: `${yt.title}.mp4`
                    }, {
                        quoted: m
                    })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break
            case 'ytmp42': {
                if (!text) return m.reply(`Example : ${prefix + command} link`)

                const yt = await fetchJson(`https://api.akuari.my.id/downloader/youtube3?link=${text}&type=720`)
                console.log(yt)
                //dans.sendImage(m.chat, yt.thumbnail, `⭔ Title : ${yt.title}`, m)
                dans.sendMessage(m.chat, {
                    video: {
                        url: yt.mp4.download
                    },
                    mimetype: 'video/mp4',
                    fileName: `${yt.title}.mp4`
                }, {
                    quoted: m
                })

            }
            break
            case 'twitter': {
                try {
                    if (!text) return m.reply(`Example : ${prefix + command} link`)
                    m.reply(tunggu)
                    const tw = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${text}`)
                    console.log(tw)
                    dans.sendMessage(m.chat, {
                        video: {
                            url: tw.HD
                        },
                        mimetype: 'video/mp4',
                        fileName: `twt.mp4`,
                        caption: tw.desc
                    }, {
                        quoted: m
                    })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break
            case 'cocofun': {
                try {
                    if (!text) return m.reply(`Example : ${prefix + command} link`)
                    m.reply(tunggu)
                    const cc = await fetchJson(`https://api.akuari.my.id/downloader/cocofun?link=${text}`)
                    console.log(cc)
                    teks = `*Cococfun Downloader*\n*Caption:* ${cc.hasil.caption}\n*play:* ${cc.hasil.play}\n*Like:* ${cc.hasil.like}`
                    dans.sendMessage(m.chat, {
                        video: {
                            url: cc.hasil.no_watermark
                        },
                        mimetype: 'video/mp4',
                        fileName: `cc.mp4`,
                        caption: teks
                    }, {
                        quoted: m
                    })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break


            case 'finstagram':
            case 'fig':
            case 'figdl': {
                if (!text) return m.reply(`Harap masukan link!`)
                m.reply(tunggu)
                if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                    //let anu = igdl(text)
                    //console.log(anu.data)
                    igdl(text).then(async (data) => {

                        console.log(data)
                    })
                    //for (let media of anu.data) hisoka.sendFileUrl(m.chat, media, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                    // } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                    // let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                    // hisoka.sendFileUrl(m.chat, anu.media[0].url, `Download Url Instagram From ${isUrl(text)[0]}`, m)
                }
            }
            break
            case 'video': {
                try {
                    if (!text) return m.reply(`mau cari video apa?`)
                    m.reply(tunggu)
                    let {
                        yta
                    } = require('./lib/y2mate')
                    let yts = require("yt-search")
                    let search = await yts(text)
                    let anu = search.videos[0]
                    urllagu = anu.url
                    const yt = await youtubedl(urllagu).catch(async () => await youtubedlv2(urllagu))
                    const dl_url = await yt.video['360p'].download()
                   const sizeh = await yt.video['360p'].fileSizeH
                    console.log(`\n\nMendownload Media YT ${yt.title}\n\n`)
                    teks = `Mengirim Video *${anu.title}* dari *${anu.author.name}*\ntunggu sebentar...\n\nsize: ${sizeh}`
                    m.reply(teks)
                    dans.sendMessage(m.chat, {
                        video: {
                            url: dl_url
                        },
                        caption: `Nih Kak`,
                        mimetype: 'video/mp4',
                        fileName: `tiktok.mp4`
                    }, {
                        quoted: m
                    })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break
            case 'videohigh':
            case 'videoh': {
                try {
                    if (!text) return m.reply(`mau cari video apa?`)
                    m.reply(tunggu)
                    let {
                        yta
                    } = require('./lib/y2mate')
                    let yts = require("yt-search")
                    let search = await yts(text)
                    let anu = search.videos[0]
                    urllagu = anu.url
                    const yt = await youtubedl(urllagu).catch(async () => await youtubedlv2(urllagu))
                    const dl_url = await yt.video['480p'].download()
                    const sizeh = await yt.video['480p'].fileSizeH
                    console.log(`Mendownload Media YT ${yt.title}`)
                    teks = `Mengirim Video *${anu.title}* dari *${anu.author.name}*\ntunggu sebentar...\n\nsize: ${sizeh}`
                    m.reply(teks)
                    dans.sendMessage(m.chat, {
                        video: {
                            url: dl_url
                        },
                        caption: `Nih Kak`,
                        mimetype: 'video/mp4',
                        fileName: `tiktok.mp4`
                    }, {
                        quoted: m
                    })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break
            case 'video22':
            //case 'audio': 
            {
                try {
                    if (!text) return m.reply(`mau cari video apa?`)
                    m.reply(tunggu)
                    let {
                        yta
                    } = require('./lib/y2mate')
                    let yts = require("yt-search")
                    let search = await yts(text)
                    let anu = search.videos[0]
                    urllagu = anu.url
                    //console.log(anu)
                    //let quality = 'MP3 - 128kbps'
                    //let media = await ytdns(urllagu, quality)
                    //console.log(media)
                    //var mp3 = await yta(urllagu)
                    //console.log(mp3)
                    const yt = await fetchJson(`https://saipulanuar.ga/api/download/ytmp4-v2?url=${urllagu}`)
                    //console.log(yt)
                    teks = `Mengirim Video *${anu.title}* dari *${anu.author.name}*\ntunggu sebentar...`
                    m.reply(teks)
                    //lgu = await getBuffer(mp3.result)
                    //console.log(lgu)
                    //dans.sendImage(m.chat, yt.thumbnail, `⭔ Title : ${yt.title}`, m)
                    //dans.sendMessage(m.chat, { video: { url: yt.mp4.download}, mimetype: 'video/mp4', fileName: `${yt.title}.mp4` }, { quoted: m })
                    /*let buttons = [{
                        buttonId: `ytmp42 ${urllagu}`,
                        buttonText: {
                            displayText: 'kualitas Lebih Tinggi'
                        },
                        type: 1
                    }

                ]
                let buttonMessage = {
                    video: {
                        url: yt.result.url
                    },
                    caption: `Nih Kak`,
                    footer: `DansBot`,
                    buttons: buttons,
                    headerType: 4
                }
              
                dans.sendMessage(m.chat, buttonMessage, {
                    quoted: m
                    
                })*/
                    dans.sendMessage(m.chat, {
                        video: {
                            url: yt.result.url
                        },
                        caption: `Nih Kak`,
                        mimetype: 'video/mp4',
                        fileName: `tiktok.mp4`
                    }, {
                        quoted: m
                    })
                    //dans.sendMessage(m.chat, { audio: { url: yt.audio.audio }, mimetype: 'audio', fileName: `${anu.title}.mp3` }, { quoted: m })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break


            case 'lagu':
            case 'audio':
          case 'play':{

                if (!text) return m.reply(`mau cari lagu apa?`)
                try {
                    m.reply(tunggu)
                    let {
                        yta
                    } = require('./lib/y2mate')
                    let yts = require("yt-search")
                    let search = await yts(text)
                  //console.log(search[0].author)
                    let anu = search.videos[0]
                    urllagu = anu.url
                    const yt = await youtubedl(urllagu).catch(async () => await youtubedlv2(urllagu))
                    const dl_url = await yt.audio['128kbps'].download()
                    teks = `Mengirim lagu *${anu.title}* dari *${anu.author.name}*\ntunggu sebentar...`
                    m.reply(teks)
                    dans.sendMessage(m.chat, {
                        audio: {
                            url: dl_url
                        },
                        mimetype: 'audio/mpeg',
                        fileName: `${yt.title}.mp3`
                    }, {
                        quoted: m
                    })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break

            case 'tiktok':
                if (!text) return m.reply('_Harap Masukan Link_')
                //if (!isTiktok) return m.reply(`_Harap Masukan Link Dari Tiktok_`)
                try {
                    const adon = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${text}`)
                    console.log(adon)
                    m.reply(tunggu)
                    p1 = adon.result
                    teks = `*Tiktok Downloader By DansBot*\n\n*Judul :* ${p1.title}\n*Author :* ${p1.author.username} _(${p1.author.nickname})_\n*Like :* ${p1.statistic.like_count}\n*Komentar :* ${p1.statistic.comment_count}\n*Jumlah Share :* ${p1.statistic.share_count}\n*Penonton :* ${p1.statistic.play_count}\n`

                    dans.sendMessage(m.chat, {
                        video: {
                            url: p1.link
                        },
                        caption: teks,
                        mimetype: 'video/mp4',
                        fileName: `tiktok.mp4`
                    }, {
                        quoted: m
                    })
                } catch {
                    m.reply('_Terjadi Kesalahan, Mencoba Menggunakan Server 2_')
                    tiktokdlv2(text)
                        .then((result) => {
                            // const a = getBuffer()
                            dans.sendMessage(m.chat, {
                                video: {
                                    url: result.video.no_watermark
                                },
                                caption: '*Nih kak..*',
                                mimetype: 'video/mp4',
                                fileName: `tiktok.mp4`
                            }, {
                                quoted: m
                            })
                            console.log(result)
                        })
                }
                break
            case 'tiktokxxx':
                if (!text) return m.reply('_Harap Masukan Link_')
                try {
                    ttdl.getInfo(text)
                        .then((result) => {
                            console.log(result)
                            m.reply(tunggu)
                            p1 = result.author
                            p2 = result.video
                            p3 = result.backsound
                            teks = `*Tiktok Downloader By DansBot*\n\n*Author :* ${p1.name} _(${p1.username})_\n*Like :* ${p2.loves}\n*Komentar :* ${p2.comments}\n*Jumlah Share :* ${p2.shares}\n*Penonton :* ${p2.views}\n*Music :* ${p3.name}\n`
                            //m.reply(teks)

                            dans.sendMessage(m.chat, {
                                video: {
                                    url: p2.url.no_wm
                                },
                                caption: teks,
                                mimetype: 'video/mp4',
                                fileName: `tiktok.mp4`
                            }, {
                                quoted: m
                            })
                            /*let buttons = [{
                        buttonId: `tiktokaudio ${text}|${p1.name}`,
                        buttonText: {
                            displayText: 'Audio'
                        },
                        type: 1
                    }

                ]
                let buttonMessage = {
                    video: {
                        url: p2.url.no_wm
                    },
                    caption: teks,
                    footer: `DansBot`,
                    buttons: buttons,
                    headerType: 4
                }
                dans.sendMessage(m.chat, buttonMessage, {
                    quoted: m
                })
                */

                        })
                } catch {
                    teks = `Terjadi Kesalahan,😞 \n`
                    let buttons = [{
                        buttonId: tiktok2,
                        buttonText: {
                            displayText: 'Coba Server 2'
                        },
                        type: 1
                    }, ]
                    await dans.sendButtonText(m.chat, buttons, teks, 'DansBot', m)
                }
                break

            case 'tiktokaudio':
                if (!text) return m.reply('_Harap Masukan Link_')
                try {
                    linke = text.split('|')[0]
                    inpo = text.split('|')[1]

                    const hbh = await fetchJson(`https://api.botcahx.biz.id/api/dowloader/tikok?url=${linke}&apikey=3bfd33d3`)
                    console.log(hbh)
                    dans.sendMessage(m.chat, {
                        audio: {
                            url: hbh.result.audio
                        },
                        mimetype: 'audio/mpeg',
                        fileName: `tiktokaud(${inpo})_dansbot.mp3`
                    }, {
                        quoted: m
                    })

                } catch {
                    m.reply(`Terjadi Kesalahan,😞 \n`)
                }
                break
            case 'tiktok2': {
                if (!text) return m.reply(`masukkan link!`)
                try {
                    m.reply(tunggu)
                    //const tt = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${text}`)
                    //ttdl.getInfo(text)
                    //.then((result) => {
                    const tt = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${text}`)
                    console.log(tt)
                    ttt = tt.hasil
                    //ttt1 = result.video
                    //ttt2 = result.backsound
                    teks = `*Tiktok Downloader By DansBot*\n\n*Author :* ${ttt.name} _(${ttt.username})_\n*Like :* ${ttt.like}\n*Komentar :* ${ttt.comment}\n*Jumlah Share :* ${ttt.share}\n*Penonton :* ${ttt.views}\n*Music :* ${ttt.music_title} _(${ttt.music_author})_\n`
                    dans.sendMessage(m.chat, {
                        video: {
                            url: ttt.download_mp4_hd
                        },
                        mimetype: 'video/mp4',
                        fileName: `danstiktok.mp4`,
                        caption: teks
                    }, {
                        quoted: m
                    })
                    //console.log(result);
                    //  })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break
            case 'cofghrrhhrea': {
                xa.information.tiktok().then(data => {
                    console.log(data)
                });
            }
            break
            case 'tiktoks': {
                if (!text) return m.reply('masukan Link')
                m.reply('wait slurrrrrrrrrr')
                const tt = await fetchJson(`https://api.akuari.my.id/downloader/tiktok3?link=${text}`)
                ttt = tt.hasil
                teks = `*Tiktok Downloader By DansBot*\n\n*Username :* ${ttt.username}\n*Judul :* ${ttt.video_title}\n*Like :* ${ttt.like}\n*Komentar :* ${ttt.comment}\n*Jumlah Share :* ${ttt.share}\n*Penonton :* ${ttt.views}\n*Music :* ${ttt.music_title} _(${ttt.music_author})_\n`
                console.log(teks)
                dans.sendMessage(m.chat, {
                    video: {
                        url: ttt.download_mp4_hd
                    },
                    mimetype: 'video/mp4',
                    fileName: `danstiktok_${ttt.video_title}.mp4`,
                    caption: teks
                }, {
                    quoted: m
                })


            }
            break




            //////Search
            case `wikipedia`:
            case 'wiki': {
                try {
                    if (!text) return m.reply('Mau cari Apa Kak?')
                    const wiki = await fetchJson(`https://api.akuari.my.id/search/wiki?query=${text}`)
                    console.log(wiki)
                    m.reply(wiki.result[0].wiki)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break

            case 'lirik': {
                if (!text) return m.reply('Mau cari Apa Kak?')
                try {
                    const wiki = await fetchJson(`https://api.akuari.my.id/search/lirik?query=${text}`)
                    console.log(wiki)
                    m.reply(wiki.result[0].lirik)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break

            ///ASUPAN
            case 'chika':
            case 'rikagusriani':
            case 'bocil':
            case 'geayubi':
            case 'santuy':
            case 'ukhty':
            case 'asupan':
            case 'delvira':
            case 'ayu':
            case 'bunga':
            case 'aura':
            case 'nisa':
            case 'ziva':
            case 'yana':
            case 'viona':
            case 'syania':
            case 'riri':
            case 'syifa':
            case 'mama_gina':
            case 'alcakenya':
            case 'mangayutri': {
                try {
                    dans.sendMessage(m.chat, {
                        video: {
                            url: `https://api.zeeoneofc.my.id/api/asupan/${command}?apikey=tTbbJXly`
                        },
                        mimetype: 'video/mp4',
                        fileName: `asupan.mp4`,
                        caption: `nih kak`
                    }, {
                        quoted: m
                    })

                    //dans.sendMessage(m.chat, { video: {url: `https://api.zeeoneofc.xyz/api/asupan/${command}?apikey=csIMuRAG` }, mimetype: 'video/mp4', fileName: `asupan.mp4`, caption: `nih kak`}, { quoted: m})
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }

            break

            ///cecan
            case 'china':
try{
  const cecan = await fetchJson(`https://api.caliph.biz.id/api/china?apikey=caliphkey`)
  dans.sendImage(m.chat, cecan.result, `nih kak`, m)
}
catch
{
  m.reply('_Terjadi Kesalahan Saat Memproses_')
}

break
case 'indonesia':
try{
            //{
  const cecan = await fetchJson(`https://api.caliph.biz.id/api/indon?apikey=caliphkey`)
  console.log(cecan.result)
  dans.sendImage(m.chat, cecan.result, `nih kak`, m)
}
catch
{
  m.reply('_Terjadi Kesalahan Saat Memproses_')
}

break
case 'malaysia':
try{
  const cecan = await fetchJson(`https://api.caliph.biz.id/api/malay?apikey=caliphkey`)
  dans.sendImage(m.chat, cecan.result, `nih kak`, m)
}
catch
{
  m.reply('_Terjadi Kesalahan Saat Memproses_')
}

break
case 'korea':
try{
  const cecan = await fetchJson(`https://api.caliph.biz.id/api/korea?apikey=caliphkey`)
  dans.sendImage(m.chat, cecan.result, `nih kak`, m)
}
catch
{
  m.reply('_Terjadi Kesalahan Saat Memproses_')
}

break
case 'japan':
  try{
    const cecan = await fetchJson(`https://api.caliph.biz.id/api/japan?apikey=caliphkey`)
    dans.sendImage(m.chat, cecan.result, `nih kak`, m)
  }
  catch
  {
    m.reply('_Terjadi Kesalahan Saat Memproses_')
  }

break

            /////random teks
            case 'katasenja':
                try {
                    const tin = await fetchJson(`https://api.zahwazein.xyz/randomtext/katasenja?apikey=${zahkey}`)
                    m.reply(`*_"${tin.result.message}"_*`)
                } catch {
                    m.reply(`_Terjadi Kesalahan Pada Sistem_`)
                }
                break
            case 'jawaquotes':
            case 'jquotes':
            case 'quotesjawa':
                try {
                    const tin = await fetchJson(`https://api.zahwazein.xyz/randomtext/jawaquote?apikey=${zahkey}`)
                    m.reply(`*_"${tin.result.message}"_*`)
                } catch {
                    m.reply(`_Terjadi Kesalahan Pada Sistem_`)
                }
                break
            case 'quotesgalau':
                try {
                    const tin = await fetchJson(`https://api.zahwazein.xyz/randomtext/galauquote?apikey=${zahkey}`)
                    m.reply(`*_"${tin.result.message}"_*`)
                } catch {
                    m.reply(`_Terjadi Kesalahan Pada Sistem_`)
                }
                break
            case 'quotesbucin':
                try {
                    const tin = await fetchJson(`https://api.zahwazein.xyz/randomtext/bucinquote?apikey=${zahkey}`)
                    m.reply(`*_"${tin.result.message}"_*`)
                } catch {
                    m.reply(`_Terjadi Kesalahan Pada Sistem_`)
                }
                break
            case 'cerpen':
                try {
                    const a = await fetchJson(`https://saipulanuar.ga/api/cerpen/random`)
                    teks = `*Pantun Pakboy*\n\n${a.result}`
                    m.reply(teks)
                } catch {
                    m.reply('_Terjadi Kesalahan Pada Sistem_')
                }
                break
            case 'bacot': {
                try {
                    //if (!text) return m.reply('Mau cari Apa Kak?')
                    const wiki = await fetchJson(`https://api.akuari.my.id/randomtext/bacot`)
                    //console.log(wiki)
                    m.reply(wiki.hasil.result)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break

            case 'fakta': {
                try {
                    const a = await fetchJson(`https://saipulanuar.ga/api/fakta`)
                    teksw = `*Fakta*\n\n_"${a.result}"_`
                    let buttons = [{
                        buttonId: `fakta`,
                        buttonText: {
                            displayText: 'Lagi'
                        },
                        type: 1
                    }]
                    let buttonMessage = {
                        text: teksw,
                        footer: 'DansBot',
                        buttons: buttons,
                        headerType: 2
                    }
                    dans.sendMessage(m.chat, buttonMessage, {
                        quoted: m
                    })
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break

            case 'katailham': {
                try {
                    //if (!text) return m.reply('Mau cari Apa Kak?')
                    const wiki = await fetchJson(`https://api.akuari.my.id/randomtext/katailham`)
                    //console.log(wiki)
                    m.reply(wiki.hasil.result)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break
            case 'katabijak': {
                //if (!text) return m.reply('Mau cari Apa Kak?')
                const wiki = await fetchJson(`https://api.akuari.my.id/randomtext/katabijak`)
                //console.log(wiki)
                m.reply(`"${wiki.hasil.quotes}"\n\n-${wiki.hasil.author}"`)
            }
            break

            case 'sindiran': {
                const wiki = await fetchJson(`https://api.akuari.my.id/randomtext/sindiran`)
                m.reply(`${wiki.hasil.result}`)
            }
            break

            case 'pantunpakboy':
                try {
                    const a = await fetchJson(`https://api.akuari.my.id/randomtext/pantunpakboy`)
                    teks = `*Pantun Pakboy*\n\n${a.hasil.result}`
                    m.reply(teks)
                } catch {
                    m.reply('_Terjadi Kesalahan Pada Sistem_')
                }
                break
            case 'candaan': {
                const wiki = await fetchJson(`https://candaan-api.vercel.app/api/text/random`)
                m.reply(`${wiki.data}`)
            }
            break




            /////random image

            case 'ijoke': {
                const aa = await fetchJson(`https://candaan-api.vercel.app/api/image/random`)
                dans.sendImage(m.chat, aa.data.url, `nih kak`, m)
            }
            break
            case 'dadu': {
                await dans.sendImageAsSticker(m.chat, `https://saipulanuar.ga/api/maker/dadu`, m, {
                    packname: global.packname,
                    author: global.author
                })
                //dans.sendImage(m.chat, `https://saipulanuar.ga/api/maker/dadu`, `Nih Kak`, m)
            }
            break
            case 'nulis': {
                if (!text) return m.reply('Teks?')
                try {
                    dans.sendImage(m.chat, `https://api.lolhuman.xyz/api/nulis?apikey=ardanfajars&text=${text}`, `Nih Kak`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break
            case 'pinterest': {
                if (!text) return m.reply('Mau Cari Apa?')
                try {
                    const pin = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=ardanfajars&query=${text}`)
                    //const pin2 = await getBuffer(pin.result)
                    dans.sendImage(m.chat, pin.result, `Nih Kak`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break
            case 'img2':
            case 'gambar2':
            case 'image2':
                try {
                    if (!text) return m.reply('Mau Cari Apa?')
                    const gg = await fetchJson(`https://api.botcahx.biz.id/api/search/googleimage?text=${text}&apikey=3bfd33d3`)
                    ggh = gg.result
                    ghh = ggh[Math.floor(Math.random() * (ggh.length))]
                    console.log(ghh)
                    ggg = ghh.url
                    dans.sendImage(m.chat, ggg, `Nih Kak`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Pada Sistem_')
                }

                break
            case 'darkjoke': {
                dans.sendImage(m.chat, 'https://api.akuari.my.id/randomimage/darkjokes1', `nih kak`, m)
            }
            break

            case 'darkmeme': {
                ss = await fetchJson(`https://api.akuari.my.id/randomimage/darkmeme17`)
                dans.sendImage(m.chat, ss.hasil, `nih kak`, m)
            }
            break
            //////converter

            case 'halah':
            case 'hilih':
            case 'huluh':
            case 'heleh':
            case 'holoh':
                if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
                ter = command[1].toLowerCase()
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                break
                //////sticker
            case 'caristicker':
            case 'caristiker': {
                if (args.length < 1) return m.reply("Mau Cari Apa?")
                const aa = await fetchJson(`https://saipulanuar.ga/api/download/stickersearch?text=patrik`)
                console.log(aa)
                await dans.sendImageAsSticker(m.chat, aa.result.url, m, {
                    packname: global.packname,
                    author: global.author
                })
            }
            break
            case 'smeme':
            case 'stickmeme':
            case 'stikmeme':
            case 'stickermeme':
            case 'stikermeme': {
                let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) throw respond
                if (!text) throw respond
                m.reply(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let media = await dans.downloadAndSaveMediaMessage(qmsg)
                let {
                    UploadFileUgu,
                    webp2mp4File,
                    TelegraPh
                } = require('./lib/uploader')
                let anu = await TelegraPh(media)
                console.log(anu)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${anu}`
                let FaTiH = await dans.sendImageAsSticker(m.chat, smeme, m, {
                    packname: global.packname,
                    author: global.auhor
                })
                await fs.unlinkSync(FaTiH)
            }
            break
            case 'ttp2':
                if (args.length < 1) return m.reply("Teks?")
                //anu1 = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=ardanfajars&text=${data.body}`)
                //client.sendMessage(from, anu1, image, {quoted: message, caption : '.sticker'})
                //const qz = await fetchJson(`https://api.lolhuman.xyz/api/ttp?apikey=ardanfajars&text=${data.body}`)
                await dans.sendImageAsSticker(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${text}`, m, {
                    packname: global.packname,
                    author: global.author
                })
                break
            case 'ttp':
                if (args.length < 1) return m.reply("Teks?")
                //anu1 = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=ardanfajars&text=${data.body}`)
                //client.sendMessage(from, anu1, image, {quoted: message, caption : '.sticker'})
                //const qz = await fetchJson(`https://api.lolhuman.xyz/api/ttp?apikey=ardanfajars&text=${data.body}`)
                await dans.sendImageAsSticker(m.chat, `https://api.lolhuman.xyz/api/ttp3?apikey=ardanfajars&text=${text}`, m, {
                    packname: global.packname,
                    author: global.author
                })
                break

            case 'sticker':
            case 's':
            case 'stickergif':
            case 'sgif': {
                if (/image/.test(mime)) {
                    //m.reply(mess.wait)
                    let media = await dans.downloadMediaMessage(qmsg)
                    let encmedia = await dans.sendImageAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    m.reply(mess.wait)
                    if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await dans.downloadMediaMessage(qmsg)
                    let encmedia = await dans.sendVideoAsSticker(m.chat, media, m, {
                        packname: global.packname,
                        author: global.author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                }
            }
            break
            case 'stickerwm':
            case 'swm':
            case 'stickergifwm':
            case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                m.reply(mess.wait)
                if (/image/.test(mime)) {
                    let media = await dans.downloadMediaMessage(qmsg)
                    let encmedia = await dans.sendImageAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await dans.downloadMediaMessage(qmsg)
                    let encmedia = await dans.sendVideoAsSticker(m.chat, media, m, {
                        packname: teks1,
                        author: teks2
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break

            case 'led':
            case 'neon-love':
            case '3dgolden':
            case 'christmas':
            case '3drainbow':
            case 'halloweenskeleton':
            case 'magma':
            case 'space':
            case 'transformer':
            case 'thunder':
            case 'cinematichorror':
            case 'summer':
            case 'summer2':
            case 'business':
            case 'lightglow':
            case 'batman':
            case 'sketch': {
                if (!text) return m.reply(`Teks?`)
                try {
                    m.reply(tunggu)
                    dans.sendImage(m.chat, `https://api.akuari.my.id/textpro/${command}?text=${text}`, `nih kak`, m)
                } catch {
                    m.reply('_Terjadi Kesalahan Saat Memproses_')
                }
            }
            break

            ///tools
            case 'toindo':
                if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                tin = await fetchJson(`https://api.akuari.my.id/edukasi/terjemah?query=${tex}&kode=id`)
                m.reply(tin.terjemah)
                break
            case 'toing':
                if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
                tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                tin = await fetchJson(`https://api.akuari.my.id/edukasi/terjemah?query=${tex}&kode=en`)
                m.reply(tin.terjemah)
                break
            case 'carimusik2': {
                let {
                    UploadFileUgu,
                    webp2mp4File,
                    TelegraPh
                } = require('./lib/uploader')
                let media = await dans.downloadAndSaveMediaMessage(qmsg)
                let anu = await UploadFileUgu(media)
                console.log(anu)
                //console.log(util.format(anu))
                let urle = anu.url
                const axios = require("axios");

                const options = {
                    method: 'GET',
                    url: 'https://shazam.p.rapidapi.com/songs/get-details',
                    params: {
                        key: urle,
                        locale: 'id'
                    },
                    headers: {
                        'X-RapidAPI-Key': '50021b7834mshe02f15fb598068cp180010jsn91b8ca7929aa',
                        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
                    }
                };

                axios.request(options).then(function(response) {
                    console.log(response.data.title);
                }).catch(function(error) {
                    console.error(error);
                });

            }
            break
            case 'carimusik':
            case 'whatmusic':if (!isCreator) return m.reply('*_Under Maintenance_*')
            
                m.reply(`_Menganalisa Musik..._\n_Tunggu Sebentar_`)
                try {
                    let {
                        UploadFileUgu,
                        webp2mp4File,
                        TelegraPh
                    } = require('./lib/uploader')
                    let media = await dans.downloadAndSaveMediaMessage(qmsg)
                    let anu = await UploadFileUgu(media)
                    console.log(anu)
                    //console.log(util.format(anu))
                    let hsl = anu.url
                    const lgu = await fetchJson(`hhttps://api.lolhuman.xyz/api/musicsearch?apikey=ardanfajars&file=${hsl}`)
                    console.log(lgu)
                    let yts = require("yt-search")
                    //cari = `${lgu.result.title} ${lgu.result.artist}`
                    // let search = await yts(cari)
                    // let anuq = search.videos[0]
                    // urllagu = anuq.url
                    teks = `*Informasi Musik Ditemukan*\n\n*Judul :* ${lgu.result.title}\n*Penyanyi :* ${lgu.result.artists[0]}\n*Album :* ${lgu.result.album}\n*Genre :* ${lgu.result.genres[0]}\n*Rilis :* ${lgu.result.release}\n\n\n*= = =DansBot= = =*`
                    /*let buttons = [{
                                            buttonId: `audio ${lgu.result.title} ${lgu.result.artist}`,
                                            buttonText: {
                                                displayText: 'Full lagu'
                                            },
                                            type: 1
                                        }
                                    ]
                                    let buttonMessage = {
                                        text: teks,
                                        footer: `Klik Dibawah ini Jika Ingin versi Fullnya`,
                                        buttons: buttons,
                                        headerType: 4
                                    }
                                    dans.sendMessage(m.chat, buttonMessage, {
                                        quoted: m
                                    })
                                    */
                    m.reply(teks)
                } catch {
                    m.reply(`Maaf, Tidak Ketemu nih...`)
                }
                break
                /////////informasi
            case 'infogempa':
            case 'gempa': {
                m.reply("_Mendapatkan Informasi Gempa Terkini..._")
                res = await fetchJson(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
                const p = res.Infogempa.gempa
                //console.log(p)
                teks = `*Tanggal :* ${p.Tanggal}\n*Waktu :* ${p.Jam}\n*Magnitudo :* ${p.Magnitude}SR\n*Kedalaman :* ${p.Kedalaman}\n*Wilayah :* ${p.Wilayah}\n*Koordinat :* ${p.Coordinates}\n*Potensi :* ${p.Potensi}\n*Dirasakan :* ${p.Dirasakan}\n\nData: *BMKG*`
                gmr = `https://data.bmkg.go.id/DataMKG/TEWS/${p.Shakemap}`
                await dans.sendImage(m.chat, gmr, `*INFORMASI GEMPA BUMI TERKINI*\n\n${teks}`, m)
            }
            break
            //////primbon
            case 'nomerhoki':
            case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi':
            case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh':
            case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali':
            case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta':
            case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama':
            case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan':
            case 'cocokpasangan':
            case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendImage(m.chat, anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan':
            case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext) throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki':
            case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan':
            case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib':
            case 'ramalnasib':
            case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit':
            case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot':
            case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar':
            case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas':
            case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari':
            case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki':
            case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton':
            case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat':
            case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak':
            case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_, _d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])

                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                dans.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
            }
            break
            ////grub command
            case 'autodown2':
                if (m.isGroup) return m.reply('Hanya Di Privat')
                if (args.length < 1) return m.reply('Untuk Mengaktifkan fitur auto download sosmed ketik !autodown on/off')
                if ((args[0]) === 'on') {
                    if (ismediah) return m.reply('Mode auto download sudah aktif')
                    _mediah.push(m.chat)
                    fs.writeFileSync('./database/media.json', JSON.stringify(_mediah))
                    m.reply(`\`\`\`✓Sukses mengaktifkan mode auto download\`\`\` `)
                } else if ((args[0]) === 'off') {
                    if (!ismediah) return m.reply('Mode Auto Download Sudah Off sebelumnya')
                    _mediah.splice(m.chat, 1)
                    fs.writeFileSync('./database/media.json', JSON.stringify(_mediah))
                    m.reply(`\`\`\`✓Sukes menonaktifkan mode auto download\`\`\``)
                } else {
                    m.reply('On untuk mengaktifkan, Off untuk menonaktifkan')
                }
                break
            case 'autodown':
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply('Hanya YTH.Admin Yang Baik Dan Tidak Somboh , Yang bisa Mengaktifkan...  ')
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (args.length < 1) return m.reply('Untuk Mengaktifkan fitur auto download sosmed ketik !autodown on/off')
                if ((args[0]) === 'on') {
                    if (ismediah) return m.reply('Mode auto download sudah aktif')
                    _mediah.push(m.chat)
                    fs.writeFileSync('./database/media.json', JSON.stringify(_mediah))
                    m.reply(`\`\`\`✓Sukses mengaktifkan mode auto download di group\`\`\` *${groupMetadata.subject}*`)
                } else if ((args[0]) === 'off') {
                    if (!ismediah) return m.reply('Mode Auto Download Sudah Off sebelumnya')
                    _mediah.splice(m.chat, 1)
                    fs.writeFileSync('./database/media.json', JSON.stringify(_mediah))
                    m.reply(`\`\`\`✓Sukes menonaktifkan mode auto download di group\`\`\` *${groupMetadata.subject}*`)
                } else {
                    m.reply('On untuk mengaktifkan, Off untuk menonaktifkan')
                }
                break
            case 'simih':
                if (!m.isGroup) return m.reply(mess.group)
                if (!isAdmins) return m.reply('Hanya YTH.Admin Yang Baik Dan Tidak Somboh , Yang bisa Mengaktifkan...  ')
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (args.length < 1) return m.reply('on/off')
                if ((args[0]) === 'on') {
                    if (isSimi) return m.reply('Mode simi sudah aktif')
                    _samih.push(m.chat)
                    fs.writeFileSync('./database/simi.json', JSON.stringify(_samih))
                    m.reply(`\`\`\`✓Sukses mengaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`)
                } else if ((args[0]) === 'off') {
                    if (!isSimi) return m.reply('Mode simi Sudah Off sebelumnya')
                    _samih.splice(m.chat, 1)
                    fs.writeFileSync('./database/simi.json', JSON.stringify(_samih))
                    m.reply(`\`\`\`✓Sukes menonaktifkan mode simi di group\`\`\` *${groupMetadata.subject}*`)
                } else {
                    m.reply('On untuk mengaktifkan, Off untuk menonaktifkan')
                }
                break

            default:

            ///auto grub
                if (ismediah && budy != undefined) {
                    console.log(budy)
                    if (isTiktok) {
                        m.reply(`*Link Tiktok Terdeteksi (${budy})*\n\nBot Akan Kirim Videonya\nTunggu kak...`)
                        console.log(`iki ngab ${budy}`)
                        const adon = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${budy}`)
                      //console.log(adon)
                      console.log('AutoDown Tiktok')
                    p1 = adon.result
                    teks = `*Tiktok Downloader By DansBot*\n\n*Judul :* ${p1.title}\n*Author :* ${p1.author.username} _(${p1.author.nickname})_\n*Like :* ${p1.statistic.like_count}\n*Komentar :* ${p1.statistic.comment_count}\n*Jumlah Share :* ${p1.statistic.share_count}\n*Penonton :* ${p1.statistic.play_count}\n`
                      

                    dans.sendMessage(m.chat, {
                        video: {
                            url: p1.link
                        },
                        caption: teks,
                        mimetype: 'video/mp4',
                        fileName: `tiktok.mp4`
                    }, {
                        quoted: m
                    })
                    }
                    if (isInsta) {
                        m.reply(`*Link Instagram Terdeteksi (${budy})*\n\nBot Akan Kirim Medianya\nTunggu kak...`)
                        const igs = await fetchJson(`https://api.lolhuman.xyz/api/instagram2?apikey=${lolkey}&url=${budy}`)
					console.log(igs)
                    const teksx = `*IG DOWNLOADER*\n\n*Dari:* ${igs.result.account.username} _(${igs.result.account.full_name})_\n${igs.result.caption} \n\n*_Media Sedang Dikirim._*\n\n@dans_bot`
                    m.reply(teksx)
                    for (let i of igs.result.media) {
                        //let link = await getBuffer(i.url)
                        console.log(i)
                      setTimeout(() => {
                    dans.sendFileUrl(m.chat, i, `_Nih Kak_`, m)
                }, 5000)
                       
                }
                    }
                    if (isYucup) {
                      m.reply(`*Link Youtube Terdeteksi (${budy})*\n\nBot Akan Kirim Medianya\nTunggu kak...`)
                        const yt = await youtubedl(budy).catch(async () => await youtubedlv2(url))
                    const dl_url = await yt.audio['128kbps'].download()
                    console.log(dl_url)
                    let yts = require("yt-search")
                    let search = await yts(yt.title)
                    let anu = search.videos[0]
                    teksnyax = `Mengirim lagu *${anu.title}* dari *${anu.author.name}*\ntunggu sebentar...`
                    dans.sendImage(m.chat, yt.thumbnail, teksnyax, m)
                    dans.sendMessage(m.chat, {
                        audio: {
                            url: dl_url
                        },
                        mimetype: 'audio/mpeg',
                        fileName: `${anu.title}.mp3`
                    }, {
                        quoted: m
                    })
                    }
                }
            
                if ( isCmd && !isSimi && budy.toLowerCase() != undefined) {
                  console.log('yes')
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    dans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }

            
            if ( !m.isGroup && isCmd && budy.toLowerCase() != undefined) {
                  console.log('yes')
                    if (m.chat.endsWith('broadcast')) return
                    if (m.isBaileys) return
                    let msgs = global.db.data.database
                    if (!(budy.toLowerCase() in msgs)) return
                    dans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
                }
                
                //simi sini
                if (m.isGroup && isSimi && budy != undefined) {
                    console.log(budy)
                    const teks = encodeURIComponent(budy)
                    muehe = await fetchJson(`https://api.simsimi.vn/v2/?text=${teks}&lc=id&cf=false`)
                    if (muehe.success === "Aku tidak mengerti apa yang kamu katakan.Tolong ajari aku.") return console.log(`rareti`)
                    console.log(muehe.success)
                    if (!isTiktok && !isInsta) return m.reply(muehe.success)

                }
                ///end auto grub

                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return m.reply(`${err}`)
                        if (stdout) return m.reply(stdout)
                    })
                }

                if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    let room = Object.values(db.data.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }

                
        }


    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
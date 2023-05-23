let handler = async (m, { conn }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

m.reply(`
*PRICELIST HARGA PANEL NANZ* :

══[「 *PANEL RUN BOT*」]══♽
⛁: RAM 2GB | CPU 70%
╰━━━☉ HARGA : 10.000
⛁: RAM 3GB | CPU 80%
╰━━━☉ HARGA : 15.000
⛁: RAM 4GB | CPU 90%
╰━━━☉ HARGA : 20.000
⛁: RAM 5GB | CPU 100%
╰━━━☉ HARGA : 25.000
⛁: RAM 6GB | CPU 110%
╰━━━☉ HARGA : 30.000
⛁: RAM UNLI | CPU UNLI
╰━━━☉ HARGA : 40.000
━━━━━━━━━━━━━━━⬣

══[「 *+ SLOT SERVER* 」]══♽
⛁: RAM 2GB | CPU 70%
╰━━━☉ HARGA : 15.000
⛁: RAM 3GB | CPU 80%
╰━━━☉ HARGA : 20.000
⛁: RAM 4GB | CPU 90%
╰━━━☉ HARGA : 25.000
⛁: RAM 5GB | CPU 100%
╰━━━☉ HARGA : 30.000

*+slot adalah bisa menambah server dalam 1 panel
━━━━━━━━━━━━━━━⬣

═══[「 *JASA RUN* 」]═══♽
⛁: RAM 2GB | CPU 80%
╰━━━☉ HARGA : 20.000
⛁: RAM 4GB | CPU 100%
╰━━━☉ HARGA : 40.000

*apa itu jasa run? Jasa ini adalah untuk menjalankan bot menggunakan nomor WhatsApp kalian yang ingin dijadikan bot,  
*tinggal scan aja* di WhatsApp yang ingin kalian jadikan bot. 
━━━━━━━━━━━━━━━⬣

═══[「 *UPGRADE* 」]═══♽
• *RAM/CPU 1-3* :  5K
• *RAM/CPU 4-7* : 10K
━━━━━━━━━━━━━━━⬣

==========================
INGAT JANGAN MAU DI IMING IMINGI PANEL MURAH UJUNG UJUNGNYA BUNTUNG ADA HARGA ADA KWALITASS 😇🙏

*KEUNTUNGAN?*
❐ TIDAK BOROS KOUTA & MEMORI
❐ BISA RUN 24 JAM
❐ WEBSITE DI CLOSE BOT TETAP JALAN
❐ FAST RESPON [SERVER BARU]

*MINAT? CHAT* : 62 851-7431-0482 

Jadilah Pembeli Yang Bijak
Pelanggan Senang Kami Ikut senang😅

Keep Calculations In Buying😊

https://chat.whatsapp.com/HoZ2mpViNciEDUu9XrKheI
    `)
}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(sewa)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
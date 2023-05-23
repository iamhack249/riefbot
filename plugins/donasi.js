let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/1ad75c64f414d379fb196.jpg'
let dann =
`
┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Dana: 62895600555028
┃Pulsa: 6282172824438
┃Pulsa: Scan qris di atas
┃Gopay: Scan qris di atas 
┃Thanks for Donationing!
┗━━━ꕥ
`
 await conn.sendButton(m.chat, dann, wm, qris, [['Menu', '.menu']], m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler
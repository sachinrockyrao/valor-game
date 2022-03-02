let handler =  m => m.reply(`
├────【 DONATE 】────┤

₹ ᴜᴩɪ: 9107910799@paytm
💱 ᴩᴀʏᴩᴀʟ: https://www.paypal.me/DineshValor
₿ ʙɪᴛᴄᴏɪɴ: 3NHhMBDrkD2ymWnP7BGvSJuejvUGHr1kb8
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

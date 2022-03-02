let handler = async (m, { conn, text, command }) => {
    conn.sendButton(m.chat, '├─────【 RULES 】─────┤', '# one\n#two\n# three\n so on...', 'https://telegra.ph/file/fe5883c8011fd033e395c.jpg', [
['ᴅᴇʟᴇᴛᴇ', '/delete'],
['ᴍᴇɴᴜ', '/menu']
], m, { asLocation: true })
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules|\?)$/i

export default handler
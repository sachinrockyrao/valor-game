let handler = async (m, { conn, text, command }) => {
    conn.sendButton(m.chat, '├─────【 RULES 】─────┤', '✯No 18+ content\n✯Valor as main team allowed\n✯No Off topic talks\n✯No Flirting/Abuses\n✯Don\'t change grp name/DP\n✯Don\'t screw up admin\n✯Respect each other and don\'t argue with anyone else because we are like a family\n✯Any decision should be taken by consult of other fellow admins any one admin can\'t take any decision themselves\n✯Breaking rule=Kickout without warning and admins getting demotion💣\n✯Use mass tag once at the start of the raid and 2nd time after decided', 'https://telegra.ph/file/fe5883c8011fd033e395c.jpg', [
['ᴅᴇʟᴇᴛᴇ', '/delete'],
['ᴍᴇɴᴜ', '/menu']
], m, { asLocation: true })
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules|\?)$/i

export default handler

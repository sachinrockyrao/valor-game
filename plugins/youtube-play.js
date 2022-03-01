import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendButton(m.chat, `${title}`, `
  🔗 ᴜʀʟ: ${vid.url}
🗒️ ᴅᴇsᴄʀɪᴩᴛɪᴏɴ: ${description}
⌛ ᴩᴜʙʟɪsʜᴇᴅ: ${publishedTime}
⌚ ᴅᴜʀᴀᴛɪᴏɴ: ${durationH}
👁️‍🗨️️ ᴠɪᴇᴡs: ${viewH}
`.trim(), thumbnail, [
['Audio 🎧', `${usedPrefix}yta ${url} yes`], 
['Video 🎥', `${usedPrefix}ytv ${url} yes`],
], m, { asLocation: true })
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

export default handler


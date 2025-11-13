const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'shsmb.aternos.me', // Server address (':' ഇല്ലാതെ)
  port: 63328,               // Port നമ്പർ
  username: 'Bot123'         // Bot name (Minecraft username)
})

bot.on('spawn', () => {
  console.log('✅ Bot joined the server successfully!')
})

bot.on('error', (err) => {
  console.log('❌ Error:', err)
})

bot.on('end', () => {
  console.log('🔁 Bot disconnected. Reconnecting in 10s...')
  setTimeout(() => {
    process.exit(1) // Render will auto restart
  }, 10000)
})

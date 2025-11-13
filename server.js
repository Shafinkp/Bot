const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'yourname.aternos.me', // ഇവിടെ നിന്റെ Aternos IP ഇടുക
  port: 25565,
  username: 'KeepAliveBot' // ബോട്ട് നാമം
});

bot.on('spawn', () => {
  console.log('🤖 Bot connected to Aternos server!');
});

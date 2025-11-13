const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Shsmb.aternos.me:', // ഇവിടെ നിന്റെ Aternos IP ഇടുക
  port: 63328,
  username: 'KeepAliveBot' // ബോട്ട് നാമം
});

bot.on('spawn', () => {
  console.log('🤖 Bot connected to Aternos server!');
});

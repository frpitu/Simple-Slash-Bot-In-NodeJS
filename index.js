/** 
 * 
 * Simple Slash Bot
 * 
 * Author: frpitu
 * Twitter: @frpitu
 * GutHub:https://github.com/frpitu 
 * 
 * Repo: https://github.com/frpitu/Simple-Slash-Bot-In-NodeJS
*/

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'SEU_TOKEN_DO_DISCORD_AQUI';

client.once('ready', () => {
    console.log('Bot está online!');
});

client.on('messageCreate', message => {
    if (message.content === '/hello') {
        message.channel.send('Olá!');
    }
});

client.login(TOKEN);
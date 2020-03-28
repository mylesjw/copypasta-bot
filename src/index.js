import Discord from 'discord.js';
import handleInput from './handleInput';

const client = new Discord.Client();

client.on('ready', () => {
  console.log('Ready');
});

client.on('message', ({ content, channel, author }) => {
  if (!content.startsWith('!pasta') || author.bot) return;

  const input = content.split(' ').slice(1);

  let output = handleInput(input[0]);

  if (input[1] && parseInt(input[1], 10)) output = output.repeat(input[1]);

  channel.send(output);
});

client.login(process.env.TOKEN);

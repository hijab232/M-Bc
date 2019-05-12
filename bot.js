const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";
client.on('ready', () => {
  console.log('╔[════════════════════════════════════]╗');
  console.log('')
  console.log('            ╔[════════════]╗')
  console.log('              Bot Is Online')
  console.log('            ╚[════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});

  client.on('ready', function(){
    client.user.setStatus("dnd");
    var ms = 100000 ;
    var setGame = [`🌙رمضان كريم`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/hijab232`);
    }, ms);100000

});

client.on('message', function(message) {
  if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
      var norElden = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setTimestamp()
          .setTitle('``رساله في خاص البوت``')
          .setThumbnail(`${message.author.avatarURL}`)
          .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
          .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
      client.channels.get("458493668395843585").send({ embed: norElden });
  }
});

    client.on("guildCreate", guild => {
    client.channels.get("458493668395843585").send(' ***  البوت  ***   **دخل في**   ***[ ' + `${guild.name}` + ' ]***   ,   **  الأونر  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });
    
    client.on("guildDelete", guild => {
    client.channels.get("458493668395843585").send(' ***  البوت  ***   **دخل في**   ***[ ' + `${guild.name}` + ' ]***   ,   **  الأونر  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
    });

  client.on('message', msg => {
    if (msg.content === '>>>>>>>>') {
      msg.reply('هلا!');
    }

  });
  
  client.on('message', message => {
  var prefix = "!";
  if(message.content.startsWith(prefix + "invbot")) { 
  message.author.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2080374975`);
  }
  });

client.on('message', async message => {
  let args = message.content.slice(3);
  if(message.content.startsWith(prefix + 'bc')) {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) return message.channel.send('Required Administrator Permission')
       message.guild.members.forEach(m => {
      
      m.send(args.replace('[user]', m).replace('[server]', m.guild.name).replace('[sender]', message.author.username))
    })
  }
})

client.login(process.env.BOT_TOKEN);

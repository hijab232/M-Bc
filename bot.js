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

client.on('message' , message => {
      if(message.author.bot) return;
     
      if(message.content.startsWith(prefix + "bc")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')
       
        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | `$rolebc role message`")
            return;
        }
     
     
              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(`${codes}`)
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });

client.login(process.env.BOT_TOKEN);

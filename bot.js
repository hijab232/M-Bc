const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
var prefix = ",";
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
  console.log(`prefix = [" ${prefix}"]`)
  console.log('')
  console.log(`[Codes] ${client.users.size}`)
  console.log('')
  console.log('╚[════════════════════════════════════]╝')
});

  client.on('ready', function(){
    client.user.setStatus("Online");
    var ms = 100000 ;
    var setGame = [`القضاء`];
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

client.on('message', message => {
    let args = message.content.split(' ').slice(1);

    if(message.content.startsWith(prefix + 'dm')) {
        let mnt = message.mentions.users.first();
        if(!mnt) return message.reply('Please mention someone!');
        mnt.send(args.join(' ').replace(mnt, '')).then(() => {
            message.channel.send('Successfully sent the message!');
        }).catch(() => {
            message.channel.send('The user have dms disabled');
        });
    };
})

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
      client.channels.get("593183871860736036").send({ embed: norElden });
  }
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

client.on('message', message => {
if(message.author.bot) return;
if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'bc')) {
     let filter = m => m.author.id === message.author.id;
 
 let recembed = new Discord.RichEmbed()
 .setTitle(`${client.user.username}`)
 .setDescription(`
 -=-=-=-=-=-=-=-=-=-=
 🎖 Broadcast sends to a specific role without embed
 
 🏅 Broadcast sends to a specific role with embed
 
 📭 Broadcast sends for all members with embed
 
 📧 Broadcast sends for all members without embed
 
 🔵 Broadcast sends for online members only without embed
 
 🔷 Broadcast sends for online members only with embed
 
 ❌ To Cancel the process
 -=-=-=-=-=-=-=-=-=-=
 `)
 
 message.channel.sendEmbed(recembed).then(msg => {
     msg.react('🎖')
     .then(() => msg.react('🏅'))
     .then(() => msg.react('📭'))
     .then(() =>  msg.react('📧'))
     .then(() => msg.react('🔵'))
     .then(() => msg.react('🔷'))
     .then(() => msg.react('❌'))
 
 
             let embedmsgFilter = (reaction, user) => reaction.emoji.name === '📭' && user.id === message.author.id;
 
             let normalmsgFilter = (reaction, user) => reaction.emoji.name === '📧' && user.id === message.author.id;
 
             let cancelFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
             let onlyroleFilter = (reaction, user) => reaction.emoji.name === '🎖' && user.id === message.author.id;8
 
             let onlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔵' && user.id === message.author.id;8
 
             let embedonlineonlyFilter = (reaction, user) => reaction.emoji.name === '🔷' && user.id === message.author.id;8
 
             let embedonlyroleFilter = (reaction, user) => reaction.emoji.name === '🏅' && user.id === message.author.id;8
 
             let embedmsg = msg.createReactionCollector(embedmsgFilter, { time: 0 });
 
             let normalmsg = msg.createReactionCollector(normalmsgFilter, { time: 0 });
     
             let onlyrole = msg.createReactionCollector(onlyroleFilter, { time: 0 });
 
             let embedonlyrole = msg.createReactionCollector(embedonlyroleFilter, { time: 0 });
 
             let onlineonly = msg.createReactionCollector(onlineonlyFilter, { time: 0 });
                 
             let embedonlineonly = msg.createReactionCollector(embedonlineonlyFilter, { time: 0 });
 
             let cancel = msg.createReactionCollector(cancelFilter, { time: 0 });
 
 embedonlineonly.on('collect', r => {
 
    let msge;
    message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
   
           message.channel.awaitMessages(filter, {
             max: 1,
             time: 90000,
             errors: ['time']
           })
           .then(collected => {
               collected.first().delete();
               msge = collected.first().content;
               msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
                 message.channel.awaitMessages(filter, {
                   max: 1,
                   time: 90000,
                   errors: ['time']
                 })
                 .then(collected => {
                   if(collected.first().content === 'yes') {
   message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
   
   
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           m.send(`${m}`)
           
       })
   }})
   if(collected.first().content === 'no') {
   message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
   message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    var bc = new Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle(`:mega: New Broadcast`)
           .addField('🔰Server🔰', message.guild.name)
           .addField('🚩Sender🚩', message.author.username)
           .addField('📜Message📜', `${msge}`)
           .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
           .setFooter(client.user.username, client.user.avatarURL);
           m.send({ embed: bc })
           
       })
   }
                 
   })
               })
           })
       })
 
       
 onlineonly.on('collect', r => {
    let msge;
    message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            msge = collected.first().content;
            msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 90000,
                errors: ['time']
              })
              .then(collected => {
 
                if(collected.first().content === 'yes') {
message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
               
 
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`)
m.send(`${m}`)      
       
    })
}
if(collected.first().content === 'no') {
message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(`${msge}`)
               
    })}
})
})
        })
    })
})
 
 embedmsg.on('collect', r => {
     let msge;
  message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
 
 
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         m.send(`${m}`)
         
     })
 }})
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
     message.guild.members.forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
     })
 }
               
 })
             })
         })
     })
 
 
   
 
 
 
 normalmsg.on('collect', r => {
     let msge;
     message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                 
 
     message.guild.members.forEach(m => {
 m.send(`${msge}`)
 m.send(`${m}`)      
         
     })
 }
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
     message.guild.members.forEach(m => {
         m.send(`${msge}`)
                 
     })}
 })
 })
         })
     })
 })
 
 onlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit('✅ **| Now Please Write The Role Name**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                 
 
             message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
 m.send(`${msge}`)
 m.send(`${m}`)      
         
     })
 }
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
         message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
 
         m.send(`${msge}`)
                 
     })}
 })
 })
         })
     })
 })
 })
 });
 
 
 
 embedonlyrole.on('collect', r => {
     let msge;
     let role;
     message.channel.send(':pencil: **| Please Write Now The Message To Send :pencil2: **').then(msg => {
 
         message.channel.awaitMessages(filter, {
           max: 1,
           time: 90000,
           errors: ['time']
         })
 
         .then(collected => {
             collected.first().delete();
             msge = collected.first().content;
                 msg.edit('✅ **| Now Please Write The Role Name**').then(msg => {
                 message.channel.awaitMessages(filter, {
                     max: 1,
                     time: 90000,
                     errors: ['time']
                   })
         
         .then(collected => {
             collected.first().delete();
             role = collected.first().content;
                 let rolecheak = message.guild.roles.find('name', `${role}`)
             msg.edit('✅ **| Do You Want A Mention In The Msg ? [yes OR no] **').then(msg => {
               message.channel.awaitMessages(filter, {
                 max: 1,
                 time: 90000,
                 errors: ['time']
               })
               .then(collected => {
 
                 if(collected.first().content === 'yes') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
                 
 
                     message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
                         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
 m.send(`${m}`)      
         
     })
 }
 if(collected.first().content === 'no') {
 message.channel.send(`**:white_check_mark: The Message Has Been Sent The Members :loudspeaker:**`);
 message.guild.members.filter(m => m.roles.get(rolecheak.id)).forEach(m => {
         var bc = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(`:mega: New Broadcast`)
         .addField('🔰Server🔰', message.guild.name)
         .addField('🚩Sender🚩', message.author.username)
         .addField('📜Message📜', `${msge}`)
         .setThumbnail('https://a.top4top.net/p_1008gqyyd1.png')
         .setFooter(client.user.username, client.user.avatarURL);
         m.send({ embed: bc })
         
                 
     })}
 })
 })
         })
     })
 })
 })
 })
     cancel.on('collect', r => {
         let cancelembed = new Discord.RichEmbed()
         .setTitle('Successfully Canceled :x:')
      message.channel.sendEmbed(cancelembed)
         embedmsg.stop();
         normalmsg.stop();
         onlyrole.stop();
         embedonlyrole.stop();
         embedonlineonly.stop()
         onlineonly.stop()
         cancel.stop();
     })
 })
    }});

client.on("guildMemberAdd", function(member) {
  const wc = member.guild.channels.find("name", "log")
      const embed = new Discord.RichEmbed()
      .setColor('00FF01')
      .setAuthor(member.user.tag, member.user.avatarURL)
      .setFooter(`User joined (${member.guild.memberCount})`)
      .setTimestamp()
      return wc.sendEmbed(embed);
});

client.on("guildMemberRemove", function(member) {
  const wc = member.guild.channels.find("name", "log")
      const embed = new Discord.RichEmbed()
      .setColor('FF0000')
      .setAuthor(member.user.tag, member.user.avatarURL)
      .setFooter("User left ")
      .setTimestamp()
      return wc.sendEmbed(embed);
});

client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`🗑️ **حذف رساله**
**ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});

client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`✏ **تعديل رساله
ارسلها <@${message.author.id}>                                                                                                                         تم تعديلها في شات** <#${message.channel.id}>\n\nقبل التعديل:\n \`${message.cleanContent}\`\n\nبعد التعديل:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});


});

client.login(process.env.BOT_TOKEN);

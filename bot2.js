const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
var prefix = "!"
var OwnerId = '300048424261255168'
var OwnerName = 'Hijab232#3552'

client.on('ready', () => {
  console.log('══════════════════════════════════════════════');
  console.log('')
  console.log('            ╔[═════════════════════════]╗')
  console.log('              Welcome-to-bot-Im-ready')
  console.log('            ╚[═════════════════════════]╝')
  console.log('')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers!  " ${client.guilds.size} " `);
  console.log('')
  console.log(`Users!  " ${client.users.size} " `);
  console.log('')  
  console.log(`Developer Name " ${OwnerName} "`)
  console.log('')
  console.log(`Developer ID " ${OwnerId} "`)
  console.log('')
  console.log(`prefix =  " ${prefix} " `)
  console.log('')
  console.log('══════════════════════════════════════════════')
});

 client.on('message', message => {
    if (message.content === 'clock') {
      let Canvas = require('canvas');
      let canvas = new Canvas(400, 400),
      rebel = canvas.getContext('2d');
   
      var radius = canvas.height / 2;
      rebel.translate(radius, radius);
      radius = radius * 0.90;
     
      let Image = Canvas.Image;
   
      imgImport(rebel);
     
      drawClock();
     
   
      let fileC  = new Discord.Attachment(canvas.toBuffer(), 'clock.png');
      message.channel.send({file : fileC});
     
      function imgImport(rebel){
          var img = new Image();
          img.onload = function(){
              rebel.drawImage(img,-200,-200);
          };
          img.src = './موقع الصورة لو توفر';
      }
     
      function drawClock() {
          drawFace(rebel, radius);
          drawNumbers(rebel, radius);
          drawTime(rebel, radius);
      }
     
      function drawFace(rebel, radius) {
          var grad;
          rebel.beginPath();
          rebel.arc(0, 0, radius, 0, 2*Math.PI);
          //ctx.fillStyle = 'white';
          //ctx.fill();
          grad = rebel.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
          grad.addColorStop(0, '#42d9f4');
          grad.addColorStop(0.5, 'white');
          grad.addColorStop(1, '#42d9f4');
          rebel.strokeStyle = grad;
          rebel.lineWidth = radius*0.1;
          rebel.stroke();
          rebel.beginPath();
          rebel.arc(0, 0, radius*0.1, 0, 2*Math.PI);
          rebel.fillStyle = '#42d9f4';
          rebel.fill();
      }
      function drawNumbers(rebel, radius) {
          var ang;
          var num;
          rebel.font = radius*0.15 + "px arial";
          rebel.textBaseline="middle";
          rebel.textAlign="center";
          for(num = 1; num < 13; num++){
              ang = num * Math.PI / 6;
              rebel.rotate(ang);
              rebel.translate(0, -radius*0.85);
              rebel.rotate(-ang);
              rebel.fillText(num.toString(), 0, 0);
              rebel.rotate(ang);
              rebel.translate(0, radius*0.85);
              rebel.rotate(-ang);
          }
      }
     
      function drawTime(rebel, radius){
          var now = new Date();
          var hour = now.getHours() + 2;
          var minute = now.getMinutes() - 8;
          var second = now.getSeconds();
          //hour
          hour=hour%12;
          hour=(hour*Math.PI/6)+
          (minute*Math.PI/(6*60))+
          (second*Math.PI/(360*60));
          drawHand(rebel, hour, radius*0.5, radius*0.07);
          //minute
          minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
          drawHand(rebel, minute, radius*0.8, radius*0.07);
          // second
          second=(second*Math.PI/30);
          drawHand(rebel, second, radius*0.9, radius*0.02);
      }
     
      function drawHand(rebel, pos, length, width) {
          rebel.beginPath();
          rebel.lineWidth = width;
          rebel.lineCap = "round";
          rebel.moveTo(0,0);
          rebel.rotate(pos);
          rebel.lineTo(0, -length);
          rebel.stroke();
          rebel.rotate(-pos);
      }
   
    };
   
   
  });

client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

:heart_eyes: السلام عليكم :heart: 
تبي حسابات ماينكرافت او اي حساب :scream:
ومالقيت مين يعطيك :money_mouth: 
:heart: :heart: ادخل ده السيرفر وشارك بالمسابقات و انشاء الله تفوز:heart: :heart:
https://discord.gg/WprUBRW

joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 

:heart_eyes: السلام عليكم :heart: 
تبي حسابات ماينكرافت او اي حساب :scream:
ومالقيت مين يعطيك :money_mouth: 
:heart: :heart: ادخل ده السيرفر وشارك بالمسابقات و انشاء الله تفوز:heart: :heart:
https://discord.gg/WprUBRW

joined info-selfie
! Selfie.                              
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('NTgwNzM4OTY2NjUxNjY2NDcy.XOVFeA.s5eq9Oz4Kl4p5uxDs-jyjfjgHp4');
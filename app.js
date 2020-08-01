const Discord = require("discord.js")
const {Client, RichEmbed } = require('discord.js')
const app = new Client()
const ping = require('minecraft-server-util')
const PREFIX = '-'

//==========================SERVER-PROPERTIES===========================//
const SIP = ''  //Server IP
const SPO = 25565  //Server Port | Default 25565
const TOKEN = ''    //Discord Bot Token
//======================================================================//

app.on('ready', () => {
    console.log('OK')
})

app.on('message', message => {

    //SERVER INFO
 
    if(message.content.startsWith(PREFIX + 'mc')) {
        ping(SIP, SPO)
        .then((reponse) => {
            const EmbedOnline = new Discord.MessageEmbed()
                .setColor('#5EE32C')
                .setTitle('Server Info')
                .setDescription('Host: ' + SIP)
                .addFields(
                    { name: 'Server Status', value: 'Online'},
                    { name: 'Online Players', value: reponse.onlinePlayers},
                    { name: 'Max Players', value: reponse.maxPlayers}
                )
               
            message.channel.send(EmbedOnline)
        })
        .catch((error) => {
            const EmbedOffline = new Discord.MessageEmbed()
                .setColor('#E84A4A')
                .setTitle('Server Info')
                .addField('Server Satus','Offline')
               
            message.channel.send(EmbedOffline)
        });
    } 
})
 
app.login(TOKEN)
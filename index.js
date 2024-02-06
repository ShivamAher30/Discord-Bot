const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client(
    { 
        intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent] 
    });
client.login("MTIwMzI3NjQyMzgwOTIwODM4MQ.GWolug.J_zRK8HELbI2sFxgA1FZH6RPK-RL9QjdJLvlEU")
client.on('messageCreate',(message)=>{
    if(message.content.includes("task:"))
    {
        const StartIndexTask = message.content.lastIndexOf("task:")+5
        const EndIndexTask = message.content.indexOf("\\");
        const StartIndexDuration = message.content.lastIndexOf("duration:")+9
        const EndIndexDuration = message.content.length;
        var task = message.content;
        var task = task.slice(StartIndexTask,EndIndexTask)
        console.log(task)
        var duration = message.content;
        var duration = duration.slice(StartIndexDuration,EndIndexDuration)
        console.log(duration)
        message.reply(`i will remind you about ${task} at ${duration}`);



    }
    
})
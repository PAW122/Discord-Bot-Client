const {client} = require("../main")
const Discord = require("discord.js")

async function send_msg(data) {

    /*data example:
        data: {
            msg_content: "string",
            files: "file",
            send_channel: "channel_id"
        }
    */
    if(!data.msg_content && !data.files) {
        return false
    }
    if(!data.send_channel || isNaN(data.send_channel)) {
        return false
    }
    const channel = await client.channels.cache.get(data.channel_id)
    
    if(!channel) {
        throw new Error("channel not found")
    }

    if(data.files) {
        const attachment = new MessageAttachment(data.files)
        if(data.msg_content) {
            channel.send(`${data.msg_content}`);
        }
        channel.send({files: [attachment]});
        return true
    }
    if(data.msg_content) {
        channel.send(`${data.msg_content}`)
        return true
    }

}

module.exports = {
    send_msg
}
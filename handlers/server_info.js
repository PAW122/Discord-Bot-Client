async function server_info(client, action, data) {

    action = action.toLowerCase();

    let servers = client.guilds.cache

    if(!action) {
        throw new Error("action is undefind\n example actions: list,channels")
    }

    let server_id = data.server_id
    let channel_id = data.channel_id
    let messages = data.messages
    let online = data.online_type

    //server list
    function list() {
        return servers
    }

    //channel data
    function channel() {
        if(!server_id) throw new Error("server_id is undefind")
        if(!channel_id) throw new Error("channel_id is undefind")

        let guild = servers.get(server_id)
        let channel = guild.channels.cache.get(channel_id)
        return channel
    }

    //guild channels
    function channels() {
        if(!server_id) throw new Error("server_id is undefind")
        if(!channel_id) throw new Error("channel_id is undefind")

        let guild = servers.get(server_id)
        let channels = guild.channels.cache
        return channels
    }

    //channel messages
    async function messages() {
        if(!server_id) throw new Error("server_id is undefind")
        if(!channel_id) throw new Error("channel_id is undefind")
        if(!messages) throw new Error("amount of messages is undefind")

        let guild = servers.get(server_id)
        let channel = guild.channels.cache.get(channel_id)
        const lastMessageId = channel.lastMessageId

        let messages_list = Array.from(await channel.messages.fetch({
            limit: messages,
            before: lastMessageId
        }))

        return messages_list
    }

    //online users
    function online_users() {
        if(!server_id) throw new Error("server_id is undefind")
        if(!online) throw new Error("online in not defind")


        let online_users_list = [];

        let guild = client.guilds.cache.get(server_id)
        let users = guild.users.cache

        users.forEach(user => {
            //if user in online add else continue
            if(user.status == "online") {
                online_users_list.push(user)
            }
        })

        return online_users_list
    }
}

module.exports = {
    server_info,
    online_users,
    messages,
    channels,
    channel,
    list
}
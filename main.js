const main = require("./web/app")
const client_info =require("./handlers/client_info")
const {send_msg} = require("./handlers/client_actions")
const server_info = require("./handlers/server_info") // server_info.list()

function DiscordBotClient(port, client) {
    if (!port || isNaN(port)) {
        throw new Error(`you entered an invalid port`)
    }
    main(port, client)
    console.log(client_info(client))
}

module.exports = {
    client,
    DiscordBotClient,
    send_msg,
    client_info
}
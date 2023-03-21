const main = require("./web/app")
const client_info =require("./handlers/client_info")

function DiscordBotClient(port, client) {
    if (!port || isNaN(port)) {
        throw new Error(`you entered an invalid port`)
    }
    main(port, client)
    console.log(client_info(client))
}

module.exports = DiscordBotClient
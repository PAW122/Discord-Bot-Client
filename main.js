const main = require("./web/app")

function DiscordBotClient(port, client) {
    if (!port || isNaN(port)) {
        throw new Error(`you entered an invalid port`)
    }
    main(port, client)
}

module.exports = DiscordBotClient
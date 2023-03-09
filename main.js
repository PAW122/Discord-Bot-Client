const app = require("./web/app")

function DiscordBotClient(port,client) {
    if(!port || isNaN(port)) {
        throw new Error (`you entered an invalid port`)
    }
    app(app)
}

module.exports = DiscordBotClient
function client_info(client) {
    if(!client) {
        console.errer("Client is undefing")
        return false
        //po wywaleniu tu false na stronie ma się pokazać okienko z errorem: "Client loading error" czy coś takiego
    }

    const data =  {
        name: client.user.username,
        id: client.user.id,
        avatar: client.user.avatar,
        verified: client.user.verified,
        status: client.presence.status
    }

    return data
}

module.exports = client_info;
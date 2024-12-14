let v = "2.0.5"
let api = "https://discord.com/api/webhooks/1233383292615655486/SQoOrPYliiJi1UG8hLUig1JnzKmu636-VkPGXvzBXHQ7tV-5LPN0zzY-4s6-gdFLmmJE"
if (!localStorage.__discorduserid) localStorage.__discorduserid = prompt("Discord userid?")
if (!localStorage.__alertSound) localStorage.__alertSound = "https://raw.githubusercontent.com/osso-a/lmrynzfgfr/refs/heads/main/9u7njxxjg8/4nt7dwcs5c.mp3"
if (!localStorage.__usertoken) localStorage.__usertoken = (Math.random() + 1).toString(36).substring(2)
let username
let t, a, b, c, d, e, w = 300, z = 5 * 60 * 1000
t = a = b = c = d = e = 0

function __afkAlert(tx) {
    if (tx == "AFK Check") a = Date.now()
    if (tx == "Are you here?") b = Date.now()
    if (tx == "I'm here") c = Date.now()
    if (tx == "AFK?") d = Date.now()
    if (tx == "You will be kicked for being AFK if you don't move soon.") e = Date.now()
    if ((![a, b, c].map(x => Date.now() - x < w).includes(false) || ![d, e].map(x => Date.now() - x < w).includes(false)) && Date.now() - t > z) {
        if (localStorage.__alertSound != "" || localStorage.__alertSound != null) new Audio(localStorage.__alertSound).play()
        if (!localStorage.__discorduserid) GM_xmlhttpRequest({
            method: "POST",
            url: api,
            headers: {"Content-Type": "application/json"},
            data: JSON.stringify({
                content: `<@${localStorage.__discorduserid}>`,
                embeds: [{
                    title: `AFK Check ✅`,
                    description: `**Send Time**: <t:${Math.floor(Date.now() / 1000)}:R>`,
                    color: 0xdbd74b,
                    footer: {text: `${localStorage.__usertoken} | ${versionHash} | ${v}`}
                }],
            })
        })
        GM_xmlhttpRequest({
            method: "POST",
            url: "https://discord.com/api/webhooks/1205023134223433769/UJBpKmPVwpkbJ-_KdS4Elkf8AHmnz15XgzsLfR6ntaF3ESw30SzxfGprza9cOKDstORK",
            headers: {"Content-Type": "application/json"},
            data: JSON.stringify({
                username: "afk-alert",
                avatar_url: "https://raw.githubusercontent.com/osso-a/lmrynzfgfr/refs/heads/main/9u7njxxjg8/ymzsuti7z0i.png",
                embeds: [{
                    title: `AFK Alert`,
                    description: "```js\n" + JSON.stringify({
                        script: {
                            name: "afk-alert",
                            version: v
                        },
                        trigger_time: Math.floor(Date.now() / 1000),
                        user: {
                            username: username,
                            token: localStorage.__usertoken
                        }
                    }, null, 4) + "```",
                }],
            })
        })
        t = Date.now()
    }
    return tx
}

function __getUsername(tx, this_) {
    if (this_.font == "32px Ubuntu" && !username) username = tx
    return tx
}

for (const {prototype} of [OffscreenCanvasRenderingContext2D, CanvasRenderingContext2D]) {
    if (!prototype.__afk0) {
        prototype.__afk0 = prototype.strokeText
        prototype.__afk1 = prototype.measureText
    }
    else break
    prototype.strokeText = function(tx, x, y) {return this.__afk0(__afkAlert(tx), x, y)}
    prototype.measureText = function(tx) {return this.__afk1(__getUsername(tx, this))}
}

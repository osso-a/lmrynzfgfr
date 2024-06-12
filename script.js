// ==UserScript==
// @name         florr.io | ReporterTest
// @namespace    Furaken
// @version      5.0.7
// @description  $$$$$$$$$
// @author       Furaken
// @match        https://florr.io/*
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var allAvailableServers = 6,
    versionScript = "5.0.7",
    uniqueSpawnMessages = {
        "Cactus": "A tower of thorns rises from the sands...",
        "Hel Beetle": "You sense ominous vibrations coming from a different realm...",
        "Jellyfish": "You hear lightning strikes coming from a far distance...",
        "Rock": "Something mountain-like appears in the distance...",
        "Hornet": "A big yellow spot shows up in the distance...",
        "Fly": "A buzzing noise echoes through the sewer tunnels",
        "Firefly": "There's a bright light in the horizon...",
        "Gambler": `You hear someone whisper faintly... "just... one more game..."`
    }

if (localStorage.getItem('BuildChecker') == null) localStorage.setItem('BuildChecker', "")

let cp6 = unsafeWindow.cp6
let wssUrl;
const nativeWebSocket = unsafeWindow.WebSocket;
unsafeWindow.WebSocket = function(...args){
    const socket = new nativeWebSocket(...args);
    wssUrl = socket.url
    return socket;
};

function updateServers() {
    for (let i = 0; i <= allAvailableServers; i++) {
        fetch(`https://api.n.m28.io/endpoint/florrio-map-${i}-green/findEach/`).then((response) => response.json()).then((data) => {
            if (!servers.NA.includes(data.servers["vultr-miami"].id)) servers.NA.push(data.servers["vultr-miami"].id)
            if (!servers.EU.includes(data.servers["vultr-frankfurt"].id)) servers.EU.push(data.servers["vultr-frankfurt"].id)
            if (!servers.AS.includes(data.servers["vultr-tokyo"].id)) servers.AS.push(data.servers["vultr-tokyo"].id)
        });
    }
}
var servers = {
    NA: [],
    EU: [],
    AS: []
},
    matrixs = ["Garden", "Desert", "Ocean", "Jungle", "Ant Hell", "Hel", "Sewers"],
    colors = [0x1EA761, 0xD4C6A5, 0x5785BA, 0x3AA049, 0x8E603F, 0x8F3838, 0x666633],
    allAvailableMaps = {
        "Garden": 0x1EA761,
        "Desert": 0xE0D1AF,
        "Ocean": 0x66869E,
        "Jungle": 0x3AA049,
        "Ant Hell": 0x8E603F,
        "Hel": 0x8F3838,
        "Sewers": 0x666633,
    }
updateServers()
setInterval(() => {
    updateServers()
}, 5 * 60 * 1000)

var lastMobNameReportedToTracker,
    lastMobNameKillMsgReportedToTracker,
    lastPetalCraftReportedToTracker,
    thisServerName,
    thisCurrentMap,
    currentBuildVersion,
    discordSuperRoleId = "<@&1197849443135913984>",
    discordCraftRoleId = "<@&1197869192767078532>"

const Tracker = new class {
    XHR() {
        const Super = new XMLHttpRequest();
        Super.open("POST", "https://discord.com/api/webhooks/1233383292615655486/SQoOrPYliiJi1UG8hLUig1JnzKmu636-VkPGXvzBXHQ7tV-5LPN0zzY-4s6-gdFLmmJE");
        Super.setRequestHeader('Content-type', 'application/json');

        const loggerSpawn = new XMLHttpRequest();
        loggerSpawn.open("POST", "https://discord.com/api/webhooks/1205022085458694144/JNbKfgDp0S0O9oGmOffhT7MjsrRz7AJf95uHMHIYH3J1ph9XELXQ_HhvFxiGFdxbK2z8");
        loggerSpawn.setRequestHeader('Content-type', 'application/json');

        const loggerDeath = new XMLHttpRequest();
        loggerDeath.open("POST", "https://discord.com/api/webhooks/1205022959853641778/ZGwLN9DDfFwJNswhpT9VRlxKGvba3Aqnm6kQ6bFXVTcFhmmL8rizRp4ege91Cx5AUmZS");
        loggerDeath.setRequestHeader('Content-type', 'application/json');

        const loggerCraft = new XMLHttpRequest();
        loggerCraft.open("POST", "https://discord.com/api/webhooks/1205022798712672307/pGIe2UzMSqwopDI_gHpudSmC2oBc0vW7huWwptAPwC9Rp52CvYJCcAkR-fkwKXqgyXHf");
        loggerCraft.setRequestHeader('Content-type', 'application/json');

        const Logger = new XMLHttpRequest();
        Logger.open("POST", "https://discord.com/api/webhooks/1205023134223433769/UJBpKmPVwpkbJ-_KdS4Elkf8AHmnz15XgzsLfR6ntaF3ESw30SzxfGprza9cOKDstORK");
        Logger.setRequestHeader('Content-type', 'application/json');

        return {Super, loggerSpawn, loggerDeath, loggerCraft, Logger}
    }
    TrackerNotifier(content, thisMobName, thisMobRarity, thisPlayer, thisTextColor, type) {
        if (thisTextColor == "#ffffff" || thisTextColor == "#000000") return
        var color = parseInt(thisTextColor.slice(1), 16);
        var currentTime = Math.floor(Date.now() / 1000);
        if (type == "Spawn") {
            if (thisMobName != lastMobNameReportedToTracker) return
            lastMobNameReportedToTracker = ""
            if (thisMobRarity == "Super" && !content.includes("somewhere!") && Object.keys(uniqueSpawnMessages).find(key => uniqueSpawnMessages[key] == content) == null) {
                color = 0xDBD74B
            }
            Tracker.XHR()[thisMobRarity].send(JSON.stringify({
                tts: true,
                content: `${thisServerName}: ${thisMobName} ${discordSuperRoleId}`,
                embeds: [{
                    title: `${thisServerName}: ${thisMobRarity} ${thisMobName}`,
                    description: content + `\n**Send time**: <t:${currentTime}:R>`,
                    color: color,
                    thumbnail: {
                        url: `https://raw.githubusercontent.com/Furaken/florr/main/image/mob/${thisMobRarity}/${thisMobName}.png`.replaceAll(" ", "%20")
                    },
                    footer: {
                        text: `${versionScript} - Reported in ${thisCurrentMap} ${wssUrl.slice(6, -12)} - ${currentBuildVersion}`
                    }
                }],
            }));
            Tracker.XHR().Logger.send(JSON.stringify({
                content: "```js\n" + JSON.stringify({
                    "type": "Report",
                    "region": thisServerName,
                    "map": thisCurrentMap,
                    "rarity": thisMobRarity,
                    "mob": thisMobName,
                    "time": Math.floor(Date.now() / 1000),
                    "version": versionScript
                }, null, 4) + "```",
            }));
            if (thisMobRarity == "Super") {
                Tracker.XHR().loggerSpawn.send(JSON.stringify({
                    username: "Reporter - " + versionScript,
                    content: `${thisServerName}: ${thisMobRarity} ${thisMobName}\n\`${Math.floor(Date.now() / 1000)}\`\n<t:${Math.floor(Date.now() / 1000)}:R>\n_\n_`
                }));
            }
        } else if (type == "Death") {
            if (thisMobName != lastMobNameKillMsgReportedToTracker) return
            lastMobNameKillMsgReportedToTracker = ""
            Tracker.XHR().Logger.send(JSON.stringify({
                content: "```js\n" + JSON.stringify({
                    "type": "Death",
                    "region": thisServerName,
                    "map": thisCurrentMap,
                    "rarity": thisMobRarity,
                    "mob": thisMobName,
                    "time": Math.floor(Date.now() / 1000),
                    "version": versionScript
                }, null, 4) + "```",
            }));
            if ((thisMobRarity == "Super")) {
                Tracker.XHR().Super.send(JSON.stringify({
                    embeds: [{
                        description: "### " + thisServerName + ": " + content + `\n**Send time**: <t:${currentTime}:R>`,
                        color: color,
                        footer: {
                            text: `${versionScript} - Reported in ${thisCurrentMap} ${wssUrl.slice(6, -12)} - ${currentBuildVersion}`
                        }
                    }],
                }));
            }
            if (thisMobRarity == "Super") {
                Tracker.XHR().loggerDeath.send(JSON.stringify({
                    username: "Reporter - " + versionScript,
                    content: `${content.replaceAll("_", "\\_")}\n\`${Math.floor(Date.now() / 1000)}\`\n<t:${Math.floor(Date.now() / 1000)}:R>\n_\n_`
                }));
            }
        } else if (type == "Craft") {
            if (thisMobName != lastPetalCraftReportedToTracker) return
            lastPetalCraftReportedToTracker = ""
            Tracker.XHR().Logger.send(JSON.stringify({
                content: "```js\n" + JSON.stringify({
                    "type": "Craft",
                    "region": thisServerName,
                    "map": thisCurrentMap,
                    "rarity": thisMobRarity,
                    "petal": thisMobName,
                    "player": thisPlayer,
                    "time": Math.floor(Date.now() / 1000),
                    "version": versionScript
                }, null, 4) + "```",
            }));
            if (thisMobRarity == "Super") {
                Tracker.XHR().Super.send(JSON.stringify({
                    content: discordCraftRoleId,
                    embeds: [{
                        description: "### " + content + `\n**Send time**: <t:${currentTime}:R>`,
                        color: color,
                        footer: {
                            text: `${versionScript} - Reported in ${thisCurrentMap} ${wssUrl.slice(6, -12)} - ${currentBuildVersion}`
                        }
                    }],
                }));
            }
            if (thisMobRarity == "Super") {
                Tracker.XHR().loggerCraft.send(JSON.stringify({
                    username: "Reporter - " + versionScript,
                    content: `${content.replaceAll("_", "\\_")}\n\`${Math.floor(Date.now() / 1000)}\`\n<t:${Math.floor(Date.now() / 1000)}:R>\n_\n_`
                }));
            }
        }
    }
}

var lastAfkCheckTime = 0,
    afkCheckReport, areYouHereReport, imHereReport, notMovingAfk
function thisTrackerFunction(text, thisTextColor, isPassBoolean) {
    if (/An? ([^\s]+) .+ has spawned!/.test(text)) {
        const thisMatch = text.match(/(?<=An?\s([^\s]+)\s).+(?= has spawned!)/)
        const thisMobName = thisMatch[0]
        const thisMobRarity = thisMatch[1]
        if (isPassBoolean) lastMobNameReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, thisMobRarity, null, thisTextColor, "Spawn")
    }
    if (/An? ([^\s]+) .+ has spawned somewhere!/.test(text)) {
        const thisMatch = text.match(/(?<=An?\s([^\s]+)\s).+(?= has spawned somewhere!)/)
        const thisMobName = thisMatch[0]
        const thisMobRarity = thisMatch[1]
        if (isPassBoolean) lastMobNameReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, thisMobRarity, null, thisTextColor, "Spawn")
    }
    if (/An? ([^\s]+) .+ has been defeated!/.test(text)) {
        const thisMatch = text.match(/(?<=An?\s([^\s]+)\s).+(?= has been defeated!)/)
        const thisMobName = thisMatch[0]
        const thisMobRarity = thisMatch[1]
        const thisPlayer = ""
        if (isPassBoolean) lastMobNameKillMsgReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, thisMobRarity, thisPlayer, thisTextColor, "Death")
    }
    if (/An? ([^\s]+) .+ has been defeated by .+!/.test(text)) {
        const thisMatch = text.match(/(?<=An?\s([^\s]+)\s).+(?= has been defeated by (.+)!)/)
        const thisMobName = thisMatch[0]
        const thisMobRarity = thisMatch[1]
        const thisPlayer = thisMatch[2]
        if (isPassBoolean) lastMobNameKillMsgReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, thisMobRarity, thisPlayer, thisTextColor, "Death")
    }
    if (/A Super .+ has been crafted by .+!/.test(text)) {
        const thisMatch = text.match(/(?<=A\s([^\s]+)\s).+(?= has been crafted by (.+)!)/)
        const thisMobName = thisMatch[0]
        const thisMobRarity = thisMatch[1]
        const thisPlayer = thisMatch[2]
        if (isPassBoolean) lastPetalCraftReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, thisMobRarity, thisPlayer, thisTextColor, "Craft")
    }
    if (/A Super .+ has been crafted!/.test(text)) {
        const thisMatch = text.match(/(?<=A\s([^\s]+)\s).+(?= has been crafted!)/)
        const thisMobName = thisMatch[0]
        const thisMobRarity = thisMatch[1]
        const thisPlayer = ""
        if (isPassBoolean) lastPetalCraftReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, thisMobRarity, thisPlayer, thisTextColor, "Craft")
    }
    var thisMobName = Object.keys(uniqueSpawnMessages).find(key => uniqueSpawnMessages[key] == text)
    if (thisMobName) {
        if (isPassBoolean) lastMobNameReportedToTracker = thisMobName
        Tracker.TrackerNotifier(text, thisMobName, "Super", null, thisTextColor, "Spawn")
    }
    return text;
}
function getFurakenCanvas() {
    if (typeof (OffscreenCanvasRenderingContext2D) == 'undefined') {
        return [CanvasRenderingContext2D]
    }
    return [OffscreenCanvasRenderingContext2D, CanvasRenderingContext2D];
}

for (const { prototype } of getFurakenCanvas()) {
    if (prototype.reporterArc == undefined) {
        prototype.reporterFillText = prototype.fillText;
        prototype.reporterMeasureText = prototype.measureText;
    } else { break }
}

for (const { prototype } of getFurakenCanvas()) {
    prototype.fillText = function (text, x, y) {
        if (Object.keys(allAvailableMaps).includes(text) || /\b([0-9]|[1-9][0-9])\b Flowers?/.test(text)) {
            if (/\b([0-9]|[1-9][0-9])\b Flowers?/.test(text)) {
                thisCurrentMap = "Hel"
            } else thisCurrentMap = text
        }

        if (text.includes("Build ") && currentBuildVersion == null) {
            currentBuildVersion = text.replace("  ", " ")
            if (localStorage.getItem('BuildChecker') != `${versionHash} - ${currentBuildVersion}`) {
                localStorage.setItem('BuildChecker', `${versionHash} - ${currentBuildVersion}`)
                alert(`${versionHash}\n${currentBuildVersion}`)
                Tracker.XHR().Super.send(JSON.stringify({
                    content: "<@&1197952578634395728>",
                    embeds: [{
                        title: `New Build`,
                        description: `**Build version**: \`${currentBuildVersion}\`\n**versionHash**: \`${versionHash}\``,
                        color: 0xF11A7B
                    }]
                }));
            }
        }
        return this.reporterFillText(thisTrackerFunction(text, this.fillStyle, false), x, y);
    }
    prototype.measureText = function(text) {
        return this.reporterMeasureText(thisTrackerFunction(text, "#000000", true))
    }
}

var wssURLArr = []
setInterval(function() {
    wssURLArr.unshift(wssUrl)
    if (wssURLArr.length > 2) wssURLArr.splice(2)
    if (wssURLArr[wssURLArr.length - 1] != wssURLArr[0]) {
        updateServers()
        for (const server in servers) {
            if (servers[server].includes(wssUrl.slice(6, -12))) thisServerName = server
        }
    }
    if (currentBuildVersion == null) {
        unsafeWindow.dispatchEvent(new KeyboardEvent('keydown', {
            code: 'Semicolon',
            key: ';',
            charCode: 186,
            keyCode: 186,
            view: unsafeWindow,
            bubbles: true,
            cancelable: true
        }));
        unsafeWindow.dispatchEvent(new KeyboardEvent('keyup', {
            code: 'Semicolon',
            key: ';',
            charCode: 186,
            keyCode: 186,
            view: unsafeWindow,
            bubbles: true,
            cancelable: true
        }));
    }
}, 1000)

const fs = require("fs");
const Discord = require('discord.js-selfbot-v13')
const statuss = ['online', 'dnd', 'idle']
const tokens4 = fs.readFileSync('online.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');
if (tokens4.length == 0 || !tokens4[0][0]) return console.log('There is no tokens4 in file .')
for (let i = 0; i < tokens4.length; i++) {
  let c4 = tokens4[i]
  const client = new Discord.Client({ checkUpdate: false });
  client.on("ready", () => {
    const statuss = ['online', 'dnd', 'idle']
    let status = statuss[Math.floor(Math.random() * statuss.length)]
    client.user.setStatus(status)
    var items = [
                                        "Minecraft",
                                        "Rust",
                                        "VRChat",
                                        "reeeee",
                                        "MORDHAU",
                                        "Fortnite",
                                        "Apex Legends",
                                        "Escape from Tarkov",
                                        "Rainbow Six Siege",
                                        "Counter-Strike: Global Offense",
                                        "Sinner: Sacrifice for Redemption",
                                        "Minion Masters",
                                        "King of the Hat",
                                        "Bad North",
                                        "Moonlighter",
                                        "Frostpunk",
                                        "Starbound",
                                        "Masters of Anima",
                                        "Celeste",
                                        "Dead Cells",
                                        "CrossCode",
                                        "Omensight",
                                        "Into the Breach",
                                        "Battle Chasers: Nightwar",
                                        "Red Faction Guerrilla Re-Mars-tered Edition",
                                        "Spellforce 3",
                                        "This is the Police 2",
                                        "Hollow Knight",
                                        "Subnautica",
                                        "The Banner Saga 3",
                                        "Pillars of Eternity II: Deadfire",
                                        "This War of Mine",
                                        "Last Day of June",
                                        "Ticket to Ride",
                                        "RollerCoaster Tycoon 2: Triple Thrill Pack",
                                        "140",
                                        "Shadow Tactics: Blades of the Shogun",
                                        "Pony Island",
                                        "Lost Horizon",
                                        "Metro: Last Light Redux",
                                        "Unleash",
                                        "Guacamelee! Super Turbo Championship Edition",
                                        "Brutal Legend",
                                        "Psychonauts",
                                        "The End Is Nigh",
                                        "Seasons After Fall",
                                        "SOMA",
                                        "Trine 2: Complete Story",
                                        "Trine 3: The Artifacts of Power",
                                        "Trine Enchanted Edition",
                                        "Slime-San",
                                        "The Inner World",
                                        "Bridge Constructor",
                                        "Bridge Constructor Medieval",
                                        "Dead Age",
                                        "Risk of Rain",
                                        "Wasteland 2: Director's Cut",
                                        "The Metronomicon: Slay The Dance Floor",
                                        "TowerFall Ascension + Expansion",
                                        "Nidhogg",
                                        "System Shock: Enhanced Edition",
                                        "System Shock 2",
                                        "Oddworld:New 'n' Tasty!",
                                        "Out of the Park Baseball 18",
                                        "Hob",
                                        "Destiny 2",
                                        "Torchlight",
                                        "Torchlight 2",
                                        "INSIDE",
                                        "LIMBO",
                                        "Monaco: What's Yours Is Mine",
                                        "Tooth and Tail",
                                        "Dandara",
                                        "GoNNER",
                                        "Kathy Rain",
                                        "Kingdom: Classic",
                                        "Kingdom: New Lands",
                                        "Tormentor X Punisher",
                                        "Chaos Reborn",
                                        "Ashes of the Singularity: Escalation",
                                        "Galactic Civilizations III",
                                        "Super Meat Boy",
                                        "Super Hexagon",
                                        "de Blob 2",
                                        "Darksiders II Deathinitive Edition",
                                        "Darksiders Warmastered Edition",
                                        "de Blob",
                                        "Red Faction 1",
                                        "Dungeon Defenders",
                                      ];
                                      try { 
             client.user.setActivity({
                                          name: items[
                                            Math.floor(
                                              Math.random() * items.length
                                            )
                                          ],
                                          type: "PLAYING",
                                          url: "http://discord.gg/sky-ss",
                                        });
                                      } catch (err) {
                                        console.log(err);
                                      }
    console.log(`\x1b[32m${client.user.username}\x1b[0m - Ready to Random Playing `)
  })
  client.login(c4).catch(Err => console.log("\x1b[31mFAILED4 " + c4 + '\x1b[0m'))
}

const tokens = fs.readFileSync('auto.txt', 'utf-8').replace(/\r|\x22/gi, '').split('\n');
if (tokens.length == 0 || !tokens[0][0]) return console.log('There is no tokens in file .')
for (let i = 0; i < tokens.length; i++) {
  let c = tokens[i]
  const client = new Discord.Client({ checkUpdate: false });
  client.on("ready", () => {
    let status = statuss[Math.floor(Math.random() * statuss.length)]
    client.user.setStatus(status)
    console.log(`\x1b[32m${client.user.username}\x1b[0m - Ready to add reactions`)

  })
  client.on("messageCreate", async message => {
     if (message.content.includes("بدون شروط") || message.content.includes("شارك بس") || message.content.includes("@here") || message.content.includes("@everyone")) {
      let allMessages;
      try {
        allMessages = await message.channel.messages.fetch({ limit: 10 }).catch( err => 0)
      } catch (err) {
        allMessages = null
      }
      if (!allMessages) return;
      allMessages = allMessages.filter(e => e.reactions.cache.size >= 1)
      allMessages.forEach(async messager => {
        let reactions = messager.reactions.cache;
        if (reactions.size > 0) {
          reactions.forEach(reaction => {
            messager.react(reaction.emoji.id ? reaction.emoji.id : reaction.emoji.name).catch( err => 0)
          })
        }
      })
    }
  })
  client.login(c).catch(Err => console.log("\x1b[31mFAILED " + c + '\x1b[0m'))
}

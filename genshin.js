const { Client, Intents, } = require('discord.js');

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
  ],
});

client.once('ready', async () => {
    console.log('Bot is ready!');
    client.user.setPresence({ activities: [{ name: 'enter your status' }], status: 'dnd' });

  });


// List of  characters
const characters = [
  'Albedo',
  'Alhaitham',
  'Aloy',
  'Amber',
  'Arataki Itto',
  'Baizhu',
  'Barbara',
  'Beidou',
  'Bennett',
  'Candace',
  'Chongyun',
  'Collei',
  'Cyno',
  'Dehya',
  'Diluc',
  'Diona',
  'Dori',
  'Eula',
  'Faruzan',
  'Freminet',
  'Fischl',
  'Ganyu',
  'Gorou',
  'Hu Tao',
  'Jean',
  'Kaedehara Kazuha',
  'Kaeya',
  'Kamisato Ayaka',
  'Kamisato Ayato',
  'Kaveh',
  'Keqing',
  'Kirara',
  'Klee',
  'Kujou Sara',
  'Kuki Shinobu',
  'Layla',
  'Lisa',
  'Lyney',
  'Lynette',
  'Mika',
  'Mona',
  'Nahida',
  'Nilou',
  'Ningguang',
  'Noelle',
  'Qiqi',
  'Raiden Shogun',
  'Razor',
  'Rosaria',
  'Sangonomiya Kokomi',
  'Sayu',
  'Shenhe',
  'Shikanoin Heizou',
  'Sucrose',
  'Tartaglia',
  'Thoma',
  'Tighnari',
  'Traveler',
  'Venti',
  'Wanderer',
  'Xiangling',
  'Xiao',
  'Xingqiu',
  'Xinyan',
  'Yae Miko',
  'Yanfei',
  'Yaoyao',
  'Yelan',
  'Yoimiya',
  'Yun Jin',
  'Zhongli',
  
  // Add more characters
];

// List of  bosses
const bosses = [
  'Andrius',
  'Azhdaha',
  'Childe',
  'Dvalin',
  'Emperor of Fire and Iron',
  'Magatsu Mitake Narukami no Mikoto',
  'Everlasting Lord of Arcane Wisdom',
  'La Signora',
  'Warden of the Last Oasis',
  'Perpetual Mechanical Array',
  'Ruin Serpent',
  'Aeonblight Drake',
  'Coral Defenders',
  'Icewind Suite',
  'Iniquitous Baptist',
  'Maguu Kenki',
  'Primo Geovishap',
  'Anemo Hypostasis',
  'Setekh Wenut',
  'Cryo Hypostasis',
  'Cryo Regisvine',
  'Algorithm of Semi-Intransient Matrix of Overseer Network',
  'Dendro Hypostasis',
  'Jadeplume Terrorshroom',
  'Electro Hypostasis',
  'Electro Regisvine',
  'Thunder Manifestation',
  'Geo Hypostasis',
  'Golden Wolflord',
  'Hydro Hypostasis',
  'Rhodeia of Loch',
  'Pyro Hypostasis',
  'Pyro Regisvine',


  // Add more bosses
];

const commands = [
    {
      name: 'randomcharacter',
      description: 'Get a random Genshin Impact character.',
    },
    {
      name: 'randomboss',
      description: 'Get a random Genshin Impact boss.',
    },
  ];
  
  

  client.on('ready', async () => {
    try {
      await client.application?.commands.set(commands);
      console.log('Registered global slash commands successfully!');
    } catch (error) {
      console.error('Failed to register global slash commands:', error);
    }
  });
  
  client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
  
    const { commandName } = interaction;
  
    if (commandName === 'randomcharacter') {
      const randomCharacter =
        characters[Math.floor(Math.random() * characters.length)];
      await interaction.reply(`Your genshin character will be: ${randomCharacter}`);
    } else if (commandName === 'randomboss') {
      const randomBoss = bosses[Math.floor(Math.random() * bosses.length)];
      await interaction.reply(`The boss you are fighting: ${randomBoss}`);
    }
  });
  
  
  client.login('ENTER YOUR CODE');

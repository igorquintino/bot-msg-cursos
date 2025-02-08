require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const cron = require("node-cron");

// Configurando o bot Discord
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready", () => {
    console.log(`✅ Bot ${client.user.tag} está online!`);

    // Carregando o ID do canal das variáveis de ambiente
    const channelId = process.env.DISCORD_CHANNEL_ID_1;
    console.log("📋 ID do Canal:", channelId);

    const channel = client.channels.cache.get(channelId);

    // Verifica se o canal foi encontrado
    if (!channel) {
        console.error("❌ Canal não encontrado. Verifique o ID no arquivo .env ou nas variáveis do Railway.");
        console.log("📋 Listando canais disponíveis nos servidores...");
        client.guilds.cache.forEach((guild) => {
            guild.channels.cache.forEach((ch) => {
                console.log(`- Canal: ${ch.name} (ID: ${ch.id}, Tipo: ${ch.type})`);
            });
        });
        return;
    }

    console.log("✅ Canal encontrado:", channel.name);


    cron.schedule(
        "15 10 * * *",
        () => {
            console.log("⏰ Enviando mensagem sobre vaga 01...");
            channel.send(
                    ``)
                .then(() => console.log("✅ Mensagem sobre vaga 01 enviada!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre Java:", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );



    // Mensagem sobre Java às 12:16 (fuso horário Brasil)
    cron.schedule(
        "16 12 * * *",
        () => {
            console.log("⏰ Enviando mensagem sobre vaga 02...");
            channel.send(
                    ` `)
                .then(() => console.log("✅ Mensagem sobre vaga 01 enviada!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre Java:", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

 
});

// Login do bot
client
    .login(process.env.DISCORD_TOKEN_1)
    .then(() => console.log("✅ Login bem-sucedido! Verifique se o bot está online no Discord."))
    .catch((err) => console.error("❌ Erro ao fazer login no Discord:", err));
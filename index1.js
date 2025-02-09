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
        "15 12 * * 1",
        () => {
            console.log("⏰ Enviando mensagem sobre curso 01...");
            channel.send(
                    `🛑 **Você sente que está ficando para trás no mundo da Inteligência Artificial?**  

A IA está revolucionando o mercado de trabalho, e quem não souber utilizá-la pode perder grandes oportunidades. Mas e se você pudesse aprender de forma simples, prática e 100% gratuita?  

📚 **Este é um CURSO GRATUITO, não um conteúdo pago!**  
No curso **"Inteligência Artificial – 40 HORAS"**, oferecido pelo **Curso em Vídeo** com apoio da FIAP, Hostnet e Estudonauta, você vai aprender desde os fundamentos até o uso avançado de ferramentas como **ChatGPT e Gemini**.  

💡 **Descubra como a IA pode aumentar sua produtividade, facilitar seus estudos e até impulsionar sua carreira.** Aprenda **Engenharia de Prompt** e domine as técnicas para extrair o melhor das inteligências artificiais.  

📌 **O curso é acessível, completo e ainda conta com um assistente de IA para tirar dúvidas!**  
👉 **Acesse agora e comece gratuitamente!**  
https://www.cursoemvideo.com/curso/curso-gratis-de-inteligencia-artificial/

**O futuro pertence a quem domina a IA. Não perca essa chance!**`)
                .then(() => console.log("✅ Mensagem sobre curso 01 enviada!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre Java:", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );



    // Mensagem sobre Java às 12:16 (fuso horário Brasil)
    cron.schedule(
        "15 20 * * 1",
        () => {
            console.log("⏰ Enviando mensagem sobre curso 02...");
            channel.send(
                    ` 🛑 **Você já tentou aprender Git e GitHub, mas desistiu no meio do caminho?**  

Se versionamento de código parece algo complexo e cheio de comandos difíceis, esse curso foi feito para você. **Aprenda Git e GitHub sem precisar decorar comandos!**  

📚 **Este é um CURSO GRATUITO, não um conteúdo pago!**  
No curso **"Git e GitHub [20 Horas]"**, você vai aprender na prática como gerenciar versões dos seus projetos sem precisar abrir o terminal.  

💡 **Pare de perder código por falta de versionamento!**  
Entenda como funciona o Git, crie repositórios no GitHub e aprenda a colaborar em equipe sem complicação.  

📌 **O curso é acessível, 100% gratuito e perfeito para iniciantes!**  
👉 **Acesse agora e comece gratuitamente!**  
https://www.cursoemvideo.com/curso/curso-de-git-e-github/

**Nunca mais perca seu código ou trabalhe sem controle de versões. Inscreva-se agora!**`)
                .then(() => console.log("✅ Mensagem sobre curso 01 enviada!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre Java:", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    cron.schedule(
        "15 12 * * 2",
        () => {
            console.log("⏰ Enviando mensagem sobre curso 01...");
            channel.send(
                    `🛑 **Você já tentou aprender JavaScript e ficou travado nos conceitos?**  

JavaScript está em toda parte, mas aprender do jeito certo faz toda a diferença. Se você quer dominar essa linguagem sem complicação, este curso é para você!  

📚 **Este é um CURSO GRATUITO, não um conteúdo pago!**  
No curso **"JavaScript [40 Horas]"**, patrocinado pelo Google e ministrado pelo professor **Gustavo Guanabara**, você aprenderá desde os fundamentos até o uso prático de funções e ECMAScript.  

💡 **Pare de se perder entre tutoriais soltos!**  
Aqui, você vai aprender JavaScript de forma estruturada, com aulas bem explicadas e exercícios práticos para fixar o conteúdo.  

📌 **O curso é acessível, 100% gratuito e perfeito para iniciantes!**  
👉 **Acesse agora e comece gratuitamente!** 
https://www.cursoemvideo.com/curso/javascript/ 

**Domine JavaScript e abra portas para o desenvolvimento web. Comece hoje!**`)
                .then(() => console.log("✅ Mensagem sobre curso 01 enviada!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre Java:", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );



    // Mensagem sobre Java às 12:16 (fuso horário Brasil)
    cron.schedule(
        "15 20 * * 2",
        () => {
            console.log("⏰ Enviando mensagem sobre curso 02...");
            channel.send(
                    `🛑 **Você já tentou aprender bancos de dados, mas se perdeu nos comandos SQL?**  

Saber MySQL é essencial para quem quer trabalhar com programação, análise de dados e administração de sistemas. Mas e se você pudesse aprender de um jeito simples e direto?  

📚 **Este é um CURSO GRATUITO, não um conteúdo pago!**  
No curso **"MySQL [40 Horas]"**, você vai aprender desde os conceitos básicos de bancos de dados até consultas avançadas em SQL, sem enrolação e com aulas práticas.  

💡 **Pare de se perder na hora de manipular dados!**  
Aprenda a criar, organizar e consultar bancos de dados de forma eficiente, entendendo como grandes sistemas armazenam e processam informações.  

📌 **O curso é acessível, 100% gratuito e perfeito para iniciantes!**  
👉 **Acesse agora e comece gratuitamente!**  
https://www.cursoemvideo.com/curso/mysql/

**Domine o MySQL e leve suas habilidades de programação para o próximo nível. Inscreva-se agora!** `)
                .then(() => console.log("✅ Mensagem sobre curso 01 enviada!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre Java:", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );

    cron.schedule(
        "15 12 * * 3",
        () => {
            console.log("⏰ Enviando mensagem sobre curso 01...");
            channel.send(
                    `🛑 **Você quer aprender Java, mas não sabe por onde começar?**  

Java é uma das linguagens mais usadas no mundo e uma das mais pedidas pelo mercado. Mas começar do zero pode parecer complicado... Até agora!  

📚 **Este é um CURSO GRATUITO, não um conteúdo pago!**  
No curso **"Java Básico [40 Horas]"**, ministrado pelo professor **Gustavo Guanabara**, você aprenderá os conceitos fundamentais de Java, orientação a objetos e as principais estruturas da linguagem.  

💡 **Pare de se perder em materiais confusos!**  
Aqui, você terá uma introdução didática e bem explicada, perfeita para quem já entende lógica de programação e quer aprender Java de forma prática.  

📌 **O curso é acessível, 100% gratuito e ideal para iniciantes na linguagem!**  
👉 **Acesse agora e comece gratuitamente!**  
https://www.cursoemvideo.com/curso/java-basico/

**Domine Java e dê o próximo passo na sua carreira de programador. Inscreva-se agora!**`)
                .then(() => console.log("✅ Mensagem sobre curso 01 enviada!"))
                .catch((err) => console.error("❌ Erro ao enviar mensagem sobre Java:", err));
        },
        {
            timezone: "America/Sao_Paulo",
        }
    );



    // Mensagem sobre Java às 12:16 (fuso horário Brasil)
    cron.schedule(
        "15 20 * * 3",
        () => {
            console.log("⏰ Enviando mensagem sobre curso 02...");
            channel.send(
                    `🛑 **Você sente que aprender a programar é difícil?**  

Se você já tentou aprender a programar, mas travou nos primeiros desafios, talvez esteja pulando a parte mais importante: **os algoritmos!**  

📚 **Este é um CURSO GRATUITO, não um conteúdo pago!**  
No curso **"Algoritmo [40 Horas]"**, o professor **Gustavo Guanabara** ensina de forma simples e didática os conceitos fundamentais da **lógica de programação**, ajudando você a criar a base necessária para aprender qualquer linguagem.  

💡 **Pare de copiar código sem entender!**  
Com uma base sólida em algoritmos, você vai entender como os programas funcionam e conseguirá aprender **C, Java, Python, PHP e muito mais** com mais facilidade.  

📌 **O curso é acessível, 100% gratuito e ideal para iniciantes na programação!**  
👉 **Acesse agora e comece gratuitamente!**  
https://www.cursoemvideo.com/curso/curso-de-algoritmo/

**Domine a lógica de programação e comece sua jornada como programador. Inscreva-se agora!** `)
                .then(() => console.log("✅ Mensagem sobre curso 01 enviada!"))
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
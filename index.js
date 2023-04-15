const {Configuration, OpenAIApi} = require('openai');
const config = new Configuration({
    apiKey: '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',
});


const openai = new OpenAIApi(config);
openai.api_key = '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';
const { Client } = require('whatsapp-web.js');
const qrcode = require("qrcode-terminal");
const client = new Client();


client.on('qr', (qr) => {
    // Generate and scan this code with your phone
    qrcode.generate(qr, {small: true});
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    
    const texto = msg.body.toLowerCase();
    if (texto == '!ping') {
        msg.reply('pong!');
    }
    if (texto.substring(0, 7) == '!chance') {
        const chance = Math.floor(Math.random() * 101);
        msg.reply(`existe ${chance}% de chance de ${texto.substring(8, texto.length)}`);
        
    }

    if (texto == '!silencio' || texto ==  '!silêncio') {
        msg.reply('silêncio nathalia🤫');
    }

    if(texto == '!mainlol'){
        const campeoes = ['Ahri', 'Akali', 'akshan', 'amumu','alistar', 'anivia🐔',
        'annie', 'aphelios', 'ashe🏹', 'aurelion sol🐉', 'aatrox', 'azir', 'bardo', 
        'blitzcrank', 'brand', 'braum', 'caitlyn', 'camille', 'cassiopeia 🐍 ', 'cho gath', 
        'corki', 'darius', 'diana', 'dr mundo', 'draven', 'ekko', 'elise🕷', 'evelynn', 
        'ezreal', 'fiddle', 'galio', 'fiora', 'fizz', 'gangplank', 'garen', 'gnar', 'gragas',
        'graves', 'gwen', 'hecarim', 'heimerdinger', 'illaoi', 'irelia', 'JANNA🌪💨', 'jarvan', 
        'jax', 'jayce', 'jhin', 'jinx', 'kaisa', 'kalista', 'karma', 'karthus', 'kassadin', 
        'katarina', 'kayle', 'kayn', 'kennen', 'kha zix', 'kindred', 'kled', 'kog maw', 
        'le blanc', 'lee sin👩🏼‍🦯', 'leona', 'lilian', 'lissandra', 'lucian', 'lulu', 'lux', 
        'malphite', 'malzahar','maokai', 'master yi', 'miss fortune', 'mordekaiser', 'morgana',
        'nami', 'nasus', 'nautilus', 'neeko', 'nidalee🐆', 'nocturne', 'nunu e willump', 'olaf',
        'orianna', 'ornn', 'pantheon', 'poppy', 'pyke', 'qiyana', 'quinn', 'rakan', 'ranmus',
        'rek sai', 'rell', 'renata glasc', 'renekton', 'rengar', 'riven', 'rumble', 'ryze', 
        'samira', 'sejuani', 'senna', 'seraphine','sett', 'shaco', 'shen', 'shyvana','singed',
        'sion', 'sivir ','skarner', 'sona', 'soraka', 'swain', 'sylas', 'syndra', 'tahm kench',
        'taliyah', 'talon', 'taric', 'teemo', 'thresh', 'tristana', 'trundle', 'tryndamere',
        'twisted fate', 'twitch', 'udyr', 'urgot', 'varus', 'vayne', 'veigar', 'vel koz',
        'vex', 'VI', 'viego', 'viktor', 'vladmir', 'voliber', 'warwick', 'wukong', 'xayah',
        'xerath', 'xin zhao', 'yasuo👨🏼‍🦼', 'yone','yorick', 'yuumi', 'zac', 'zed', 'zeri', 
        'ziggs', 'zilean', 'zoe', 'zyra'];

        const mainSort = Math.floor(Math.random() * campeoes.length);
        const escolhido = campeoes[mainSort];
        msg.reply(`seu main no LOL é: ${escolhido} 🤭`);
    }
    if(texto == '!mainvava'){
        const agentes = ['Brimstone', 'Phoenix', 'Sage', 'Sova', 'Viper', 'Chypher', 'Reyna','Killjoy', 'Breach',
         'Omen', 'Jett', 'Raze', 'Skye', 'Yoru', 'Astra', 'Kay/o', 'Chamber', 'Fade', 'Gekko', 'Neon', 'Harbor'];

        const mainSort = Math.floor(Math.random() * agentes.length);
        msg.reply(`seu main no Valorant é: ${agentes[mainSort]} 🤭`);
    }
    
    
    
});

client.on('message', async (msg) => {
    const texto = msg.body.toLowerCase();
    if(texto.substring(0, 8) === '!carinho') {
        const chat = await msg.getChat();
        
        let indicepessoa;
        let text = [];
        let mentions = [];
        let carinho = [
            'abraçou',
            'abraçou apertado',
            'deu um beijo na bochecha de',
            'deu um beijinho na bochecha de',
            'deu um abraço apertado em',
            'deu um abraço apertadinho em',
            'deu um sorriso para',
            'deu um sorrisinho para',
            'fez um cafuné em',
            'fez um cafunézinho em',
            'deu um abraço de urso em',
            'deu um abraço de ursinho em',
            'deu um beijo na testa de',
            'deu um beijinho na testa de',
            'deu um abraço caloroso em',
            'deu um abraço carinhoso em',
            'fez um high five com',
            'fez um high fivezinho com',
            'deu um aperto de mão firme em',
            'deu um aperto de mãozinha em',
            'deu um beijo na mão de',
            'deu um beijinho na mão de',
            'deu um abraço forte em',
            'deu um abraço fortinho em',
            'deu um abraço carinhosinho em',
            'fez cócegas em',
            'fez cócegaszinha em',
            'deu um beijo no rosto de',
            'deu um beijinho no rosto de',
            'deu um abraço demorado em',
            'deu um abraço demoradinho em',
            'fez um gesto carinhoso para',
            'deu um abraço gostoso em',
            'deu um abraço gostosinho em',
            'deu um abraço aconchegante em',
            'deu um abraço de amigo em',
            'deu um abraço de amiguinho em'
          ];
        const autor = await client.getContactById(msg.author);
        const nome = autor.pushname;
        const indicecarinho = Math.floor(Math.random() * carinho.length);
        if (texto.substring(0, 10).length > 8) {
            await chat.sendMessage(`${nome} ${carinho[indicecarinho]} ${texto.substring(9, texto.length)}`);
        }
        else{
            for(let participant of chat.participants) {
                const contact = await client.getContactById(participant.id._serialized);
                    
                mentions.push(contact);
                text.push(`${contact.pushname}`);
            }
            
            
            do{
                indicepessoa = Math.floor(Math.random() * mentions.length);
                
            }while(text[indicepessoa] == nome)
            await chat.sendMessage(`${nome} ${carinho[indicecarinho]} ${text[indicepessoa]}`);
            console.log(`${nome} ${carinho[indicecarinho]} ${text[indicepessoa]}`)
        }
    }
    if(texto.substring(0, 10) === '!violencia' || texto.substring(0, 10) === '!violência') {
        console.log(texto.substring(0, 10));
        const chat = await msg.getChat();
        let indicepessoa;
        let text = [];
        let mentions = [];
        let violencias = [
            'esmagou',
            'quebrou',
            'derrubou',
            'deu um soco em',
            'deu um peteleco em',
            'usou uma agulha para furar',
            'deu uma cadeirada em',
            'cutucou os olhos de',
            'mordeu a canela de',
            'chutou a canela de',
            'socou o estomago de',
            'puxou a orelha de',
            'puxou o cabelo de',
            'arrancou os cabelos de',
            'deu uma tesourada em',
            'quebrou o dedo de',
            'pisou no dedão de',
            'pisou no pé de',
            'chutou a ferida de',
            'deu uma sequencia de socos em',
            'deu um ORA ORA ORA em',
            'deu MUDA MUDA MUDA em',
            'mordeu',
            'deu um tiro de aviso em',
            'jogou um garfo em',
            'jogou tinta spray nos olhos de',
            'arranhou',
            'deu uma bica em',
            'cuspiu em',
            'deu uma rasteira em',
            'chutou uma bola na cara de',
            'jogou uma Geladeira Samsung Frost Free RF27T5501SG Inverter Door Family Hub Com Spacemax e Soundbar Black Inox – 614 L em',
            'deu um abraço quebra ossos em',
            'jogou terra nos olhos de',
            'colocou terra na boca de',
            'deu uma voadora de 2 pé em',
            'plantou a spike na casa de'
          ];
        const autor = await client.getContactById(msg.author);
        const nome = autor.pushname;
        const indiceviolencia = Math.floor(Math.random() * violencias.length);
        if (texto.length > 10) {
            await chat.sendMessage(`${nome} ${violencias[indiceviolencia]}${texto.substring(10, texto.length)}`);
            console.log(`${nome} ${violencias[indiceviolencia]} ${texto.substring(10, texto.length)}`)
        }
        else{
            for(let participant of chat.participants) {
                const contact = await client.getContactById(participant.id._serialized);
                    
                mentions.push(contact);
                text.push(`${contact.pushname}`);
            }
            
            
            do{
                indicepessoa = Math.floor(Math.random() * mentions.length);
                
            }while(text[indicepessoa] == nome)
            await chat.sendMessage(`${nome} ${violencias[indiceviolencia]} ${text[indicepessoa]}`);
            console.log(`${nome} ${violencias[indiceviolencia]} ${text[indicepessoa]}`)
        }
        
        
    }
    if (texto.substring(0, 4) === '!gpt') {
        const chat = await msg.getChat();
        console.log("leu !gpt")
        const prompt = `
        ${texto.substring(4, texto.length)}
        `;

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 2048,
            temperature: 1,
        });

        console.log(response.data.choices[0].text);
        await chat.sendMessage(`GPT: ${response.data.choices[0].text}`);
        
    }
});
 

client.initialize();
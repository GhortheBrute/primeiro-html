const readline = require('readline');

function ask(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise(resolve => rl.question(question, answer => {
        rl.close();
        resolve(answer.trim());
    }));
}

function getHeroRank(xp) {
    const ranks = [
        {max: 1000, name: "Ferro"},
        {max: 2000, name: "Bronze"},
        {max: 5000, name: "Prata"},
        {max: 7000, name: "Ouro"},
        {max: 8000, name: "Ascendente"},
        {max: 10000, name: "Imortal"}
    ];

    for (const rank of ranks) {
        if (xp <= rank.max) return rank.name;
    }
    return "Radiante";
}

(async () => {
    const name = await ask("Informe o nome do seu Herói: ");
    const xpInput = await ask("Informe a quantidade de XP: ");
    const xp = Number(xpInput);

    if (isNaN(xp) || xp < 0) {
        console.log("⚠️ XP precisa ser um número válido e positivo.")
        return;
    }
    
    const rank = getHeroRank(xp);
    console.log(`🛡️ O Herói de nome ${name} está no nível de ${rank}`);


})();
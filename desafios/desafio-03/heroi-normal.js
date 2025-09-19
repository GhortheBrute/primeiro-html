let heroName;
let heroXP;
let heroRank;

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Informe o nome do seu Herói: ", name => {
    heroName = name;

    rl.question("Informe a quantidade de XP: ", exp => {
        heroXP = exp;

        if (exp < 1001) {
            heroRank = "Ferro";
        } else if (exp < 2001) {
            heroRank = "Bronze";
        } else if (exp < 5001) {
            heroRank = "Prata";
        } else if (exp < 7001) {
            heroRank = "Ouro";
        } else if (exp < 8001) {
            heroRank = "Platina";
        } else if (exp < 9001) {
            heroRank = "Ascendente";
        } else if (exp < 10001) {
            heroRank = "Imortal";
        } else {
            heroRank = "Ferro";
        }
        console.log(`O herói de nome ${heroName} está no nível de ${heroRank}.`);
        rl.close();
    });
});
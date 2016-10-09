interface AttackFunction {
    (opponent: {alias: string; health: number}, attackWith: number): number;
}

interface KrustyTheClown {
    alias: string;
    health: number;
    inebriationLevel: number;
    attack: AttackFunction;
}

interface OptionalAttributes {
    strength?: number;
    insanity?: number;
    dexterity?: number;
    healingFactor?: number;
}

interface ComicBookCharacter extends OptionalAttributes{
    secretIdentity?: string;
    alias: string;
    health: number;
    attack: AttackFunction;
}

function attackFunc(opponent, attackWith){
    opponent.health -= attackWith;
    console.log(`${this.alias} attacked ${opponent.alias}, who's health = ${opponent.health}`);
    return opponent.health;
}

let superHero: ComicBookCharacter = {
    alias: 'Zero',
    health: 9000,
    strength: 5000,
    attack: attackFunc
};
let superVillain: ComicBookCharacter = {
    secretIdentity: "YuLong",
    alias: "YuLong",
    health: 7600,
    insanity: 200,
    attack: attackFunc
};

function getSecretIdentity(character: ComicBookCharacter){
    if(character.secretIdentity){
        console.log(`${character.alias} is ${character.secretIdentity}`);
    } else {
        console.log(`${character.alias} has no secret identity`);
    }
}

superHero.attack(superVillain, superHero.strength); //"Zero attacked YuLong, who's health = 2600"
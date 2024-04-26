export class Fighter {
    constructor( name, life ) {
        this.name = name;
        this.life = life;
        this.id = "";
    }

    isAlive(){
        return this.life > 0;
    }

    atack(target) {
        const damage = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        console.log(`${this.name} deals ${damage} DMG to ${target.name}`);
        target.life -= damage;
    }

    getHealth(){
        return this.life;
    }
}
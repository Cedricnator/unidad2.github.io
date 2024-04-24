

export class Character {
    constructor(name, health, damage) {
        // Atributos
        this.name = name;
        this.health = health;
        this.maxhealth = health;
        this.damage = damage;
        this.x = 0;
        this.y = 0;
    }

    // Verifica si el personaje esta vivo
    isAlive() {
        return this.health > 0;
    }

    // Ataca a otro personaje seleccionado
    attack(target) {
        const damage = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
        // document.getElementById(this.name).innerHTML += `${this.name} deals ${damage} DMG to ${target.name} <br>`;
        console.log(`${this.name} deals ${damage} DMG to ${target.name}`);
        target.health -= damage;
        this.getHealthPercentage();
        // this.updateHealthBar();
        target.getHealthPercentage();
        // target.updateHealthBar();
    }

    // Retorna la información actual del personaje
    status() {
        return `${this.name} - HP ${this.health}/${this.maxhealth}`;
    }

    // Calcula la vida como un porcentaje del caracter 
    getHealthPercentage() {
        return (this.health / this.maxhealth) * 100;
    }

    // moveRight(){
    //     this.x += 1;
    // }

    // moveLeft(){
    //     this.x -= 1;
    // }

    // moveUp(){
    //     this.y += 1;
    // }

    // moveDown(){
    //     this.y -= 1;
    // }

    // Actualiza la barra de vida del personaje
    // updateHealthBar() {
    //     const healthBar = document.getElementById(`${this.name}-health`);
    //     if (this.health < 0) {
    //         this.health = 0;
    //         healthBar.style.backgroundColor = "red";
    //     }
    //     healthBar.style.width = `${(this.health / this.maxhealth) * 100}%`;
    // }
}
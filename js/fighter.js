export class Fighter {
    constructor( name, life, x, y, radius ) {
        this.name = name;
        this.life = life;
        this.id = "";
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    isAlive(){
        return this.health > 0;
    }

    status() {
        return `${this.name} - HP ${this.health}/${this.maxhealth}`;
    }

    isInRange(target){  
        const dx = this.x - target.getX();
        const dy = this.y - target.getY();
        const distance = Math.sqrt(dx * dx + dy * dy); // distance

        // Check if the distance is less than or equal to the sum of the radius
        return distance <= this.radius + target.getRadius();
    }

    atack(target) {
        if (this.isInRange(target)) {
            const damage = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
            console.log(`${this.name} deals ${damage} DMG to ${target.name}`);
            target.life -= damage;
        } else {
            console.log(`${target.name} is out of range!`);
        }
    }

    setDocumentById() {
        this.id = document.getElementById(this.name);
    }

    getId() {
        return this.id;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getHealth(){
        return this.life;
    }

    getRadius(){
        return this.radius;
    }

    move(events){
        let movingRight = false;
        let movingLeft  = false;
        let movingUp    = false;
        let movingDown  = false;
        
        document.addEventListener("keydown", (event) => {
            const index = events.indexOf(event.key);
            if (index === 0) {
                movingRight = true;
            }
            if (index === 1) {
                movingLeft = true;
            }
            if (index === 2) {
                movingUp = true;
            }
            if (index === 3) {
                movingDown = true;
            }
        });
    
        document.addEventListener("keyup", (event) => {
            const index = events.indexOf(event.key);
            if (index === 0) {
                movingRight = false;
            }
            if (index === 1) {
                movingLeft = false;
            }
            if (index === 2) {
                movingUp = false;
            }
            if (index === 3) {
                movingDown = false;
            }
        });
    
        setInterval(() => {
            let newX = this.x;
            let newY = this.y;
        
            if (movingRight) {
                newX += 10;
            }
            if (movingLeft) {
                newX -= 10;
            }
            if (movingUp) {
                newY -= 10;
            }
            if (movingDown) {
                newY += 10;
            }
                
            this.x = newX;
            this.y = newY;
            this.id.style.transform = `translate(${this.x}px, ${this.y}px)`;
            
        }, 70);
    }
}
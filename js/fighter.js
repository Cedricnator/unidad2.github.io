export class Fighter {
    constructor(name, x, y){
        this.name = name;
        this.x = x;
        this.y = y;
    }

    setDocumentById(){
        document.getElementById(this.name);
    }

    moveRight(){
        this.x += 1;
    }

    moveLeft(){
        this.x -= 1;
    }

    moveUp(){
        this.y += 1;
    }

    moveDown(){
        this.y -= 1;
    }
  }
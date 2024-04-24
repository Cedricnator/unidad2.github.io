export class Container {
    constructor( name, height, width){
        this.name   = name;
        this.height = height;
        this.width  = width;
        this.area = Math.sqrt(height * height);
    }

    getArea(){
        return this.area;
    }

    getHeight(){
        return this.height;
    }

    getWidth(){
        return this.width;
    }

    getRadius(){
        return this.width / 2;
    }

    getCaras(){
        return this.area * 1/4;
    }
}
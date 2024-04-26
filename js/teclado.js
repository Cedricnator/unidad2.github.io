
// Inicialización de variables
const d = document;
let x = 0, y = 0;
let x2 = 0, y2 = 0;
let keysPressed = {};

window.addEventListener('keydown', function(event) {
    keysPressed[event.keyCode] = true;
});

window.addEventListener('keyup', function(event) {
    keysPressed[event.keyCode] = false;
});

// Mover el primer personaje
export function moveBall( ball, stage){

    const $ball      = d.querySelector(ball)
    const $stage     = d.querySelector(stage)
    const limitBall  = $ball.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect(); 

    if (keysPressed[65] && limitBall.left > limitStage.left) {
        x--;
    }
    if (keysPressed[68] && limitBall.right < limitStage.right) {
        x++;
    }
    if (keysPressed[87] && limitBall.top > limitStage.top) {
        y--;
    }
    if (keysPressed[83] && limitBall.bottom < limitStage.bottom) {
        y++;
    }
    
    move($ball, x, y);
}   

// Mover el segundo personaje
export const moveBall2 = ( ball2, stage) => {
    const $ball2     = d.querySelector(ball2)
    const $stage     = d.querySelector(stage)
    const limitBall  = $ball2.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect(); 
    
    if (keysPressed[38] && limitBall.top > limitStage.top) {
        y2--;
    }
    if (keysPressed[40] && limitBall.bottom < limitStage.bottom) {
        y2++;
    }
    if (keysPressed[37] && limitBall.left > limitStage.left) {
        x2--;
    }
    if (keysPressed[39] && limitBall.right < limitStage.right) {
        x2++;
    }

    move($ball2, x2, y2);
}

// Boolean, true si se puede atacar en una distancia menor a 80
export function attackIfClose(ball1, ball2) {
    const $ball1 = d.querySelector(ball1);
    const $ball2 = d.querySelector(ball2);
    const rect1 = $ball1.getBoundingClientRect();
    const rect2 = $ball2.getBoundingClientRect();

    const dx = rect1.left - rect2.left;
    const dy = rect1.top - rect2.top;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < 80
}

// Transicion de los elementos, movimiento.
const move = (ball, x, y) => {
    ball.style.transform = `translate(${ x * 10 }px, ${ y * 10 }px)`;
}

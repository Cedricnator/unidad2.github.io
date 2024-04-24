const d = document;
let x = 0, y = 0;
let x2 = 0, y2 = 0;

export function moveBall(e, ball, stage){

    const $ball      = d.querySelector(ball)
    const $stage     = d.querySelector(stage)
    const limitBall  = $ball.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect(); 

    switch( e.keyCode ){
        case 65:
            if( limitBall.left > limitStage.left){
                e.preventDefault();
                x--
            };
            break;
        case 68:
            if( limitBall.right < limitStage.right){
                x++
            };
            break;
        case 87:
            if(limitBall.top > limitStage.top){
                y--
            };
            break;
        case 83:
            if(limitBall.bottom < limitStage.bottom){
                y++
            };
            break;
        default:
            break;
    }
    move($ball, x, y);
}   


export const moveBall2 = (e, ball2, stage) => {
    const $ball2     = d.querySelector(ball2)
    const $stage     = d.querySelector(stage)
    const limitBall  = $ball2.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect(); 
    
    switch(e.key){
        case "ArrowLeft":
            if( limitBall.left > limitStage.left){
                e.preventDefault();
                x2--
            };
            break;
        case "ArrowRight":
            if( limitBall.right < limitStage.right){
                e.preventDefault();
                x2++
            };
            break;
        case "ArrowUp":
            if( limitBall.top > limitStage.top){
                e.preventDefault();
                y2--
            };
            break;
        case "ArrowDown":
            if( limitBall.bottom < limitStage.bottom){
                e.preventDefault();
                y2++
            };
            break;
        default:
            break;
    }
    move($ball2, x2, y2);
}

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

const move = (ball, x, y) => {
    ball.style.transform = `translate(${ x * 10 }px, ${ y * 10 }px)`;
}

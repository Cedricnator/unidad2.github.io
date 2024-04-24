const d = document;
let x = 0, y = 0;
let x2 = 0, y2 = 0;

export function moveBall(e, ball, stage){

    const $ball      = d.querySelector(ball)
    const $stage     = d.querySelector(stage)
    const limitBall  = $ball.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect(); 
    console.log(e)

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

const move = (ball, x, y) => {
    ball.style.transform = `translate(${ x * 10 }px, ${ y * 10 }px)`;
}

export const moveBall2 = (e, ball2, stage) => {
    const $ball2      = d.querySelector(ball2)
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


export function shortcuts(e){
    // console.log(e.type);
    // console.log(e.key)
    // console.log(e.keyCode)

    if( e.key === "a" && e.altKey){
        alert("haz landado una alertacon el teclado")
    }

    if (e.key === "C" && e.altKey){
        confirm("Haz lanzado una confirmacion con el teclado")
    }

    if(e.key === "p" && e.altKey){
        prompt("Haz lanzado un aviso con el teclado")
    }

}
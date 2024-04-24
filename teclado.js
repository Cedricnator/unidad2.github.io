const d = document;
let x = 0, y = 0;

export function moveBall(e, ball, stage, eventsKey){

    const $ball      = d.querySelector(ball)
    const $stage     = d.querySelector(stage)
    const limitBall  = $ball.getBoundingClientRect();
    const limitStage = $stage.getBoundingClientRect(); 
 
    const index = eventsKey.indexOf(e.key);

    switch( index ){
        case 0:
            if( limitBall.left > limitStage.left){
                x--
            };
            break;
        case 1:
            if( limitBall.right < limitStage.right){
                x++
            };
            break;
        case 2:
            if(limitBall.top > limitStage.top){
                y--
            };
            break;
        case 3:
            if(limitBall.bottom < limitStage.bottom){
                y++
            };
            break;
        default:
            break;
    }
    move($ball);
}

const move = ($ball) => {
    $ball.style.transform = `translate(${ x * 10 }px, ${ y * 10 }px)`;
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
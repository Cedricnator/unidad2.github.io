const personaje1 = document.getElementById('personaje1')
const personaje2 = document.getElementById('personaje2')
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

document.addEventListener("keydown", function(event) {
    console.log(event.key)
})


const moveCharacter1 = () => {
    document.addEventListener("keydown", function(event) {
        let tecla = event.key;
    
        switch (tecla) {
            case 'ArrowRight':
                x1 += 100;
                break;
    
            case 'ArrowLeft':
                x1 -= 100;
                break;
    
            case 'ArrowUp':
                y1 -= 100;
                break;
    
            case 'ArrowDown':
                y1 += 100;
                break;

                case 'd':
                x2 += 100;
                break;
    
            case 'a':
                x2 -= 100;
                break;
    
            case 'w':
                y2 -= 100;
                break;
    
            case 's':
                y2 += 100;
                break;
    
            default:
                break;
        }
        personaje1.style.transform=`translate(${x1}px, ${y1}px)`;
        personaje2.style.transform=`translate(${x2}px, ${y2}px)`;
    })    
}



moveCharacter1()


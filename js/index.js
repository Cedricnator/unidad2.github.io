import { checkGameStatus } from './gameLogic.js';
import { Fighter }         from './fighter.js';
import { 
  attackIfClose,
  moveBall, 
  moveBall2, 
} from './teclado.js'

// Inicialización de los personajes
const character = new Fighter("fighter", 300);
const nemesis   = new Fighter("nemesis", 300);
const audio     = new Audio('../public/Audio.mp3');
audio.loop      = true;
let gameOver    = false;

// audio.addEventListener('canplaythrough', function() {
//   audio.play();
// }, false);


document.addEventListener("keydown", (e) => {
    moveBall('.ball', '.stage');
    moveBall2('.ball2', '.stage');

    const isEnableToAtack = attackIfClose(".ball", ".ball2");
    console.log(isEnableToAtack)
    if(isEnableToAtack){
        document.getElementById("ball").style.borderColor  = "red";
        document.getElementById("ball2").style.borderColor = "red";
        
        document.addEventListener("keyup", function (event) {
            if (isEnableToAtack && event.key === "x") {
              checkGameStatus(gameOver, character, nemesis);
              character.atack(nemesis, 30)
              document.getElementById("nemesisimg").classList.add("atacked");
              document.getElementById("enemyHealth").value = nemesis.getHealth();
              setTimeout(() => document.getElementById("nemesisimg").classList.remove("atacked"), 500);
            } else if (isEnableToAtack && event.key === "n") {
              checkGameStatus(gameOver, character, nemesis);
              nemesis.atack(character, 5)
              document.getElementById("characterimg").classList.add("atacked");              
              document.getElementById("characterHealth").value = character.getHealth();
              setTimeout(() => document.getElementById("characterimg").classList.remove("atacked"), 500);
            }
        });
    } else {
      document.getElementById("ball").style.borderColor = "gold";
      document.getElementById("ball2").style.borderColor = "gold";
    }
});

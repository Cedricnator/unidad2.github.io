import { moveBall, moveBall2, attackIfClose } from './teclado.js'
import { Fighter } from './js/fighter.js';


const character = new Fighter("fighter", 100, 0, 0, 10);
const nemesis   = new Fighter("nemesis", 100, 0, 0, 10);

document.addEventListener("keydown", (e) => {
    moveBall(e, ".ball", ".stage");
    moveBall2(e,".ball2",".stage");
    const isEnableToAtack = attackIfClose(".ball", ".ball2");
    if(isEnableToAtack){
        document.getElementById("ball").style.backgroundColor  = "red";
        document.getElementById("ball2").style.backgroundColor = "red";
        
        document.addEventListener("keydown", function (event) {
            if (event.key === "x") {
              character.atack(nemesis, 30)
              document.getElementById("nemesisimg").classList.add("atacked");
              document.getElementById("enemyHealth").value = nemesis.getHealth();
              setTimeout(() => document.getElementById("nemesisimg").classList.remove("atacked"), 500);

            } else if (event.key === "n") {
              nemesis.atack(character, 5)
              document.getElementById("characterimg").classList.add("atacked");              
              document.getElementById("characterHealth").value = character.getHealth();
              setTimeout(() => document.getElementById("characterimg").classList.remove("atacked"), 500);
            }
        });
    } else {
        document.getElementById("ball").style.backgroundColor = "gold";
        document.getElementById("ball2").style.backgroundColor = "gold";
    }
});
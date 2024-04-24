import { moveBall, shortcuts, moveBall2 } from './teclado.js'
import { Fighter } from './js/fighter.js';


const character = new Fighter("fighter", 100, 0, 0, 10);
const nemesis   = new Fighter("nemesis", 100, 0, 0, 10);

document.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
    moveBall2(e, ".ball2", ".stage");
});



document.addEventListener("keydown", function (event) {
    if (event.key === "x") {
      character.atack(nemesis, 30)
      document.getElementById("enemyHealth").value = nemesis.getHealth();

    } else if (event.key === "n") {
      nemesis.atack(character, 5)
      document.getElementById("characterHealth").value = character.getHealth();
    }
});


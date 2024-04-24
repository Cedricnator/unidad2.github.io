import { moveBall, shortcuts } from './teclado.js'
import { Fighter } from './js/fighter.js';

const keysPressed = {};
const eventsCharacterKey = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
const eventsNemesisKey   = ["a", "d", "w", "s"];
const character = new Fighter("fighter", 100, 0, 0, 10);
const nemesis   = new Fighter("nemesis", 100, 0, 0, 10);

document.addEventListener("keydown", (e) => {
    shortcuts(e);
    keysPressed[e.key] = true;
});

document.addEventListener("keyup", (e) => {
    keysPressed[e.key] = false;
});

const move = () => {
    eventsCharacterKey.forEach((key) => {
        if (keysPressed[key]) {
            moveBall({ key }, ".ball", ".stage", eventsCharacterKey);
        }
    });
    eventsNemesisKey.forEach((key) => {
        if (keysPressed[key]) {
            moveBall({ key }, ".ball2", ".stage", eventsNemesisKey);
        }
    });
    requestAnimationFrame(move);
};

move();


document.addEventListener("keydown", function (event) {
    if (event.key === "x") {
      character.atack(nemesis, 30)
      document.getElementById("enemyHealth").value = nemesis.getHealth();

    } else if (event.key === "n") {
      nemesis.atack(character, 5)
      document.getElementById("characterHealth").value = character.getHealth();
    }
});


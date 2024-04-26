import { checkGameStatus } from './gameLogic.js';
import { Fighter }         from './fighter.js';
import { updateBorderColor, addAndRemoveClass, updateHealth, } from './helpers.js';
import { attackIfClose, moveBall, moveBall2, }                 from './teclado.js'

// Inicialización de los personajes
const character = new Fighter("fighter", 300);
const nemesis   = new Fighter("nemesis", 300);
const audio     = new Audio('../public/Audio.mp3');
audio.loop      = true;
let gameOver    = false;

// Constantes
const BALL_CLASS          = '.ball';
const STAGE_CLASS         = '.stage';
const BALL2_CLASS         = '.ball2';
const NEMESIS_IMG_ID      = 'nemesisimg';
const CHARACTER_IMG_ID    = 'characterimg';
const ENEMY_HEALTH_ID     = 'enemyHealth';
const CHARACTER_HEALTH_ID = 'characterHealth';

// audio.addEventListener('canplaythrough', function() {
//   audio.play();
// }, false);

// Eventos de teclado
document.addEventListener("keydown", (e) => {
  moveBall(BALL_CLASS, STAGE_CLASS);
  moveBall2(BALL2_CLASS, STAGE_CLASS);

  const isEnableToAtack = attackIfClose(BALL_CLASS, BALL2_CLASS);
  console.log(isEnableToAtack)

  if (isEnableToAtack) {
    updateBorderColor(BALL_CLASS, 'red');
    updateBorderColor(BALL2_CLASS, 'red');
  } else {
    updateBorderColor(BALL_CLASS, 'gold');
    updateBorderColor(BALL2_CLASS, 'gold');
  }
});

document.addEventListener("keydown", function (event) {
  const isEnableToAtack = attackIfClose(BALL_CLASS, BALL2_CLASS);

  if (isEnableToAtack && event.key === "x") {
    checkGameStatus(gameOver, character, nemesis);
    character.atack(nemesis, 30)
    addAndRemoveClass(NEMESIS_IMG_ID, 'atacked', 500);
    updateHealth(ENEMY_HEALTH_ID, nemesis.getHealth());
  } else if (isEnableToAtack && event.key === "n") {
    checkGameStatus(gameOver, character, nemesis);
    nemesis.atack(character, 5)
    addAndRemoveClass(CHARACTER_IMG_ID, 'atacked', 500);
    updateHealth(CHARACTER_HEALTH_ID, character.getHealth());
  }
});
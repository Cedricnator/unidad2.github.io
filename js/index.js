  // TODO: Agregar PowerUps, Agregar Ataque critico, Agregar retorno de vida, Agregar sprites, Agregar sonidos, Agregar animaciones.
  // TODO: Agregar armas, ataque, ataque especial, defensa, vida, velocidad, etc.
  // TODO: Considerar agregar un menu de seleccion tanto de personaje como de enemigo.

  import { moveCharacterByCoords } from './moveCharacter.js'
  import { Fighter } from './fighter.js';

  const combatZone = document.getElementById("ring");

  const character = new Fighter("character", 100);
  const nemesis = new Fighter("enemy", 100);

  const audio = new Audio('./public/images/Audio.mp3');
  audio.loop = true;
  audio.play();

  character.setDocumentById();
  nemesis.setDocumentById();
 
  const coords1 = [0, 0]; // x, y
  const coords2 = [0, 0]; // x, y

  const eventsCharacterKey = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
  const eventsNemesisKey = ["d", "a", "w", "s"];

  document.addEventListener("keydown", function (event) {
      if (event.key === "x") {
        character.atack(nemesis)
        document.getElementById("enemyHealth").value = nemesis.getHealth();

      } else if (event.key === "n") {
        nemesis.atack(character)
        document.getElementById("characterHealth").value = character.getHealth();
      }
  });

  // Character
  moveCharacterByCoords(coords1, eventsCharacterKey, character.getId(), combatZone);

  // Nemesis
  moveCharacterByCoords(coords2, eventsNemesisKey, nemesis.getId(), combatZone);

  document.getElementById("characterHealth").value = character.getHealth();
  document.getElementById("enemyHealth").value = nemesis.getHealth();
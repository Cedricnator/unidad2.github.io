  import { moveCharacterByCoords } from './moveCharacter.js'

  const combatZone = document.getElementById("ring");

  const character = document.getElementById("character");
  const nemesis = document.getElementById("enemy");

  const coords1 = [0, 0]; // x, y
  const coords2 = [0, 0]; // x, y

  const eventsCharacterKey = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
  const eventsNemesisKey = ["d", "a", "w", "s"];

  
  // Character
  moveCharacterByCoords(coords1, eventsCharacterKey, character, combatZone);

  // Nemesis
  moveCharacterByCoords(coords2, eventsNemesisKey, nemesis, combatZone);
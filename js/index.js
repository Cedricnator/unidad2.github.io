  // TODO: Agregar PowerUps, Agregar Ataque critico, Agregar retorno de vida, Agregar sprites, Agregar sonidos, Agregar animaciones.
  // TODO: Agregar armas, ataque, ataque especial, defensa, vida, velocidad, etc.
  // TODO: Considerar agregar un menu de seleccion tanto de personaje como de enemigo.

  import { Fighter } from './fighter.js';
  import { Container } from './container.js';
  

  const container = new Container("rings", 800, 350);
  

  const combatZone = document.getElementById("ring");
  // Establecer el tamaño del contenedor
  combatZone.style.width    = '800px';
  combatZone.style.height   = '350px';
  combatZone.style.position = 'relative'; // Esto permite posicionar absolutamente los personajes dentro del contenedor


  // const container = new Container(combatZone);
  const character = new Fighter("character", 100, 0, 0, 300);  
  const nemesis   = new Fighter("enemy", 100, 0, 0, 300);

  const vector1 = [0, 0];
  const vector2 = [0, 0];

  character.setDocumentById();
  nemesis.setDocumentById();
 
  const eventsCharacterKey = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
  const eventsNemesisKey   = ["d", "a", "w", "s"];

  document.addEventListener("keydown", function (event) {
      if (event.key === "x") {
        character.atack(nemesis, 30)
        document.getElementById("enemyHealth").value = nemesis.getHealth();

      } else if (event.key === "n") {
        nemesis.atack(character, 5)
        document.getElementById("characterHealth").value = character.getHealth();
      }
  });

  character.move(eventsCharacterKey, container);
  nemesis.move(eventsNemesisKey, container);
  character.isInRange(nemesis);


  document.getElementById("characterHealth").value = character.getHealth();
  document.getElementById("enemyHealth").value = nemesis.getHealth();
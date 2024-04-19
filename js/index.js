  import {
    Character
  } from './character.js'

  //Creación de personajes
  const hero = new Character("Heroe", 100, 110);
  const enemy = new Character("Limo", 500, 40);

  let gameOver = false;

  //Función que inicializa el juego 
  //   const gameLoop = () => {
  //       window.alert("La pelea empieza!!! Presiona x para atacar al enemigo, presiona n para que el enemigo ataque")

  //       document.addEventListener("keydown", function (event) {

  //           if (gameOver) {
  //               alert("The game is over. Refresh the page to play again")
  //               return;
  //           }

  //           if (event.key === "x") {
  //               hero.attack(enemy);
  //               checkGameStatus();
  //           } else if (event.key === "n") {
  //               enemy.attack(hero);
  //               checkGameStatus();
  //           }
  //       });
  //   }

  // Comprueba el estado del juego para determinar si el juego ha terminado
  const checkGameStatus = () => {
      if (!enemy.isAlive()) {
          alert("You win!");
          gameOver = true;
      } else {
          if (!hero.isAlive()) {
              alert("You lose! Game Over!");
              gameOver = true;
          }
      }
  }


  const container = document.getElementsByClassName("container");
  const character = document.getElementById("character");
  const nemesis = document.getElementById("enemy");

  const coords1 = [0, 0]; // x, y
  const coords2 = [0, 0]; // x, y

  const eventsCharacterKey = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"];
  const eventsNemesisKey = ["d", "a", "w", "s"];

  const moveCharacterByCoords = (coords, events, character) => {
      document.addEventListener("keydown", function (event) {
        const index = events.indexOf(event.key);

        if (index !== -1) {
            if (index === 0) coords[0] += 100;
            else if (index === 1) coords[0] -= 100;
            else if (index === 2) coords[1] -= 100;
            else if (index === 3) coords[1] += 100;
            character.style.transform = `translate(${coords[0]}px, ${coords[1]}px)`;
        }
      
    });
  }

  // Character
  moveCharacterByCoords(coords1, eventsCharacterKey, character);

  // Nemesis
  moveCharacterByCoords(coords2, eventsNemesisKey, nemesis);


  // Se lanza el juego
  //   gameLoop();
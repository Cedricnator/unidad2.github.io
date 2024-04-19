  import { Character } from './character.js'
  
  //Creación de personajes
  const hero = new Character( "Heroe", 100, 110 );
  const enemy = new Character( "Limo", 500, 40 );

  let gameOver = false;

  //Función que inicializa el juego 
  const gameLoop = () => {
      window.alert("La pelea empieza!!! Presiona x para atacar al enemigo, presiona n para que el enemigo ataque")

      document.addEventListener("keydown", function (event) {

          if (gameOver) {
              alert("The game is over. Refresh the page to play again")
              return;
          }

          if (event.key === "x") {
              hero.attack(enemy);
              checkGameStatus();
          } else if (event.key === "n") {
              enemy.attack(hero);
              checkGameStatus();
          }
      });
  }

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


  // Se lanza el juego
  gameLoop();
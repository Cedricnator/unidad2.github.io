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

//   console.log(container.style.width);

  let x1 = 0,
      y1 = 0;
  let x2 = 0,
      y2 = 0;

  const moveCharacter = () => {
      document.addEventListener("keydown", function (event) {
          switch (event.key) {
              case "ArrowRight":
                  x1 += 100;
                  break;
              case "ArrowLeft":
                  x1 -= 100;
                  break;
              case "ArrowUp":
                  y1 += 100;
                  break;
              case "ArrowDown":
                  y1 -= 100;
                  break;
          }
          character.style.transform = `translate(${x1}px, ${y1}px)`;
      });
  }



  const moveNemesis = () => {
      document.addEventListener("keydown", function (event) {
          switch (event.key) {
              case "d":
                  x2 += 100;
                  break;
              case "a":
                  x2 -= 100;
                  break;
              case "w":
                  y2 += 100;
                  break;
              case "s":
                  y2 -= 100;
                  break;
          }
          nemesis.style.transform = `translate(${x2}px, ${y2}px)`;
      });
  }

  moveCharacter();
  moveNemesis();







  // Se lanza el juego
  //   gameLoop();
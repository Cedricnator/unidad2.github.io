export const moveCharacterByCoords = (coords, events, character, container) => {
    document.addEventListener("keydown", function (event) {
        const index = events.indexOf(event.key);
        if (index !== -1) {
            let newX = coords[0];
            let newY = coords[1];

            if (index === 0) newX += 100;
            else if (index === 1) newX -= 100;
            else if (index === 2) newY -= 100;
            else if (index === 3) newY += 100;

            // Verificar si las nuevas coordenadas están dentro de los límites del contenedor
            if (newX >= 0 && newX <= container.clientWidth - character.clientWidth &&
                newY >= 0 && newY <= container.clientHeight - character.clientHeight) {
                coords[0] = newX;
                coords[1] = newY;
                character.style.transform = `translate(${coords[0]}px, ${coords[1]}px)`;
            }
        }
      
    });
}
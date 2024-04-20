export const moveCharacterByCoords = (coords, events, character, container) => {
    document.addEventListener("keydown", function (event) {
        const index = events.indexOf(event.key);
        if (index !== -1) {
            let newX = coords[0];
            let newY = coords[1];
    
            const characterRect = character.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
    
            if (index === 0 && characterRect.right + 20 <= containerRect.right - characterRect.width) newX += 20;
            else if (index === 1 && characterRect.left - 20 >= containerRect.left) newX -= 20;
            else if (index === 2 && characterRect.top - 20 >= containerRect.top) newY -= 20;
            else if (index === 3 && characterRect.bottom + 20 <= containerRect.bottom - characterRect.height) newY += 20;
    
            coords[0] = newX;
            coords[1] = newY;
            character.style.transform = `translate(${coords[0]}px, ${coords[1]}px)`;
        }
    });
}